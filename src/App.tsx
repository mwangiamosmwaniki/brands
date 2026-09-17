import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { CaseStudyModal } from './components/CaseStudyModal';
import { Project } from './types';

// Distinct Pages
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { WhyUsPage } from './pages/WhyUsPage';
import { ContactPage } from './pages/ContactPage';

interface AnimatedRoutesProps {
  onSelectProject: (project: Project) => void;
}

const AnimatedRoutes: React.FC<AnimatedRoutesProps> = ({ onSelectProject }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        transition={{
          duration: 0.28,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="flex-1 flex flex-col w-full"
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/work"
            element={<WorkPage onSelectProject={onSelectProject} />}
          />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/process" element={<Navigate to="/services" replace />} />
          <Route path="/why" element={<Navigate to="/about" replace />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Fallback Catch-all Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export default function App() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);

  const handleSelectProject = (project: Project) => {
    setActiveCaseStudy(project);
  };

  const handleCloseCaseStudy = () => {
    setActiveCaseStudy(null);
  };

  return (
    <Router>
      <div className="min-h-screen bg-[#f5f7fa] text-[#081c2d] font-sans selection:bg-[#1f7a63] selection:text-[#f5f7fa] relative flex flex-col justify-between">
        {/* Scroll To Top on Route Changes */}
        <ScrollToTop />

        {/* Global Floating Navigation Bar */}
        <Navbar />

        {/* Dedicated Page Routes with Subtle Fade-In Transition */}
        <main id="main-content" className="flex-1 flex flex-col w-full">
          <AnimatedRoutes onSelectProject={handleSelectProject} />
        </main>

        {/* Global Minimal Editorial Footer */}
        <Footer />

        {/* Case Study Detail Modal (Accessible from portfolio pages) */}
        <CaseStudyModal
          project={activeCaseStudy}
          onClose={handleCloseCaseStudy}
        />
      </div>
    </Router>
  );
}
