import React, { useState } from 'react';
import './index.css';
import { MdOutlineKeyboardArrowDown } from "react-icons/md"; // Dropdown arrow
import { GoPerson } from "react-icons/go"; // Profile icon
import { BsCart2 } from "react-icons/bs"; // Cart icon

function Header() {
  const [showToolsMenu, setShowToolsMenu] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [activeTab, setActiveTab] = useState("Plants & Pots");

  return (
    <nav className="navbar">
      {/* Logo and Chaperone */}
      <div className="navbar-left">
        <div className="logo">
          <img src="/images/logo.png" alt="Logo" />
        </div>
        <div className="site-name">Chaperone</div>
      </div>

      {/* Navbar Links */}
      <div className="navbar-center">
        <ul className="navbar-links">
          <li 
            className={activeTab === "Home" ? "active-tab" : ""} 
            onClick={() => setActiveTab("Home")}
          >Home</li>
          <li 
            className={activeTab === "Plants & Pots" ? "active-tab" : ""} 
            onClick={() => setActiveTab("Plants & Pots")}
          >
            Plants & Pots
          </li>
          <li 
            className="dropdown" 
            onMouseEnter={() => setShowToolsMenu(true)} 
            onMouseLeave={() => setShowToolsMenu(false)}
          >
            Tools <MdOutlineKeyboardArrowDown className="dropdown-icon" />
            {showToolsMenu && (
              <ul className="dropdown-menu">
                <li>Gardening Tools</li>
                <li>Power Tools</li>
                <li>Hand Tools</li>
                <li>Accessories</li>
              </ul>
            )}
          </li>
          <li 
            className="dropdown" 
            onMouseEnter={() => setShowServicesMenu(true)} 
            onMouseLeave={() => setShowServicesMenu(false)}
          >
            Our Services <MdOutlineKeyboardArrowDown className="dropdown-icon" />
            {showServicesMenu && (
              <ul className="dropdown-menu">
                <li>Consulting</li>
                <li>Installation</li>
                <li>Maintenance</li>
                <li>Support</li>
              </ul>
            )}
          </li>
          <li 
            className={activeTab === "Blog" ? "active-tab" : ""} 
            onClick={() => setActiveTab("Blog")}
          >Blog</li>
          <li 
            className={activeTab === "Our Story" ? "active-tab" : ""} 
            onClick={() => setActiveTab("Our Story")}
          >Our Story</li>
          <li 
            className={activeTab === "FAQs" ? "active-tab" : ""} 
            onClick={() => setActiveTab("FAQs")}
          >FAQs</li>
        </ul>
      </div>

      {/* Profile and Cart */}
      <div className="navbar-right">
        <div className="profile-section">
          <GoPerson size={24} />
          <span className="profile-text">Profile</span>
        </div>
        <div className="cart-section">
          <BsCart2 size={24} />
          <span className="cart-text">Cart</span>
        </div>
      </div>
    </nav>
  );
}

export default Header;
