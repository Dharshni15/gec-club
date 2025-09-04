import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Office Bearers', path: '/office-bearers' },
  ];

  return (
    <footer className="bg-gradient-to-br from-primary to-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">GEC</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Gender Equality Club</h3>
                <p className="text-white/80">Kongu College</p>
              </div>
            </div>
            <p className="text-white/90 leading-relaxed">
              Promoting gender equality, inclusivity, and empowerment among students. 
              Building a more equitable future through education, awareness, and action.
            </p>
            <div className="flex space-x-4">
              
              <a href="https://www.instagram.com/genderequalityclub_kec?igsh=emo3bHVxdnhiYmMx" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:scale-110 hover:bg-white/30 transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-white transition-colors hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-white/80" />
                <span className="text-white/90">
                  Kongu Engineering College<br />
                  Perundurai, Erode - 638060
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white/80" />
                <span className="text-white/90">gec@kongu.edu</span>
                
              </div>
              
              
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/80">
            © 2025 Gender Equality Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;