import { useEffect, useState } from "react";
import ScrollToTop from "../components/ScrollToTop";
import { Carousel } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

const NftPage = () => {
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
          src="/nft/nft.png"
          alt="ntf cover"
          loading="lazy"
        />
      </header>
      <div className="container-sm">
        <h2 style={{ margin: "0 0 2rem 0" }} className="underline-animation">
          NFT Project{" "}
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
              <h4>Scope</h4>
              <div>
                <ul style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                  <li>A web application</li>
                  <li>An NFT marketplace website</li>
                  <li>A company website</li>
                </ul>
              </div>
              <div>
                <h4>Challenge</h4>
                <p>
                  Create a modern secure Solana marketplace that incorporates
                  new and/or currently best existing solutions with the main
                  focus on easy search and navigation.
                </p>
              </div>
              <div>
                <h4>Solution</h4>
                <p>
                  Responsive web application, integrated with website, which
                  enables a seamless and unified user experience across
                  platforms.
                </p>
              </div>
            </div>
            <div className="col-lg-1 d-none d-md-block"></div>
            <div className="col-lg-5 col-md-12 col-sm-12 mb-4">
              <img
                src="/nft/nft-homepage.png"
                alt="nft homepage"
                className="image-400"
                loading="lazy"
              />
            </div>
          </div>
        </section>
        <section className="col-lg-7 col-md-12 col-sm-12 mb-4">
          <h3>[Research & Discovery]</h3>
          <div className="my-4">
            <p>
              When I joined the project, there were already numerous personas
              established. I streamlined them into two primary target groups:
              digital art creators/resellers and NFT collectors. This
              simplification proved beneficial in crafting user journeys
              tailored to each group.
            </p>
            <p className="my-4">
              To gain insights into the landscape and guide our design process,
              I conducted an analysis of several main competitors' websites,
              focusing on their appearance, structure, and functionality.
            </p>
            <p className="my-4">
              While we drew inspiration from various platforms, three of them
              served as our primary points of reference due to their effective
              filtering solutions, appealing aesthetics, and user-friendly
              onboarding processes, all of which resonated well with our goals
              and the needs of our target audience.
            </p>
            <h4>Sitemap</h4>
            <p className="my-4">
              After brainstorming, I developed a sitemap aimed at providing
              users easy access to the platform's key functions and information
              directly from the homepage. Centralizing main assets within a few
              clicks could potentially enhance user engagement and overall
              experience.
            </p>
            <h4>Red Route Map</h4>
            <p className="my-4">
              Additionally, I mapped out the most critical user journeys,
              informed by further analysis of competitor websites. This
              iterative process allowed us to refine our approach and ensure
              alignment with industry standards and user expectations.
            </p>
          </div>
        </section>
        <section className="col-lg-7 col-md-12 col-sm-12 mb-4">
          <h3>[Information Architechture]</h3>
          <h4>User Flow</h4>
          <p className="my-4">
            Based on the sequence of user actions detailed in the user journeys
            and the primary functions prioritized via the Red Route, I developed
            flow diagrams for the main user flows. These diagrams served as the
            basis for creating low-fidelity prototypes and effectively
            communicated my design decisions to the team.
          </p>
        </section>
        <section className="col-lg-7 col-md-12 col-sm-12 mb-4">
          <h3>[Design & QA]</h3>
          <h4>Wireframes & Prototype</h4>
          <p className="my-4">
            Once we settled on the overall structure of the platform, I started
            working on wireframes for both desktop and mobile interfaces.
          </p>
          <p className="my-4">
            Given the absence of a designated budget for user testing, I led the
            team in creating a usability checklist for conducting UX
            walkthroughs. These walkthroughs helped us thoroughly evaluate the
            main user flows and conduct heuristic evaluations, which revealed
            issues related to design consistency, system feedback, and
            accessibility. Addressing these concerns early on ensured smoother
            handover of designs to the developers.
          </p>
          <p className="my-4">
            Together with the product manager and the designer, I reviewed the
            implementation of screen designs within the testing environment,
            providing timely feedback to the developers regarding any
            discrepancies observed.
          </p>
        </section>
        <section className="col-lg-7 col-md-12 col-sm-12 mb-4">
          <h3>[Takeaways]</h3>
          <p className="my-4">
            Understanding a completely new field of knowledge can indeed be
            daunting, but the rewards are immense once you grasp the basics.
            Whether it's mastering new software or gaining new insights about
            Web3 technologies, the ability to learn rapidly is essential.
            However, it's the combination of a can-do attitude and a growth
            mindset, coupled with the support of passionate colleagues, that
            truly empowers you to push beyond your limits.
          </p>
          <p className="my-4">
            One of the most significant challenges I faced was overcoming the
            absence of user research and testing. Had we gathered first-hand
            data during the research phase, we could have tailored the platform
            more precisely to meet the needs of our end-users. Unfortunately,
            our approach prioritized delivery over comprehensive user insights.
          </p>
        </section>
        <section>
          <div className="d-flex justify-content-start ">
            <div className="gallery">
              <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                interval={3000}
              >
                <Carousel.Item>
                  <img
                    className="d-block w-100 gallery-item gallery-item"
                    src="/nft/CategoryPage.png"
                    alt="First slide"
                    loading="lazy"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 gallery-item"
                    src="/nft/CollectionsLandingPage.png"
                    alt="Second slide"
                    style={{ height: "800px", objectFit: "cover" }}
                    loading="lazy"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 gallery-item"
                    src="/nft/DashboardActivity.png"
                    alt="Third slide"
                    style={{ height: "800px", objectFit: "cover" }}
                    loading="lazy"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 gallery-item"
                    src="/nft/ExplorePage.png"
                    alt="Forth slide"
                    style={{ height: "800px", objectFit: "cover" }}
                    loading="lazy"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 gallery-item"
                    src="/nft/UploadCollections.png"
                    alt="Fifth slide"
                    style={{ height: "800px", objectFit: "cover" }}
                    loading="lazy"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
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

export default NftPage;
