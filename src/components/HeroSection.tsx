
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import AnimatedText from './AnimatedText';
import RotatingText from './animations/RotatingText';
import ParallaxLayer from './animations/ParallaxLayer';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const moveX = clientX / innerWidth - 0.5;
      const moveY = clientY / innerHeight - 0.5;
      
      const movableElements = heroRef.current.querySelectorAll('.parallax');
      
      movableElements.forEach((el) => {
        const speedX = Number((el as HTMLElement).getAttribute('data-speed-x') || 0);
        const speedY = Number((el as HTMLElement).getAttribute('data-speed-y') || 0);
        
        (el as HTMLElement).style.transform = `translate(${moveX * speedX}px, ${moveY * speedY}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-24 pb-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 w-full h-full">
        <ParallaxLayer speed={-0.2} className="absolute top-[10%] right-[15%]">
          <div className="w-80 h-80 bg-festival-accent/10 rounded-full blur-[100px] parallax" data-speed-x="-20" data-speed-y="10"></div>
        </ParallaxLayer>
        
        <ParallaxLayer speed={0.3} className="absolute bottom-[20%] left-[10%]">
          <div className="w-96 h-96 bg-festival-highlight/10 rounded-full blur-[120px] parallax" data-speed-x="30" data-speed-y="-15"></div>
        </ParallaxLayer>
      </div>
      
      {/* Grid decoration */}
      <div className="absolute inset-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYwOCIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+PC9wYXR0ZXJuPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiPjwvcmVjdD48L3N2Zz4=')]" style={{ opacity: 0.4 }}></div>
      
      <div className="container mx-auto px-6 md:px-10 relative z-10 flex flex-col items-center text-center">
        <div className="bg-festival-accent/80 text-white text-sm font-medium py-2 px-4 rounded-full mb-8 backdrop-blur-sm animate-pulse inline-flex items-center gap-2">
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
        
        <div className="text-xl md:text-2xl lg:text-3xl text-white/80 font-light mb-8 tracking-wide">
          <RotatingText 
            prefix="THE ULTIMATE " 
            texts={["MUSIC EXPERIENCE", "ELECTRONIC FESTIVAL", "IMMERSIVE JOURNEY"]} 
            className="text-xl md:text-2xl lg:text-3xl text-white/80 font-light tracking-wide"
            typingSpeed={80}
            deletingSpeed={40}
            delayBetween={2000}
          />
        </div>
        
        <AnimatedText
          element="div"
          text=""
          className="flex flex-wrap justify-center items-center gap-4 mb-10 opacity-0 animate-fade-in"
          animation="fade-in"
          delay={1}
        >
          <div className="glass-panel py-3 px-6 flex items-center gap-2 hover:bg-white/10 transition-colors duration-300">
            <Calendar className="text-festival-accent" size={20} />
            <span>October 15-17, 2024</span>
          </div>
          <div className="glass-panel py-3 px-6 flex items-center gap-2 hover:bg-white/10 transition-colors duration-300">
            <MapPin className="text-festival-accent" size={20} />
            <span>Bangalore, India</span>
          </div>
        </AnimatedText>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-6 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <Link to="/tickets" className="button-primary group">
            Get Tickets <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link to="/lineup" className="button-secondary group">
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
