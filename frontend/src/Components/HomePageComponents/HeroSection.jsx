import React from 'react';
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container" data-aos="zoom-out" data-aos-delay="100">
        <h1>Welcome to <span>MedicineForYou</span></h1>
        <h2>Your trusted online destination for accessible and reliable healthcare solutions.</h2>
        <div className="d-flex">
          <a href="/store" className="btn-get-started scrollto">Go to Shop</a>
        </div>
      </div>
    </section>
  );
}
