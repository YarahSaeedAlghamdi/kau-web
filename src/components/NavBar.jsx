import React, { useEffect, useState } from "react";
import "./NavBar.css";
import SearchBar from "./SearchBar";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState("ar");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const isArabic = language === "ar";

  const navItems = isArabic
    ? [
        "عن الجامعة",
        "القبول والتسجيل",
        "الأكاديمية",
        "البحث والابتكار",
        "الحياة الجامعية",
        "الخدمات الإلكترونية",
      ]
    : [
        "About KAU",
        "Admissions",
        "Academics",
        "Research & Innovation",
        "Campus Life",
        "E-Services",
      ];

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      {/* شعار */}
      <div className="logo-container">
        <img src="/kau-logo.png" alt="KAU Logo" className="logo-img" />
      </div>

      {/* روابط التنقل */}
      <div className="nav-links">
        {navItems.map((item, idx) => (
          <a key={idx} className={isScrolled ? "dark" : ""} href="#">
            {item}
          </a>
        ))}
      </div>

      {/* أدوات التنقل */}
      <div className="nav-icons">
        <SearchBar isScrolled={isScrolled} />
        <button
          className={`lang-btn ${isScrolled ? "dark" : ""}`}
          onClick={() => setLanguage(isArabic ? "en" : "ar")}
        >
          {isArabic ? "English" : "العربية"}
        </button>
        <img
          src={isScrolled ? "/menu-black.png" : "/menu.png"}
          alt="Menu"
          className="icon-img"
        />
      </div>
    </nav>
  );
};

export default NavBar;
