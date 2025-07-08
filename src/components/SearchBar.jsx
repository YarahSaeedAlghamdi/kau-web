import { useState } from "react";
import "./SearchBar.css";


const SearchBar = ({ isScrolled }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <div className="search-container">
      <img
        src={isScrolled ? "/search-black.png" : "/search.png"}
        alt="Search"
        className="icon-img"
        onClick={() => setShowSearch(true)}
      />

      {showSearch && (
        <div className="search-box">
          <button className="search-btn">بحث</button>
          <input
            type="text"
            placeholder="ابحث هنا"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="close-btn" onClick={() => setShowSearch(false)}>✕</button>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
