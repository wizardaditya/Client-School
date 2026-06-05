import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, RotateCcw } from 'lucide-react';
import { FACULTY_DATA } from '../data/schoolData';

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }} className={className}>
      {children}
    </motion.div>
  );
}

const DEPARTMENTS = ['All', 'Primary', 'Secondary', 'Senior Secondary', 'Sports', 'Arts'];

export default function FacultyPage() {
  const [activeDept, setActiveDept] = useState('All');
  const [flippedId, setFlippedId] = useState<number | null>(null);

  const filtered = activeDept === 'All'
    ? FACULTY_DATA
    : FACULTY_DATA.filter((f) => f.department === activeDept);

  const toggleFlip = (id: number) => {
    setFlippedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="bg-bvm-ivory">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-secondary to-secondary-dark overflow-hidden">
        <div className="absolute inset-0 lotus-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Our <span className="text-accent">Faculty</span>
            </h1>
            <p className="text-white/70 font-body text-lg max-w-2xl mx-auto">
              150+ passionate educators dedicated to shaping the next generation — each a specialist, each a mentor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs — sticky-filter class adds -webkit-sticky for iOS */}
      <section className="py-10 bg-white sticky-filter sticky top-[61px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex gap-2 flex-wrap justify-center">
          {DEPARTMENTS.map((dept) => (
            <button
              key={dept}
              onClick={() => setActiveDept(dept)}
              className={`px-5 py-2 rounded-xl font-body font-semibold text-sm transition-all ${
                activeDept === dept ? 'bg-primary text-white shadow-md' : 'bg-gray-100 text-bvm-muted hover:bg-gray-200'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((faculty, i) => (
              <Reveal key={faculty.id} delay={i * 0.06}>
                {/* Tap to flip on mobile, hover to flip on desktop */}
                <div
                  className={`flip-card cursor-pointer${flippedId === faculty.id ? ' flipped' : ''}`}
                  style={{ height: '320px' }}
                  onClick={() => toggleFlip(faculty.id)}
                  role="button"
                  aria-pressed={flippedId === faculty.id}
                  aria-label={`${faculty.name} — tap to see bio`}
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleFlip(faculty.id)}
                >
                  <div className="flip-card-inner w-full h-full">
                    {/* Front */}
                    <div className="flip-card-front w-full h-full bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={faculty.image}
                          alt={faculty.name}
                          className="w-full h-full object-cover"
                        />
                        {faculty.isHOD && (
                          <div className="absolute top-3 right-3 bg-accent text-white text-xs font-body font-bold px-2 py-1 rounded-full flex items-center gap-1">
                            <Star className="w-3 h-3 fill-white" /> HOD
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
                        <div className="absolute bottom-3 left-4 text-white">
                          <div className="font-heading font-bold">{faculty.name}</div>
                          <div className="text-xs text-white/80 font-body">{faculty.subject}</div>
                        </div>
                      </div>
                      <div className="p-4 flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <span className="bg-secondary/10 text-secondary text-xs font-body font-semibold px-2.5 py-1 rounded-full">{faculty.department}</span>
                          <span className="text-xs font-body text-bvm-muted">{faculty.experience} exp.</span>
                        </div>
                        <div className="text-xs font-body text-bvm-muted">{faculty.qualification}</div>
                        {/* Hint for touch users */}
                        <div className="text-xs text-primary/60 font-body flex items-center gap-1 md:hidden">
                          <RotateCcw className="w-3 h-3" /> Tap to see bio
                        </div>
                      </div>
                    </div>
                    {/* Back */}
                    <div className="flip-card-back w-full h-full bg-gradient-to-br from-secondary to-secondary-dark rounded-2xl p-6 flex flex-col justify-center">
                      <div className="text-accent font-heading font-bold text-lg mb-1">{faculty.name}</div>
                      <div className="text-white/70 text-sm font-body mb-4">{faculty.subject} · {faculty.department}</div>
                      <p className="text-white/85 font-body text-sm leading-relaxed">{faculty.bio}</p>
                      <div className="mt-4 pt-4 border-t border-white/20 flex gap-4 text-xs font-body text-white/60">
                        <span>🎓 {faculty.qualification}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-3xl font-heading font-bold mb-3">Join Our <span className="text-accent">Faculty</span></h2>
            <p className="font-body text-white/80 mb-6">We are always looking for passionate, qualified educators to join the BVM family. Send your resume to our HR department.</p>
            <a href="mailto:careers@bvmbhopal.edu.in" className="btn-gold inline-flex items-center gap-2">
              Apply for Teaching Position
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
