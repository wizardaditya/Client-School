import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AcademicsPage from './pages/AcademicsPage';
import AdmissionsPage from './pages/AdmissionsPage';
import FacultyPage from './pages/FacultyPage';
import StudentLifePage from './pages/StudentLifePage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
    >
      {children}
    </motion.div>
  );
}

/** Scroll to hash anchor after page transitions */
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Give the page time to render before scrolling
      const id = setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 400);
      return () => clearTimeout(id);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
}

function AppRoutes() {
  const location = useLocation();

  return (
    <>
      <ScrollToHash />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
          <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
          <Route path="/academics" element={<PageTransition><AcademicsPage /></PageTransition>} />
          <Route path="/admissions" element={<PageTransition><AdmissionsPage /></PageTransition>} />
          <Route path="/faculty" element={<PageTransition><FacultyPage /></PageTransition>} />
          <Route path="/student-life" element={<PageTransition><StudentLifePage /></PageTransition>} />
          <Route path="/news" element={<PageTransition><NewsPage /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col font-body">
        <Navbar />
        <main className="flex-1">
          <AppRoutes />
        </main>
        <Footer />
        <FloatingElements />
      </div>
    </BrowserRouter>
  );
}
