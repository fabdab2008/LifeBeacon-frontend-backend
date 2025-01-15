import React from 'react';
import { FaFacebook, FaPhone, FaGlobe } from 'react-icons/fa';

const IntegratedHospitalsSection = () => (
  <div id="integrated-hospitals-section" className="section">
    <video autoPlay muted loop>
      <source src="src/assets/Images/hos.mp4" type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
    <h1 className="integrated-hospitals-title">Integrated Hospitals</h1>
    <div className="content">
      <div className="polaroid-container">
        <div className="polaroid-box">
          <img src="src/assets/Images/bsmmu.jpg" alt="All Government Hospitals" className="polaroid-image" />
          <div className="polaroid-caption">
            <h2>All Government Hospitals</h2>
            <div className="polaroid-icons">
              <a href="https://www.facebook.com/bsmmu.edu.bd/?locale=bn_IN" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="tel:+88029661065"><FaPhone /></a>
              <a href="https://bsmmu.ac.bd/" target="_blank" rel="noopener noreferrer"><FaGlobe /></a>
            </div>
          </div>
        </div>
        <div className="polaroid-box">
          <img src="src/assets/Images/square.jpeg" alt="Square Hospital" className="polaroid-image" />
          <div className="polaroid-caption">
            <h2>Square Hospital</h2>
            <div className="polaroid-icons">
              <a href="https://www.facebook.com/squarehospital" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="tel:10616"><FaPhone /></a>
              <a href="https://www.squarehospital.com/" target="_blank" rel="noopener noreferrer"><FaGlobe /></a>
            </div>
          </div>
        </div>
        <div className="polaroid-box">
          <img src="src/assets/Images/evercare.jpg" alt="Evercare Hospital" className="polaroid-image" />
          <div className="polaroid-caption">
            <h2>Evercare Hospital</h2>
            <div className="polaroid-icons">
              <a href="https://www.facebook.com/evercarebd/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="tel:+8810678"><FaPhone /></a>
              <a href="https://www.evercarebd.com/" target="_blank" rel="noopener noreferrer"><FaGlobe /></a>
            </div>
          </div>
        </div>
        <div className="polaroid-box">
          <div className="polaroid-caption">
            <h2>And almost all the renowned hospitals of Bangladesh</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default IntegratedHospitalsSection;