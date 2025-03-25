
import React, { useEffect, useRef } from 'react';
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
    <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
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
    </section>
  );
};

export default HeroSection;
