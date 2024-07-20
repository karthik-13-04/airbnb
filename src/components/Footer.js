import React from 'react';
import './Footer.css'; // Ensure you have a Footer.css file for styling

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Inspiration for future getaways</h3>
          <ul>
            <li>Popular</li>
            <li>Arts & culture</li>
            <li>Outdoors</li>
            <li>Mountains</li>
            <li>Beach</li>
            <li>Unique stays</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Categories</h3>
          <ul>
            <li>Things to do</li>
            <li>Canmore</li>
            <li>Flat rentals</li>
            {/* Add more categories as needed */}
          </ul>
        </div>
        <div className="footer-section">
          <h3>Site Footer</h3>
          <ul>
            <li>Support</li>
            <li>Help Centre</li>
            <li>AirCover</li>
            <li>Anti-discrimination</li>
            <li>Disability support</li>
            {/* Add more footer links as needed */}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-section">
          <ul>
            <li>© 2024 Airbnb, Inc.</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Sitemap</li>
            <li>Company details</li>
          </ul>
        </div>
        <div className="footer-section">
          <ul>
            <li>Choose a language</li>
            <li>English (IN)</li>
          </ul>
        </div>
        <div className="footer-section">
          <ul>
            <li>Choose a currency</li>
            <li>₹ INR</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
