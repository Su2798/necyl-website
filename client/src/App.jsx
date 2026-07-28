import React, { Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Programmes from './pages/Programmes';
import Gallery from './pages/Gallery';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

function App() {
  const location = useLocation();

  // Dynamic SEO Page Titles
  useEffect(() => {
    const titles = {
      '/': 'Home | NECYL English School',
      '/about': 'About Us | NECYL English School',
      '/programmes': 'Our Programmes | NECYL English School',
      '/gallery': 'Gallery | NECYL English School',
      '/faq': 'FAQ | NECYL English School',
      '/contact': 'Contact Us | NECYL English School'
    };
    document.title = titles[location.pathname] || 'NECYL English School';
  }, [location]);

  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-blue-900 font-bold">Loading...</div>}>
      <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900">
        {/* Header stays at the top of every page */}
        <Header />
        
        {/* Main content changes based on the URL route */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programmes" element={<Programmes />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        {/* Footer stays at the bottom of every page */}
        <Footer />
      </div>
    </Suspense>
  );
}

// THIS is the line your app was missing!
export default App;