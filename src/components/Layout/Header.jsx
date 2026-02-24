import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useRouteMatch } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaHandshake, // Fiverr ke liye alt
} from "react-icons/fa";
const headerData = {
  name: "hm4 design",
  designation: "Web Developer",
  imageThumb: process.env.PUBLIC_URL + "/images/logo.png",
  social: {
    fiverr: "https://www.fiverr.com/hm4design",
    github: "https://github.com/HabibMalik789",
    linkedin: "www.linkedin.com/in/hm4-design",
    instagram: "https://www.instagram.com/hm4_design/",
    facebook: "https://www.facebook.com/share/18ctzTuV65/",
  },
};

function Header({ toggleHeader, toggleHandler }) {
  const [currentPath, setCurrentPath] = useState("");
  const match = useRouteMatch();

  useEffect(() => {
    setCurrentPath(match.path);
  }, [match]);

  return (
    <>
      <div
        className={
          toggleHeader
            ? "mobile-header py-2 px-3 mt-4 push"
            : "mobile-header py-2 px-3 mt-4"
        }
      >
        <button className="menu-icon mr-2 me-3" onClick={toggleHandler}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <Link to="/" className="logo me-1">
          <img src={headerData.imageThumb} alt={headerData.name} />
        </Link>
        <Link to="/" className="site-title dot ml-2">
          {headerData.name}
        </Link>
      </div>

      <header
        className={
          toggleHeader
            ? "left float-left shadow-dark open"
            : "left float-left shadow-dark"
        }
      >
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={toggleHandler}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="header-inner d-flex align-items-start flex-column">
          <Link to="/">
            <img src={headerData.imageThumb} alt={headerData.name} />
          </Link>
          <Link to="/" className="site-title dot mt-3">
            {headerData.name}
          </Link>

          <span className="site-slogan">{headerData.designation}</span>

          <nav>
            <ul className="vertical-menu scrollspy">
              <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    activeClass="active"
                    to="section-home"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <i className="icon-home"></i>Home
                  </ScrollLink>
                ) : (
                  <Link to="/">
                    <i className="icon-home"></i>Home
                  </Link>
                )}
              </li>
              <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    activeClass="active"
                    to="section-about"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <i className="icon-user"></i>About
                  </ScrollLink>
                ) : (
                  <Link to="/">
                    <i className="icon-user"></i>About
                  </Link>
                )}
              </li>
              <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    activeClass="active"
                    to="section-services"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <i className="icon-bulb"></i>Services
                  </ScrollLink>
                ) : (
                  <Link to="/">
                    <i className="icon-bulb"></i>Services
                  </Link>
                )}
              </li>
              <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    activeClass="active"
                    to="section-experiences"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <i className="icon-graduation"></i>Resume
                  </ScrollLink>
                ) : (
                  <Link to="/">
                    <i className="icon-graduation"></i>Resume
                  </Link>
                )}
              </li>
              <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    activeClass="active"
                    to="section-portfolios"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <i className="icon-grid"></i>Works
                  </ScrollLink>
                ) : (
                  <Link to="/">
                    <i className="icon-grid"></i>Works
                  </Link>
                )}
              </li>

              <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    activeClass="active"
                    to="section-contact"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <i className="icon-phone"></i>Contact
                  </ScrollLink>
                ) : (
                  <Link to="/">
                    <i className="icon-phone"></i>Contact
                  </Link>
                )}
              </li>
            </ul>
          </nav>

          <div className="footer mt-auto">
  <ul className="social-icons list-inline">
    {headerData.social.fiverr && (
      <li className="list-inline-item">
        <a href={headerData.social.fiverr} target="_blank" rel="noreferrer">
          <FaHandshake /> {/* Fiverr */}
        </a>
      </li>
    )}
    {headerData.social.github && (
      <li className="list-inline-item">
        <a href={headerData.social.github} target="_blank" rel="noreferrer">
          <FaGithub /> {/* GitHub */}
        </a>
      </li>
    )}
    {headerData.social.linkedin && (
      <li className="list-inline-item">
        <a href={headerData.social.linkedin} target="_blank" rel="noreferrer">
          <FaLinkedinIn /> {/* LinkedIn */}
        </a>
      </li>
    )}
    {headerData.social.instagram && (
      <li className="list-inline-item">
        <a href={headerData.social.instagram} target="_blank" rel="noreferrer">
          <FaInstagram /> {/* Instagram */}
        </a>
      </li>
    )}
    {headerData.social.facebook && (
      <li className="list-inline-item">
        <a href={headerData.social.facebook} target="_blank" rel="noreferrer">
          <FaFacebookF /> {/* Facebook */}
        </a>
      </li>
    )}
  </ul>

  <span className="copyright">
    &copy; {new Date().getFullYear()} Habib Ullah
  </span>
</div>

        </div>
      </header>
    </>
  );
}

export default Header;
