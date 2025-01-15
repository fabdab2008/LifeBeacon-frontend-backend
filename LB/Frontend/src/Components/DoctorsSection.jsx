import React from 'react';

const DoctorsSection = ({ doctors }) => (
  <div id="doctors-section" className="section">
    <video autoPlay muted loop>
      <source src="src/assets/Images/bg3.mp4" type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
    <h1 className="doctors-title">Meet Our Doctors</h1>
    <div className="content">
      <div className="doctor-container">
        {doctors.map((doctor, index) => (
          <div key={index} className="doctor-box">
            <img src={doctor.image} alt={doctor.name} className="doctor-image" />
            <div className="doctor-caption">
              <h2>{doctor.name}</h2>
              <p>{doctor.intro}</p>
              <a href={doctor.appointment} className="appointment-link">Book Appointment</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default DoctorsSection;