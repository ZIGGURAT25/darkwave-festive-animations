
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
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
              <Link to="/" className="text-white hover:text-festival-accent transition-colors duration-300">HOME</Link>
              <Link to="/lineup" className="text-white hover:text-festival-accent transition-colors duration-300">LINEUP</Link>
              <Link to="/about" className="text-white hover:text-festival-accent transition-colors duration-300">ABOUT</Link>
              <Link to="/tickets" className="text-white hover:text-festival-accent transition-colors duration-300">TICKETS</Link>
              <Link to="/registration" className="text-white hover:text-festival-accent transition-colors duration-300">REGISTRATION</Link>
              <Button asChild className="bg-festival-accent hover:bg-festival-accent/80 text-white">
                <Link to="/tickets">GET TICKETS</Link>
              </Button>
            </div>
          )}
        </div>
        
        {isMobile && isOpen && (
          <div className="pt-6 pb-4 flex flex-col space-y-4">
            <Link to="/" className="text-white hover:text-festival-accent transition-colors duration-300 text-xl">HOME</Link>
            <Link to="/lineup" className="text-white hover:text-festival-accent transition-colors duration-300 text-xl">LINEUP</Link>
            <Link to="/about" className="text-white hover:text-festival-accent transition-colors duration-300 text-xl">ABOUT</Link>
            <Link to="/tickets" className="text-white hover:text-festival-accent transition-colors duration-300 text-xl">TICKETS</Link>
            <Link to="/registration" className="text-white hover:text-festival-accent transition-colors duration-300 text-xl">REGISTRATION</Link>
            <Button asChild className="bg-festival-accent hover:bg-festival-accent/80 text-white w-full mt-4">
              <Link to="/tickets">GET TICKETS</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
