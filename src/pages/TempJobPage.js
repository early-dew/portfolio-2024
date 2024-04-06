import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const TempJobPage = () => {
  const [underlineActive, setUnderlineActive] = useState(false);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

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
          src="/temp-job/temp-agency.png"
          alt="temp job agency cover"
          loading="lazy"
        />
      </header>
      <div className="container-sm">
        <h2 style={{ margin: "0 0 2rem 0" }} className="underline-animation">
          Temporary Work Agency{" "}
          <span
            className={`underline-heading ${
              underlineActive ? "animate-underline" : ""
            }`}
          ></span>
        </h2>

        <section>
          <div className="row">
            <h3>[Description]</h3>
            <div className="col-lg-5 col-md-12 col-sm-12 mb-4">
              <div className="mb-4">
                <p>
                  A website redesign of a large temporary work agency based in
                  Germany. The company specializes in connecting skilled
                  blue-collar workers with job opportunities in industries such
                  as <b>construction, manufacturing, and logistics</b>.
                </p>
              </div>
              <div>
                <h4>Brief Summary</h4>
                <div>
                  <ul style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                    <li>Company Field: Temporary Work Agency</li>
                    <li>Region: Germany</li>
                    <li>Challenge: Website-Relaunch</li>
                  </ul>
                </div>
              </div>
              <div>
                <div>
                  <h4>User Groups</h4>
                  <div>
                    <ul style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                      <li>Primary users: Job seekers - male, age 25 - 55</li>
                      <li>
                        Secondary user groups: Students, female job seekers,
                        companies in search of personnel
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1 d-none d-md-block"></div>
            <div className="col-lg-5 col-md-12 col-sm-12 mb-4">
              <img
                src="/temp-job/temporary-agency-desktop.png"
                alt="temp job agency homepgae"
                className="image-400"
                loading="lazy"
              />
            </div>
          </div>
        </section>
        <section className="col-lg-7 col-md-12 col-sm-12 mb-4">
          <h3>[Look And Feel]</h3>
          <div>
            <ul style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
              <li>
                Dynamic patterns that look like building blocks or a ladder
              </li>
              <li>Trustworthy and approachable yet modern</li>
            </ul>
          </div>
          <div>
            <h4>Color Palette</h4>
            <img
              src="/temp-job/temp-agency-colors.png"
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
                  White and dark brown are both quite neutral colors that go
                  well with bright colors
                </li>
                <li>
                  Orange - brand logo color, used together with yellow-green as
                  accent colors
                </li>
                <li>
                  Color contrast: Design decisions were made with the contrast
                  considerations (WCGA AA or AAA)
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
            src="/temp-job/temp-work-hi-fi.png"
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

export default TempJobPage;
