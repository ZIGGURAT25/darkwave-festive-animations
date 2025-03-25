
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import AnimatedText from './AnimatedText';
import RotatingText from './animations/RotatingText';
import ParallaxLayer from './animations/ParallaxLayer';
import { useMousePosition } from '../hooks/useMousePosition';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMousePosition();
  
  // 3D effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const moveX = (clientX / innerWidth - 0.5) * 20;
      const moveY = (clientY / innerHeight - 0.5) * 20;
      
      const elements = heroRef.current.querySelectorAll('.parallax-3d');
      
      elements.forEach((el) => {
        const speedX = Number((el as HTMLElement).getAttribute('data-speed-x') || 1);
        const speedY = Number((el as HTMLElement).getAttribute('data-speed-y') || 1);
        const rotateX = moveY * 0.5 * speedY;
        const rotateY = -moveX * 0.5 * speedX;
        
        (el as HTMLElement).style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-24 pb-16">
      {/* 3D floating elements */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute top-[20%] right-[15%] w-40 h-40 backdrop-blur-lg bg-festival-accent/20 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-[30%] left-[10%] w-64 h-64 backdrop-blur-lg bg-festival-highlight/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[60%] right-[20%] w-24 h-24 backdrop-blur-lg bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Ziggurat-like 3D grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,92,53,0.1)_0%,transparent_70%)]"></div>
        <div className="absolute inset-0 grid-bg"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-10 relative z-10 flex flex-col items-center text-center">
        <div className="bg-festival-accent/80 text-white text-sm font-medium py-2 px-4 rounded-full mb-8 backdrop-blur-sm animate-pulse-glow inline-flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-white rounded-full"></span>
          Live Now: Early Bird Tickets
        </div>
        
        <div className="parallax-3d" data-speed-x="1.5" data-speed-y="1.5">
          <AnimatedText
            text="RECHARGE FEST"
            element="h1"
            className="text-5xl md:text-8xl lg:text-9xl font-display font-bold mb-4 tracking-tight glow-text"
            animation="blur-in"
            splitType="chars"
            delay={0.2}
          />
        </div>
        
        <div className="text-xl md:text-2xl lg:text-3xl text-white/80 font-light mb-8 tracking-wide parallax-3d" data-speed-x="1" data-speed-y="1">
          <RotatingText 
            prefix="THE ULTIMATE " 
            texts={["MUSIC EXPERIENCE", "ELECTRONIC FESTIVAL", "IMMERSIVE JOURNEY"]} 
            className="text-xl md:text-2xl lg:text-3xl text-white/80 font-light tracking-wide"
            typingSpeed={80}
            deletingSpeed={40}
            delayBetween={2000}
          />
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-4 mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="neo-glass py-3 px-6 flex items-center gap-2 hover:bg-white/10 transition-colors duration-300">
            <Calendar className="text-festival-accent" size={20} />
            <span>October 15-17, 2024</span>
          </div>
          <div className="neo-glass py-3 px-6 flex items-center gap-2 hover:bg-white/10 transition-colors duration-300">
            <MapPin className="text-festival-accent" size={20} />
            <span>Bangalore, India</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-6 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <Link to="/tickets" className="button-neo-primary group">
            Get Tickets <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link to="/lineup" className="button-neo-secondary group">
            View Lineup <ArrowRight size={18} className="opacity-0 max-w-0 transition-all duration-300 group-hover:opacity-100 group-hover:max-w-[1.5rem] group-hover:ml-1" />
          </Link>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in" style={{ animationDelay: '2s' }}>
        <span className="text-white/60 text-sm mb-2">Scroll to explore</span>
        <div className="w-5 h-9 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/60 rounded-full mt-1 animate-[bounce_1.5s_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
