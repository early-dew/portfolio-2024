import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const MarketingAgencyPage = () => {
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
          src="/marketing-agency/agency.png"
          alt="temp job agency cover"
          loading="lazy"
        />
      </header>
      <div className="container-sm">
        <h2 style={{ margin: "0 0 2rem 0" }} className="underline-animation">
          Digital Marketing Agency{" "}
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
                  A landing page for a middle-sized digital marketing agency for
                  desktop and mobile devices.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="col-lg-7 col-md-12 col-sm-12 mb-4">
          <h3>[Low-Fidelity Prototype ]</h3>

          <img
            src="/marketing-agency/agency-lowfi.png"
            alt="digital marketing agency homepage low-fidelity prototype"
            className="img-fluid"
            loading="lazy"
          />
        </section>

        <section className="col-lg-7 col-md-12 col-sm-12 mb-4">
          <h3>[Look And Feel]</h3>
          <div className="mb-4">
            <h4>Color Palette</h4>
            <p className="mb-4">
              After checking other digital marketing websites, I found out that
              they follow a certain industry-specific color palette - high
              contrast colors (black, dark blue) and light grey background,
              including bright accent colors - red, pink, orange
            </p>
            <img
              src="/marketing-agency/colors.png"
              alt="color palette"
              className="img-fluid"
              loading="lazy"
            />
          </div>
          <div>
            <h4>Color Choice</h4>
            <div>
              <ul style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                <li>
                  I went for the dark blue color which indicates loyalty,
                  competence, trust to highlight that the agency is a stable and
                  trustworthy partner
                </li>
                <li>
                  Orange stands for success, bravery and confidence which are a
                  vitally important for a creative marketing platform
                </li>
                <li>
                  Dominant color - light grey - 60%, secondary color - dark blue
                  - 30%, accent color - orange - 10%
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-4">
            <h4>Typography</h4>
            <p className="mb-4">
              Main typeface is Montserrat as it suits well to the brand logo. It
              is just as roundish and supports the brand identity very well
            </p>
          </div>
        </section>
        <section className="col-lg-7 col-md-12 col-sm-12 mb-4">
          <h3>[Sections]</h3>
          <div className="my-4">
            <h4>Header</h4>
            <p>
              The header showcases what the company does and how to contact it
              (2 CTAs to encourage visitors to send a request to the company).
            </p>
            <h4>Content Section</h4>
            <ul style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
              <li>
                Gives a deeper overview of what services the agency provides and
                how they work on the projects
              </li>
              <li>
                The carousel with case studies and improved KPIs shows how much
                customers benefit from the company’s services
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
            src="/marketing-agency/agency-3screens.png"
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

export default MarketingAgencyPage;
