import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Star, ChevronLeft, ChevronRight, ArrowRight, Download,
  BookOpen, Trophy, Heart, Calendar, Clock, MapPin,
  GraduationCap, Globe, FlaskConical, Calculator, Lightbulb,
} from 'lucide-react';
import { SCHOOL_CONFIG, TESTIMONIALS, GALLERY_IMAGES, NEWS_DATA, UPCOMING_EVENTS, ACHIEVEMENTS } from '../data/schoolData';

/* ─── Stat Counter ─── */
function StatCounter({ end, suffix = '', label }: { end: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start = Math.min(start + step, end);
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-heading font-bold text-white">
        {count.toLocaleString('en-IN')}{suffix}
      </div>
      <div className="text-white/80 font-body text-sm mt-1">{label}</div>
    </div>
  );
}

/* ─── Countdown Timer ─── */
function Countdown({ date }: { date: Date }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const calc = () => {
      const diff = date.getTime() - Date.now();
      if (diff <= 0) {
        setExpired(true);
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
        secs: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [date]);

  if (expired) {
    return (
      <p className="text-white/70 font-body text-sm">This event has already taken place. Stay tuned for upcoming events!</p>
    );
  }

  return (
    <div className="flex gap-4 justify-center">
      {Object.entries(timeLeft).map(([unit, val]) => (
        <div key={unit} className="text-center">
          <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center">
            <span className="text-2xl font-heading font-bold text-white">{String(val).padStart(2, '0')}</span>
          </div>
          <div className="text-xs text-white/70 font-body mt-1 capitalize">{unit}</div>
        </div>
      ))}
    </div>
  );
}

/* ─── Scroll Reveal Wrapper ─── */
function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Main Home ─── */
export default function HomePage() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [lang, setLang] = useState<'en' | 'hi'>('en');

  const nextTestimonial = () => setTestimonialIdx((i) => (i + 1) % TESTIMONIALS.length);
  const prevTestimonial = () => setTestimonialIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  // Auto-rotate testimonials
  useEffect(() => {
    const id = setInterval(nextTestimonial, 5000);
    return () => clearInterval(id);
  }, []);

  const whyCards = [
    { icon: BookOpen, title: 'Academic Excellence', desc: '99% pass rate, consistent board toppers, and CBSE-aligned curriculum with digital integration.' },
    { icon: Heart, title: 'Holistic Development', desc: 'Arts, sports, culture, NCC — we nurture every talent through 24+ co-curricular clubs.' },
    { icon: GraduationCap, title: 'Expert Faculty', desc: '150+ qualified, passionate educators with an average of 15+ years of teaching experience.' },
    { icon: Globe, title: 'Global Readiness', desc: 'English Medium schooling, digital labs, robotics, and language programs prepare students globally.' },
  ];

  const quickLinks = [
    { icon: Calendar, label: 'Timetable', path: '/academics#timetable' },
    { icon: Trophy, label: 'Results', path: '/academics#results' },
    { icon: Calculator, label: 'Fee Structure', path: '/admissions#fees' },
    { icon: Download, label: 'Circulars', path: '/news#circulars' },
    { icon: FlaskConical, label: 'Syllabus', path: '/academics#syllabus' },
    { icon: Lightbulb, label: 'Student Life', path: '/student-life' },
  ];

  return (
    <div className="bg-bvm-ivory">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center ken-burns-container">
        <div className="absolute inset-0 ken-burns-img">
          <img
            src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="School Campus"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/85 via-secondary/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            {/* Lang toggle */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded text-xs font-body font-medium transition-colors ${lang === 'en' ? 'bg-accent text-white' : 'bg-white/20 text-white hover:bg-white/30'}`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('hi')}
                className={`px-3 py-1 rounded text-xs font-body font-medium transition-colors ${lang === 'hi' ? 'bg-accent text-white' : 'bg-white/20 text-white hover:bg-white/30'}`}
              >
                हिंदी
              </button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-accent px-4 py-1.5 rounded-full text-sm font-body mb-6"
            >
              <Star className="w-3.5 h-3.5 fill-accent" />
              CBSE Affiliated · Est. 1985 · Bhopal, MP
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white leading-tight mb-6">
              {lang === 'en' ? SCHOOL_CONFIG.tagline : SCHOOL_CONFIG.taglineHindi}
            </h1>

            <p className="text-lg text-white/85 font-body leading-relaxed mb-8">
              {lang === 'en'
                ? `${SCHOOL_CONFIG.fullName} — where ancient Indian wisdom meets modern excellence. CBSE Affiliation No. ${SCHOOL_CONFIG.affiliation}.`
                : `${SCHOOL_CONFIG.nameHindi} — जहाँ भारत की विद्या और आधुनिक उत्कृष्टता का संगम है।`}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/admissions" className="btn-primary flex items-center gap-2">
                Apply for Admission <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about#campus"
                className="bg-white/15 border-2 border-white/50 text-white px-6 py-3 rounded-lg font-body font-semibold transition-all hover:bg-white hover:text-secondary flex items-center gap-2"
              >
                Explore Campus
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-0 left-0 right-0 bg-primary/95 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <StatCounter end={2500} suffix="+" label="Students Enrolled" />
              <StatCounter end={150} suffix="+" label="Expert Faculty" />
              <StatCounter end={new Date().getFullYear() - SCHOOL_CONFIG.stats.established} suffix=" yrs" label="Years of Excellence" />
              <StatCounter end={99} suffix="%" label="Board Pass Rate" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 bg-bvm-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <div className="rangoli-divider mb-6" />
            <h2 className="section-title">Why Choose <span className="gradient-text">Bharatiya Vidya Mandir?</span></h2>
            <p className="section-subtitle max-w-2xl mx-auto">A tradition of excellence rooted in values, focused on the future.</p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyCards.map((card, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-7 shadow-card card-hover border border-gray-100 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <card.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-heading font-bold text-secondary text-lg mb-2">{card.title}</h3>
                  <p className="font-body text-bvm-muted text-sm leading-relaxed">{card.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── UPCOMING EVENT COUNTDOWN ── */}
      <section className="py-16 bg-gradient-to-r from-secondary to-secondary-dark relative overflow-hidden">
        <div className="absolute inset-0 lotus-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-accent px-4 py-1.5 rounded-full text-sm font-body mb-4">
                <Clock className="w-3.5 h-3.5" /> Upcoming Event
              </div>
              <h2 className="text-3xl font-heading font-bold text-white mb-2">{UPCOMING_EVENTS[0].title}</h2>
              <p className="text-white/70 font-body mb-6">{UPCOMING_EVENTS[0].description}</p>
              <Countdown date={UPCOMING_EVENTS[0].date} />
              <div className="mt-6">
                <Link to="/news" className="btn-gold inline-flex items-center gap-2">
                  View All Events <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── LATEST NEWS ── */}
      <section className="py-20 bg-bvm-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex items-end justify-between mb-12">
            <div>
              <div className="rangoli-divider mb-4" />
              <h2 className="section-title">Latest News & <span className="gradient-text">Events</span></h2>
            </div>
            <Link to="/news" className="text-primary font-body font-semibold hover:underline flex items-center gap-1 text-sm hidden sm:flex">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
          <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x">
            {NEWS_DATA.slice(0, 4).map((item, i) => (
              <Reveal key={item.id} delay={i * 0.08} className="min-w-72 sm:min-w-80 snap-start">
                <div className="bg-white rounded-2xl overflow-hidden shadow-card card-hover border border-gray-100">
                  <div className="relative overflow-hidden h-44">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-primary text-white text-xs font-body font-semibold px-2.5 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-bvm-muted font-body mb-2">
                      {new Date(item.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </p>
                    <h3 className="font-heading font-semibold text-secondary text-base leading-snug mb-2 line-clamp-2">{item.title}</h3>
                    <p className="text-sm font-body text-bvm-muted leading-relaxed line-clamp-2">{item.excerpt}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRINCIPAL'S MESSAGE ── */}
      <section className="py-20 bg-gradient-to-br from-bvm-ivory to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-accent/20 rounded-3xl" />
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/10 rounded-3xl" />
                <img
                  src={SCHOOL_CONFIG.principal.image}
                  alt={SCHOOL_CONFIG.principal.name}
                  className="relative z-10 w-full max-w-sm mx-auto rounded-3xl shadow-xl object-cover aspect-square"
                />
                <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/90 backdrop-blur rounded-2xl p-4 shadow-lg">
                  <div className="font-heading font-bold text-secondary">{SCHOOL_CONFIG.principal.name}</div>
                  <div className="text-sm font-body text-bvm-muted">Principal · {SCHOOL_CONFIG.principal.experience} Experience</div>
                  <div className="text-xs font-body text-bvm-muted">{SCHOOL_CONFIG.principal.qualification}</div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div>
                <div className="rangoli-divider mb-6" />
                <h2 className="section-title mb-4">Principal's <span className="gradient-text">Message</span></h2>
                <div className="text-4xl text-accent font-heading leading-none mb-4">"</div>
                <p className="text-bvm-dark font-body leading-relaxed text-lg italic mb-6">
                  {SCHOOL_CONFIG.principal.message}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-0.5 bg-accent" />
                  <span className="font-body font-semibold text-secondary">{SCHOOL_CONFIG.principal.name}</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <div className="rangoli-divider mb-6" style={{ filter: 'invert(1) opacity(0.3)' }} />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">What <span className="text-accent">Families Say</span></h2>
            <p className="text-white/70 font-body">Trusted by thousands of parents and alumni across Bhopal</p>
          </Reveal>

          <div className="relative max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIdx}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="bg-white/10 backdrop-blur rounded-3xl p-8 md:p-10 text-center"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(TESTIMONIALS[testimonialIdx].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-white font-body text-lg leading-relaxed italic mb-8">
                  "{TESTIMONIALS[testimonialIdx].quote}"
                </p>
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={TESTIMONIALS[testimonialIdx].image}
                    alt={TESTIMONIALS[testimonialIdx].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-accent"
                  />
                  <div className="text-left">
                    <div className="font-heading font-semibold text-white">{TESTIMONIALS[testimonialIdx].name}</div>
                    <div className="text-sm text-white/60 font-body">{TESTIMONIALS[testimonialIdx].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-3 mt-6">
              <button onClick={prevTestimonial} className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent text-white flex items-center justify-center transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIdx(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${i === testimonialIdx ? 'bg-accent' : 'bg-white/30'}`}
                />
              ))}
              <button onClick={nextTestimonial} className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent text-white flex items-center justify-center transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACHIEVEMENTS ── */}
      <section className="py-20 bg-bvm-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <div className="rangoli-divider mb-6" />
            <h2 className="section-title">Awards & <span className="gradient-text">Achievements</span></h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ACHIEVEMENTS.map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 shadow-card border border-amber-100 card-hover relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-bl-full transition-all group-hover:w-full group-hover:h-full group-hover:rounded-none duration-500" />
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center shrink-0">
                      <Trophy className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-xs font-body text-accent font-semibold mb-1">{item.year}</div>
                      <h4 className="font-heading font-bold text-secondary text-base mb-1">{item.title}</h4>
                      <p className="text-sm font-body text-bvm-muted">{item.description}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK LINKS ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10">
            <h2 className="section-title">Quick <span className="gradient-text">Links</span></h2>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickLinks.map((link, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <Link
                  to={link.path}
                  className="bg-bvm-ivory hover:bg-primary group rounded-2xl p-5 flex flex-col items-center gap-3 shadow-card card-hover transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 group-hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors">
                    <link.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-sm font-body font-semibold text-secondary group-hover:text-white transition-colors text-center">{link.label}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY ── */}
      <section className="py-20 bg-bvm-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <div className="rangoli-divider mb-6" />
            <h2 className="section-title">Campus <span className="gradient-text">Gallery</span></h2>
            <p className="section-subtitle">Life at Bharatiya Vidya Mandir</p>
          </Reveal>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
            {GALLERY_IMAGES.map((img, i) => (
              <Reveal key={img.id} delay={i * 0.05}>
                <div
                  className="break-inside-avoid overflow-hidden rounded-xl cursor-pointer group relative"
                  onClick={() => setLightbox(img.src)}
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/40 transition-colors duration-300 flex items-end">
                    <span className="font-body text-sm text-white font-medium px-3 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      {img.caption}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-8">
            <h2 className="section-title">Find <span className="gradient-text">Us</span></h2>
            <p className="section-subtitle flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              {SCHOOL_CONFIG.address}
            </p>
          </Reveal>
          <Reveal>
            <div className="rounded-2xl overflow-hidden shadow-card h-80">
              <iframe
                title="School Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.097!2d77.43!3d23.24!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBhopal%2C+Madhya+Pradesh!5e0!3m2!1sen!2sin!4v1609459200000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={lightbox}
              alt="Gallery"
              className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
