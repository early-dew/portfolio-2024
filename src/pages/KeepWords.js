import { useEffect, useState } from "react";
import ScrollToTop from "../components/ScrollToTop";
import { Carousel } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

const KeepWords = () => {
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
          src="/keep-words/KeepWords-banner.png"
          alt="temp job agency cover"
          loading="lazy"
        />
      </header>
      <div className="container-sm">
        <h2 style={{ margin: "0 0 2rem 0" }} className="underline-animation">
          KeepWords{" "}
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
                KeepWords is an interactive vocabulary training app designed to
                help users learn new languages or reinforce existing ones. Its
                main focus is on short, manageable learning sessions.
              </p>
              <p className="mt-4">
                <b>What was used for the project implementation:</b>
              </p>
              <div className="my-3">
                <p
                  style={{
                    fontWeight: "700",
                    color: "#3d7dca",
                  }}
                >
                  Frontend
                </p>
                <div className="tag-container">
                  <div className="tag">React</div>
                  <div className="tag">Redux</div>
                  <div className="tag">Redux Thunk</div>
                  <div className="tag">SASS</div>
                  <div className="tag">Bootstrap</div>
                  <div className="tag">date-fns</div>
                  <div className="tag">React Router</div>
                  <div className="tag">Jest</div>
                  <div className="tag">DOMPurify</div>
                </div>
              </div>
              <div className="my-3">
                <p
                  style={{
                    fontWeight: "700",
                    color: "#3d7dca",
                  }}
                >
                  Backend
                </p>
                <div className="tag-container">
                  <div className="tag">Node.js</div>
                  <div className="tag">Express</div>
                  <div className="tag">RESTful APIs</div>
                  <div className="tag">JSON Web Token</div>
                  <div className="tag">Axios</div>
                  <div className="tag">MongoDB</div>
                  <div className="tag">OpenAI API</div>
                  <div className="tag">Postman</div>
                  <div className="tag">Hosting: Render</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="col-lg-7 col-md-12 col-sm-12 mb-4">
          <h3>[App Features]</h3>
          <h4>Vocaluary list</h4>
          <p className="my-2">
            {" "}
            Users can create cards with simple words or specific phrases in
            different languages
          </p>
          <h4>Training</h4>
          <p className="my-2">
            {" "}
            Ability to train vocabulary with diverse and dynamic sentences and
            translations
          </p>
          <h4>Quizzes</h4>
          <p className="my-2">
            {" "}
            Vocabulary memorization is ensured by repetition of vocabulary in 2
            types of quizzes
          </p>
          <h4>Progress</h4>
          <p className="my-2">
            {" "}
            Calendar, badges and achievement board help track one's progress
          </p>
        </section>
        <section className="col-lg-7 col-md-12 col-sm-12 mb-4">
          <h3>[Look & Feel]</h3>
          <div className="my-4">
            <p>
              <ul style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                <li>
                  The app features a minimalist design characterized by light
                  colors and high-contrast text, set against a light background.
                </li>
                <li>
                  Lottie animations are used throughout the interface, providing
                  dynamic elements.
                </li>
                <li>
                  Visual depth is subtly added using effects such as spread and
                  blurred shadow drops.
                </li>
                <li>
                  Animations on the homepage assist users and highlight
                  important features.
                </li>
              </ul>
            </p>
          </div>
          <img
            src="/keep-words/keepwords-dashboard.png"
            alt="voice notes homepage showcase"
            className="img-fluid"
            style={{ border: "solid 1px rgba(0,0,0,0.05)" }}
            loading="lazy"
          />
        </section>
        <section className="col-lg-7 col-md-12 col-sm-12 mb-4">
          <h3>[Takeaways]</h3>
          <p className="my-4">
            <b>Bootstrap & SASS Styling</b>: Bootstrap was a lifesaver for
            styling, making it easy to create a polished look that worked well
            across different devices. However, I had to be careful when
            targeting its default classes. To keep the styles organized and
            manageable, I turned to SASS, which allowed me to structure the
            stylesheets more efficiently.
          </p>
          <p className="my-4">
            <b>Library Utilization</b>: To save time and effort, I took
            advantage of libraries like date-fns, react-datepicker, and
            react-select. While they helped speed up development, I also had to
            navigate through some challenges, like dealing with outdated or
            poorly documented libraries.
          </p>
          <p className="my-4">
            <b>Learning on the Go</b>: Throughout the project, I embraced a
            mindset of continuous learning, always ready to pick up new tools
            and concepts on the fly – like diving into React Router to enhance
            my project's functionality.
          </p>
          <p className="my-4">
            <b>Code Refactoring Challenges:</b>: Before diving into development,
            it's crucial to thoroughly plan the project architecture. This
            includes designing UI layouts, creating user flows, and outlining
            interactions and functionalities.
          </p>
        </section>
        <section className="col-lg-7 col-md-12 col-sm-12 mb-4">
          <h3>[More Information]</h3>
          <div className="my-4">
            <p>Website link </p>
            <NavLink
              to="https://keepwords.onrender.com"
              className="nav-link"
              target="_blank"
            >
              <p style={{ color: "#3873ba", fontWeight: "bold" }}>
                https://keepwords.onrender.com
              </p>
            </NavLink>
          </div>
          <div className="my-4">
            <p>Project source code</p>{" "}
            <NavLink
              to="https://github.com/early-dew/keepWords/tree/master"
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

export default KeepWords;
