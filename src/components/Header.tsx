
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin } from 'lucide-react';
import AnimatedText from './AnimatedText';

const Header: React.FC = () => {
  return (
    <header className="w-full py-8 px-6 md:px-10 bg-gradient-to-b from-festival-darker/90 to-transparent backdrop-blur-sm">
      <div className="container mx-auto flex flex-col items-center text-center">
        <div className="bg-festival-accent/80 text-white text-sm font-medium py-2 px-4 rounded-full mb-8 backdrop-blur-sm inline-flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-white rounded-full"></span>
          Live Now: Early Bird Tickets
        </div>
        
        <AnimatedText
          text="RECHARGE FEST"
          element="h1"
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-4 tracking-tight"
          animation="blur-in"
          splitType="chars"
          delay={0.2}
        />
        
        <p className="text-xl md:text-2xl lg:text-3xl text-white/80 font-light mb-8 tracking-wide">
          THE ULTIMATE MUSIC EXPERIENCE
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-4 mb-10">
          <div className="glass-panel py-3 px-6 flex items-center gap-2 hover:bg-white/10 transition-colors duration-300">
            <Calendar className="text-festival-accent" size={20} />
            <span>October 15-17, 2024</span>
          </div>
          <div className="glass-panel py-3 px-6 flex items-center gap-2 hover:bg-white/10 transition-colors duration-300">
            <MapPin className="text-festival-accent" size={20} />
            <span>Bangalore, India</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <Link to="/tickets" className="button-primary">
            Get Tickets
          </Link>
          <Link to="/lineup" className="button-secondary">
            View Lineup
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
