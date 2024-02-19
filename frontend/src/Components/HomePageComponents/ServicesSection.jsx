import React from 'react';
import "./ServicesSection.css";

export default function ServicesSection() {
  return (
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Services</h2>
          <h3>Check our <span>Services</span></h3>
          <p>Discover Our Services: Your Comprehensive Healthcare Solutions Await!</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
              <div className="icon"><i class="fas fa-pills"></i></div>
              <h4><a href="">Prescription Refills</a></h4>
              <p>Easily refill your prescriptions online, hassle-free.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon"><i class="fas fa-truck"></i></div>
              <h4><a href="">Medication Delivery</a></h4>
              <p>Swift and secure delivery of your medications right to your doorstep.

</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
              <div className="icon"><i class="fas fa-stethoscope"></i></div>
              <h4><a href="">Health Consultations</a></h4>
              <p>Access expert advice and consultations with qualified healthcare professionals.

</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
              <div className="icon"><i class="fas fa-clock"></i></div>
              <h4><a href="">Medication Tracking</a></h4>
              <p>Stay informed with real-time tracking of your medication orders.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon"><i class="fas fa-heart"></i></div>
              <h4><a href="">Health & Wellness Products</a></h4>
              <p>Discover a wide range of health and wellness products to support your wellbeing.

</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
              <div className="icon"><i class="fas fa-headset"></i></div>
              <h4><a href="">24/7 Customer Support</a></h4>
              <p>Get assistance anytime, anywhere with our dedicated customer support team.



</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
