import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpen, FlaskConical, Calculator, Palette, Download, ChevronDown, ChevronUp, Trophy } from 'lucide-react';

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }} className={className}>
      {children}
    </motion.div>
  );
}

const STREAMS = {
  Science: {
    icon: FlaskConical,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology / Computer Science', 'English (Core)', 'Physical Education (Optional)'],
    description: 'Prepare for engineering and medical entrances (JEE, NEET). Rigorous laboratory training and STEM focus.',
    toppers: ['Rahul Sharma — 99.4%', 'Priya Nair — 98.8%', 'Rohan Joshi — 97.6%'],
  },
  Commerce: {
    icon: Calculator,
    color: 'text-green-600',
    bg: 'bg-green-50',
    border: 'border-green-200',
    subjects: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics / IP', 'English (Core)', 'Entrepreneurship (Optional)'],
    description: 'Ideal for CA, MBA, and finance careers. Strong focus on financial literacy and business acumen.',
    toppers: ['Ananya Singh — 97.2%', 'Shreya Patel — 96.8%', 'Amit Kumar — 96.0%'],
  },
  Arts: {
    icon: Palette,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    subjects: ['History', 'Political Science', 'Geography / Sociology', 'Hindi / Sanskrit', 'English (Core)', 'Fine Arts / Music (Optional)'],
    description: 'A rich humanities program preparing students for civil services, law, journalism, and the arts.',
    toppers: ['Meghna Tiwari — 95.4%', 'Kiran Yadav — 94.6%', 'Sanjay Mishra — 94.0%'],
  },
};

const CLASSES = [
  { level: 'Pre-Primary', grades: 'Nursery, LKG, UKG', desc: 'Play-based learning, Montessori methods, foundational literacy & numeracy. Activity rooms, sandbox, clay modeling.' },
  { level: 'Primary (I–V)', grades: 'Class I to V', desc: 'NCERT-aligned curriculum with art integration, Vedic Maths, and storytelling. Language lab from Class III.' },
  { level: 'Middle (VI–VIII)', grades: 'Class VI to VIII', desc: 'Subject-wise teachers, introduction to science labs, social studies projects, and club participation begins.' },
  { level: 'Secondary (IX–X)', grades: 'Class IX to X', desc: 'CBSE board preparation, optional subjects, career counseling, pre-vocational exposure, and olympiad coaching.' },
  { level: 'Senior Secondary (XI–XII)', grades: 'Class XI to XII', desc: 'Three specialized streams — Science, Commerce, Arts. Board exam preparation, entrance coaching, and skill courses.' },
];

const EXAM_SCHEDULE = [
  { exam: 'Unit Test I', class: 'I–XII', startDate: 'July 15, 2024', endDate: 'July 20, 2024', type: 'Internal' },
  { exam: 'Half-Yearly Exams', class: 'I–XII', startDate: 'September 10, 2024', endDate: 'September 20, 2024', type: 'Internal' },
  { exam: 'Unit Test II', class: 'I–XII', startDate: 'November 5, 2024', endDate: 'November 10, 2024', type: 'Internal' },
  { exam: 'Pre-Board I (X & XII)', class: 'X, XII', startDate: 'December 2, 2024', endDate: 'December 15, 2024', type: 'Board Prep' },
  { exam: 'Annual Exams (I–VIII)', class: 'I–VIII', startDate: 'February 10, 2025', endDate: 'February 22, 2025', type: 'Annual' },
  { exam: 'Pre-Board II (X & XII)', class: 'X, XII', startDate: 'January 6, 2025', endDate: 'January 18, 2025', type: 'Board Prep' },
  { exam: 'CBSE Board Exams (X)', class: 'X', startDate: 'February 15, 2025', endDate: 'March 15, 2025', type: 'CBSE Board' },
  { exam: 'CBSE Board Exams (XII)', class: 'XII', startDate: 'February 15, 2025', endDate: 'April 2, 2025', type: 'CBSE Board' },
];

const CALENDAR = [
  { month: 'April', events: ['School reopens — April 1', 'New session orientation — April 3', 'Textbook distribution — April 1–5'] },
  { month: 'May', events: ['Summer vacation begins — May 15', 'Summer camp enrollment open'] },
  { month: 'June', events: ['School reopens — June 17', 'Unit Test I begins — June 28'] },
  { month: 'July', events: ['Unit Test I — July 15–20', 'Independence Day prep begins'] },
  { month: 'August', events: ['Independence Day — August 15', 'Science Week — August 20–24', 'PTM — August 28'] },
  { month: 'September', events: ['Teacher\'s Day — Sept 5', 'Half-yearly exams — Sept 10–20', 'PTM — Sept 28'] },
  { month: 'October', events: ['Gandhi Jayanti — Oct 2', 'Diwali Mela — Oct 28', 'Dussehra holiday'] },
  { month: 'November', events: ['Unit Test II — Nov 5–10', 'Children\'s Day — Nov 14', 'PTM — Nov 22'] },
  { month: 'December', events: ['Pre-Board I — Dec 2–15', 'Annual Day — Dec 15', 'Winter vacation — Dec 23'] },
  { month: 'January', events: ['Republic Day prep', 'Pre-Board II — Jan 6–18', 'PTM — Jan 24'] },
  { month: 'February', events: ['Board exams begin — Feb 15', 'Science Fair — Feb 10'] },
  { month: 'March', events: ['Board exams continue', 'Annual Sports Meet — March 20', 'Session ends — March 31'] },
];

const SYLLABUS = [
  { class: 'Class I–V', label: 'Primary Syllabus 2024-25', size: '2.4 MB' },
  { class: 'Class VI–VIII', label: 'Middle School Syllabus 2024-25', size: '3.1 MB' },
  { class: 'Class IX–X', label: 'Secondary Syllabus 2024-25', size: '4.2 MB' },
  { class: 'Class XI (Science)', label: 'Science Stream Syllabus 2024-25', size: '3.8 MB' },
  { class: 'Class XI (Commerce)', label: 'Commerce Stream Syllabus 2024-25', size: '3.5 MB' },
  { class: 'Class XI (Arts)', label: 'Arts Stream Syllabus 2024-25', size: '3.3 MB' },
];

export default function AcademicsPage() {
  const [activeStream, setActiveStream] = useState<keyof typeof STREAMS>('Science');
  const [sortField, setSortField] = useState<'exam' | 'startDate'>('startDate');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  const EXAM_DATE_MAP: Record<string, Date> = Object.fromEntries(
    EXAM_SCHEDULE.map((e) => [e.exam, new Date(e.startDate)])
  );

  const sortedExams = [...EXAM_SCHEDULE].sort((a, b) => {
    if (sortField === 'startDate') {
      const da = EXAM_DATE_MAP[a.exam].getTime();
      const db = EXAM_DATE_MAP[b.exam].getTime();
      return sortDir === 'asc' ? da - db : db - da;
    }
    return sortDir === 'asc' ? a.exam.localeCompare(b.exam) : b.exam.localeCompare(a.exam);
  });

  const toggleSort = (field: 'exam' | 'startDate') => {
    if (sortField === field) setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    else { setSortField(field); setSortDir('asc'); }
  };

  const StreamIcon = STREAMS[activeStream].icon;

  return (
    <div className="bg-bvm-ivory">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-secondary to-secondary-dark overflow-hidden">
        <div className="absolute inset-0 lotus-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Academic <span className="text-accent">Excellence</span>
            </h1>
            <p className="text-white/70 font-body text-lg max-w-2xl mx-auto">
              CBSE-aligned curriculum from Pre-Primary to Class XII — Science, Commerce, and Arts streams with expert faculty.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Class Structure */}
      <section id="classes" className="py-20">
        <div id="preprimary" />
        <div id="primary" />
        <div id="middle" />
        <div id="secondary" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <div className="rangoli-divider mb-6" />
            <h2 className="section-title">Class <span className="gradient-text">Structure</span></h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CLASSES.map((cls, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100 card-hover">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-secondary">{cls.level}</h3>
                      <span className="text-xs font-body text-primary font-semibold">{cls.grades}</span>
                    </div>
                  </div>
                  <p className="font-body text-sm text-bvm-muted leading-relaxed">{cls.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Streams */}
      <section id="science" className="py-20 bg-white">
        <div id="commerce" />
        <div id="arts" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10">
            <div className="rangoli-divider mb-6" />
            <h2 className="section-title">Senior Secondary <span className="gradient-text">Streams</span></h2>
            <p className="section-subtitle">Choose the path that shapes your future</p>
          </Reveal>

          {/* Tabs */}
          <Reveal className="flex gap-2 mb-8 flex-wrap justify-center">
            {(Object.keys(STREAMS) as (keyof typeof STREAMS)[]).map((stream) => {
              const Icon = STREAMS[stream].icon;
              return (
                <button
                  key={stream}
                  onClick={() => setActiveStream(stream)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-body font-semibold text-sm transition-all ${
                    activeStream === stream
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-gray-100 text-bvm-muted hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" /> {stream}
                </button>
              );
            })}
          </Reveal>

          <motion.div
            key={activeStream}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${STREAMS[activeStream].bg} ${STREAMS[activeStream].border} border rounded-3xl p-8`}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow`}>
                  <StreamIcon className={`w-6 h-6 ${STREAMS[activeStream].color}`} />
                </div>
                <h3 className="font-heading font-bold text-secondary text-2xl mb-3">{activeStream} Stream</h3>
                <p className="font-body text-bvm-muted leading-relaxed mb-5">{STREAMS[activeStream].description}</p>
                <h4 className="font-body font-semibold text-secondary mb-3">Subjects Offered</h4>
                <ul className="space-y-2">
                  {STREAMS[activeStream].subjects.map((s, i) => (
                    <li key={i} className="flex items-center gap-2 font-body text-sm text-bvm-dark">
                      <span className="text-accent">✿</span> {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-body font-semibold text-secondary mb-4 flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-accent" /> Recent Board Toppers
                </h4>
                <div className="space-y-3">
                  {STREAMS[activeStream].toppers.map((t, i) => (
                    <div key={i} className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-3">
                      <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center text-sm font-bold text-accent">
                        {i + 1}
                      </div>
                      <span className="font-body font-semibold text-secondary text-sm">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Exam Schedule */}
      <section id="exams" className="py-20 bg-bvm-ivory">
        <div id="timetable" />
        <div id="results" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10">
            <div className="rangoli-divider mb-6" />
            <h2 className="section-title">Examination <span className="gradient-text">Schedule</span></h2>
          </Reveal>
          <Reveal>
            <div className="bg-white rounded-2xl shadow-card overflow-hidden border border-gray-100">
              <div className="overflow-x-auto">
                <table className="w-full text-sm font-body">
                  <thead className="bg-secondary text-white">
                    <tr>
                      <th className="text-left px-5 py-4 font-semibold cursor-pointer hover:bg-secondary-dark transition-colors" onClick={() => toggleSort('exam')}>
                        <div className="flex items-center gap-1">Examination {sortField === 'exam' ? (sortDir === 'asc' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />) : null}</div>
                      </th>
                      <th className="text-left px-5 py-4 font-semibold">Classes</th>
                      <th className="text-left px-5 py-4 font-semibold cursor-pointer hover:bg-secondary-dark transition-colors" onClick={() => toggleSort('startDate')}>
                        <div className="flex items-center gap-1">Start Date {sortField === 'startDate' ? (sortDir === 'asc' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />) : null}</div>
                      </th>
                      <th className="text-left px-5 py-4 font-semibold">End Date</th>
                      <th className="text-left px-5 py-4 font-semibold">Type</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {sortedExams.map((exam, i) => (
                      <tr key={i} className="hover:bg-bvm-ivory transition-colors">
                        <td className="px-5 py-3.5 font-semibold text-secondary">{exam.exam}</td>
                        <td className="px-5 py-3.5 text-bvm-muted">{exam.class}</td>
                        <td className="px-5 py-3.5 text-bvm-muted">{exam.startDate}</td>
                        <td className="px-5 py-3.5 text-bvm-muted">{exam.endDate}</td>
                        <td className="px-5 py-3.5">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                            exam.type === 'CBSE Board' ? 'bg-primary/10 text-primary' :
                            exam.type === 'Board Prep' ? 'bg-accent/10 text-accent' :
                            exam.type === 'Annual' ? 'bg-green-100 text-green-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>{exam.type}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Academic Calendar */}
      <section id="calendar" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10">
            <div className="rangoli-divider mb-6" />
            <h2 className="section-title">Academic <span className="gradient-text">Calendar 2024-25</span></h2>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {CALENDAR.map((m, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <div className="bg-bvm-ivory rounded-2xl p-4 border border-gray-100 card-hover">
                  <div className="font-heading font-bold text-primary text-sm mb-2">{m.month}</div>
                  <ul className="space-y-1">
                    {m.events.map((e, j) => (
                      <li key={j} className="text-xs font-body text-bvm-muted flex items-start gap-1.5">
                        <span className="text-accent mt-0.5">•</span>{e}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Syllabus Downloads */}
      <section id="syllabus" className="py-20 bg-bvm-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10">
            <div className="rangoli-divider mb-6" />
            <h2 className="section-title">Syllabus <span className="gradient-text">Downloads</span></h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SYLLABUS.map((doc, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-5 shadow-card border border-gray-100 flex items-center justify-between card-hover group">
                  <div>
                    <div className="text-xs font-body text-primary font-semibold mb-1">{doc.class}</div>
                    <div className="font-body font-semibold text-secondary text-sm">{doc.label}</div>
                    <div className="text-xs text-bvm-muted font-body mt-0.5">PDF · {doc.size}</div>
                  </div>
                  <button className="w-10 h-10 bg-primary/10 group-hover:bg-primary rounded-xl flex items-center justify-center transition-colors">
                    <Download className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
