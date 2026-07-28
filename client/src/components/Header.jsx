import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from './Button';
import logo from '../assets/logo.png';

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/programmes', label: t('nav.programmes') },
    { path: '/gallery', label: t('nav.gallery') },
    { path: '/faq', label: t('nav.faq') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'my' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-900 flex items-center gap-2">
          <img src={logo} alt="NECYL Logo" className="h-10 w-auto" /> {/* <--- 2. USE LOGO HERE */}
          NECYL
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-medium transition-colors ${
                location.pathname === item.path ? 'text-orange-500' : 'text-gray-600 hover:text-blue-900'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 border border-gray-300 rounded px-2 py-1 text-sm font-medium hover:bg-gray-50 cursor-pointer"
          >
            {i18n.language === 'en' ? '🇲🇲 မြန်မာ' : '🇬🇧 EN'}
          </button>
          <Button onClick={() => window.open('viber://chat?number=%2B959123456789', '_blank')} className="!py-1.5 !px-4 !bg-purple-600 hover:!bg-purple-700">
            {t('nav.viber')}
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-gray-600 focus:outline-none cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="flex flex-col px-4 py-2 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-left py-2 font-medium ${
                  location.pathname === item.path ? 'text-orange-500' : 'text-gray-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-gray-100 flex justify-between items-center">
              <button onClick={toggleLanguage} className="font-medium text-gray-600 py-2 cursor-pointer">
                {i18n.language === 'en' ? 'Switch to မြန်မာ' : 'Switch to English'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;