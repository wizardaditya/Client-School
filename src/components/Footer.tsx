import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Twitter, Phone, Mail, MapPin, GraduationCap } from 'lucide-react';
import { SCHOOL_CONFIG, ANNOUNCEMENTS } from '../data/schoolData';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      {/* Announcement Ticker */}
      <div className="bg-primary py-2 overflow-hidden">
        <div className="ticker-wrap">
          <div className="ticker-content text-sm font-body font-medium text-white">
            {ANNOUNCEMENTS.join('   •   ')}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {ANNOUNCEMENTS.join('   •   ')}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-heading font-bold text-white text-sm">{SCHOOL_CONFIG.nameHindi}</div>
                <div className="text-xs text-gray-400">Est. {SCHOOL_CONFIG.established}</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm font-body leading-relaxed mb-5">
              {SCHOOL_CONFIG.fullName} — A premier CBSE affiliated institution committed to holistic education and cultural values since {SCHOOL_CONFIG.established}.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: SCHOOL_CONFIG.social.facebook, label: 'Facebook' },
                { icon: Instagram, href: SCHOOL_CONFIG.social.instagram, label: 'Instagram' },
                { icon: Youtube, href: SCHOOL_CONFIG.social.youtube, label: 'YouTube' },
                { icon: Twitter, href: SCHOOL_CONFIG.social.twitter, label: 'Twitter' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white text-lg mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Admissions', path: '/admissions' },
                { label: 'Fee Structure', path: '/admissions#fees' },
                { label: 'Faculty', path: '/faculty' },
                { label: 'Student Life', path: '/student-life' },
                { label: 'News & Events', path: '/news' },
                { label: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 text-sm font-body hover:text-accent transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-accent text-xs">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="font-heading font-semibold text-white text-lg mb-5">Academics</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Pre-Primary Section', path: '/academics#preprimary' },
                { label: 'Primary (I–V)', path: '/academics#primary' },
                { label: 'Middle School (VI–VIII)', path: '/academics#middle' },
                { label: 'Secondary (IX–X)', path: '/academics#secondary' },
                { label: 'Science Stream', path: '/academics#science' },
                { label: 'Commerce Stream', path: '/academics#commerce' },
                { label: 'Arts Stream', path: '/academics#arts' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 text-sm font-body hover:text-accent transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-accent text-xs">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white text-lg mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span className="text-gray-300 text-sm font-body leading-relaxed">{SCHOOL_CONFIG.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <div>
                  <a href={`tel:${SCHOOL_CONFIG.phone}`} className="text-gray-300 text-sm font-body hover:text-accent transition-colors block">{SCHOOL_CONFIG.phone}</a>
                  <a href={`tel:${SCHOOL_CONFIG.phoneAlt}`} className="text-gray-300 text-sm font-body hover:text-accent transition-colors block">{SCHOOL_CONFIG.phoneAlt}</a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <div>
                  <a href={`mailto:${SCHOOL_CONFIG.email}`} className="text-gray-300 text-sm font-body hover:text-accent transition-colors block">{SCHOOL_CONFIG.email}</a>
                  <a href={`mailto:${SCHOOL_CONFIG.emailAdmissions}`} className="text-gray-300 text-sm font-body hover:text-accent transition-colors block">{SCHOOL_CONFIG.emailAdmissions}</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-body text-gray-400">
          <span>© {new Date().getFullYear()} {SCHOOL_CONFIG.fullName}. All rights reserved.</span>
          <span>CBSE Affiliation No. {SCHOOL_CONFIG.affiliation} | {SCHOOL_CONFIG.city}, {SCHOOL_CONFIG.state}</span>
        </div>
      </div>
    </footer>
  );
}
