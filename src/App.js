import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavbarMenu from "./components/NavbarMenu";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import NftPage from "./pages/NftPage";
import TempJobPage from "./pages/TempJobPage";
import RamenPage from "./pages/RamenPage";
import MarketingAgencyPage from "./pages/MarketingAgencyPage";
import HairStudioPage from "./pages/HairStudioPage";
import ELearningPage from "./pages/ELearningPage";
import VoiceNotes from "./pages/VoiceNotes";
import KeepWords from "./pages/KeepWords";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/about"
            element={
              <ScrollToTop>
                <AboutPage />
              </ScrollToTop>
            }
          />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route
            path="/keep-words"
            element={
              <ScrollToTop>
                <KeepWords />
              </ScrollToTop>
            }
          />
          <Route
            path="/voice-notes"
            element={
              <ScrollToTop>
                <VoiceNotes />
              </ScrollToTop>
            }
          />
          <Route
            path="/nft-project-page"
            element={
              <ScrollToTop>
                <NftPage />
              </ScrollToTop>
            }
          />
          <Route
            path="/temp-job-agency-page"
            element={
              <ScrollToTop>
                <TempJobPage />
              </ScrollToTop>
            }
          />
          <Route
            path="/ramen-restaurant-page"
            element={
              <ScrollToTop>
                <RamenPage />
              </ScrollToTop>
            }
          />
          <Route
            path="/marketing-agency-page"
            element={
              <ScrollToTop>
                <MarketingAgencyPage />
              </ScrollToTop>
            }
          />
          <Route
            path="/hair-studio-page"
            element={
              <ScrollToTop>
                <HairStudioPage />
              </ScrollToTop>
            }
          />
          <Route
            path="/elearning-platform-page"
            element={
              <ScrollToTop>
                <ELearningPage />
              </ScrollToTop>
            }
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
