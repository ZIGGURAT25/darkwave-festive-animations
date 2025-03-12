
import React, { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  duration?: number;
  distance?: number;
  origin?: 'top' | 'right' | 'bottom' | 'left';
  reset?: boolean;
  staggerChildren?: boolean;
  staggerDelay?: number;
  once?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  threshold = 0.1,
  delay = 0,
  duration = 800,
  distance = 30,
  origin = 'bottom',
  reset = false,
  staggerChildren = false,
  staggerDelay = 0.1,
  once = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const childrenArray = React.Children.toArray(children);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const getTransform = () => {
      switch (origin) {
        case 'top': return `translateY(${-distance}px)`;
        case 'right': return `translateX(${distance}px)`;
        case 'bottom': return `translateY(${distance}px)`;
        case 'left': return `translateX(${-distance}px)`;
        default: return `translateY(${distance}px)`;
      }
    };

    // Initial styles
    element.style.opacity = '0';
    element.style.transform = getTransform();
    element.style.transition = `opacity ${duration}ms ease ${delay}ms, transform ${duration}ms ease ${delay}ms`;

    if (staggerChildren) {
      const children = element.children;
      Array.from(children).forEach((child, index) => {
        (child as HTMLElement).style.opacity = '0';
        (child as HTMLElement).style.transform = getTransform();
        (child as HTMLElement).style.transition = `opacity ${duration}ms ease ${delay + index * (staggerDelay * 1000)}ms, transform ${duration}ms ease ${delay + index * (staggerDelay * 1000)}ms`;
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.style.opacity = '1';
            element.style.transform = 'translate(0, 0)';

            if (staggerChildren) {
              const children = element.children;
              Array.from(children).forEach((child, index) => {
                setTimeout(() => {
                  (child as HTMLElement).style.opacity = '1';
                  (child as HTMLElement).style.transform = 'translate(0, 0)';
                }, index * (staggerDelay * 1000));
              });
            }

            if (once) observer.unobserve(element);
          } else if (reset) {
            element.style.opacity = '0';
            element.style.transform = getTransform();

            if (staggerChildren) {
              const children = element.children;
              Array.from(children).forEach((child) => {
                (child as HTMLElement).style.opacity = '0';
                (child as HTMLElement).style.transform = getTransform();
              });
            }
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay, distance, duration, once, origin, reset, staggerChildren, staggerDelay, threshold]);

  return (
    <div ref={ref} className={className}>
      {staggerChildren 
        ? childrenArray.map((child, index) => (
            <div key={index} className="stagger-item">
              {child}
            </div>
          ))
        : children}
    </div>
  );
};

export default ScrollReveal;
