import { useEffect, useState } from "react";
import ScrollToTop from "../components/ScrollToTop";
import { Carousel } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

const ELearningPage = () => {
  const [underlineActive, setUnderlineActive] = useState(false);

  useEffect(() => {
    // Activate underline animation on component mount
    // window.scrollTo(0, 0);
    setTimeout(() => {
      setUnderlineActive(true);
    }, 1000);
  }, []);

  return (
    <div>
      <header className="banner-section">
        <img
          className="banner"
          src="/elearning/elearning.png"
          alt="e-learning platform cover"
          loading="lazy"
        />
      </header>
      <div className="container-sm">
        <h2 style={{ margin: "0 0 2rem 0" }} className="underline-animation">
          E-Learning Platform{" "}
          <span
            className={`underline-heading ${
              underlineActive ? "animate-underline" : ""
            }`}
          ></span>
        </h2>
        <section>
          <div className="row">
            <h3>[Description]</h3>
            <div className="col-lg-7 col-md-12 col-sm-12 mb-4">
              <div className="mb-4">
                <p>
                  A learning platform for blog writers and content creators made
                  in a friendly and welcoming way with gamification elements.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="col-lg-7 col-md-12 col-sm-12 mb-4">
          <h3>[Low-Fidelity Prototype ]</h3>

          <img
            src="/elearning/low-fi-learning.png"
            alt="e-learning platform homepage low-fidelity prototype"
            className="img-fluid"
            loading="lazy"
          />
        </section>

        <section className="col-lg-7 col-md-12 col-sm-12 mb-4">
          <h3>[Look And Feel]</h3>
          <div className="mb-4">
            <h4>Color Palette</h4>
            <img
              src="/elearning/colors-elearning.png"
              alt="color palette"
              className="img-fluid"
              loading="lazy"
            />
          </div>
          <p className="my-2">Dominant color - purple- 60%</p>
          <p className="my-2">Secondary color - beige - 30%</p>
          <p className="my-2">Accent color - yellow/peach - 10%</p>

          <div>
            <h4>Color Choice</h4>
            <div>
              <ul style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                <li>
                  The main color is purple and its darker and lighter shades. It
                  is a vibrant color associated with inspiration, imagination
                  and wisdom.
                </li>
                <li>
                  Beige creates a calm and relaxing atmosphere and warms up
                  otherwise a bright and palette. Beige goes well in combination
                  with any other color which can be best applied for video
                  content sections.
                </li>
                <li>
                  Yellow color brings energy, vitality and optimist which can
                  make the platform more enjoyable and fun.
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-4">
            <h4>Typography</h4>
            <img
              src="/elearning/StarryCakes.png"
              alt="StarryCakes font"
              className="img-fluid"
              style={{ maxHeight: "48px" }}
              loading="lazy"
            />
            <p className="my-4">
              A whimsical font primarily used as a display font beacuse it is
              quite hard to process big chunks of text. Nonetheless it sets a
              tone.
            </p>
            <img
              src="/elearning/K2D.png"
              alt="K2D font"
              className="img-fluid"
              style={{ maxHeight: "32px" }}
              loading="lazy"
            />
            <p className="my-4">
              Is a clean-cut font that was used primarily for information
              messages and numerical data.
            </p>
            <img
              src="/elearning/Karla.png"
              alt="Karla font"
              className="img-fluid"
              style={{ maxHeight: "24px" }}
              loading="lazy"
            />
            <p className="my-4">
              An easily readable font that reflects the roundish lines in the
              logo.
            </p>
          </div>
        </section>
        <section className="col-lg-7 col-md-12 col-sm-12 mb-4">
          <h3>[Sections]</h3>
          <div className="my-4">
            <h4>Header</h4>
            <p>
              The header section has 3 CTAs and an enticing video to introduce
              the course and quickly join it.
            </p>
            <h4>Content Section</h4>
            <ul style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
              <li>
                The first 3 sections give an overview of benefits of joining the
                course and prerequisites needed.
              </li>
              <li>
                Next section has a course contents with recommended paths with
                agenda and points earned during it.
              </li>
              <li>
                The last section includes additional courses that could be of
                interest to the course participants.
              </li>
            </ul>
          </div>
        </section>
        <section className="col-lg-7 col-md-12 col-sm-12 mb-4">
          <h3>[High-Fidelity Prototype ]</h3>
          <img
            src="/elearning/elearning-hi-fi.png"
            alt="elearning platform homepage high-fidelity prototype"
            className="img-fluid"
            loading="lazy"
          />
        </section>
        <section className="text-center">
          <NavLink to="/" className="nav-link">
            <span>&larr;</span> Back Home
          </NavLink>
        </section>
      </div>
    </div>
  );
};

export default ELearningPage;
