import React, { useState } from 'react';
import './index.css';

const Filter = () => {
  const [openSections, setOpenSections] = useState({
    category: false,
    price: false,
    nursery: false,
    location: false,
    indoorOutdoor: false,
    maintenance: false,
    plantSize: false,
    waterSchedule: false,
    color: false,
    seasonal: false,
    lightEfficient: false
  });

  // Toggle each section
  const toggleSection = (section) => {
    setOpenSections({ ...openSections, [section]: !openSections[section] });
  };

  return (
    <div className="filter-panel">
      <div className="filter-header">
        <span className="filter-title">Filter</span>
        <button className="clear-btn">CLEAR ALL</button>
      </div>

      {/* Filters */}
      {[
        { title: "Type of Plants", key: "category", options: ["Succulents", "Ferns", "Flowering"] },
        { title: "Price", key: "price", options: ["$0 - $50", "$50 - $100", "$100 - $200"] },
        { title: "Nursery", key: "nursery", options: ["Local", "Premium", "Imported"] },
        { title: "Ideal Plants Location", key: "location", options: ["Balcony", "Living Room", "Garden"] },
        { title: "Indoor/Outdoor", key: "indoorOutdoor", options: ["Indoor", "Outdoor"] },
        { title: "Maintenance", key: "maintenance", options: ["Low", "Medium", "High"] },
        { title: "Plant Size", key: "plantSize", options: ["Small", "Medium", "Large"] },
        { title: "Water Schedule", key: "waterSchedule", options: ["Daily", "Weekly", "Bi-weekly"] },
        { title: "Color", key: "color", options: ["Green", "Red", "Purple"] },
        { title: "Seasonal", key: "seasonal", options: ["All Seasons", "Spring", "Winter"] },
        { title: "Light Efficient", key: "lightEfficient", options: ["Yes", "No"] },
      ].map((filter) => (
        <div className="filter-section" key={filter.key}>
          <div className="filter-heading" onClick={() => toggleSection(filter.key)}>
            <span>{filter.title}</span>
            <span>{openSections[filter.key] ? '-' : '+'}</span>
          </div>
          {openSections[filter.key] && (
            <div className="filter-content">
              {filter.options.map((option, idx) => (
                <label key={idx}>
                  <input type="checkbox" /> {option}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Filter;
