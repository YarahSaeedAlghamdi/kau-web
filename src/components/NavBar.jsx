import React, { useEffect, useRef, useState } from "react";
import "./NavBar.css";
import SearchBar from "./SearchBar";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState("ar");
  const [showMenu, setShowMenu] = useState(false);
  const [hoveredItemIndex, setHoveredItemIndex] = useState(null); // ✅ جديد
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
    {
      title: "إدارة الجامعة",
      subItems: [
        "رئيس الجامعة",
        "مكتب نائب الرئيس لشطر الطالبات",
        "مكتب نائب الرئيس للدراسات العليا والبحث العلمي",
        "مكتب نائب الرئيس للأعمال والإبداع المعرفي",
        "مكتب نائب الرئيس للشؤون التعليمية"
      ],
    },
    {
      title: "الكليات",
      subItems: ["كلية الهندسة", "كلية الطب", "كلية الحاسبات"]
    },
    {
      title: "المرافق",
      subItems: []
    },
    {
      title: "المراكز",
      subItems: []
    },
    {
      title: "العمادات",
      subItems: []
    }
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          <div className="navbar-right">
            <img src="/KAU_1.png" alt="KAU Logo" className="logo-img preserve-image" />
          </div>

          <div className="navbar-center">
            <div className="nav-links">
              {navItems.map((item, idx) => (
                <a key={idx} href="#">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="navbar-left" ref={menuRef}>
            <SearchBar isScrolled={isScrolled} />
  {/* زر اللغة */}
  <button
    className={`lang-btn ${isScrolled ? "dark" : ""}`}
    onClick={() => setLanguage(isArabic ? "en" : "ar")}
  >
    {isArabic ? "English" : "العربية"}
  </button>
           {/* زر القائمة الجانبية */}
  <button
    className="menu-btn"
    onClick={() => setShowMenu(true)}
    aria-label="فتح القائمة"
  >
    <img
      src={isScrolled ? "/menu_black.png" : "/menu.png"}
      alt="Menu"
      className="icon-img preserve-image"
    />
  </button>
          </div>
        </div>
      </nav>

{/* ✅ القائمة الجانبية */}
{showMenu && (
  <div className="top-menu">
    <div className="top-menu-header">
      <div className="top-menu-nav">
        {navItems.map((item, idx) => (
          <a key={idx} href="#" className="top-menu-nav-link">
            {item}
          </a>
        ))}
        <button className="close-btn" onClick={() => setShowMenu(false)}>
          <img src="/close .png" alt="إغلاق" className="close-icon-img" />
        </button>
      </div>
      <div className="full-underline"></div>
    </div>

    {/* ✅ الغلاف الكامل للقائمة الرئيسية والفرعية */}
    <div className="top-menu-items-wrapper">
      {/* ✅ القائمة الجانبية (عناوين رئيسية) */}
      <div className="top-menu-items">
        {sideItems.map((item, idx) => (
          <div
            className="top-menu-item-wrapper"
            key={idx}
            onMouseEnter={() => setHoveredItemIndex(idx)}
            onMouseLeave={() => setHoveredItemIndex(null)}
          >
            <div className="top-menu-item">{item.title}</div>
          </div>
        ))}
      </div>

      {/* ✅ القائمة الفرعية الثابتة (تظهر يسار العنصر المهوفر عليه) */}
      {hoveredItemIndex !== null && sideItems[hoveredItemIndex].subItems.length > 0 && (
        <div className="fixed-submenu">
          {sideItems[hoveredItemIndex].subItems.map((sub, i) => (
            <div key={i} className="submenu-item">
              {sub}
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
)}

    </>
  );
};

export default NavBar;
