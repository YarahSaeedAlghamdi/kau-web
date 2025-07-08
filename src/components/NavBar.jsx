import React, { useEffect, useState } from "react";
import "./NavBar.css";
import SearchBar from "./SearchBar";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      {/* اليمين: شعار الجامعة */}
      <div className="logo-container">
        <img src="/kau-logo.png" alt="KAU Logo" className="logo-img" />
      </div>
      
      {/* الوسط: روابط التنقل */}
      <div className="nav-links">
        <a className={isScrolled ? "dark" : ""} href="#">عن الجامعة</a>
        <a className={isScrolled ? "dark" : ""} href="#">القبول والتسجيل</a>
        <a className={isScrolled ? "dark" : ""} href="#">الأكاديمية</a>
        <a className={isScrolled ? "dark" : ""} href="#">البحث والابتكار</a>
        <a className={isScrolled ? "dark" : ""} href="#">الحياة الجامعية</a>
        <a className={isScrolled ? "dark" : ""} href="#">الخدمات الإلكترونية</a>
      </div>

      {/* اليسار: الأيقونات وأداة البحث */}
      <div className="nav-icons">
  <SearchBar isScrolled={isScrolled} />
  <span className={`lang-text ${isScrolled ? "dark" : ""}`}>English</span>
  <img src={isScrolled ? "/arrow-black.png" : "/arrow.png"} alt="Arrow" className="icon-img small" />
  <img src={isScrolled ? "/menu-black.png" : "/menu.png"} alt="Menu" className="icon-img" />
</div>

    </nav>
  );
};

export default NavBar;
