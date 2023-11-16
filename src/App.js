import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./images/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import _ from "lodash";
import HomePage from "./HomePage";
import About from "./About";
import Sermons from "./Sermons";
import PrayerRequest from "./PrayerRequest";
import Contact from "./Contact";
import Services from "./Services";
import Gallery from "./Gallery";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const tabs = [
  {
    label: "Home",
    key: "home",
  },
  {
    label: "Attend online",
    key: "attend",
  },
  {
    label: "About",
    key: "about",
  },
  {
    label: "Services",
    key: "services",
  },
  {
    label: "Gallery",
    key: "gallery",
  },
  {
    label: "Sermons",
    key: "sermons",
  },
  {
    label: "Prayer request",
    key: "request",
  },
  {
    label: "Contact us",
    key: "contact",
  },
];

const App = () => {
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("home");

  const [expanded, setExpanded] = useState(false);

  const navToggle = () => {
    setExpanded(expanded ? false : true);
  };

  const closeNav = () => {
    setExpanded(false);
  };

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleTabChange = (key) => {
    if (key === "attend") {
      window.open(
        "https://www.youtube.com/@berachahswaram5627/streams",
        "_blank"
      );
    }
    setActiveTab(key);
    closeNav();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const getBottomComponent = () => {
    switch (activeTab) {
      case "about":
        return <About />;
      case "services":
        return <Services />;
      case "gallery":
        return <Gallery />;
      case "sermons":
        return <Sermons />;
      case "request":
        return <PrayerRequest />;
      case "contact":
        return <Contact />;
      default:
      case "attend":
      case "home": {
        return (
          <HomePage
            index={index}
            handleSelect={handleSelect}
            handleTabChange={handleTabChange}
          />
        );
      }
    }
  };

  return (
    <div className="container">
      {loading ? (
        <div className="preloader">
          <div className="preloader-logo">
            <img src={logo} alt="" width="143" className="img-logo" />
          </div>
          <div className="preloader-body">
            <div id="loadingProgressG">
              <div className="loadingProgressG" id="loadingProgressG_1"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="page">
          {/* Navbar */}
          <div
            className="rd-navbar-wrap wrap-nav sticky-top"
            style={{ height: "99px" }}
          >
            <Navbar
              expand="lg"
              data-layout="rd-navbar-fixed"
              data-sm-layout="rd-navbar-fixed"
              data-md-layout="rd-navbar-fixed"
              data-md-device-layout="rd-navbar-fixed"
              data-lg-layout="rd-navbar-static"
              data-lg-device-layout="rd-navbar-fixed"
              data-xl-layout="rd-navbar-static"
              data-xl-device-layout="rd-navbar-static"
              data-xxl-layout="rd-navbar-static"
              data-xxl-device-layout="rd-navbar-static"
              data-lg-stick-up-offset="15px"
              data-xl-stick-up-offset="15px"
              data-xxl-stick-up-offset="15px"
              data-lg-stick-up="true"
              data-xl-stick-up="true"
              data-xxl-stick-up="true"
              style={{ padding: 0 }}
              expanded={expanded}
            >
              <Container style={{ height: "98.5px", backgroundColor: "white" }}>
                <>
                  <Navbar.Brand
                    style={{
                      height: "100%",
                      justifyContent: "center",
                      paddingTop: 20,
                    }}
                    onClick={closeNav}
                  >
                    <img src={logo} alt="" width="60" />
                  </Navbar.Brand>
                  <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    onClick={navToggle}
                  />
                </>
                <Navbar.Collapse
                  id="basic-navbar-nav"
                  className="nav-bar-collapse-local nav-bar-collapse"
                  style={{ marginTop: -8 }}
                >
                  <Nav className="me-auto nav-links" data-toggle="collapse">
                    {_.map(tabs, (tab) => {
                      return (
                        <Nav.Link
                          className={
                            tab.key == activeTab
                              ? "nav-link-local nav-link-local-active"
                              : "nav-link-local"
                          }
                          active={tab.key == activeTab}
                          onClick={() => handleTabChange(tab.key)}
                        >
                          {tab.label}
                        </Nav.Link>
                      );
                    })}
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
          {getBottomComponent()}
          <footer className="section footer-standard bg-gray-800">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 box-address">
                <h4
                  className="font-weight-normal text-white"
                  style={{ color: "white", paddingBottom: 34 }}
                >
                  Contact Information
                </h4>
                <ul className="list-sm" style={{ paddingLeft: 20 }}>
                  <li className="object-inline big d-flex">
                    <FaMapMarkerAlt
                      className="icon icon-md text-white"
                      style={{ marginTop: 4 }}
                    />
                    <a className="footer-link">
                      Door No: 1-11/20/C, Sri Sairam Colony, old Hafizpet,
                      Miyapur post, Hyderabad, Telangana, India 500049
                    </a>
                  </li>
                  <li className="object-inline big d-flex">
                    <FaPhoneAlt
                      className="icon icon-md text-white"
                      style={{ marginTop: 4 }}
                    />
                    <a className="footer-link">9989274863 and 9059516060</a>
                  </li>
                  <li className="object-inline big d-flex">
                    <FaEnvelope
                      className="icon icon-md text-white"
                      style={{ marginTop: 4 }}
                    />
                    <a className="footer-link">k.sambabu@yahoo.com</a>
                  </li>
                </ul>
                <div
                  className="social-links-home"
                  style={{ paddingBottom: 16 }}
                >
                  <a
                    href="https://api.whatsapp.com/send?phone=919100685437"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="white-icon" width={8} height={8} />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100010294026963"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="white-icon" width={8} height={8} />
                  </a>
                  <a
                    href="https://www.instagram.com/berachahchurchmission"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="white-icon" width={8} height={8} />
                  </a>
                  <a
                    href="https://www.youtube.com/@berachahswaram5627/featured"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube className="white-icon" width={8} height={8} />
                  </a>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.364758211162!2d78.3593698!3d17.490092900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9240261a64a9%3A0x2e34e2bc210788d7!2sBerachah%20Church!5e0!3m2!1sen!2sin!4v1700140677268!5m2!1sen!2sin"
                width={600}
                height={300}
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="col-12 col-sm-12 col-md-6"
              ></iframe>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default App;
