import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, Circle, ChevronDown, ChevronUp, IndianRupee, Calendar, FileText, Send } from 'lucide-react';
import { FEE_STRUCTURE, ADMISSION_CRITERIA, ADMISSION_DOCS } from '../data/schoolData';

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }} className={className}>
      {children}
    </motion.div>
  );
}

const STEPS = [
  { no: 1, title: 'Download / Collect Form', desc: 'Obtain the admission inquiry form from school office or download it from our website.' },
  { no: 2, title: 'Submit with Documents', desc: 'Submit the filled form along with required documents at the Admissions Cell (Window 2).' },
  { no: 3, title: 'Registration Fee Payment', desc: 'Pay the non-refundable registration fee of ₹500 at the accounts counter.' },
  { no: 4, title: 'Interaction / Assessment', desc: 'Student interaction / age-appropriate assessment for Classes III and above.' },
  { no: 5, title: 'Provisional Admission', desc: 'Selected students receive a provisional admission letter within 5 working days.' },
  { no: 6, title: 'Fee Deposit & Enrollment', desc: 'Complete fee payment and receive the school ID, uniform list, and booklist.' },
];

const FAQS = [
  { q: 'Is the school co-educational?', a: 'Yes, Bharatiya Vidya Mandir is a fully co-educational school welcoming students of all genders.' },
  { q: 'Does BVM provide school transport?', a: 'Yes, we have an extensive school bus network covering all major colonies in Bhopal. AC bus service is also available at an additional charge.' },
  { q: 'What is the medium of instruction?', a: 'English is the primary medium of instruction. Hindi is compulsory as a second language up to Class X.' },
  { q: 'Are there any scholarships available?', a: 'Yes, BVM offers merit scholarships for students scoring 90%+ in previous class, and need-based fee concessions for deserving families.' },
  { q: 'Can I apply for mid-year admission?', a: 'Mid-year admissions are considered on a case-by-case basis depending on seat availability and Transfer Certificate.' },
  { q: 'What is the student-teacher ratio?', a: 'We maintain a 25:1 student-teacher ratio to ensure personal attention for every learner.' },
];

const IMPORTANT_DATES = [
  { event: 'Admission Form Available', date: 'December 1, 2024' },
  { event: 'Last Date for Form Submission', date: 'March 31, 2025' },
  { event: 'Interaction / Assessment', date: 'April 5–10, 2025' },
  { event: 'Provisional List Display', date: 'April 15, 2025' },
  { event: 'Fee Deposit Deadline', date: 'April 25, 2025' },
  { event: 'School Reopens', date: 'April 1, 2025' },
];

export default function AdmissionsPage() {
  const [checkedDocs, setCheckedDocs] = useState<boolean[]>(new Array(ADMISSION_DOCS.length).fill(false));
  const [feeMode, setFeeMode] = useState<'annual' | 'monthly'>('annual');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ studentName: '', dob: '', classApplying: '', parentName: '', mobile: '', email: '', prevSchool: '' });
  const [submitted, setSubmitted] = useState(false);

  const toggleDoc = (i: number) => {
    const copy = [...checkedDocs];
    copy[i] = !copy[i];
    setCheckedDocs(copy);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-bvm-ivory">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-secondary to-secondary-dark overflow-hidden">
        <div className="absolute inset-0 lotus-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Admissions <span className="text-accent">2024-25</span>
            </h1>
            <p className="text-white/70 font-body text-lg max-w-2xl mx-auto">
              Join the Bharatiya Vidya Mandir family. Applications are open for Nursery to Class XII.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-accent px-5 py-2 rounded-full text-sm font-body font-semibold animate-pulse">
              🟢 Admissions Open — Apply before March 31, 2025
            </div>
          </motion.div>
        </div>
      </section>

      {/* Admission Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <div className="rangoli-divider mb-6" />
            <h2 className="section-title">Admission <span className="gradient-text">Process</span></h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {STEPS.map((step, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100 card-hover flex gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0 text-white font-heading font-bold text-lg">
                    {step.no}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-secondary mb-1">{step.title}</h3>
                    <p className="font-body text-sm text-bvm-muted leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Age Criteria */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Reveal className="text-center mb-8">
            <h2 className="section-title">Age <span className="gradient-text">Criteria</span></h2>
          </Reveal>
          <Reveal>
            <div className="bg-bvm-ivory rounded-2xl overflow-hidden shadow-card border border-gray-100">
              <table className="w-full text-sm font-body">
                <thead className="bg-secondary text-white">
                  <tr>
                    <th className="text-left px-5 py-4 font-semibold">Class</th>
                    <th className="text-left px-5 py-4 font-semibold">Minimum Age</th>
                    <th className="text-left px-5 py-4 font-semibold">Maximum Age</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {ADMISSION_CRITERIA.map((row, i) => (
                    <tr key={i} className="hover:bg-white transition-colors">
                      <td className="px-5 py-3.5 font-semibold text-secondary">{row.class}</td>
                      <td className="px-5 py-3.5 text-bvm-muted">{row.minAge}</td>
                      <td className="px-5 py-3.5 text-bvm-muted">{row.maxAge}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Documents Checklist */}
      <section className="py-16 bg-bvm-ivory">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Reveal className="text-center mb-8">
            <div className="rangoli-divider mb-6" />
            <h2 className="section-title">Documents <span className="gradient-text">Checklist</span></h2>
            <p className="section-subtitle">Track what you have ready</p>
          </Reveal>
          <Reveal>
            <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100">
              <div className="flex justify-between items-center mb-5">
                <span className="font-body text-sm text-bvm-muted">
                  {checkedDocs.filter(Boolean).length} / {ADMISSION_DOCS.length} documents ready
                </span>
                <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-bvm-success rounded-full transition-all duration-500"
                    style={{ width: `${(checkedDocs.filter(Boolean).length / ADMISSION_DOCS.length) * 100}%` }}
                  />
                </div>
              </div>
              <ul className="space-y-3">
                {ADMISSION_DOCS.map((doc, i) => (
                  <li key={i}>
                    <button
                      onClick={() => toggleDoc(i)}
                      className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-bvm-ivory transition-colors text-left"
                    >
                      {checkedDocs[i]
                        ? <CheckCircle className="w-5 h-5 text-bvm-success shrink-0" />
                        : <Circle className="w-5 h-5 text-gray-300 shrink-0" />
                      }
                      <span className={`font-body text-sm transition-colors ${checkedDocs[i] ? 'text-bvm-muted line-through' : 'text-bvm-dark'}`}>
                        {doc}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Fee Structure */}
      <section id="fees" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-8">
            <div className="rangoli-divider mb-6" />
            <h2 className="section-title">Fee <span className="gradient-text">Structure 2024-25</span></h2>
          </Reveal>
          <Reveal className="flex justify-center gap-2 mb-8">
            <button
              onClick={() => setFeeMode('annual')}
              className={`px-5 py-2.5 rounded-xl font-body font-semibold text-sm transition-all ${feeMode === 'annual' ? 'bg-primary text-white shadow' : 'bg-gray-100 text-bvm-muted hover:bg-gray-200'}`}
            >
              Annual Fee
            </button>
            <button
              onClick={() => setFeeMode('monthly')}
              className={`px-5 py-2.5 rounded-xl font-body font-semibold text-sm transition-all ${feeMode === 'monthly' ? 'bg-primary text-white shadow' : 'bg-gray-100 text-bvm-muted hover:bg-gray-200'}`}
            >
              Monthly Fee
            </button>
          </Reveal>
          <Reveal>
            <div className="bg-bvm-ivory rounded-2xl overflow-hidden shadow-card border border-gray-100">
              <div className="overflow-x-auto">
                <table className="w-full text-sm font-body">
                  <thead className="bg-secondary text-white">
                    <tr>
                      <th className="text-left px-5 py-4 font-semibold">Class</th>
                      <th className="text-left px-5 py-4 font-semibold">{feeMode === 'annual' ? 'Annual Fee' : 'Monthly Fee'}</th>
                      <th className="text-left px-5 py-4 font-semibold">Admission Fee</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {FEE_STRUCTURE.map((row, i) => (
                      <tr key={i} className="hover:bg-white transition-colors">
                        <td className="px-5 py-3.5 font-semibold text-secondary">{row.class}</td>
                        <td className="px-5 py-3.5 text-bvm-dark font-semibold">
                          <span className="flex items-center gap-1">
                            <IndianRupee className="w-3.5 h-3.5" />
                            {(feeMode === 'annual' ? row.annual : row.monthly).toLocaleString('en-IN')}
                          </span>
                        </td>
                        <td className="px-5 py-3.5 text-bvm-muted">
                          {row.admission > 0
                            ? <span className="flex items-center gap-1"><IndianRupee className="w-3.5 h-3.5" />{row.admission.toLocaleString('en-IN')}</span>
                            : <span className="text-bvm-success text-xs font-semibold">Not Applicable</span>
                          }
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-5 py-3 bg-accent/10 border-t border-amber-100">
                <p className="text-xs font-body text-bvm-muted">* Fees include tuition, examination, and smart class charges. Transport, uniform, and books are additional. All fees subject to annual revision.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Enquiry Form + Important Dates */}
      <section className="py-20 bg-bvm-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <Reveal>
              <div className="bg-white rounded-3xl p-8 shadow-card border border-gray-100">
                <h2 className="section-title mb-2">Admission <span className="gradient-text">Enquiry</span></h2>
                <p className="font-body text-bvm-muted text-sm mb-6">Fill in the details and we'll get in touch within 24 hours.</p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-bvm-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-bvm-success" />
                    </div>
                    <h3 className="font-heading font-bold text-secondary text-xl mb-2">Enquiry Submitted!</h3>
                    <p className="font-body text-bvm-muted text-sm">Our admissions team will contact you within 24 hours on {formData.mobile}.</p>
                    <button onClick={() => setSubmitted(false)} className="btn-primary mt-5 text-sm">Submit Another</button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-body font-semibold text-secondary mb-1.5">Student Name *</label>
                        <input required value={formData.studentName} onChange={(e) => setFormData({ ...formData, studentName: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" placeholder="e.g. Arjun Sharma" />
                      </div>
                      <div>
                        <label className="block text-xs font-body font-semibold text-secondary mb-1.5">Date of Birth *</label>
                        <input required type="date" value={formData.dob} onChange={(e) => setFormData({ ...formData, dob: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-body font-semibold text-secondary mb-1.5">Class Applying For *</label>
                      <select required value={formData.classApplying} onChange={(e) => setFormData({ ...formData, classApplying: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-white">
                        <option value="">-- Select Class --</option>
                        {['Nursery', 'LKG', 'UKG', ...Array.from({ length: 12 }, (_, i) => `Class ${i + 1}`)].map((c) => <option key={c}>{c}</option>)}
                      </select>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-body font-semibold text-secondary mb-1.5">Parent/Guardian Name *</label>
                        <input required value={formData.parentName} onChange={(e) => setFormData({ ...formData, parentName: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" placeholder="e.g. Ramesh Sharma" />
                      </div>
                      <div>
                        <label className="block text-xs font-body font-semibold text-secondary mb-1.5">Mobile Number *</label>
                        <input required type="tel" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" placeholder="10-digit mobile" pattern="[0-9]{10}" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-body font-semibold text-secondary mb-1.5">Email Address</label>
                      <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" placeholder="parent@email.com" />
                    </div>
                    <div>
                      <label className="block text-xs font-body font-semibold text-secondary mb-1.5">Previous School</label>
                      <input value={formData.prevSchool} onChange={(e) => setFormData({ ...formData, prevSchool: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" placeholder="Current / Previous school name" />
                    </div>
                    <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" /> Submit Enquiry
                    </button>
                  </form>
                )}
              </div>
            </Reveal>

            {/* Right side */}
            <div className="space-y-8">
              {/* Important Dates */}
              <Reveal delay={0.15}>
                <div className="bg-white rounded-3xl p-7 shadow-card border border-gray-100">
                  <h3 className="font-heading font-bold text-secondary text-xl mb-5 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" /> Important Dates
                  </h3>
                  <div className="space-y-3">
                    {IMPORTANT_DATES.map((d, i) => (
                      <div key={i} className="flex items-start justify-between gap-4 pb-3 border-b border-gray-100 last:border-0">
                        <span className="font-body text-sm text-bvm-muted">{d.event}</span>
                        <span className="font-body text-sm font-semibold text-primary whitespace-nowrap">{d.date}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* FAQ */}
              <Reveal delay={0.25}>
                <div className="bg-white rounded-3xl p-7 shadow-card border border-gray-100">
                  <h3 className="font-heading font-bold text-secondary text-xl mb-5 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" /> Frequently Asked Questions
                  </h3>
                  <div className="space-y-2">
                    {FAQS.map((faq, i) => (
                      <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
                        <button
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-bvm-ivory transition-colors"
                        >
                          <span className="font-body font-semibold text-secondary text-sm">{faq.q}</span>
                          {openFaq === i ? <ChevronUp className="w-4 h-4 text-primary shrink-0" /> : <ChevronDown className="w-4 h-4 text-bvm-muted shrink-0" />}
                        </button>
                        <motion.div
                          initial={false}
                          animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                          className="overflow-hidden"
                        >
                          <p className="px-4 pb-4 font-body text-sm text-bvm-muted leading-relaxed">{faq.a}</p>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
