import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Office Bearers', path: '/office-bearers' },
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-700 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <img src="/favicon.jpg" alt="icon" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="hidden sm:block">
              <span className="text-2xl font-bold text-white">
                Gender Equality Club
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-3 text-base font-medium transition-all duration-300 group ${
                  isActivePath(item.path)
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
                {isActivePath(item.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></span>
                )}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-12 h-12 p-0 rounded-full hover:bg-gray-800 transition-colors text-white"
            >
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-3 animate-in slide-in-from-top-2 duration-300">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-3 text-base font-medium rounded-md transition-all duration-200 text-white ${
                  isActivePath(item.path)
                    ? 'bg-blue-900/30 border-l-4 border-l-blue-400'
                    : 'hover:bg-gray-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
