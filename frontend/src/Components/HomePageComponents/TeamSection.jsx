import React from 'react';
import "./TeamSection.css";

export default function TeamSection() {
  return (
    <div>
      <section id="team" className="team section-bg">
        <div className="container" data-aos="fade-up">

          <div className="section-title">
            <h2>Team</h2>
            <h3>Our Hardworking <span>Team</span></h3>
            <p>Meet Our Dedicated Team: Driving Innovation and Excellence Under My Leadership</p>
          </div>

          <div className="row" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
              <div className="member">
                <div className="member-img">
                  <img src="./assets/img/team/team-1.jpg" className="img-fluid" alt=""/>
                  <div className="social">
                    <a href="https://github.com/itsdheerajdp" target='_blank'><i className="bi bi-github"></i></a>
                    <a href="https://www.instagram.com/_dheerajsingh89_/" target='_blank'><i className="bi bi-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/dheeraj-singh-3105b7226/" target='_blank'><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Dheeraj Singh</h4>
                  <span>CEO & Founder</span>
                </div>
              </div>
            </div>

           


            
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
              <div className="member">
                <div className="member-img">
                  <img src="./assets/img/team/team_mub.png" className="img-fluid" alt=""/>
                  <div className="social">
                    <a href="https://github.com/Mubashirshariq" target='_blank'><i className="bi bi-github"></i></a>
                    <a href="https://www.instagram.com/mubashir_sharik/" target='_blank'><i className="bi bi-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/mubashir-shariq-5953a4225/" target='_blank'><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Mubashir Shariq</h4>
                  <span>CTO</span>
                </div>
              </div>
            </div>
           


          </div>

        </div>
      </section>
    </div>
  );
}
