import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const HairStudioPage = () => {
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
          src="/hair-studio/hair salon.png"
          alt="hair studio cover"
          loading="lazy"
        />
      </header>
      <div className="container-sm">
        <h2 style={{ margin: "0 0 2rem 0" }} className="underline-animation">
          Hair Studio{" "}
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
                  A small local hair studio that provides its clients with
                  friendly professional services and quality beauty products.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="col-lg-7 col-md-12 col-sm-12 mb-4">
          <h3>[Low-Fidelity Prototype ]</h3>

          <img
            src="/hair-studio/salon-wireframe.png"
            alt="digital marketing agency homepage low-fidelity prototype"
            className="img-fluid"
          />
        </section>

        <section className="col-lg-7 col-md-12 col-sm-12 mb-4">
          <h3>[Look And Feel]</h3>
          <div className="mb-4">
            <h4>Color Palette</h4>
            <img
              src="/hair-studio/color-palette.png"
              alt="color palette"
              className="img-fluid"
            />
          </div>
          <p className="my-2">Dominant color - off white - 60%</p>
          <p className="my-2">Secondary color - dark green - 30%</p>
          <p className="my-2">Accent color - magenta - 10%</p>

          <div>
            <h4>Color Choice</h4>
            <div>
              <ul style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                <li>
                  The background color is of off-white which gives the website a
                  cosy and vintage look
                </li>
                <li>
                  Dark green stands for nature and freshness. Hair salon is a
                  place where people can relax, get a new hair style and improve
                  their mood altogether.
                </li>
                <li>
                  Magenta is a harmonic composition of red and violett. It
                  brings the harmony to the designs and makes the most
                  importnant elements to stand out
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-4">
            <h4>Typography</h4>
            <img
              src="/hair-studio/Italianno.png"
              alt="Italianno font"
              className="img-fluid"
              loading="lazy"
            />
            <p className="my-4">
              The elegant calligraphic font has a warm and welcoming vibe to it.
            </p>
            <img
              src="/hair-studio/Sansation.png"
              alt="Sansation font"
              className="img-fluid"
              loading="lazy"
            />
            <p className="my-4">
              It is a clean wide font with a character. It perfectly aligns with
              straigns lines of the company logo.
            </p>
          </div>
        </section>
        <section className="col-lg-7 col-md-12 col-sm-12 mb-4">
          <h3>[Sections]</h3>
          <div className="my-4">
            <h4>Header</h4>
            <p>
              The header image with hands pointing in the direction of the CTA
              makes the button the center of attention and entices visitors to
              book an appointment.
            </p>
            <h4>Content Section</h4>
            <ul style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
              <li>
                Auto-scrolled gallery slider showcases what services the hair
                studio provides with the most popular services in the begining.
              </li>
              <li>
                A huge image with the hair stylists introduces the team in a
                friendly and welcoming way.
              </li>
              <li>
                The last section encourages visitors to make an appointment and
                provides with details on how to find the studio.
              </li>
              <li>
                The contact form invites visitors to quickly send a request with
                all essential details
              </li>
            </ul>
          </div>
        </section>
        <section className="col-lg-7 col-md-12 col-sm-12 mb-4">
          <h3>[High-Fidelity Prototype ]</h3>
          <img
            src="/hair-studio/hi-fi-studio.png"
            alt="digital marketing agency homepage high-fidelity prototype"
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

export default HairStudioPage;
