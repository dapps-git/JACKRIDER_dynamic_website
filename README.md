# Jack Rider - Tours & Travels (Kerala Specialist) 🌴🚙

> **"Welcome to God's Own Country"**  
> A modern dynamic full-stack travel platform for Kerala off-roading, tour packages, taxi fleets, mountain trekking, and cinematic drone photography.

---

## 📁 Repository Structure

```
c:\projects\JACKRIDER\
├── frontend/             # Next.js 14 Web Application (User UI)
│   ├── public/images/    # Logo & Scenic tea plantation assets
│   ├── src/app/          # App Router (Home, Jeep Safari, Taxi, Trekking, Photography)
│   ├── src/components/   # HeroSection, ScenicTrain, TiltCard, DesignSwitcher, BookingModal, Navbar, Footer
│   ├── src/context/      # ThemeContext (10 Website Designs Engine)
│   └── src/data/         # Handcrafted Kerala mock data & seed sets
│
├── admin/                # React + Vite + Tailwind Admin Operations Dashboard
│   ├── src/App.tsx       # Live booking inquiries, 12 Safari tracker, Taxi fleet controls
│   └── dist/             # Production build ready
│
├── backend/              # Node.js + Express REST API Server
│   ├── server.js         # API Server running on port 5001
│   └── data/db.json      # JSON Database with seed packages, bookings, safaris, and fleets
│
├── dev.js                # Master simultaneous runner for all 3 tiers
└── package.json          # Workspace runner scripts
```

---

## 🚀 Running the Platform

### Option 1: Run Everything Together with One Command
```bash
npm run dev
# Or: node dev.js
```
This concurrently boots:
- **Backend API**: `http://localhost:5001`
- **User Frontend**: `http://localhost:3000`
- **Admin Dashboard**: `http://localhost:3001`

### Option 2: Run Separately
```bash
# 1. Backend Server
cd backend && node server.js

# 2. Frontend User Website
cd frontend && npm run dev

# 3. Admin Dashboard
cd admin && npm run dev
```

---

## 🧭 Pages & Features Overview

### Page 1: Main Tour & Travel Page (`/`)
- **Hero Section**: Exact realization of user mockup reference with sunrise rays, dark green Jack Rider logo, *"Welcome to God's Own Country"*, *"Explore Kerala &rarr;"* CTA button.
- **Glassmorphic Service Dock**: Floating 5-tab dock for *Tour Packages*, *Jeep Safari*, *Taxi Service*, *Guide Service*, and *Photography*.
- **Scenic Train Animation**: Kerala mountain railway heritage steam train chugging across the hillside with animated steam particles and tracks.
- **Dropdown Menu Categories**:
  1. **KERALA**: Munnar Tea Hills, Alleppey Houseboats, Wayanad Rainforest, Thekkady Periyar, Varkala Cliffs, Athirappilly Falls.
  2. **All India**: Kashmir & Gulmarg, Himachal & Manali, Golden Triangle, Goa Beaches.
  3. **International**: Dubai Futuristic Wonder, Bali Island Paradise, Thailand Escapes, Singapore City.
- **Interactive 3D Tilt Cards**: Dynamic perspective rotation and spotlight glare when hovering over package cards.
- **Live High-Range Weather Tracker**: Real-time conditions for Kolukkumalai, Munnar, Wayanad, and Alleppey.

### Page 2: 4x4 Jeep Safari (`/jeep-safari`)
Dedicated off-road page with interactive dropdown filter for all **12 Locations**:
1. `ANACHAAL` (Cardamom off-road trails)
2. `Munnar` (Classic tea cliff tracks)
3. `Maryoor` (Sandalwood & village safari)
4. `Kolukkumalai` (World's highest tea estate 4 AM sunrise)
5. `Meeshappulimala` (Charlie Peak 2,640m wilderness trail)
6. `Vagamon` (Pine forest & rolling green meadows)
7. `Chathurangappara` (High-wind windmill ridge safari)
8. `Kanthalloor` (Apple & temperate fruit orchards)
9. `Marayoor Dolmens` (Neolithic megalithic Muniyara)
10. `Mamalakkandam` (Deep jungle river crossings)
11. `Nelliyampathy` (Orange valley & Seethargundu 1000m sheer drop)
12. `Anakkulam` (Wild elephant waterhole evening congregation)

### Page 3: Taxi Service Fleet (`/taxi-service`)
Dropdown and interactive selector across **4 Vehicle Categories**:
1. `Sedan` (Maruti Dzire, Toyota Etios, Honda Amaze • 4 Pax)
2. `MPV` (Toyota Innova Crysta, Hycross, Ertiga • 7 Pax)
3. `Traveller` (Force Tempo Traveller 12, 17, 20-Seater)
4. `Bus` (Mini Coach & 49-Seater Luxury AC Coach)
- **Interactive Fare Calculator**: Calculate airport transfer rates (COK / TRV) and multi-day Kerala circuits.

### Page 4: Guide Service & Trekking (`/guide-trekking`)
- High-altitude Western Ghats trekking routes (*Meeshappulimala*, *Kolukkumalai*, *Chembra Peak Heart Lake*, *Anamudi Shola*).
- Certified multilingual forest naturalists (Malayalam, English, Hindi, Arabic, Tamil, French, German).
- Forest department permits, leech socks, and safety gear checklists.

### Page 5: Photography, Videography & 4K Drone (`/photography`)
- Dropdown selector:
  1. `Travel`: Solo travelers, couple tea plantation reels, 4K Instagram drone videos.
  2. `Events`: Destination weddings, houseboat pre-wedding shoots, corporate retreats.
- Cinema gear specs: Sony FX3 Cinema Line, DJI Mavic 3 Cine, DJI Ronin RS3 Pro.

---

## 🎨 10 Handcrafted Website Designs

Click the floating **"10 Web Designs"** pill on the bottom-left of the screen to switch aesthetics in real-time:
1. **Emerald Highlands** (Signature Jack Rider green & Munnar sunrise gold)
2. **Backwaters Mist & Glass** (Translucent aquamarine & frosted glassmorphism)
3. **Wayanad Jungle Dark** (Deep onyx with electric neon emerald accents)
4. **Kerala Heritage Royale** (Warm temple gold, teak wood & kathakali emerald)
5. **High-Range 3D Alpine** (Spatial depth layers, deep mountain shadows)
6. **Kolukkumalai Golden Hour** (Warm sunrise rays & honey gradients)
7. **Modern Neo-Travel** (Clean minimalist whitespace & bold typography)
8. **Monsoon Rainforest** (Rain-washed botanical emerald & glossy dew sheen)
9. **4x4 Safari Expedition** (Rugged military green, topographic contours & tan accents)
10. **Futuristic Cyber-Kerala** (Bioluminescent tea gradients & holographic glass)

---

## 🛡️ Admin Operations Dashboard (`http://localhost:3001`)
- Real-time booking management with instant status toggles (*Pending*, *Confirmed*, *Completed*, *Cancelled*).
- One-click customer WhatsApp messaging with prefilled vehicle and booking details.
- 12 Jeep Safari trail pricing and driver assignment tracker.
- Taxi fleet status monitor with per-km rates.
- Manual walk-in / phone booking dispatch generator.

