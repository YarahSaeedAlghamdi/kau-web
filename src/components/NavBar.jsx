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
    "العمادات",
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          {/* ✅ يمين: الشعار */}
          <div className="navbar-right">
            <img src="/KAU_1.png" alt="KAU Logo" className="logo-img preserve-image" />
          </div>

          {/* ✅ وسط: الروابط */}
          <div className="navbar-center">
            <div className="nav-links">
              {navItems.map((item, idx) => (
                <a key={idx} href="#">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* ✅ يسار: البحث واللغة والقائمة */}
          <div className="navbar-left" ref={menuRef}>
            <SearchBar isScrolled={isScrolled} />
            <span
              className={`lang-btn ${isScrolled ? "dark" : ""}`}
              onClick={() => setLanguage(isArabic ? "en" : "ar")}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === "Enter") setLanguage(isArabic ? "en" : "ar");
              }}
            >
              {isArabic ? "English" : "العربية"}
            </span>
            <img
              src={isScrolled ? "/menu_black.png" : "/menu.png"}
              alt="Menu"
              className="icon-img preserve-image" 
              onClick={() => setShowMenu(true)}
            />
          </div>
        </div>
      </nav>

    {/* ✅ القائمة الجانبية المفتوحة */}
    {showMenu && (
      <div className="top-menu">
        <div className="top-menu-header">
          {/* ✅ روابط الهيدر */}
          <div className="top-menu-nav">
            {navItems.map((item, idx) => (
              <a key={idx} href="#" className="top-menu-nav-link">
                {item}
              </a>
            ))}
          </div>

          {/* ✅ زر الإغلاق */}
          <button className="close-btn" onClick={() => setShowMenu(false)}>×</button>
        </div>

        {/* ✅ القائمة الجانبية */}
        <div className="top-menu-items">
          {sideItems.map((item, idx) => (
            <div key={idx} className="top-menu-item" onClick={() => setShowMenu(false)}>
              {item}
            </div>
          ))}
        </div>
      </div>
    )}


    </>
  );
};

export default NavBar;
