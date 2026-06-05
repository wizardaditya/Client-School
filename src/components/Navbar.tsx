import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, GraduationCap } from 'lucide-react';
import { SCHOOL_CONFIG } from '../data/schoolData';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Academics',
    path: '/academics',
    dropdown: [
      { label: 'Class Structure', path: '/academics#classes' },
      { label: 'Science Stream', path: '/academics#science' },
      { label: 'Commerce Stream', path: '/academics#commerce' },
      { label: 'Arts Stream', path: '/academics#arts' },
      { label: 'Academic Calendar', path: '/academics#calendar' },
      { label: 'Exam Schedule', path: '/academics#exams' },
    ],
  },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Faculty', path: '/faculty' },
  { label: 'Student Life', path: '/student-life' },
  { label: 'News & Events', path: '/news' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      {/* Tricolor strip */}
      <div className="h-1 w-full tricolor-strip" />
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-md py-2'
            : 'bg-white/95 backdrop-blur-sm py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-heading font-bold text-secondary text-sm leading-tight">
                  {SCHOOL_CONFIG.nameHindi}
                </div>
                <div className="font-body text-xs text-bvm-muted leading-tight">
                  {SCHOOL_CONFIG.city} • CBSE Affiliated
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.path}
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-body font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'text-primary bg-primary/10'
                        : 'text-bvm-dark hover:text-primary hover:bg-primary/5'
                    }`}
                  >
                    {link.label}
                    {link.dropdown && (
                      <ChevronDown className="w-3 h-3 transition-transform duration-200"
                        style={{ transform: activeDropdown === link.label ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      />
                    )}
                  </Link>
                  {link.dropdown && activeDropdown === link.label && (
                    <AnimatePresence>
                    <motion.div
                      key="dropdown"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block px-4 py-2 text-sm font-body text-bvm-dark hover:text-primary hover:bg-primary/5 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Apply CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/admissions"
                className="btn-primary text-sm py-2 px-5"
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-secondary hover:bg-secondary/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
            >
              <div className="px-4 py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <div key={link.path}>
                    <Link
                      to={link.path}
                      className={`block px-3 py-2.5 rounded-lg text-sm font-body font-medium transition-colors ${
                        location.pathname === link.path
                          ? 'text-primary bg-primary/10'
                          : 'text-bvm-dark hover:text-primary hover:bg-primary/5'
                      }`}
                    >
                      {link.label}
                    </Link>
                    {link.dropdown && (
                      <div className="pl-4 mt-1 flex flex-col gap-0.5">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="block px-3 py-2 text-xs font-body text-bvm-muted hover:text-primary transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link
                  to="/admissions"
                  className="btn-primary text-sm mt-3 text-center"
                >
                  Apply for Admission
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
