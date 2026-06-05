import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { SCHOOL_CONFIG } from '../data/schoolData';

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }} className={className}>
      {children}
    </motion.div>
  );
}

const CONTACT_CARDS = [
  {
    title: 'Main Office',
    phone: SCHOOL_CONFIG.phone,
    email: SCHOOL_CONFIG.email,
    hours: 'Mon–Fri: 8AM–4PM | Sat: 9AM–1PM',
    color: 'from-primary to-primary-dark',
  },
  {
    title: "Admissions Cell",
    phone: SCHOOL_CONFIG.phoneAlt,
    email: SCHOOL_CONFIG.emailAdmissions,
    hours: 'Mon–Sat: 9AM–2PM',
    color: 'from-secondary to-secondary-dark',
  },
  {
    title: "Principal's Office",
    phone: '+91 755 2660 789',
    email: 'principal@bvmbhopal.edu.in',
    hours: 'Mon–Fri: 10AM–12PM (By Appointment)',
    color: 'from-accent to-accent-dark',
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

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
              Get in <span className="text-accent">Touch</span>
            </h1>
            <p className="text-white/70 font-body text-lg max-w-2xl mx-auto">
              We'd love to hear from you. Reach our offices, admissions cell, or principal's office.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-5">
            {CONTACT_CARDS.map((card, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className={`bg-gradient-to-br ${card.color} rounded-2xl p-7 text-white shadow-card`}>
                  <h3 className="font-heading font-bold text-lg mb-4">{card.title}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 shrink-0 text-white/70" />
                      <a href={`tel:${card.phone}`} className="font-body text-sm hover:underline">{card.phone}</a>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 shrink-0 text-white/70" />
                      <a href={`mailto:${card.email}`} className="font-body text-sm hover:underline break-all">{card.email}</a>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 shrink-0 text-white/70 mt-0.5" />
                      <span className="font-body text-sm text-white/80">{card.hours}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <Reveal>
              <div className="bg-white rounded-3xl p-8 shadow-card border border-gray-100">
                <h2 className="section-title mb-2">Send Us a <span className="gradient-text">Message</span></h2>
                <p className="font-body text-bvm-muted text-sm mb-6">We'll respond within one working day.</p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-bvm-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-bvm-success" />
                    </div>
                    <h3 className="font-heading font-bold text-secondary text-xl mb-2">Message Sent!</h3>
                    <p className="font-body text-bvm-muted text-sm">Thank you for reaching out. We'll get back to you at {form.email} within 24 hours.</p>
                    <button onClick={() => setSubmitted(false)} className="btn-primary mt-5 text-sm">Send Another Message</button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-body font-semibold text-secondary mb-1.5">Full Name *</label>
                        <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" placeholder="Your full name" />
                      </div>
                      <div>
                        <label className="block text-xs font-body font-semibold text-secondary mb-1.5">Email Address *</label>
                        <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" placeholder="your@email.com" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-body font-semibold text-secondary mb-1.5">Phone Number</label>
                        <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" placeholder="10-digit mobile" />
                      </div>
                      <div>
                        <label className="block text-xs font-body font-semibold text-secondary mb-1.5">Subject *</label>
                        <select required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-white">
                          <option value="">-- Select Subject --</option>
                          <option>Admission Enquiry</option>
                          <option>Fee Related</option>
                          <option>Academic Query</option>
                          <option>General Feedback</option>
                          <option>Complaint</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-body font-semibold text-secondary mb-1.5">Message *</label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                        placeholder="Write your message here..."
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" /> Send Message
                    </button>
                  </form>
                )}
              </div>
            </Reveal>

            {/* Map + Info */}
            <div className="space-y-6">
              <Reveal delay={0.15}>
                <div className="rounded-2xl overflow-hidden shadow-card h-72">
                  <iframe
                    title="School Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.097!2d77.43!3d23.24!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBhopal!5e0!3m2!1sen!2sin!4v1609459200000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100">
                  <h3 className="font-heading font-bold text-secondary mb-4">School Address</h3>
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="font-body text-sm text-bvm-muted">{SCHOOL_CONFIG.address}</span>
                  </div>
                  <h4 className="font-body font-semibold text-secondary text-sm mb-3">Working Hours</h4>
                  <div className="space-y-2">
                    {SCHOOL_CONFIG.workingHours.map((h, i) => (
                      <div key={i} className="flex justify-between text-sm font-body">
                        <span className="text-bvm-muted">{h.day}</span>
                        <span className="font-semibold text-secondary">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.35}>
                <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100">
                  <h3 className="font-heading font-bold text-secondary mb-4">Follow Us</h3>
                  <div className="flex gap-3">
                    {[
                      { icon: Facebook, href: SCHOOL_CONFIG.social.facebook, label: 'Facebook', color: 'hover:bg-blue-600' },
                      { icon: Instagram, href: SCHOOL_CONFIG.social.instagram, label: 'Instagram', color: 'hover:bg-pink-600' },
                      { icon: Youtube, href: SCHOOL_CONFIG.social.youtube, label: 'YouTube', color: 'hover:bg-red-600' },
                      { icon: Twitter, href: SCHOOL_CONFIG.social.twitter, label: 'Twitter', color: 'hover:bg-sky-500' },
                    ].map(({ icon: Icon, href, label, color }) => (
                      <a
                        key={label}
                        href={href}
                        aria-label={label}
                        className={`w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-bvm-muted ${color} hover:text-white transition-all`}
                      >
                        <Icon className="w-4 h-4" />
                      </a>
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
