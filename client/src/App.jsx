import React, { Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Programmes from "./pages/Programmes";
import Gallery from "./pages/Gallery";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Career from "./pages/Career";
import ProgrammeDetail from "./pages/ProgrammeDetail.jsx";

function App() {
  const location = useLocation();
  const { i18n } = useTranslation();
  const isMyanmar = i18n.language === "my";

  useEffect(() => {
    if (isMyanmar) {
      document.documentElement.classList.add("lang-my");
    } else {
      document.documentElement.classList.remove("lang-my");
    }
  }, [isMyanmar]);

  useEffect(() => {
    document.title = "NECYL English School";
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programmes" element={<Programmes />} />
            <Route path="/programmes/:id" element={<ProgrammeDetail />} />
            <Route path="/career" element={<Career />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>

      {/* Persistent Viber Chat Button */}
      <a
        href="viber://chat?number=%2B959123456789"
        className="fixed bottom-6 right-6 z-50 bg-[#7360f2] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform duration-300"
        aria-label="Chat on Viber"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 15h-2v-5h2v5zm1.5-6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5 6.5h-2v-5h2v5z" />
        </svg>
      </a>

      <Footer />
    </div>
  );
}

export default App;
