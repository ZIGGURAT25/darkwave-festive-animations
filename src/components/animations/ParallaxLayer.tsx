
import React, { useEffect, useRef } from 'react';

interface ParallaxLayerProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'vertical' | 'horizontal';
  className?: string;
  style?: React.CSSProperties;
}

const ParallaxLayer: React.FC<ParallaxLayerProps> = ({
  children,
  speed = 0.5,
  direction = 'vertical',
  className = '',
  style = {},
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const initialPosition = useRef(0);
  const requestRef = useRef<number>();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const parallaxOffset = scrollPosition * speed;

      if (direction === 'vertical') {
        element.style.transform = `translateY(${parallaxOffset}px)`;
      } else {
        element.style.transform = `translateX(${parallaxOffset}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [speed, direction]);

  return (
    <div
      ref={ref}
      className={`transition-transform will-change-transform ${className}`}
      style={{ 
        ...style,
        position: 'relative',
        zIndex: 1,
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxLayer;
