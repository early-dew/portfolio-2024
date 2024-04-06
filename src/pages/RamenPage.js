import { useEffect, useState } from "react";
import ScrollToTop from "../components/ScrollToTop";
import { Carousel } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

const RamenPage = () => {
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
          src="/ramen/ramen-cover.png"
          alt="temp job agency cover"
          loading="lazy"
        />
      </header>
      <div className="container-sm">
        <h2 style={{ margin: "0 0 2rem 0" }} className="underline-animation">
          Ramen Restaurant{" "}
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
                  A website that advertises an authentic Japanese ramen
                  restaurant made with traditional techniques and fresh, quality
                  ingredients.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="col-lg-7 col-md-12 col-sm-12 mb-4">
          <h3>[Look And Feel]</h3>
          <div className="mb-4">
            <h4>Color Palette</h4>
            <img
              src="/ramen/ramen-restaurant-colors.png"
              alt="color palette"
              className="img-fluid"
              loading="lazy"
            />
          </div>
          <p className="my-2">Dominant color - white- 60%</p>
          <p className="my-2">Secondary color - grey - 30%</p>
          <p className="my-2">Accent color - brown red - 10%</p>

          <div>
            <h4>Color Choice</h4>
            <div>
              <ul style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                <li>
                  Silver grey with blue tins gives a cool and fresh vibe. It is
                  a modern dynamic color
                </li>
                <li>
                  Brown red is a wamn and earthly color. It symbolizes
                  traditions. It is a good contrast for the cold and "trendy"
                  grey tones
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="col-lg-7 col-md-12 col-sm-12 mb-4">
          <h3>[Sections]</h3>
          <div className="my-4">
            <p>
              Landing page blocks are ordered according to what users might find
              most relevant on the platform starting with the most important
              blocks first.
            </p>
          </div>
          <img
            src="/ramen/ramen-hi-fi.png"
            alt="temporary work agency homepage showcase"
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

export default RamenPage;
