import React from 'react';
import './IconSection.css';
import ainsym1 from '../images/selet.png'; // Replace with your SVG file import

const IconSection = () => {
  return (
    <div className="icon-section">
      <ul className="icon-list">
        <li className="icon-item">
          <img src={ainsym1} alt="Home" />
        </li>
      </ul>
    </div>
  );
};

export default IconSection;
