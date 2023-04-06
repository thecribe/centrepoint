import React from "react";
import { NavLink } from "react-router-dom";
import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import Dimage1 from "../assets/d-image1.jpeg";
import Dimage2 from "../assets/d-image2.jpeg";
import Dimage3 from "../assets/d-image3.jpeg";
import Dimage4 from "../assets/d-image4.jpeg";
import Dimage5 from "../assets/d-image5.jpeg";
import Dimage6 from "../assets/d-image6.jpeg";
import Dimage7 from "../assets/d-image7.jpeg";
import Dimage8 from "../assets/d-image8.jpeg";
import Dimage9 from "../assets/d-image9.jpeg";
import { AiOutlineMail } from "react-icons/ai";

const Project = () => {
  return (
    <>
      <div className="project">
        <div className="section-one ">
          <div className="content-center content-box">
            <h4>NEW PROJECT?</h4>
            <h1>
              Let's start with <span>your new project.</span>
            </h1>
            <p>
              I find it important to offer my clients a clear understanding of
              what they can and should expect from me. If we will work together
              on your website, the process will go as described below:
            </p>
          </div>
        </div>
        <div className="section-two">
          <div className="content-center content-box">
            <div className="box">
              <p>1</p>
            </div>
            <div className="side-text">
              <p>Step 1?</p>
              <h2>
                Concept <span>&</span> Estimate
              </h2>
              <p>
                Discussing the first ideas during a brief meeting on site, by
                email or Skype. Following the initial ideas we discussed I will
                then present an estimate for the work.
              </p>
              <h4>Also see:</h4>
              <NavLink
                to="https://www.centerpointdesigns.com/start-a-project"
                className="links"
              >
                Pricing & Request a Quote ›
              </NavLink>
            </div>
            <div className="side-img">
              <img src={Image1} alt="image1" width="100%" />
            </div>
          </div>
        </div>
        <div className="section-three">
          <div className="content-center content-box">
            <div className="box">
              <p>2</p>
            </div>
            <div className="side-img">
              <img src={Image2} alt="image1" width="100%" />
            </div>
            <div className="side-text">
              <p>Step 2?</p>
              <h2>
                Design <span>proposal</span>
              </h2>
              <p>
                Once the estimate is signed, I will start the project. As a
                designer I’ll study your company, product or service. To
                accelerate the process, it is best to hand over all the project
                material to me at this moment (Logo, Texts, Photos, Sitemap,
                etc.). Within 7 days I will present a professional and
                appropriate design for your website.
              </p>
              <h4>Also see:</h4>
              <NavLink
                to="https://www.centerpointdesigns.com/start-a-project"
                className="links"
              >
                Happy clients & projects ›
              </NavLink>
            </div>
          </div>
        </div>
        <div className="section-four">
          <div className="content-center content-box">
            <div className="box">
              <p>3</p>
            </div>
            <div className="side-text">
              <p>Step 3?</p>
              <h2>
                Feedback <span>round</span>
              </h2>
              <p>
                After the first presentation of the design you can give feedback
                and share comments. The feedback round consists of a maximum of
                2 rounds*. This way we do not linger in an endless circle of
                minor changes. This prevents wasted time. And budget. It is
                especially important to share good feedback
              </p>
            </div>
            <div className="side-img">
              <img src={Image1} alt="image1" width="100%" />
            </div>
          </div>
        </div>
        <div className="section-five">
          <div className="content-center content-box">
            <div className="box">
              <p>2</p>
            </div>
            <div className="side-img">
              <img src={Image2} alt="image1" width="100%" />
            </div>
            <div className="side-text">
              <p>Step 4</p>
              <h2>
                Finish <span>design & content</span>
              </h2>
              <p>
                After the last round of feedback, I will make the final changes
                and finish the design completely. In consultation with you the
                final content such as texts and photos is also processed
              </p>
              <h4>Also see:</h4>
              <NavLink
                to="https://www.centerpointdesigns.com/start-a-project"
                className="links"
              >
                Happy clients & projects ›
              </NavLink>
            </div>
          </div>
        </div>
        <div className="section-six">
          <div className="content-center content-box">
            <div className="box">
              <p>3</p>
            </div>
            <div className="side-text">
              <p>Step 5?</p>
              <h2>
                Feedback <span>round</span>
              </h2>
              <p>
                After the first presentation of the design you can give feedback
                and share comments. The feedback round consists of a maximum of
                2 rounds*. This way we do not linger in an endless circle of
                minor changes. This prevents wasted time. And budget. It is
                especially important to share good feedback
              </p>
            </div>
            <div className="side-img">
              <img src={Image1} alt="image1" width="100%" />
            </div>
          </div>
        </div>
        <div className="section-seven">
          <div className="img">
            <div>
              <img src={Dimage1} alt="image1" width="100%" />
              <img src={Dimage4} alt="image1" width="100%" />
              <img src={Dimage7} alt="image1" width="100%" />
            </div>
            <div className="special-img">
              <img src={Dimage2} alt="image1" width="100%" />
              <img src={Dimage5} alt="image1" width="100%" />
              <img src={Dimage8} alt="image1" width="100%" />
            </div>
            <div>
              <img src={Dimage3} alt="image1" width="100%" />
              <img src={Dimage6} alt="image1" width="100%" />
              <img src={Dimage9} alt="image1" width="100%" />
            </div>
          </div>

          <div className="content-center content-box">
            <div className="side-text">
              <h2>Do you have a project in mind?</h2>
              <p>
                You need a (new) website? I'm here to listen to your
                requirements! Let's discuss your project.
              </p>
              <div className="button">
                <button className="btn btn-1">Let's Start</button>
                <button className="btn btn-2">My Working Process</button>
              </div>
            </div>
          </div>
        </div>
        <div className="section-eight">
          <div className="content-center content-box">
            <div className="icon-list">
              <div className="col-1">
                <AiOutlineMail className="icons" />
                <h3>Send an e-mail</h3>
                <p>
                  For questions or information you can always reach us by
                  mailing to sales@centerpointdesigns.com
                </p>
                <NavLink to="" className="links">
                  Contact Page
                </NavLink>
              </div>
              <div className="col-2">
                <AiOutlineMail className="icons" />
                <h3>Send an e-mail</h3>
                <p>
                  For questions or information you can always reach us by
                  mailing to sales@centerpointdesigns.com
                </p>
                <NavLink to="" className="links">
                  Contact Page
                </NavLink>
              </div>
              <div className="col-3">
                <AiOutlineMail className="icons" />
                <h3>Send an e-mail</h3>
                <p>
                  For questions or information you can always reach us by
                  mailing to sales@centerpointdesigns.com
                </p>
                <NavLink to="" className="links">
                  Contact Page
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
