import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';
import { navLinks } from '../data/navigation';
import logoImg from '../assets/images/logo.png';

export default function Footer() {
  return (
    <footer className="bg-[#08203E] text-slate-300 border-t border-slate-800">
      {/* Upper Footer section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2.5">
              <img
                src={logoImg}
                alt="Ishaan Foundation Logo"
                className="h-9 w-9 object-contain"
              />
              <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                ISHAAN FOUNDATION
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Working toward affordable, accessible, and quality healthcare for underserved communities in rural North Bengal, India.
            </p>
            <div className="pt-2 flex items-center space-x-1.5 text-xs text-emerald-400 font-medium">
              <span>Made with care for rural health</span>
              <Heart className="h-3 w-3 fill-emerald-400" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-semibold text-base mb-6 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-[2px] after:bg-emerald-500">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-emerald-400 transition-colors duration-200 flex items-center"
                  >
                    <span className="mr-1.5 text-emerald-500">•</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-white font-heading font-semibold text-base mb-6 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-[2px] after:bg-emerald-500">
              Resources
            </h3>
            <ul className="space-y-3 text-sm">
              {navLinks.slice(4).map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-emerald-400 transition-colors duration-200 flex items-center"
                  >
                    <span className="mr-1.5 text-emerald-500">•</span>
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/volunteer"
                  className="hover:text-emerald-400 transition-colors duration-200 flex items-center"
                >
                  <span className="mr-1.5 text-emerald-500">•</span>
                  Volunteer With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="space-y-4">
            <h3 className="text-white font-heading font-semibold text-base mb-6 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-[2px] after:bg-emerald-500">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/YxGwCGSSYg2NkMiNA?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 leading-snug hover:text-white transition-colors"
                >
                  Surya Nagar, Rabindra Sarani,
                  <br />
                  Jalpaiguri, West Bengal, India
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-500 shrink-0" />
                <a href="tel:+919002781727" className="hover:text-white transition-colors">
                  +91 9002781727
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-500 shrink-0" />
                <a href="mailto:ishaanfoundation01@gmail.com" className="hover:text-white transition-colors break-all">
                  ishaanfoundation01@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Lower Footer section */}
      <div className="bg-[#05152a] py-6 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 space-y-3 md:space-y-0">
          <div>
            &copy; 2026 ISHAAN FOUNDATION. All Rights Reserved.
          </div>
          <div className="flex space-x-6">
            <span>Jalpaiguri, West Bengal, India</span>
            <span>|</span>
            <span>Static Website for Rural Social Health</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
