import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Facebook, Instagram, Star } from 'lucide-react';
import { SITE_INFO } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    setIsMenuOpen(false);
    // Scroll to top
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'À Propos', path: '/about' },
    { name: 'Galerie', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans text-primary bg-secondary">
      {/* Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="z-50">
            <h1 className={`font-serif text-2xl md:text-3xl font-bold tracking-tight transition-colors ${
              scrolled || isMenuOpen ? 'text-primary' : 'text-white'
            }`}>
              Le Baobab
            </h1>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium tracking-wide hover:text-accent transition-colors ${
                  scrolled ? 'text-primary' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="px-5 py-2.5 bg-accent hover:bg-amber-700 text-white text-sm font-semibold rounded-sm transition-colors shadow-lg"
            >
              RÉSERVER
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden z-50 p-2 text-accent focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} color={scrolled ? '#0f172a' : '#ffffff'} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div 
          className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ease-in-out md:hidden ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-2xl font-serif font-medium text-primary hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="px-8 py-3 bg-accent text-white text-lg font-semibold rounded-sm shadow-xl"
          >
            RÉSERVER
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-700 pb-12">
            
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="font-serif text-3xl font-bold">Le Baobab</h3>
              <p className="text-gray-400 leading-relaxed max-w-xs">
                Une cuisine authentique au cœur de Saly. Fruits de mer frais, grillades et saveurs locales dans un cadre élégant.
              </p>
              <div className="flex space-x-4 pt-4">
                <a href={SITE_INFO.socials.facebook} className="p-2 bg-gray-800 rounded-full hover:bg-accent transition-colors">
                  <Facebook size={20} />
                </a>
                <a href={SITE_INFO.socials.instagram} className="p-2 bg-gray-800 rounded-full hover:bg-accent transition-colors">
                  <Instagram size={20} />
                </a>
                <a href={SITE_INFO.socials.tripadvisor} className="p-2 bg-gray-800 rounded-full hover:bg-accent transition-colors">
                  <Star size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold tracking-wider text-accent">NAVIGATION</h4>
              <ul className="space-y-2">
                <li><Link to="/menu" className="text-gray-400 hover:text-white transition-colors">Notre Menu</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">Notre Histoire</Link></li>
                <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Galerie</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Réservation</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold tracking-wider text-accent">CONTACT</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 text-gray-400">
                  <MapPin className="shrink-0 mt-1" size={18} />
                  <span>{SITE_INFO.address}</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-400">
                  <Phone className="shrink-0" size={18} />
                  <span>{SITE_INFO.phone}</span>
                </li>
                <li className="text-gray-400 pt-2">
                  <span className="block text-white font-medium mb-1">Horaires :</span>
                  {SITE_INFO.openingHours}
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Le Baobab. Tous droits réservés.</p>
            <p className="mt-2 md:mt-0">Design & Développement MVP</p>
          </div>
        </div>
      </footer>
      
      {/* Sticky Mobile Call Button */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <a href={`tel:${SITE_INFO.phone.replace(/\s/g, '')}`} className="flex items-center justify-center w-14 h-14 bg-accent text-white rounded-full shadow-2xl hover:bg-amber-700 transition-colors">
          <Phone size={24} />
        </a>
      </div>
    </div>
  );
};

export default Layout;