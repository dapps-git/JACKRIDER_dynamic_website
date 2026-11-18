const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const DB_PATH = path.join(__dirname, 'data', 'db.json');

// Ensure db exists
function getDb() {
  try {
    if (!fs.existsSync(DB_PATH)) {
      return null;
    }
    const data = fs.readFileSync(DB_PATH, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading db:', err);
    return null;
  }
}

function saveDb(data) {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('Error saving db:', err);
    return false;
  }
}

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', brand: 'Jack Rider Tours & Travels', timestamp: new Date() });
});

// Tour packages
app.get('/api/packages', (req, res) => {
  const db = getDb();
  if (!db) return res.status(500).json({ error: 'Database unavailable' });
  
  const { category, featured } = req.query;
  let packages = db.packages || [];
  
  if (category) {
    packages = packages.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }
  if (featured === 'true') {
    packages = packages.filter(p => p.isFeatured);
  }
  
  res.json(packages);
});

app.get('/api/packages/:id', (req, res) => {
  const db = getDb();
  const pkg = (db.packages || []).find(p => p.id === req.params.id);
  if (!pkg) return res.status(404).json({ error: 'Package not found' });
  res.json(pkg);
});

// Jeep Safari destinations
app.get('/api/jeep-safari', (req, res) => {
  const db = getDb();
  if (!db) return res.status(500).json({ error: 'Database unavailable' });
  res.json(db.jeepSafari || []);
});

app.get('/api/jeep-safari/:slug', (req, res) => {
  const db = getDb();
  const item = (db.jeepSafari || []).find(s => s.slug === req.params.slug);
  if (!item) return res.status(404).json({ error: 'Jeep Safari route not found' });
  res.json(item);
});

// Taxi Fleet
app.get('/api/taxi-fleet', (req, res) => {
  const db = getDb();
  if (!db) return res.status(500).json({ error: 'Database unavailable' });
  res.json(db.taxiFleet || []);
});

// Guide & Trekking
app.get('/api/trekking', (req, res) => {
  const db = getDb();
  if (!db) return res.status(500).json({ error: 'Database unavailable' });
  res.json(db.trekking || []);
});

// Photography & Drone
app.get('/api/photography', (req, res) => {
  const db = getDb();
  if (!db) return res.status(500).json({ error: 'Database unavailable' });
  res.json(db.photography || []);
});

// Bookings & Inquiries
app.get('/api/bookings', (req, res) => {
  const db = getDb();
  if (!db) return res.status(500).json({ error: 'Database unavailable' });
  res.json(db.bookings || []);
});

app.post('/api/bookings', (req, res) => {
  const db = getDb();
  if (!db) return res.status(500).json({ error: 'Database unavailable' });

  const {
    customerName,
    phone,
    email,
    serviceType, // 'package' | 'jeep' | 'taxi' | 'trekking' | 'photography'
    selectedItem,
    travelDate,
    guests,
    pickupLocation,
    notes,
    amount
  } = req.body;

  if (!customerName || !phone) {
    return res.status(400).json({ error: 'Name and phone are required.' });
  }

  const newBooking = {
    id: 'JR-' + Math.floor(100000 + Math.random() * 900000),
    customerName,
    phone,
    email: email || '',
    serviceType: serviceType || 'package',
    selectedItem: selectedItem || 'Kerala Explorer',
    travelDate: travelDate || new Date().toISOString().split('T')[0],
    guests: guests || 2,
    pickupLocation: pickupLocation || 'Munnar / Cochin',
    notes: notes || '',
    amount: amount || 0,
    status: 'Pending',
    createdAt: new Date().toISOString()
  };

  db.bookings = [newBooking, ...(db.bookings || [])];
  saveDb(db);

  res.status(201).json({
    success: true,
    message: 'Booking request registered successfully! Jack Rider team will contact you shortly.',
    booking: newBooking
  });
});

app.patch('/api/bookings/:id', (req, res) => {
  const db = getDb();
  if (!db) return res.status(500).json({ error: 'Database unavailable' });

  const idx = (db.bookings || []).findIndex(b => b.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Booking not found' });

  const { status, notes, driverAssigned } = req.body;
  if (status) db.bookings[idx].status = status;
  if (notes) db.bookings[idx].notes = notes;
  if (driverAssigned) db.bookings[idx].driverAssigned = driverAssigned;

  saveDb(db);
  res.json({ success: true, booking: db.bookings[idx] });
});

// Admin stats
app.get('/api/admin/stats', (req, res) => {
  const db = getDb();
  if (!db) return res.status(500).json({ error: 'Database unavailable' });

  const bookings = db.bookings || [];
  const totalBookings = bookings.length;
  const confirmed = bookings.filter(b => b.status === 'Confirmed').length;
  const pending = bookings.filter(b => b.status === 'Pending').length;
  const totalRevenue = bookings
    .filter(b => b.status === 'Confirmed' || b.status === 'Completed')
    .reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0);

  res.json({
    totalBookings,
    confirmed,
    pending,
    totalRevenue,
    packagesCount: (db.packages || []).length,
    safariCount: (db.jeepSafari || []).length,
    fleetCount: (db.taxiFleet || []).length
  });
});

app.listen(PORT, () => {
  console.log(`[Jack Rider API] Server running on http://localhost:${PORT}`);
});
