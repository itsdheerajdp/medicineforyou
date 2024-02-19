import React from 'react';
import "./TestimonialSection.css";

export default function TestimonialSection() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container" data-aos="zoom-in">

        <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper-wrapper">

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src="./assets/img/testimonials/testimonials_1.jpg" className="testimonial-img" alt=""/>
                <h3>Dheeraj Singh</h3>
                <h4>Ceo &amp; Founder</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Leading with vision, passion, and unwavering dedication to transforming healthcare for all                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>

            </div>
            </div>
      </div>
    </section>
  );
}
