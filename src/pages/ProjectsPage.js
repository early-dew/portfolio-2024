import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const ProjectsPage = () => {
  const [underlineActive, setUnderlineActive] = useState(false);

  useEffect(() => {
    // Activate underline animation on component mount
    setUnderlineActive(true);
  }, []);

  return (
    <main>
      <div className="container-sm">
        <h2 style={{ margin: "4rem 0 2rem 0" }} className="underline-animation">
          Projects Page{" "}
          <span
            className={`underline-heading ${
              underlineActive ? "animate-underline" : ""
            }`}
          ></span>
        </h2>
        <section>
          <h3>Developer Projects</h3>
          <article
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "2rem",
            }}
          >
            <h5>
              {" "}
              <b>KeepWords</b> - a language learning app
            </h5>
            <NavLink to="/keep-words">
              <button
                className="btn-primary btn-md main-btn"
                style={{ margin: "0 0 0 1em" }}
              >
                See more
              </button>
            </NavLink>
          </article>
          <article
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <h5>
              {" "}
              <b>VoiceNotes</b> - a voice to-do list
            </h5>
            <NavLink to="/voice-notes">
              <button
                className="btn-primary btn-md main-btn"
                style={{ margin: "0 0 0 1em" }}
              >
                See more
              </button>
            </NavLink>
          </article>
        </section>
        <section>
          <h3>UI Projects</h3>
          <article
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "2rem",
            }}
          >
            <h5>
              {" "}
              <b>NFT Project</b> - an NFT marketplace
            </h5>
            <NavLink to="/nft-project-page">
              <button
                className="btn-primary btn-md main-btn"
                style={{ margin: "0 0 0 1em" }}
              >
                See more
              </button>
            </NavLink>
          </article>
          <article
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "2rem",
            }}
          >
            <h5>
              {" "}
              <b>Job Portal</b> - a temporary work agency
            </h5>
            <NavLink to="/temp-job-agency-page">
              <button
                className="btn-primary btn-md main-btn"
                style={{ margin: "0 0 0 1em" }}
              >
                See more
              </button>
            </NavLink>
          </article>
          <article
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "2rem",
            }}
          >
            <h5>
              {" "}
              <b>Ramen Restaurant</b> - a small restaturant landing page
            </h5>
            <NavLink to="/ramen-restaurant-page">
              <button
                className="btn-primary btn-md main-btn"
                style={{ margin: "0 0 0 1em" }}
              >
                See more
              </button>
            </NavLink>
          </article>
          <article
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "2rem",
            }}
          >
            <h5>
              {" "}
              <b>Marketing Agency</b> - a middle-sized digital marketing agency
            </h5>
            <NavLink to="/marketing-agency-page">
              <button
                className="btn-primary btn-md main-btn"
                style={{ margin: "0 0 0 1em" }}
              >
                See more
              </button>
            </NavLink>
          </article>
          <article
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "2rem",
            }}
          >
            <h5>
              {" "}
              <b>Hair Studio</b> - a small local hair studio
            </h5>
            <NavLink to="/hair-studio-page">
              <button
                className="btn-primary btn-md main-btn"
                style={{ margin: "0 0 0 1em" }}
              >
                See more
              </button>
            </NavLink>
          </article>
          <article
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "2rem",
            }}
          >
            <h5>
              {" "}
              <b>E-Learning Platform</b> - a learning platform for blog writers
              and content creators
            </h5>
            <NavLink to="/marketing-agency-page">
              <button
                className="btn-primary btn-md main-btn"
                style={{ margin: "0 0 0 1em" }}
              >
                See more
              </button>
            </NavLink>
          </article>
        </section>
      </div>
    </main>
  );
};

export default ProjectsPage;
