import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
// import DarkMode from "./DarkMode";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" id="mn" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand id="nh" href="/">
            <img id="l" src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                id="x"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#aboutme"
                id="y"
                className={
                  activeLink === "aboutme" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("aboutme")}
              >
                About Me
              </Nav.Link>
              <Nav.Link
                href="#SkillsSlider"
                id="z"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#pt"
                id="z"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/ahmed-ayoub-3a262b279/" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon1} alt="" />
                </a>
                {/* <a href="/"><img src={navIcon2} alt="" /></a>
                <a href="/"><img src={navIcon3} alt="" /></a> */}
                <a
                  href="https://github.com/AhmedAyoub5757"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub className="icon-white" id="iw" />
                </a>
                {/* <a href="/portfolio">
                  <BsBox />
                </a> */}
                {/* <DarkMode/> */}
              </div>
              {/* <Navbar.Brand  href="/">
            <DarkMode/>
          </Navbar.Brand> */}
              <HashLink to="#form">
                <button className="vvd">
                  <span>Let’s Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
