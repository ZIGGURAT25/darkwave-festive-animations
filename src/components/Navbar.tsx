
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 px-6 md:px-10 
      ${isScrolled ? 'bg-festival-darker/90 backdrop-blur-lg' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl font-display font-bold text-white tracking-tight"
        >
          RECHARGE<span className="text-festival-accent">FEST</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/lineup" className="nav-link">Lineup</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/tickets" className="button-primary">Get Tickets</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-festival-darker z-40 transition-all duration-500 md:hidden
          ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ top: '60px' }}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8 p-8">
          <Link 
            to="/" 
            className="text-2xl nav-link" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/lineup" 
            className="text-2xl nav-link" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Lineup
          </Link>
          <Link 
            to="/about" 
            className="text-2xl nav-link" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/tickets" 
            className="button-primary text-xl px-8 py-4" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Tickets
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
