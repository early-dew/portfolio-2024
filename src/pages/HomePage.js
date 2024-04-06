import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const handleScrollButtonClick = () => {
  const developerProjectsHeading = document.getElementById(
    "developerProjectsHeading"
  );
  if (developerProjectsHeading) {
    // Scroll smoothly to the top position of the heading
    window.scrollTo({
      top: developerProjectsHeading.offsetTop,
      behavior: "smooth",
    });
  }
};

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <header className="homepage-header d-flex align-items-center justify-content-center flex-column">
        <h1 className="mb-4">Coding with Usability</h1>
        <h2>Bringing Ideas to Life,</h2>
        <div className="d-flex align-items-center animated-text">
          <span
            style={{
              color: "#FFDA27",
              fontWeight: "bold",
              fontSize: "2.5rem",
              paddingRight: "16px",
            }}
          >
            ={" "}
          </span>{" "}
          <h2>Line by Line</h2>{" "}
          <span
            style={{
              color: "#FFDA27",
              fontWeight: "bold",
              fontSize: "2.5rem",
              paddingLeft: "16px",
            }}
          >
            ={" "}
          </span>
        </div>
        <div style={{ marginTop: "8%" }}>
          <button onClick={handleScrollButtonClick} className="scroll-button">
            View my projects
            <div
              style={{ textAlign: "center", marginTop: "20px" }}
              className="animated-text"
            >
              <p className="move-bottom">&darr;</p>
            </div>
          </button>
        </div>
      </header>
      <div className="container-sm">
        <section>
          <h3 id="developerProjectsHeading">[Developer Projects]</h3>
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="project-card">
                <div className="image-container">
                  <img
                    src="/keep-words/KeepWords-cover.png"
                    alt="Project KeepWords"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="thin-h4">KeepWords</h4>
                  <div className="subtitle-container">
                    <div className="subtitle-line"></div>
                    <p className="subtitle">Vocabulary Training App</p>
                  </div>
                  <p>
                    KeepWords is a dynamic language learning app. It is a great
                    tool whether you're looking to pick up a new language or
                    master one you already know.
                  </p>
                  <div className="d-flex">
                    <div className="tag tag-margin-lg">Frontend</div>
                    <div className="tag tag-margin-lg">Backend</div>
                  </div>
                  <NavLink to="/keep-words">
                    <button className="btn-primary btn-md main-btn">
                      See more
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="project-card">
                <img
                  src="/voice-notes/VoiceNotes-cover.png"
                  alt="Project Voice Notes"
                  loading="lazy"
                />
                <div>
                  <h4 className="thin-h4">Voice Notes</h4>
                  <div className="subtitle-container">
                    <div className="subtitle-line"></div>
                    <p className="subtitle">Voice To-Do App</p>
                  </div>
                  <p>
                    KeepWords is a dynamic language learning app. It is a great
                    tool whether you're looking to pick up a new language or
                    master one you already know.
                  </p>

                  <div className="d-flex">
                    <div className="tag tag-margin-lg">Frontend</div>
                  </div>
                  <NavLink to="/voice-notes">
                    <button className="btn-primary btn-md main-btn">
                      See more
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3>[UI Projects]</h3>
          <div className="row ui-projects-grid">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 ui-project-card ">
              <NavLink to="/nft-project-page">
                <div className="zoom-effect">
                  <img
                    src="/nft/nft.png"
                    alt="Project NFT"
                    className="custom-img"
                    loading="lazy"
                  />
                </div>
              </NavLink>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 ui-project-card">
              <NavLink to="/temp-job-agency-page">
                <div className="zoom-effect">
                  <img
                    src="/temp-job/temp-agency.png"
                    alt="Project 2"
                    className="custom-img"
                    loading="lazy"
                  />
                </div>
              </NavLink>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <NavLink to="/ramen-restaurant-page">
                <div className="zoom-effect">
                  <img
                    src="/ramen/ramen-cover.png"
                    alt="Project 2"
                    className="custom-img"
                    loading="lazy"
                  />
                </div>
              </NavLink>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <NavLink to="/marketing-agency-page">
                <div className="zoom-effect">
                  <img
                    src="/marketing-agency/agency.png"
                    alt="Project 2"
                    className="custom-img"
                    loading="lazy"
                  />
                </div>
              </NavLink>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <NavLink to="/hair-studio-page">
                <div className="zoom-effect">
                  <img
                    src="/hair-studio/hair salon.png"
                    alt="hair studio project"
                    className="custom-img"
                    loading="lazy"
                  />
                </div>
              </NavLink>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <NavLink to="/elearning-platform-page">
                <div className="zoom-effect">
                  <img
                    src="/elearning/elearning.png"
                    alt="elearning platform project"
                    className="custom-img"
                    loading="lazy"
                  />
                </div>
              </NavLink>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
