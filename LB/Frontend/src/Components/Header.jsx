import React from 'react';
import { FaInfoCircle, FaEnvelope, FaSignInAlt } from 'react-icons/fa';

const Header = ({ scrollToDescription, scrollToContact, openLoginModal }) => (
  <div className="section">
    <video autoPlay muted loop>
      <source src="src/assets/Images/bg1.mp4" type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
    <div className="logo-container">
      <img src="src/assets/Images/logo.png" alt="Life Beacon Logo" className="logo" />
    </div>
    <div className="button-container">
      <button onClick={scrollToDescription}><FaInfoCircle /> ABOUT US</button>
      <button onClick={scrollToContact}><FaEnvelope /> CONTACT US</button>
      <button onClick={openLoginModal}><FaSignInAlt /> LOGIN</button>
    </div>
    <div className="content">
      <h1>Life Beacon</h1>
      <p>A Holistic Medical Assistance and Records Software</p>
    </div>
  </div>
);

export default Header;