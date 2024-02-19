import React from 'react';
import "./AboutUsSection.css";

export default function AboutUsSection() {
  return (
    <section id="about" className="about section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>About</h2>
          <h3>Find Out More <span>About Us</span></h3>
          <p>Empowering Health, Empowering Lives: At MedicineForYou, we believe in the transformative power of accessible healthcare to positively impact lives globally.</p>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
            <img src="./assets/img/about.jpg" className="img-fluid" alt="img"/>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">
            <h3>Welcome to MedicineForYou, where your health is our priority.</h3>
            <p className="fst-italic">
            At MedicineForYou, we're driven by a passion for improving healthcare accessibility and enhancing lives. With a dedication to excellence, innovation, and integrity, we strive to redefine the online pharmaceutical experience.
            </p>
            <ul>
              <li>
              <i class="fa fa-bullseye"></i>
                <div>
                  <h5>Our Mission</h5>
                  <p>At MedicineForYou, we're committed to fostering accessible healthcare by leveraging technology and innovation. Our mission is to empower individuals worldwide to lead healthier, happier lives.</p>
                </div>
              </li>
              <li>
              <i class="fa fa-eye"></i>
                <div>
                  <h5>Our Vision</h5>
                  <p>With a vision for a world where healthcare is both accessible and reliable, we strive to be a leading force in revolutionizing the pharmaceutical industry. Through our dedication to excellence, transparency, and customer satisfaction, we aim to set new standards in online pharmaceutical services.</p>
                </div>
              </li>
            </ul>
            <p>
            As we continue our journey, we invite you to join us in our mission to make quality healthcare accessible to all. Thank you for choosing MedicineForYou as your trusted healthcare partner. Together, let's build a healthier, happier world.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
