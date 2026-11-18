import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import { ThemeProvider } from '@/context/ThemeContext';

export const metadata: Metadata = {
  title: 'Jack Rider - Tours & Travels | God\'s Own Country Kerala Specialist',
  description: 'Explore Kerala with Jack Rider Tours & Travels. Munnar Tea Hills, Alleppey Houseboats, All India Circuits & International Holidays.',
  keywords: [
    'Jack Rider',
    'Jack Rider Tours and Travels',
    'Kerala tour packages',
    'Munnar travel',
    'Alleppey houseboats',
    'All India tours',
    'International holidays'
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/favicon.png',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased font-montserrat font-light bg-white text-slate-800 min-h-screen flex flex-col selection:bg-emerald-600 selection:text-white">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <BookingModal />
        </ThemeProvider>
      </body>
    </html>
  );
}