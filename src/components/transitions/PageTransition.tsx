
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState('fadeIn');

  useEffect(() => {
    const childrenArray = React.Children.toArray(children);
    const childrenElement = childrenArray[0] as React.ReactElement;
    
    if (location.pathname !== childrenElement?.props?.location?.pathname) {
      setTransitionStage('fadeOut');
      
      const timeout = setTimeout(() => {
        setDisplayChildren(children);
        setTransitionStage('fadeIn');
      }, 500); // match this with your CSS transition time
      
      return () => clearTimeout(timeout);
    }
  }, [location, displayChildren, children]);

  return (
    <div
      className={`transition-all duration-500 ${
        transitionStage === 'fadeIn' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {displayChildren}
    </div>
  );
};

export default PageTransition;
