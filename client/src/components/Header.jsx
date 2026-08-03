import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: t("nav.home") },
    { path: "/about", label: t("nav.about") },
    { path: "/programmes", label: t("nav.programmes") },
    { path: "/career", label: t("nav.career") },
    { path: "/gallery", label: t("nav.gallery") },
    { path: "/faq", label: t("nav.faq") },
    { path: "/contact", label: t("nav.contact") },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "my" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="bg-blue-900 shadow-sm sticky top-0 z-40">

      {/* ── Desktop row ── single flat flex, h-20, items-center */}
      <div className="hidden md:flex w-full px-6 h-20 items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 text-blue-100 shrink-0">
          <img src={logo} alt="NECYL Logo" className="h-14 w-auto object-contain sm:h-20" />
          <span className="text-2xl font-bold pt-3 text-white">NECYL</span>
          <span className="text-sm uppercase tracking-[0.24em] text-blue-100/75 pt-2 text-white">ENG SCHOOL</span>
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-6 pt-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-medium whitespace-nowrap transition-colors ${
                location.pathname === item.path
                  ? "text-orange-500"
                  : "text-blue-100 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Language switcher */}
        <div className="flex items-center bg-blue-900 rounded-lg p-1 border border-blue-800 shrink-0">
          <button
            onClick={() => i18n.changeLanguage("en")}
            className={`w-12 h-8 font-leadership flex items-center justify-center rounded-md text-xs font-bold transition-all duration-200 ${
              i18n.language === "en"
                ? "bg-orange-500 text-white shadow-sm"
                : "text-blue-100 hover:text-white"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => i18n.changeLanguage("my")}
            className={`w-12 h-8 font-leadership flex items-center justify-center rounded-md text-xs font-bold transition-all duration-200 ${
              i18n.language === "my"
                ? "bg-orange-500 text-white shadow-sm"
                : "text-blue-100 hover:text-white"
            }`}
          >
            MM
          </button>
        </div>
      </div>

      {/* ── Mobile row ── single flat flex, h-20, items-center */}
      <div className="flex md:hidden container mx-auto px-4 h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 text-blue-100">
          <img src={logo} alt="NECYL Logo" className="h-10 w-auto block" />
          <span className="text-2xl font-bold pt-3 text-white">NECYL</span>
          <span className="text-sm uppercase tracking-[0.24em] text-blue-100/75 pt-2">ENG SCHOOL</span>
        </Link>

        <button
          className="text-blue-100 focus:outline-none cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-950 border-t border-blue-800">
          <div className="flex flex-col px-4 py-2 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-left py-2 font-medium ${
                  location.pathname === item.path
                    ? "text-orange-500"
                    : "text-blue-100 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-blue-800 flex justify-between items-center">
              <button
                onClick={toggleLanguage}
                className="font-medium text-blue-100 py-2 cursor-pointer"
              >
                {i18n.language === "en" ? "Switch to မြန်မာ" : "Switch to English"}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;