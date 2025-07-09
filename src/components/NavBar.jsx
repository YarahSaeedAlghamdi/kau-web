import React, { useEffect, useRef, useState } from "react";
import "./NavBar.css";
import SearchBar from "./SearchBar";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState("ar");
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

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

  // ✅ يغلق القائمة عند الضغط بالخارج
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
        
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

  const sideItems = [
    "إدارة الجامعة",
    "الكليات",
    "المرافق",
    "المراكز",
    "العمادات"
  ];

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo-container">
        <img src="/kau-logo.png" alt="KAU Logo" className="logo-img" />
      </div>

      <div className="nav-links">
        {navItems.map((item, idx) => (
          <a key={idx} className={isScrolled ? "dark" : ""} href="#">
            {item}
          </a>
        ))}
      </div>

      <div className="nav-icons" ref={menuRef}>
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
          onClick={() => setShowMenu(!showMenu)}
          style={{ cursor: "pointer" }}
        />

        {/* ✅ القائمة تحت الزر */}
        {showMenu && (
          <div className="dropdown-menu">
            {sideItems.map((item, idx) => (
              <div
                key={idx}
                className="dropdown-item"
                onClick={() => setShowMenu(false)}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
