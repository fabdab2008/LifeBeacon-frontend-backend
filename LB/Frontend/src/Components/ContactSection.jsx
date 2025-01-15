import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = ({ scrollToTop }) => (
  <div id="contact-section" className="section bg-gray-800 text-white p-8">
    <h1 className="text-3xl font-Poppins mb-4">CONTACT US</h1>
    <div className="contact-content">
      <div className="contact-logo">
        <img src="src/assets/Images/logo.png" alt="Life Beacon Logo" onClick={scrollToTop} style={{ cursor: 'pointer', zIndex: 4 }} />
      </div>
      <div className="contact-icons">
        <a href="https://www.facebook.com/farhan.nabil.752861?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="w-6 h-6 inline-block mr-2" />
          <span>Life Beacon</span>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="w-6 h-6 inline-block mr-2" />
          <span>life_beacon</span>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="w-6 h-6 inline-block mr-2" />
          <span>LifeBeacon</span>
        </a>
        <a href="tel:+1234567890">
          <FaPhone className="w-6 h-6 inline-block mr-2" />
          <span>tel:+1234567890,+987654321,+88123465789</span>
        </a>
        <a href="https://g.co/kgs/u9ZoFgw" target="_blank" rel="noopener noreferrer">
          <FaMapMarkerAlt className="w-6 h-6 inline-block mr-2" />
          <span> FIND US ON : https://g.co/kgs/u9ZoFgw</span>
        </a>
      </div>
    </div>
  </div>
);

export default ContactSection;