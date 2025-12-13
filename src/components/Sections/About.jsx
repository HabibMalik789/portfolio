import React from "react";
import { Link as ScrollLink } from "react-scroll";

const aboutData = {
  cvpath: "media/cv.pdf",
  image: "images/about-2.png",
  name: "Habib Ullah",
  location: "Mianwali, Punjab",
  birthday: "30 May, 2003",
  email: "hmdesign789@gmail.com",
  aboutMe:
    "I’m a Computer Science graduate and web developer with expertise in React and Node.js. I build full-stack, responsive, and user-friendly websites using modern technologies like HTML5, CSS3, and JavaScript (ES6+), blending clean code with thoughtful UI/UX design for seamless digital experiences.",
};

function About() {
  return (
    <div className="row">
      <div className="col-md-3">
        <img src={aboutData.image} alt={aboutData.name} />
      </div>
      <div className="col-md-9">
        <h2 className="mt-4 mt-md-0 mb-4">Hello,</h2>
        <p className="mb-0">{aboutData.aboutMe}</p>
        <div className="row my-4">
          <div className="col-md-6">
            <p className="mb-2">
              Name: <span className="text-dark">{aboutData.name}</span>
            </p>
            <p className="mb-0">
              Birthday: <span className="text-dark">{aboutData.birthday}</span>
            </p>
          </div>
          <div className="col-md-6 mt-2 mt-md-0 mt-sm-2">
            <p className="mb-2">
              Location: <span className="text-dark">{aboutData.location}</span>
            </p>
            <p className="mb-0">
              Email: <span className="text-dark">{aboutData.email}</span>
            </p>
          </div>
        </div>
       <div className="d-flex flex-wrap flex-md-nowrap">
  <a
    href={aboutData.cvpath}
    className="btn btn-default me-2 mb-2 mb-md-0"
  >
    <i className="icon-cloud-download"></i> Download CV
  </a>
  <ScrollLink
    activeClass="active"
    to="section-contact"
    spy={true}
    smooth={true}
    duration={500}
    offset={50}
    className="btn btn-alt"
  >
    <i className="icon-envelope"></i> Hire me
  </ScrollLink>
</div>

      </div>
    </div>
  );
}

export default About;
