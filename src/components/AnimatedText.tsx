
import React, { useEffect, useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  delay?: number;
  once?: boolean;
  animation?: 'fade-in' | 'slide-up' | 'slide-down' | 'scale-in' | 'blur-in';
  splitType?: 'words' | 'chars' | 'none';
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  element: Element = 'div',
  delay = 0,
  once = true,
  animation = 'slide-up',
  splitType = 'none'
}) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-item');
            
            elements.forEach((el, index) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translate(0, 0)';
                (el as HTMLElement).style.filter = 'blur(0)';
              }, delay + index * 50);
            });
            
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            const elements = entry.target.querySelectorAll('.animate-item');
            
            elements.forEach((el) => {
              (el as HTMLElement).style.opacity = '0';
              
              if (animation === 'slide-up') {
                (el as HTMLElement).style.transform = 'translateY(20px)';
              } else if (animation === 'slide-down') {
                (el as HTMLElement).style.transform = 'translateY(-20px)';
              } else if (animation === 'scale-in') {
                (el as HTMLElement).style.transform = 'scale(0.95)';
              } else if (animation === 'blur-in') {
                (el as HTMLElement).style.filter = 'blur(8px)';
              }
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [animation, delay, once]);

  const renderContent = () => {
    if (splitType === 'none') {
      return (
        <span
          className="animate-item inline-block"
          style={{ 
            transition: `opacity 0.6s ease, transform 0.6s ease, filter 0.6s ease`,
            opacity: 0,
            ...(animation === 'slide-up' && { transform: 'translateY(20px)' }),
            ...(animation === 'slide-down' && { transform: 'translateY(-20px)' }),
            ...(animation === 'scale-in' && { transform: 'scale(0.95)' }),
            ...(animation === 'blur-in' && { filter: 'blur(8px)' })
          }}
        >
          {text}
        </span>
      );
    }

    if (splitType === 'words') {
      return text.split(' ').map((word, index) => (
        <span
          key={index}
          className="animate-item inline-block"
          style={{ 
            transition: `opacity 0.6s ease ${delay + index * 0.05}s, transform 0.6s ease ${delay + index * 0.05}s, filter 0.6s ease ${delay + index * 0.05}s`,
            opacity: 0,
            marginRight: '0.25rem',
            ...(animation === 'slide-up' && { transform: 'translateY(20px)' }),
            ...(animation === 'slide-down' && { transform: 'translateY(-20px)' }),
            ...(animation === 'scale-in' && { transform: 'scale(0.95)' }),
            ...(animation === 'blur-in' && { filter: 'blur(8px)' })
          }}
        >
          {word}
        </span>
      ));
    }

    if (splitType === 'chars') {
      return text.split('').map((char, index) => (
        <span
          key={index}
          className="animate-item inline-block"
          style={{ 
            transition: `opacity 0.6s ease ${delay + index * 0.02}s, transform 0.6s ease ${delay + index * 0.02}s, filter 0.6s ease ${delay + index * 0.02}s`,
            opacity: 0,
            ...(animation === 'slide-up' && { transform: 'translateY(20px)' }),
            ...(animation === 'slide-down' && { transform: 'translateY(-20px)' }),
            ...(animation === 'scale-in' && { transform: 'scale(0.95)' }),
            ...(animation === 'blur-in' && { filter: 'blur(8px)' })
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ));
    }

    return null;
  };

  return (
    <Element ref={textRef} className={className}>
      {renderContent()}
    </Element>
  );
};

export default AnimatedText;
