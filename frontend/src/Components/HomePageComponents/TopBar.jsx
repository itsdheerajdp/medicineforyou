import React from 'react';
import './TopBar.css';

export default function TopBar() {
  return (
    <section id="topbar" className="d-flex align-items-center">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:singhdheeraj2696@gmail.com">singhdheeraj2696@gmail.com</a></i>
          <i className="bi bi-phone d-flex align-items-center ms-4"><span>+91 8948584874</span></i>
        </div>
        <div className="social-links d-none d-md-flex align-items-center">
        <a href="https://github.com/itsdheerajdp" target='_blank' className="github"><i className="bi bi-github"></i></a>
          <a href="https://www.instagram.com/_dheerajsingh89_/" target='_blank' className="instagram"><i className="bi bi-instagram"></i></a>
          <a href="https://www.linkedin.com/in/dheeraj-singh-3105b7226/" target='_blank' className="linkedin"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
    </section>
  );
}
