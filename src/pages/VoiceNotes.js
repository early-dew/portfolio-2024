import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const VoiceNotes = () => {
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
          src="/voice-notes/voice-notes-cover.png"
          alt="temp job agency cover"
          loading="lazy"
        />
      </header>
      <div className="container-sm">
        <h2 style={{ margin: "0 0 2rem 0" }} className="underline-animation">
          Voice Notes{" "}
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
              <p>
                Voice Notes is a productivity application designed to streamline
                note-taking and organization through intuitive voice commands
                and user-friendly features.
              </p>
              <p className="my-4 ">
                <b>Libraries and APIs used in the project:</b>
              </p>
              <div className="tag-container">
                <div className="tag ">React</div>
                <div className="tag ">React Beautiful DND</div>
                <div className="tag ">Web Speech API</div>
                <div className="tag ">Local Storage</div>
              </div>
            </div>
          </div>
        </section>
        <section className="col-lg-7 col-md-12 col-sm-12 mb-4">
          <h3>[App Features]</h3>
          <h4>Note Creation</h4>
          <p className="my-2">
            {" "}
            Users can effortlessly create, edit, and organize their notes using
            voice commands or manual input.
          </p>
          <h4>Categorization</h4>
          <p className="my-2">
            {" "}
            The app allows users to categorize their notes efficiently, with the
            ability to create, edit, and delete categories as needed. Each
            category can be assigned a unique color for easy identification.
          </p>
          <h4>Voice Transcription</h4>
          <p className="my-2">
            {" "}
            The voice transcription feature enables users to dictate their notes
            and category names, which are then converted into text for seamless
            integration.
          </p>
          <h4>Notes Organization</h4>
          <p className="my-2">
            {" "}
            Additionally, users can organize their notes further by rearranging
            them via drag-and-drop functionality.
          </p>
        </section>
        <section className="col-lg-7 col-md-12 col-sm-12 mb-4">
          <h3>[Look & Feel]</h3>
          <div className="my-4">
            <p>
              The app adopts a <b>brutalist aesthetic</b> characterized by bold
              design elements such as bright colors and prominent black borders.
            </p>
          </div>
          <img
            src="/voice-notes/notes-active-listening.png"
            alt="voice notes homepage showcase"
            className="img-fluid"
            style={{ border: "solid 1px rgba(0,0,0,0.05)" }}
            loading="lazy"
          />
        </section>
        <section className="col-lg-7 col-md-12 col-sm-12 mb-4">
          <h3>[Takeaways]</h3>
          <p className="my-4">
            <b>Web Speech API's Compatibility</b>: I learnt that the Web Speech
            API's effectiveness is hindered by its inconsistent support across
            web browsers. Ddevelopers must est speech recognition features to
            address compatibility issues.
          </p>
          <p className="my-4">
            <b>Pseudocode for Complex Functions</b>: Writing pseudocode before
            implementing complex functions provided a clear roadmap, which
            helped to break down the problem into manageable steps.
          </p>
          <p className="my-4">
            <b>Bootstrap Integration Timing</b>: By delaying the integration of
            Bootstrap, I encountered conflicts with existing CSS classes,
            causing inconsistencies in styling. Integrating Bootstrap from the
            start of the project would have ensured a consistent design across
            all parts of the application.
          </p>
        </section>
        <section className="col-lg-7 col-md-12 col-sm-12 mb-4">
          <h3>[More Information]</h3>
          <div className="my-4">
            <p>Website link </p>
            <NavLink
              to="https://my-voice-notes.netlify.app"
              className="nav-link"
              target="_blank"
            >
              <p style={{ color: "#3873ba", fontWeight: "bold" }}>
                https://my-voice-notes.netlify.app
              </p>
            </NavLink>
          </div>
          <div className="my-4">
            <p>Project source code</p>{" "}
            <NavLink
              to="https://github.com/early-dew/voice-notes"
              className="nav-link"
              target="_blank"
            >
              <p style={{ color: "#3873ba", fontWeight: "bold" }}>GitHub</p>
            </NavLink>
          </div>
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

export default VoiceNotes;
