// src/components/Header.js
import React from 'react';
import './Header.css';
import airbnbLogo from '../images/airbnb.svg';
// import IconSection from './IconSection';
import { FaSearch, FaBars, FaUserCircle, FaGlobe } from 'react-icons/fa';


function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <div className="header__left">
          <img src={airbnbLogo} alt="Airbnb Logo" className="header__logo" />
        </div>
        <div className="header__right">
          <ul className="header__actions-list">
            <li><a href="/">Airbnb your home</a></li>
            <li><FaGlobe className="header__icon" /></li>
            <li><FaBars className="header__icon" /></li>
            <li><FaUserCircle className="header__icon" /></li>
          </ul>
        </div>
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li><a href="/">Stays</a></li>
          <li><a href="/">Experiences</a></li>
        </ul>
      </nav>
      <div className="header__search">
        <div className="header__search-item">
          <span className="header__search-title">Where</span>
          <input type="text" placeholder="Search destinations" />
        </div>
        <div className="header__search-item">
          <span className="header__search-title">Check in</span>
          <input type="text" placeholder="Add dates" />
        </div>
        <div className="header__search-item">
          <span className="header__search-title">Check out</span>
          <input type="text" placeholder="Add dates" />
        </div>
        <div className="header__search-item">
          <span className="header__search-title">Who</span>
          <input type="text" placeholder="Add guests" />
        </div>
        <button className="header__search-button">
          <FaSearch />
        </button>
      </div>
      
    </header>
  );
}

export default Header;
