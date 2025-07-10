import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ isScrolled }) => {
  const [showBar, setShowBar] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearchClick = () => setShowBar(true);
  const handleCloseClick = () => {
    setShowBar(false);
    setQuery("");
  };

  return (
    <>
      <img
        src={isScrolled ? "/search-black.png" : "/search.png"}
        alt="Search"
        className="icon-img preserve-image"
        onClick={handleSearchClick}
        style={{ cursor: "pointer" }}
      />

      {showBar && (
        <div className="search-bar-wrapper">
          <div className="search-bar-container">
            {/* ✖ أول عنصر */}
            <button className="close-inline-btn" onClick={handleCloseClick}>✖</button>

            {/* حقل الإدخال */}
            <input
              type="text"
              className="search-input"
              placeholder="ابحث هنا"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            {/* زر البحث */}
            <button className="search-btn">بحث</button>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;
