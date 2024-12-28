/* eslint-disable no-unused-vars */
import React from 'react';
import './Footer.css';
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-section about">
          <h2 className="footer-heading">Homyz</h2>
          <p className="footer-description">
            Your trusted partner in finding the best real estate deals. Making your dreams of a perfect home come true.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section links">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section newsletter">
          <h3 className="footer-heading">Stay Updated</h3>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
              required
            />
            <button type="submit" className="newsletter-button">Subscribe</button>
          </form>
        </div>

        {/* Social Media Section */}
        <div className="footer-section social">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="social-icon"><FaFacebookSquare /></a>
            <a href="#" className="social-icon"><FaTwitterSquare /></a>
            <a href="#" className="social-icon"><RiInstagramFill /></a>
            <a href="#" className="social-icon"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Homyz. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
