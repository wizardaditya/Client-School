import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Download, Share2, ArrowRight, Clock, User } from 'lucide-react';
import { NEWS_DATA, ANNOUNCEMENTS } from '../data/schoolData';

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }} className={className}>
      {children}
    </motion.div>
  );
}

const CATEGORIES = ['All', 'Events', 'Achievements', 'Notices', 'Circulars'];

const CIRCULARS = [
  { title: 'Fee Revision Notice 2024-25', date: 'March 1, 2024', size: '1.2 MB', type: 'Fee' },
  { title: 'Pre-Board Exam Schedule (X & XII)', date: 'February 20, 2024', size: '0.8 MB', type: 'Exam' },
  { title: 'Annual Day Program Schedule', date: 'December 10, 2023', size: '1.5 MB', type: 'Event' },
  { title: 'Holiday List 2024-25', date: 'April 1, 2024', size: '0.5 MB', type: 'General' },
  { title: 'Online Class Instructions', date: 'January 5, 2024', size: '0.9 MB', type: 'Academic' },
  { title: 'Transport Route Update', date: 'March 15, 2024', size: '0.6 MB', type: 'Transport' },
];

const MONTH_EVENTS = [
  { date: 5, title: "Teacher's Day", type: 'event', month: 'September' },
  { date: 10, title: 'Half-Yearly Exams Begin', type: 'exam', month: 'September' },
  { date: 15, title: 'Independence Day', type: 'holiday', month: 'August' },
  { date: 2, title: 'Gandhi Jayanti', type: 'holiday', month: 'October' },
  { date: 15, title: 'Annual Day 2024', type: 'event', month: 'December' },
  { date: 26, title: 'Republic Day', type: 'holiday', month: 'January' },
];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? NEWS_DATA
    : NEWS_DATA.filter((n) => n.category === activeCategory);

  return (
    <div className="bg-bvm-ivory">
      {/* Marquee Ticker */}
      <div className="bg-secondary py-2.5 overflow-hidden">
        <div className="ticker-wrap">
          <div className="ticker-content text-sm font-body text-white">
            {ANNOUNCEMENTS.join('   |   ')}
            &nbsp;&nbsp;&nbsp;
            {ANNOUNCEMENTS.join('   |   ')}
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-secondary to-secondary-dark overflow-hidden">
        <div className="absolute inset-0 lotus-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              News & <span className="text-accent">Events</span>
            </h1>
            <p className="text-white/70 font-body text-lg max-w-2xl mx-auto">
              Stay updated with the latest happenings, achievements, circulars, and events at BVM.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white shadow-sm sticky-filter sticky top-[61px] z-30">
        <div className="max-w-7xl mx-auto px-4 flex gap-2 flex-wrap justify-center">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-xl font-body font-semibold text-sm transition-all ${
                activeCategory === cat ? 'bg-primary text-white shadow-md' : 'bg-gray-100 text-bvm-muted hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.06}>
                <motion.div
                  layout
                  className="bg-white rounded-2xl overflow-hidden shadow-card border border-gray-100 card-hover group"
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className="absolute top-3 left-3 bg-primary text-white text-xs font-body font-bold px-2.5 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs font-body text-bvm-muted mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(item.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5" />
                        {item.author}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-secondary leading-snug mb-2 line-clamp-2">{item.title}</h3>
                    <p className="font-body text-sm text-bvm-muted leading-relaxed line-clamp-3 mb-4">{item.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <button className="text-primary font-body font-semibold text-sm flex items-center gap-1 hover:underline">
                        Read More <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <button className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-primary hover:text-white flex items-center justify-center transition-colors text-bvm-muted">
                        <Share2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Calendar */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <div className="rangoli-divider mb-6" />
            <h2 className="section-title">Events <span className="gradient-text">Calendar</span></h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {MONTH_EVENTS.map((ev, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className={`flex gap-4 p-4 rounded-2xl border card-hover ${
                  ev.type === 'holiday' ? 'bg-green-50 border-green-200' :
                  ev.type === 'exam' ? 'bg-red-50 border-red-200' :
                  'bg-blue-50 border-blue-200'
                }`}>
                  <div className={`w-12 h-12 rounded-xl flex flex-col items-center justify-center shrink-0 ${
                    ev.type === 'holiday' ? 'bg-green-500' :
                    ev.type === 'exam' ? 'bg-red-500' :
                    'bg-primary'
                  } text-white`}>
                    <span className="text-lg font-heading font-bold leading-none">{ev.date}</span>
                    <span className="text-xs font-body leading-none">{ev.month.slice(0, 3)}</span>
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-secondary">{ev.title}</h4>
                    <span className={`text-xs font-body capitalize px-2 py-0.5 rounded-full ${
                      ev.type === 'holiday' ? 'bg-green-100 text-green-700' :
                      ev.type === 'exam' ? 'bg-red-100 text-red-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>{ev.type}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Circulars */}
      <section id="circulars" className="py-20 bg-bvm-ivory">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10">
            <div className="rangoli-divider mb-6" />
            <h2 className="section-title">Circulars & <span className="gradient-text">Notices</span></h2>
          </Reveal>
          <Reveal>
            <div className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden">
              {CIRCULARS.map((c, i) => (
                <div key={i} className={`flex items-center justify-between p-4 ${i < CIRCULARS.length - 1 ? 'border-b border-gray-100' : ''} hover:bg-bvm-ivory transition-colors group`}>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 group-hover:bg-primary rounded-xl flex items-center justify-center transition-colors">
                      <Download className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="font-body font-semibold text-secondary text-sm">{c.title}</div>
                      <div className="text-xs text-bvm-muted font-body flex items-center gap-2">
                        <Clock className="w-3 h-3" /> {c.date}
                        <span>·</span>
                        <span>PDF · {c.size}</span>
                      </div>
                    </div>
                  </div>
                  <span className={`text-xs font-body font-semibold px-2.5 py-1 rounded-full ${
                    c.type === 'Fee' ? 'bg-amber-100 text-amber-700' :
                    c.type === 'Exam' ? 'bg-red-100 text-red-700' :
                    c.type === 'Event' ? 'bg-blue-100 text-blue-700' :
                    'bg-gray-100 text-gray-600'
                  }`}>{c.type}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
