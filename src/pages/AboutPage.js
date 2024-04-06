import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const AboutPage = () => {
  const [underlineActive, setUnderlineActive] = useState(false);

  useEffect(() => {
    // Activate underline animation on component mount
    setUnderlineActive(true);
  }, []);

  return (
    <main>
      <div className="container-sm">
        <h2 style={{ margin: "4rem 0 2rem 0" }} className="underline-animation">
          About Me{" "}
          <span
            className={`underline-heading ${
              underlineActive ? "animate-underline" : ""
            }`}
          ></span>
        </h2>
        <section>
          <article>
            <div className="row">
              <div className="col-lg-5 col-md-12 col-sm-12 mb-4">
                <p>
                  I decided to change careers because I found the technical side
                  of development really interesting. I started with VBA and also
                  got into UX design on the side, which I enjoyed. This got me
                  even more interested, so I started learning more and working
                  on my own projects in the field.
                </p>
                <div className="d-flex my-4">
                  <div className="circle-tag">
                    <p>EN</p>
                  </div>
                  <div className="circle-tag">
                    <p>DE</p>
                  </div>
                  <div className="circle-tag">
                    <p>RU</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-1 d-none d-md-block"></div>
              <div className="col-lg-6 col-md-12 col-sm-12 mb-4">
                <img
                  src="/puzzles.png"
                  alt="4 puzzles pieces"
                  style={{ maxHeight: "200px" }}
                  loading="lazy"
                />
              </div>
            </div>
          </article>
        </section>

        <section>
          <h3>[skills]</h3>
          <div className="row skills-group">
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4 ">
              <h5>Front-end</h5>
              <div className="tag-container d-flex flex-wrap">
                <div className="tag">JavaScript</div>
                <div className="tag">React</div>
                <div className="tag">Redux</div>
                <div className="tag">React Router</div>
                <div className="tag">Bootstrap</div>
                <div className="tag">SASS</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <h5>Design</h5>
              <div className="tag-container d-flex flex-wrap">
                <div className="tag">Figma</div>
                <div className="tag">Adobe XD</div>
                <div className="tag">Webflow</div>
                <div className="tag">Adobe Photoshop</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <h5>Back-end</h5>
              <div className="tag-container d-flex flex-wrap">
                <div className="tag">NodeJS</div>
                <div className="tag">Express</div>
                <div className="tag">MongoDB</div>
                <div className="tag">JSON Web Tokens</div>
                <div className="tag">External API</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <h5>Project management</h5>
              <div className="tag-container d-flex flex-wrap">
                <div className="tag">Jira</div>
                <div className="tag">Confluence</div>
                <div className="tag">Trello</div>
                <div className="tag">Miro</div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h3>[education]</h3>
          <div className="row ">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 ">
              <div className="tag-container d-flex flex-column dark-bg-card">
                <h4>FullStack - Helsinki University</h4>
                <p>
                  NodeJS, Express, Testing, User Administration, Redux, React
                  Router, Deployment
                </p>
                <div className="btn-container-wrapper my-4">
                  <div className="btn-container">
                    <NavLink
                      to="https://fullstackopen.com/en/about"
                      target="_blank"
                    >
                      <button className="btn-primary btn-md main-btn">
                        See Course
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 ">
              <div className="tag-container d-flex  flex-column dark-bg-card">
                <h4>Udemy - Javascript</h4>
                <p>
                  JavaScript Basics, Dom Manipulation, ES6, Expernal APIs, Fetch
                </p>
                <div className="btn-container-wrapper my-4">
                  <div className="btn-container">
                    <NavLink
                      to="https://www.udemy.com/course/javascript-tutorial-for-beginners-w/?couponCode=ACCAGE0923"
                      target="_blank"
                    >
                      <button className="btn-primary btn-md main-btn">
                        See Course
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="tag-container d-flex flex-column dark-bg-card">
                <h4>Codecademy - React</h4>
                <p>React Basics, Components, Hooks, Props, React Forms</p>
                <div className="btn-container-wrapper my-4">
                  <div className="btn-container">
                    <NavLink
                      to="https://www.codecademy.com/learn/react-101"
                      target="_blank"
                    >
                      <button className="btn-primary btn-md main-btn">
                        See Course
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 ">
              <div className="tag-container d-flex flex-column dark-bg-card">
                <h4>Scrimba - React</h4>
                <p>Conditional Rendering, Local Storage, Destructuring</p>
                <div className="btn-container-wrapper my-4">
                  <div className="btn-container">
                    <NavLink
                      to="https://scrimba.com/learn/learnreact"
                      target="_blank"
                    >
                      <button className="btn-primary btn-md main-btn">
                        See Course
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 ">
              <div className="tag-container d-flex  flex-column dark-bg-card">
                <h4>FreecodeCamp - Javascript, Responsive design</h4>
                <p>Grid, Flexbox, Accessibility, Pseudo Selectors</p>
                <div className="btn-container-wrapper my-4">
                  <div className="btn-container">
                    <NavLink
                      to="https://www.freecodecamp.org/learn/2022/responsive-web-design/"
                      target="_blank"
                    >
                      <button className="btn-primary btn-md main-btn">
                        See Course
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="tag-container d-flex flex-column dark-bg-card">
                <h4>The Interaction Design Foundation</h4>
                <p>Design Thinking, Research Methods, Usability</p>
                <div className="btn-container-wrapper my-4">
                  <div className="btn-container">
                    <NavLink
                      to="https://www.interaction-design.org/courses"
                      target="_blank"
                    >
                      <button className="btn-primary btn-md main-btn">
                        See Course
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h3>[work experience]</h3>
          <article className="work-section">
            <h4>Junior Finance Manager</h4>
            <p className="mb-3">
              <span style={{ color: "#3D7DCA" }}>HomeToGo GmbH</span>
              <span className="yellow-dot">•</span>
              <span style={{ fontStyle: "italic" }}>05.2022 - onwards </span>
            </p>
            <ul>
              <li>
                Collaborating closely with the development team to automate
                invoicing processes
              </li>
              <li>
                Automating reports using VBA for efficient data analysis and
                presentation
              </li>
              <li>
                Handling invoicing for strategic partners, channel managers, and
                property managers
              </li>
              <li>
                Improving efficiency within our in-house ERP system by
                streamlining workflows
              </li>
            </ul>
          </article>
          <article className="work-section">
            <h4>freelancer UX/UI</h4>
            <p className="mb-3">
              <span style={{ color: "#3D7DCA" }}>Feverr</span>
              <span className="yellow-dot">•</span>
              <span style={{ fontStyle: "italic" }}>08.2021 - 10.2022 </span>
            </p>
            <ul>
              <li>
                Enhanced the web app in line with established design guidelines
              </li>
              <li>Developing solutions to usability problems</li>
              <li>
                Defining user needs and requirements, mapping out IA and
                creating user flows
              </li>{" "}
              <li>
                Developed low- and high-fidelity prototypes, along with
                constructing an atomic design system
              </li>
            </ul>
          </article>
          <article className="work-section">
            <h4>bookkeeper in donation management</h4>
            <p className="mb-3">
              <span style={{ color: "#3D7DCA" }}>WWF Deutschland</span>
              <span className="yellow-dot">•</span>
              <span style={{ fontStyle: "italic" }}>10.2019 - 04.2022 </span>
            </p>
            <ul>
              <li>
                Reconciling bank statements and matching donations with
                corresponding records
              </li>
              <li>Managed the issuance of donation receipts</li>
            </ul>
          </article>
          <article className="work-section">
            <h4>claim manager in international finance</h4>
            <p className="mb-3">
              <span style={{ color: "#3D7DCA" }}>Zalando SE</span>
              <span className="yellow-dot">•</span>
              <span style={{ fontStyle: "italic" }}>07.2016 - 09.2019 </span>
            </p>
            <ul>
              <li>
                Managed interactions between international suppliers, buyers,
                and accounting for defective deliveries
              </li>
              <li>
                Coordinated with accounting to address unpaid invoices promptly
              </li>
            </ul>
          </article>
          <article className="work-section">
            <h4>teacher and project coordinator</h4>
            <p className="mb-3">
              <span style={{ color: "#3D7DCA" }}>
                Kohtla-Järve Ahtme Gümnaasium
              </span>
              <span className="yellow-dot">•</span>
              <span style={{ fontStyle: "italic" }}>09.2010 - 08.2015 </span>
            </p>
            <ul>
              <li>Teaching in grades 4 – 12</li>
              <li>Managing a two-year EU educational project</li>
            </ul>
          </article>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
