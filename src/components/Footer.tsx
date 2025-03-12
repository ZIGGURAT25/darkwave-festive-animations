
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-festival-dark border-t border-white/5 pt-16 pb-8 px-6 md:px-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-10 md:mb-0">
            <Link to="/" className="text-4xl font-display font-bold tracking-tight">
              RECHARGE<span className="text-festival-accent">FEST</span>
            </Link>
            <p className="text-white/60 mt-4 max-w-md">
              The ultimate music experience featuring the world's best electronic artists in a breathtaking setting.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-white/60 hover:text-festival-accent transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-festival-accent transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-festival-accent transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-festival-accent transition-colors duration-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-lg font-medium mb-4">Event</h3>
              <ul className="space-y-2">
                <li><Link to="/lineup" className="text-white/60 hover:text-white transition-colors duration-300">Lineup</Link></li>
                <li><Link to="/tickets" className="text-white/60 hover:text-white transition-colors duration-300">Tickets</Link></li>
                <li><Link to="/about" className="text-white/60 hover:text-white transition-colors duration-300">About</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Info</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/60 hover:text-white transition-colors duration-300">FAQ</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors duration-300">Terms</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors duration-300">Privacy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:info@rechargefest.com" className="text-white/60 hover:text-white transition-colors duration-300 flex items-center gap-2">
                    <Mail size={16} />
                    <span>info@rechargefest.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-sm mb-4 md:mb-0">
            © 2024 RechargeFest. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-300"
          >
            Back to top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
