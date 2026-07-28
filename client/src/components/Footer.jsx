import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import logo from "../assets/logo.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-blue-950 text-blue-100 pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              {/* <img src="/logo.png" alt="NECYL Logo" className="w-12 h-12 object-contain" />
              <span className="text-2xl font-extrabold text-white">NECYL</span> */}
              <Link
                to="/"
                className="text-2xl font-bold text-white-900 flex items-center gap-2"
              >
                <img src={logo} alt="NECYL Logo" className="h-10 w-auto" />{" "}
                NECYL
              </Link>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed max-w-xs">
              {t("home.heroSubtitle")}
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-orange-500 transition-all border border-white/10"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-orange-500 transition-all border border-white/10"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-orange-500 transition-all border border-white/10"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav Column */}
          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Navigation</h4>
            <ul className="space-y-4">
              {["home", "about", "programmes"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "home" ? "/" : `/${item}`}
                    className="text-blue-200 hover:text-orange-400 transition-colors capitalize flex items-center gap-2"
                  >
                    {t(`nav.${item}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Support</h4>
            <ul className="space-y-4">
              {["faq", "contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item}`}
                    className="text-blue-200 hover:text-orange-400 transition-colors capitalize flex items-center gap-2"
                  >
                    {t(`nav.${item}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="font-bold text-white mb-6 text-lg">Reach Us</h4>
            <div className="text-blue-200 text-sm space-y-3">
              <p className="flex items-center gap-3">
                <MapPin size={16} className="text-orange-500" /> Yangon, Myanmar
              </p>
              <p className="flex items-center gap-3">
                <Phone size={16} className="text-orange-500" /> +95 9 123 456
                789
              </p>
              <p className="flex items-center gap-3">
                <Mail size={16} className="text-orange-500" /> info@necyl.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-400">
          <p>{t("footer.copyright")}</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
