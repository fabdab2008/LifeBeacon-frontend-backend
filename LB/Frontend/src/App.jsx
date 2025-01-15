import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import DescriptionSection from './Components/DescriptionSection';
import IntegratedHospitalsSection from './Components/IntegratedHospitalsSection';
import DoctorsSection from './Components/DoctorsSection';
import ContactSection from './Components/ContactSection';
import ModalManager from './Components/ModalManager';
import HospitalDashboard from './Components/HospitalDashboard';
import DoctorDashboard from './Components/DoctorDashboard';
import PatientDashboard from './Components/PatientDashboard'; // Import the new component
import UpdateProfile from './Components/UpdateProfile';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isForgetPasswordOpen, setIsForgetPasswordOpen] = useState(false);
  const [isOtpCaptchaOpen, setIsOtpCaptchaOpen] = useState(false);

  const descriptions = [
    { text: "Record All Your Medical History Since You are Born", image: 'src/assets/Images/record.jpg' },
    { text: "Store And Record All Your Diagnostic Reports", image: 'src/assets/Images/test.jpg' },
    { text: "Keep Track Of Your Vaccination Schedule", image: 'src/assets/Images/vaccine.jpg' },
    { text: "Review Patient's Medical Summary And History", image: 'src/assets/Images/doc.jpg' },
    { text: "Take Appointment At Your Convenient Time", image: 'src/assets/Images/appt.jpg' },
    { text: "Real Time Data For All Connected Hospitals", image: 'src/assets/Images/rt.jpg' },
  ];

  const doctors = [
    { name: "Prof. Dr. Samnun F. Taha", image: 'src/assets/Images/taha.jpg', appointment: "Appointment Link", intro: "MBBS (BD), MRCP (UK), Diploma in Geriatric Medicine (Royal College of Physicians, LONDON) Geriatric and Internal Medicine Specialist." },
    { name: "Dr. Pran Gopal Datta", image: 'src/assets/Images/pran.jpeg', appointment: "Appointment Link", intro: "MBBS, MCPS, ACORL, PhD, MSc (Audiology), FCPS (ENT), FRCS (Glasgow). ears, nose and throat (ENT) Specialist " },
    { name: "Prof. Dr. Quazi Deen Mohammed", image: 'src/assets/Images/deen.jpg', appointment: "Appointment Link", intro: "MBBS, MD (Neurology), FCPS (Medicine), Fellow in Neurology (USA). Neurology & Medicine Specialist " },
    { name: "Prof. A. K. M. Fazlul Haque", image: 'src/assets/Images/fazlul.jpeg', appointment: "Appointment Link", intro: "MBBS, FCPS, FICS (USA) Fellow Colorectal Surgery (Singapore) International Scholar, Colorectal Surgery (USA). Colorectal surgeon" },
    { name: "Dr. Rowshan Ara Begum", image: 'src/assets/Images/rowshan.jpg', appointment: "Appointment Link", intro: "MBBS , FCPS (Gynae & Obs), FICS. Obstetrics and Gynecology." },
    { name: "Dr. Taslima Akter", image: 'src/assets/Images/taslima.jpg', appointment: "Appointment Link", intro: "MBBS, CCD (BIRDEM), DMU, FCGP, Dip. in Asthma (icddr,b). Family Medicine Specialist" }
  ];

  const scrollToDescription = () => {
    document.getElementById('description-section').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openLoginModal = () => {
    setIsLoginOpen(true);
    setIsSignupOpen(false);
    setIsForgetPasswordOpen(false);
    setIsOtpCaptchaOpen(false);
  };

  const closeLoginModal = () => {
    setIsLoginOpen(false);
  };

  const openSignupModal = () => {
    setIsSignupOpen(true);
    setIsLoginOpen(false);
    setIsForgetPasswordOpen(false);
    setIsOtpCaptchaOpen(false);
  };

  const closeSignupModal = () => {
    setIsSignupOpen(false);
  };

  const openForgetPasswordModal = () => {
    setIsForgetPasswordOpen(true);
    setIsLoginOpen(false);
    setIsSignupOpen(false);
    setIsOtpCaptchaOpen(false);
  };

  const closeForgetPasswordModal = () => {
    setIsForgetPasswordOpen(false);
  };

  const openOtpCaptchaModal = () => {
    setIsOtpCaptchaOpen(true);
    setIsForgetPasswordOpen(false);
    setIsLoginOpen(false);
    setIsSignupOpen(false);
  };

  const closeOtpCaptchaModal = () => {
    setIsOtpCaptchaOpen(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header scrollToDescription={scrollToDescription} scrollToContact={scrollToContact} openLoginModal={openLoginModal} />
            <DescriptionSection descriptions={descriptions} />
            <IntegratedHospitalsSection />
            <DoctorsSection doctors={doctors} />
            <ContactSection scrollToTop={scrollToTop} />
            <ModalManager
              isLoginOpen={isLoginOpen}
              isSignupOpen={isSignupOpen}
              isForgetPasswordOpen={isForgetPasswordOpen}
              isOtpCaptchaOpen={isOtpCaptchaOpen}
              closeLoginModal={closeLoginModal}
              closeSignupModal={closeSignupModal}
              closeForgetPasswordModal={closeForgetPasswordModal}
              closeOtpCaptchaModal={closeOtpCaptchaModal}
              openSignupModal={openSignupModal}
              openForgetPasswordModal={openForgetPasswordModal}
              openOtpCaptchaModal={openOtpCaptchaModal}
            />
          </>
        } />
        <Route path="/hospital-dashboard" element={<HospitalDashboard />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} /> {/* Add this line */}
        <Route path="/update-profile" element={<UpdateProfile />} />
      </Routes>
    </Router>
  );
}

export default App;