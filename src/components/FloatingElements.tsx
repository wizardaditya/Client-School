import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { SCHOOL_CONFIG } from '../data/schoolData';

export default function FloatingElements() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${SCHOOL_CONFIG.social.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed right-5 z-50 w-14 h-14 bg-bvm-success rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group floating-whatsapp-offset"
        style={{ bottom: 'calc(5rem + env(safe-area-inset-bottom, 0px))' }}
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <span className="absolute right-16 bg-bvm-dark text-white text-xs font-body px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat with us
        </span>
      </a>

      {/* Back to Top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="fixed right-5 z-50 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary transition-colors"
            style={{ bottom: 'calc(1.5rem + env(safe-area-inset-bottom, 0px))' }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
