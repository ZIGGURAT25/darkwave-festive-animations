
import React, { useState, useEffect } from 'react';

interface ScrollProgressProps {
  color?: string;
  height?: number;
  zIndex?: number;
  position?: 'top' | 'bottom';
}

const ScrollProgress: React.FC<ScrollProgressProps> = ({
  color = '#FF5C35',
  height = 3,
  zIndex = 50,
  position = 'top'
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPosition = window.scrollY;
      
      if (totalHeight) {
        setScrollProgress((scrollPosition / totalHeight) * 100);
      }
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      style={{
        position: 'fixed',
        left: 0,
        [position]: 0,
        width: '100%',
        height: `${height}px`,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        zIndex
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${scrollProgress}%`,
          backgroundColor: color,
          transition: 'width 0.1s ease'
        }}
      />
    </div>
  );
};

export default ScrollProgress;
