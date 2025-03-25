
import React, { useEffect, useRef, ReactNode } from 'react';

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 30,
  duration = 0.7,
  threshold = 0.1,
  once = true,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const getTransform = () => {
      switch (direction) {
        case 'up': return `translateY(${distance}px)`;
        case 'down': return `translateY(-${distance}px)`;
        case 'left': return `translateX(${distance}px)`;
        case 'right': return `translateX(-${distance}px)`;
        case 'none': return 'none';
        default: return `translateY(${distance}px)`;
      }
    };

    // Set initial styles
    section.style.opacity = '0';
    if (direction !== 'none') {
      section.style.transform = getTransform();
    }
    section.style.transition = `opacity ${duration}s ease ${delay}s, transform ${duration}s ease ${delay}s`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.style.opacity = '1';
            section.style.transform = 'translate(0, 0)';
            if (once) {
              observer.unobserve(section);
            }
          } else if (!once) {
            section.style.opacity = '0';
            if (direction !== 'none') {
              section.style.transform = getTransform();
            }
          }
        });
      },
      { threshold }
    );

    observer.observe(section);

    return () => {
      observer.unobserve(section);
    };
  }, [delay, direction, distance, duration, once, threshold]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
};

export default FadeInSection;
