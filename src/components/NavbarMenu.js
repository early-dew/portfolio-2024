import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavbarMenu = () => {
  const location = useLocation();

  //styling for active link
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <Navbar bg="light" expand="lg">
      <div className="container-sm d-flex justify-content-between">
        <Navbar.Brand>
          <NavLink to="/">
            <img src="/portfolio-logo.png" alt="Logo" className="logo" />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end">
            <div className="nav-item">
              <NavLink
                to="/"
                className={`nav-link${isActive("/") ? " active" : ""}`}
              >
                Home
              </NavLink>
              <div
                className={
                  isActive("/") ? "underline underline-active" : "underline"
                }
              ></div>
            </div>
            <div className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                About
              </NavLink>
              <div
                className={
                  isActive("/about")
                    ? "underline underline-active"
                    : "underline"
                }
              ></div>
            </div>
            <div className="nav-item">
              <NavLink to="/projects" className="nav-link">
                Projects
              </NavLink>
              <div
                className={
                  isActive("/projects")
                    ? "underline underline-active"
                    : "underline"
                }
              ></div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavbarMenu;
