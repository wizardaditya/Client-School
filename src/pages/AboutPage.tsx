import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Target, Eye, Shield } from 'lucide-react';
import { ACHIEVEMENTS, MANAGEMENT } from '../data/schoolData';

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }} className={className}>
      {children}
    </motion.div>
  );
}

const TIMELINE = [
  { year: '1985', title: 'Foundation Stone Laid', desc: 'Bharatiya Vidya Mandir was established with 120 students and 8 faculty members in Arera Colony, Bhopal.' },
  { year: '1990', title: 'CBSE Affiliation Granted', desc: 'Received CBSE affiliation (No. 1000123), enabling Class X board examinations.' },
  { year: '1995', title: 'Senior Secondary Wing Opens', desc: 'Science and Commerce streams launched for Classes XI–XII, with a state-of-the-art science laboratory.' },
  { year: '2000', title: 'Arts Stream Added', desc: 'The Arts and Humanities stream introduced, celebrating India\'s cultural heritage.' },
  { year: '2005', title: 'New Campus Inaugurated', desc: 'Expanded to a 12-acre campus with a library, computer lab, auditorium, and sports complex.' },
  { year: '2010', title: 'Digital Classrooms', desc: 'Smart interactive boards installed in all classrooms. Digital learning integrated into curriculum.' },
  { year: '2015', title: 'Silver Jubilee Celebration', desc: '30th Anniversary celebrated with alumni meet, cultural gala, and launch of scholarship fund.' },
  { year: '2019', title: 'ISO 9001:2015 Certified', desc: 'School management processes certified under ISO standards, acknowledging operational excellence.' },
  { year: '2021', title: 'Digital India Champion', desc: 'Awarded by Ministry of Education for e-learning infrastructure during pandemic response.' },
  { year: '2024', title: 'New Robotics Lab', desc: 'Cutting-edge Robotics and AI lab inaugurated, partnering with IIT Bhopal for STEM excellence.' },
];

const MISSION_POINTS = [
  'Provide quality education rooted in Indian values and global standards',
  'Foster creativity, critical thinking, and lifelong learning',
  'Build character through discipline, integrity, and empathy',
  'Celebrate India\'s cultural diversity and heritage',
  'Prepare students for national and global leadership',
  'Ensure inclusive education for every learner',
];

export default function AboutPage() {
  return (
    <div className="bg-bvm-ivory">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-secondary to-secondary-dark overflow-hidden">
        <div className="absolute inset-0 lotus-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="rangoli-divider mb-6 opacity-30" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Our <span className="text-accent">Story</span></h1>
            <p className="text-white/70 font-body text-lg max-w-2xl mx-auto">
              Nearly four decades of nurturing young minds, preserving Indian values, and building tomorrow's leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Reveal>
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-10">
                  <Eye className="w-32 h-32" />
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-5">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-heading font-bold mb-4">Our Vision</h2>
                <p className="font-body leading-relaxed text-white/90">
                  To be a beacon of educational excellence that produces thoughtful, capable, and value-driven citizens who contribute meaningfully to India and the world — grounded in Sanskrit wisdom: <em>सा विद्या या विमुक्तये</em> (That which liberates is true education).
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="bg-gradient-to-br from-secondary to-secondary-dark rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-10">
                  <Target className="w-32 h-32" />
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-5">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-heading font-bold mb-4">Our Mission</h2>
                <ul className="space-y-2.5">
                  {MISSION_POINTS.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 font-body text-white/90 text-sm">
                      <span className="text-accent mt-0.5">✿</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <div className="rangoli-divider mb-6" />
            <h2 className="section-title">Our <span className="gradient-text">Journey</span></h2>
            <p className="section-subtitle">1985 to present — a legacy of excellence</p>
          </Reveal>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary" />
            <div className="space-y-8">
              {TIMELINE.map((item, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className={`flex gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-16 md:pl-0`}>
                      <div className="bg-white rounded-2xl p-5 shadow-card border border-gray-100 card-hover">
                        <span className="text-xs font-body font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">{item.year}</span>
                        <h3 className="font-heading font-bold text-secondary mt-2 mb-1">{item.title}</h3>
                        <p className="font-body text-sm text-bvm-muted leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                    <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-md mt-5" />
                    <div className="hidden md:block flex-1" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Wall */}
      <section className="py-20 bg-gradient-to-br from-bvm-ivory to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <div className="rangoli-divider mb-6" />
            <h2 className="section-title">Wall of <span className="gradient-text">Honour</span></h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ACHIEVEMENTS.map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 shadow-card border border-amber-100 card-hover group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 group-hover:to-accent/15 transition-all duration-500" />
                  <Award className="w-8 h-8 text-accent mb-3" />
                  <div className="text-xs font-body text-accent font-bold mb-1">{item.year}</div>
                  <h4 className="font-heading font-bold text-secondary mb-2">{item.title}</h4>
                  <p className="text-sm font-body text-bvm-muted">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10">
            <h2 className="section-title">Accreditations & <span className="gradient-text">Affiliations</span></h2>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { label: 'CBSE Affiliated', sub: 'Affiliation No. 1000123', color: 'bg-blue-50 border-blue-200' },
              { label: 'ISO 9001:2015', sub: 'Quality Management Certified', color: 'bg-green-50 border-green-200' },
              { label: 'Digital India', sub: 'Champion School 2021', color: 'bg-orange-50 border-orange-200' },
              { label: 'NCERT Aligned', sub: 'Curriculum Partner', color: 'bg-purple-50 border-purple-200' },
              { label: 'AISHE Registered', sub: 'MoE India', color: 'bg-amber-50 border-amber-200' },
            ].map((badge, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className={`${badge.color} border rounded-2xl px-6 py-5 text-center card-hover`}>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow">
                    <Shield className="w-5 h-5 text-secondary" />
                  </div>
                  <div className="font-heading font-bold text-secondary text-sm">{badge.label}</div>
                  <div className="text-xs font-body text-bvm-muted mt-0.5">{badge.sub}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Management */}
      <section className="py-20 bg-bvm-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <div className="rangoli-divider mb-6" />
            <h2 className="section-title">Management <span className="gradient-text">Committee</span></h2>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {MANAGEMENT.map((member, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="group text-center">
                  <div className="relative overflow-hidden rounded-2xl mb-3 aspect-square">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/60 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-white font-body text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity px-2 text-center">{member.name}</span>
                    </div>
                  </div>
                  <div className="font-body font-semibold text-secondary text-xs">{member.name}</div>
                  <div className="text-xs text-primary font-body">{member.role}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
