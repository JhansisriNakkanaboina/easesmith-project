import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Make sure react-icons is installed
import './index.css';

function SearchBar() {
  return (
    <div className="topLevelContainer">
    <div className="search-container">
      <FaSearch className="search-icon" />
      <input type="text" className="search-bar" placeholder="Search Plant" />
      <img src="/images/leaf.png" alt="Leaf" className="leaf-image" />
    </div>
    </div>
  );
}

export default SearchBar;
