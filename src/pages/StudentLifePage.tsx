import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CLUBS } from '../data/schoolData';

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }} className={className}>
      {children}
    </motion.div>
  );
}

const SPORTS = [
  { name: 'Cricket Ground', desc: 'Full-size BCCI-spec cricket ground with turf pitch and digital scoreboard.', icon: '🏏' },
  { name: 'Basketball Court', desc: 'NBA-spec outdoor basketball courts with floodlights.', icon: '🏀' },
  { name: 'Swimming Pool', desc: '25-meter heated pool, certified coaches, and lifeguard on duty.', icon: '🏊' },
  { name: 'Football Field', desc: 'FIFA-spec grass football field for training and tournaments.', icon: '⚽' },
  { name: 'Gymnasium', desc: 'Fully equipped fitness center accessible to students of Class IX and above.', icon: '🏋️' },
  { name: 'Badminton Courts', desc: '4 indoor badminton courts with wooden flooring.', icon: '🏸' },
];

const ANNUAL_EVENTS = [
  { name: 'Annual Day', date: 'December 15', desc: 'Grand cultural extravaganza with drama, dance, music, and award ceremony.', img: 'https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Sports Day', date: 'March 20', desc: 'Track events, field sports, house championship, and parade. Celebrated with great patriotic fervor.', img: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Science Fair', date: 'February 10', desc: 'Inter-school science exhibition with models, experiments, and jury evaluation.', img: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Diwali Mela', date: 'October 28', desc: 'Traditional Diwali celebration with rangoli competition, diyas, lanterns, and dances.', img: 'https://images.pexels.com/photos/1707823/pexels-photo-1707823.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Independence Day', date: 'August 15', desc: 'Flag hoisting, patriotic songs, NCC parade, and cultural programs for the nation.', img: 'https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Cultural Fest "Utsav"', date: 'December 14', desc: 'Inter-school cultural competition in dance, music, drama, and fine arts.', img: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

const STUDENT_COUNCIL = [
  { name: 'Aarav Gupta', role: 'Head Boy', class: 'Class XII Science', img: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Ananya Patel', role: 'Head Girl', class: 'Class XII Science', img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Rohan Sharma', role: 'Sports Captain', class: 'Class XI Commerce', img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Priya Mishra', role: 'Cultural Secretary', class: 'Class XII Arts', img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200' },
];

const TOPPERS = [
  { name: 'Rahul Sharma', score: '99.4%', stream: 'Class XII Science', year: '2024', img: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Priya Nair', score: '98.8%', stream: 'Class XII Science', year: '2024', img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Ananya Singh', score: '97.2%', stream: 'Class XII Commerce', year: '2024', img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Meghna Tiwari', score: '95.4%', stream: 'Class XII Arts', year: '2024', img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200' },
];

export default function StudentLifePage() {
  return (
    <div className="bg-bvm-ivory">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-secondary to-secondary-dark overflow-hidden">
        <div className="absolute inset-0 lotus-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Student <span className="text-accent">Life</span>
            </h1>
            <p className="text-white/70 font-body text-lg max-w-2xl mx-auto">
              Beyond classrooms — clubs, sports, culture, and community. BVM is where students thrive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Clubs & Activities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <div className="rangoli-divider mb-6" />
            <h2 className="section-title">Clubs & <span className="gradient-text">Activities</span></h2>
            <p className="section-subtitle">24+ clubs across arts, science, sports, and culture</p>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {CLUBS.map((club, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="bg-white rounded-2xl p-5 shadow-card border border-gray-100 card-hover text-center group">
                  <div className="text-4xl mb-3">{club.icon}</div>
                  <h3 className="font-heading font-bold text-secondary text-sm mb-1">{club.name}</h3>
                  <div className="text-xs font-body text-bvm-muted mb-2">{club.members} members</div>
                  <div className="text-xs font-body text-primary font-semibold bg-primary/10 px-2 py-1 rounded-full">{club.achievement}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Facilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <div className="rangoli-divider mb-6" />
            <h2 className="section-title">Sports <span className="gradient-text">Facilities</span></h2>
            <p className="section-subtitle">World-class infrastructure for sporting excellence</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SPORTS.map((sport, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="bg-bvm-ivory rounded-2xl p-6 shadow-card border border-gray-100 card-hover flex gap-4">
                  <div className="text-3xl">{sport.icon}</div>
                  <div>
                    <h3 className="font-heading font-bold text-secondary mb-1">{sport.name}</h3>
                    <p className="font-body text-sm text-bvm-muted leading-relaxed">{sport.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Events */}
      <section className="py-20 bg-bvm-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <div className="rangoli-divider mb-6" />
            <h2 className="section-title">Annual <span className="gradient-text">Events</span></h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ANNUAL_EVENTS.map((event, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-card border border-gray-100 card-hover group">
                  <div className="relative overflow-hidden h-44">
                    <img src={event.img} alt={event.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <div className="font-heading font-bold text-white">{event.name}</div>
                      <div className="text-xs text-white/70 font-body">{event.date}</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="font-body text-sm text-bvm-muted leading-relaxed">{event.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Student Council */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <div className="rangoli-divider mb-6" />
            <h2 className="section-title">Student <span className="gradient-text">Council 2024-25</span></h2>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-3xl mx-auto">
            {STUDENT_COUNCIL.map((member, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="text-center group">
                  <div className="relative overflow-hidden rounded-2xl mb-3 aspect-square">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                  </div>
                  <div className="font-heading font-bold text-secondary text-sm">{member.name}</div>
                  <div className="text-xs font-body text-primary font-semibold">{member.role}</div>
                  <div className="text-xs font-body text-bvm-muted">{member.class}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Board Toppers */}
      <section className="py-20 bg-gradient-to-br from-secondary to-secondary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
              Board <span className="text-accent">Toppers 2024</span>
            </h2>
            <p className="text-white/70 font-body">Our stars who made BVM proud</p>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {TOPPERS.map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white/10 backdrop-blur rounded-2xl p-5 text-center border border-white/20">
                  <div className="relative mx-auto w-16 h-16 mb-3">
                    <img src={t.img} alt={t.name} className="w-full h-full rounded-full object-cover border-2 border-accent" />
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {i + 1}
                    </div>
                  </div>
                  <div className="font-heading font-bold text-white text-sm">{t.name}</div>
                  <div className="text-2xl font-heading font-bold text-accent">{t.score}</div>
                  <div className="text-xs font-body text-white/60 mt-0.5">{t.stream}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="py-20 bg-bvm-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10">
            <div className="rangoli-divider mb-6" />
            <h2 className="section-title">BVM in <span className="gradient-text">Action</span></h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { id: 'Y9m5zNHrGLE', title: 'Annual Day Highlights 2023' },
              { id: 'LHCob76kigA', title: 'Sports Day 2024' },
              { id: 'fSmNpvsY9tY', title: 'Robotics Championship' },
            ].map((v, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="rounded-2xl overflow-hidden shadow-card">
                  <iframe
                    width="100%"
                    height="220"
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    style={{ border: 0 }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div className="bg-white px-4 py-3 font-body text-sm font-semibold text-secondary">{v.title}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
