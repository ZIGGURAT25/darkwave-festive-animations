
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useMobile } from '@/hooks/use-mobile';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useMobile();
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  
  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-display font-bold text-white">
            RECHARGE<span className="text-festival-accent">FEST</span>
          </Link>
          
          {isMobile ? (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          ) : (
            <div className="flex items-center space-x-8">
              <Link to="/" className="nav-link">HOME</Link>
              <Link to="/lineup" className="nav-link">LINEUP</Link>
              <Link to="/about" className="nav-link">ABOUT</Link>
              <Link to="/tickets" className="nav-link">TICKETS</Link>
              <Link to="/registration" className="nav-link">REGISTRATION</Link>
              <Button asChild className="button-primary">
                <Link to="/tickets">GET TICKETS</Link>
              </Button>
            </div>
          )}
        </div>
        
        {isMobile && isOpen && (
          <div className="pt-6 pb-4 flex flex-col space-y-4">
            <Link to="/" className="nav-link text-xl">HOME</Link>
            <Link to="/lineup" className="nav-link text-xl">LINEUP</Link>
            <Link to="/about" className="nav-link text-xl">ABOUT</Link>
            <Link to="/tickets" className="nav-link text-xl">TICKETS</Link>
            <Link to="/registration" className="nav-link text-xl">REGISTRATION</Link>
            <Button asChild className="button-primary w-full mt-4">
              <Link to="/tickets">GET TICKETS</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
