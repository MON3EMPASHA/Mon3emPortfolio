import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./index.css";
import Home from "./Pages/Home";
// import About from "./Pages/About";
import AnimatedBackground from "./components/Background";
import Navbar from "./components/Navbar";
import Portofolio from "./Pages/Portofolio";
import ContactPage from "./Pages/Contact";
// import ProjectDetails from "./components/ProjectDetail";
import ProjectDetailPage from "./Pages/ProjectDetailPage";
import WelcomeScreen from "./Pages/WelcomeScreen";
import { AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import ErrorBoundary from "./components/ErrorBoundary";
import SEO from "./components/SEO";
import SkipToContent from "./components/SkipToContent";

const LandingPage = ({ showWelcome, setShowWelcome }) => {
  // Structured data for the main portfolio page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Abdelmonem Hatem",
    "jobTitle": "Full Stack Developer",
    "description": "Computer Science Student at MSA University and MERN Stack Developer. Explore my portfolio showcasing web development projects and technical expertise.",
    "url": "https://abdelmonem-hatem.netlify.app/",
    "image": "https://i.postimg.cc/1zNsVQBL/portfolio.png",
    "sameAs": [
      "https://github.com/MON3EMPASHA",
      "https://linkedin.com/in/abdelmonem-hatem"
    ],
    "knowsAbout": [
      "MERN Stack",
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "JavaScript",
      "TypeScript",
      "Python",
      "C#",
      "Web Development",
      "Full Stack Development",
      "AI",
      "ML",
      "NLP",
      "Natural Language Processing",
    ],
    "alumniOf": {
      "@type": "Organization",
      "name": "MSA University"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    }
  };

  return (
    <>
      <SEO structuredData={structuredData} />
      <SkipToContent />
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <Navbar />
          <AnimatedBackground />
          <Home />
          <Portofolio />
          <ContactPage />
          <footer>
            <center>
              <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
              <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
                © 2025{" "}
                <a href="https://flowbite.com/" className="hover:underline">
                  MON3EM™
                </a>
                . All Rights Reserved.
              </span>
            </center>
          </footer>
        </>
      )}
    </>
  );
};

// Define propTypes for LandingPage
LandingPage.propTypes = {
  showWelcome: PropTypes.bool.isRequired,
  setShowWelcome: PropTypes.func.isRequired,
};

// const ProjectPageLayout = () => (
//   <>
//     <ProjectDetails />
//     <footer>
//       <center>
//         <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
//         <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
//           © 2023{" "}
//           <a href="https://flowbite.com/" className="hover:underline">
//             MON3EM™
//           </a>
//           . All Rights Reserved.
//         </span>
//       </center>
//     </footer>
//   </>
// );

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage
                showWelcome={showWelcome}
                setShowWelcome={setShowWelcome}
              />
            }
          />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
