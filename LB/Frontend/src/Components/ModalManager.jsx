import React from 'react';
import Login from './Login';
import Signup from './Signup';
import ForgetPassword from './ForgetPassword';
import OtpCaptcha from './OtpCaptcha';

const ModalManager = ({ isLoginOpen, isSignupOpen, isForgetPasswordOpen, isOtpCaptchaOpen, closeLoginModal, closeSignupModal, closeForgetPasswordModal, closeOtpCaptchaModal, openSignupModal, openForgetPasswordModal, openOtpCaptchaModal }) => (
  <>
    {isLoginOpen && <Login closeModal={closeLoginModal} openSignupModal={openSignupModal} openForgetPasswordModal={openForgetPasswordModal} />}
    {isSignupOpen && <Signup closeModal={closeSignupModal} />}
    {isForgetPasswordOpen && <ForgetPassword closeModal={closeForgetPasswordModal} openOtpCaptchaModal={openOtpCaptchaModal} />}
    {isOtpCaptchaOpen && <OtpCaptcha closeModal={closeOtpCaptchaModal} />}
  </>
);

export default ModalManager;