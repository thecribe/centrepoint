import React from "react";
import { NavLink } from "react-router-dom";
import SiteLogo from "../assets/sitelogo2.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="content-center content-box">
          <img src={SiteLogo} alt="logo" width="100%" />
          <nav>
            <NavLink to="" className="links">
              Start a Project ›
            </NavLink>
            <NavLink to="" className="links">
              Clients ›
            </NavLink>
            <NavLink to="" className="links">
              About Us ›
            </NavLink>
            <NavLink to="" className="links">
              Print ›
            </NavLink>
            <NavLink to="" className="links">
              Contact ›
            </NavLink>
          </nav>
          <p>Copyright © Center Point Designs, LLC</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
