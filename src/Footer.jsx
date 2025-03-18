import React from 'react';
import {Link } from 'react-router-dom';
import './footer.css'; // Make sure to create a CSS file for styling

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-about">
          <h3>About Us</h3>
          <p>We are a company dedicated to providing quality services and products to our customers. Our mission is to make life easier for everyone.</p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <nav >
                        <Link to="/" className='navTag'>places</Link>
                        <Link to="/aboutUs" className='navTag'>About</Link> 
                        <Link to="/contact" className='navTag'>contact</Link>
                        
                    </ nav>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:nitishfarm@gmail.com">nitishfarm@gmail.com</a></p>
          <p>Phone: (+91) 95257-30000</p>
          <p>Address: Rajendra Nagar , Indore, India , 452012</p>
        </div>

        {/* Social Media Section */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <a href="https://www.facebook.com" className="social-icon" target='_blank'>Facebook</a>
          <a href="https://www.twitter.com" className="social-icon" target='_blank'>Twitter</a>
          <a href="https://www.instagram.com" className="social-icon" target='_blank'>Instagram</a>
          <a href="https://www.linkedin.com/in/nitish-kumar-317841238/" className="social-icon" target='_blank'>LinkedIn</a>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; 2025 our Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
