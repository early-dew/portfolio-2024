import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer d-flex align-items-center justify-content-center">
      <div className="footer-content d-flex flex-column align-items-center justify-content-center">
        <div className="footer-content d-flex flex-row">
          <NavLink to="/" style={{ color: "#e7eff5", textDecoration: "none" }}>
            <div className="footer-item">Home</div>
          </NavLink>
          <a
            style={{ color: "#e7eff5", textDecoration: "none" }}
            href="mailto:valborzykina@gmail.com"
          >
            <div className="footer-item">Contact</div>
          </a>
          <NavLink
            to="/about"
            style={{ color: "#e7eff5", textDecoration: "none" }}
          >
            <div className="footer-item">About</div>
          </NavLink>
        </div>
        <div className="footer-year mt-4 small-text">© 2024</div>
      </div>
    </footer>
  );
};

export default Footer;
