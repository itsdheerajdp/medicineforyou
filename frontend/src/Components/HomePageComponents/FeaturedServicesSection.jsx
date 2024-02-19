import React from 'react';
import './FeaturedServicesSection.css';

export default function FeaturedServicesSection() {
  return (
    <section id="featured-services" className="featured-services">
      <div className="container" data-aos="fade-up">

        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="icon"><i className="fa fa-plus-square"></i></div>
              <h4 className="title"><a href="">Comprehensive Range of Medicines</a></h4>
              <p className="description">Find all your healthcare essentials conveniently in one place.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div className="icon"><i className="bx bx-file"></i></div>
              <h4 className="title"><a href="">Reliable Delivery Network</a></h4>
              <p className="description">Ensuring your medications reach you swiftly and securely.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div className="icon"><i className="bx bx-tachometer"></i></div>
              <h4 className="title"><a href="">Exceptional Customer Support</a></h4>
              <p className="description">Our team is dedicated to providing assistance whenever you need it.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
              <div className="icon"><i className="bx bx-world"></i></div>
              <h4 className="title"><a href="">Quality Assurance</a></h4>
              <p className="description"> Rest assured, every product on our platform meets stringent quality standards.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
