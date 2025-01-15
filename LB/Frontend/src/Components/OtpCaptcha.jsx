import React, { useState } from 'react';
import './OtpCaptcha.css';
import logo from '../assets/Images/logo.png';

const OtpCaptcha = ({ closeModal }) => {
  const [otp, setOtp] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);

  const generateCaptcha = () => {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += chars[Math.floor(Math.random() * chars.length)];
    }
    setCaptcha(captcha);
  };

  const handleCaptchaChange = (e) => {
    setCaptchaInput(e.target.value);
    if (e.target.value === captcha) {
      setIsCaptchaValid(true);
    } else {
      setIsCaptchaValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ otp, captcha });
    closeModal();
  };

  React.useEffect(() => {
    generateCaptcha();
  }, []);

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <div className="form-container">
          <img src={logo} alt="Site Logo" className="form-logo" />
          <h1 className="form-title">Enter OTP and Captcha</h1>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label htmlFor="otp">6 Digit OTP</label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="captcha">Captcha</label>
              <div className="captcha-container">
                <span className="captcha">{captcha.split('').map((char, index) => (
                  <span
                    key={index}
                    style={{
                      display: 'inline-block',
                      transform: `rotate(${Math.random() * 30 - 15}deg)`,
                      margin: `0 ${Math.random() * 5}px`,
                    }}
                  >
                    {char}
                  </span>
                ))}</span>
                <button type="button" onClick={generateCaptcha} className="refresh-captcha">Refresh</button>
              </div>
              <input
                type="text"
                id="captcha"
                value={captchaInput}
                onChange={handleCaptchaChange}
                required
                className="form-input"
              />
            </div>
            {isCaptchaValid && <button type="submit" className="form-button">Submit</button>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default OtpCaptcha;