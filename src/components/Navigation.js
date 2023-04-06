import React from "react";
import { NavLink } from "react-router-dom";
import SiteLogo from "../assets/sitelogo.svg";
import { AiOutlineHome } from "react-icons/ai";

const Navigation = () => {
  return (
    <>
      <header>
        <div className="container content-center">
          <div className="site-logo">
            <img src={SiteLogo} alt="CenterPoint Designs" width="100%" />
          </div>
          <nav>
            <NavLink to="/" className="links">
              <h4>
                <AiOutlineHome className="icons" />
                Home
              </h4>
            </NavLink>
            <NavLink to="/start-a-project" className="links">
              <h4>
                <AiOutlineHome className="icons" />
                Let's start
              </h4>
            </NavLink>
            <NavLink to="/" className="links">
              <h4>
                <AiOutlineHome className="icons" />
                websites
              </h4>
            </NavLink>
            <NavLink to="/" className="links">
              <h4>
                <AiOutlineHome className="icons" />
                print
              </h4>
            </NavLink>
            <NavLink to="/" className="links">
              <h4>
                <AiOutlineHome className="icons" />
                clients
              </h4>
            </NavLink>
            <NavLink to="/" className="links">
              <h4>
                <AiOutlineHome className="icons" />
                about us
              </h4>
            </NavLink>
            <NavLink to="/" className="links">
              <h4>
                <AiOutlineHome className="icons" />
                contact
              </h4>
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navigation;
