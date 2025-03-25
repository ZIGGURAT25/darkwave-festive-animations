
import React, { useEffect, useRef } from 'react';

interface RotatingCubeProps {
  size?: number;
  position?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
  colors?: string[];
  speed?: number;
}

const RotatingCube: React.FC<RotatingCubeProps> = ({
  size = 120,
  position = { top: '20%', right: '10%' },
  colors = ['rgba(255, 92, 53, 0.8)', 'rgba(110, 58, 255, 0.8)'],
  speed = 10
}) => {
  const cubeRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const rotationRef = useRef({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const cube = cubeRef.current;
    if (!cube) return;

    const animate = () => {
      rotationRef.current.x += 0.003 * speed;
      rotationRef.current.y += 0.005 * speed;
      
      cube.style.transform = `
        rotateX(${rotationRef.current.x}rad) 
        rotateY(${rotationRef.current.y}rad)
      `;
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [speed]);

  const positionStyle = {
    position: 'absolute' as const,
    ...position,
    width: `${size}px`,
    height: `${size}px`,
  };

  const faceStyle = {
    position: 'absolute' as const,
    width: `${size}px`,
    height: `${size}px`,
    backgroundImage: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`,
    opacity: 0.2,
    backfaceVisibility: 'hidden' as const,
  };

  return (
    <div style={{ ...positionStyle, perspective: '1000px', zIndex: 2 }}>
      <div
        ref={cubeRef}
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
          transform: 'rotateX(0) rotateY(0)'
        }}
      >
        {/* Front face */}
        <div
          style={{
            ...faceStyle,
            transform: `translateZ(${size / 2}px)`,
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        />
        
        {/* Back face */}
        <div
          style={{
            ...faceStyle,
            transform: `translateZ(${-size / 2}px) rotateY(180deg)`,
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        />
        
        {/* Right face */}
        <div
          style={{
            ...faceStyle,
            transform: `translateX(${size / 2}px) rotateY(90deg)`,
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        />
        
        {/* Left face */}
        <div
          style={{
            ...faceStyle,
            transform: `translateX(${-size / 2}px) rotateY(-90deg)`,
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        />
        
        {/* Top face */}
        <div
          style={{
            ...faceStyle,
            transform: `translateY(${-size / 2}px) rotateX(90deg)`,
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        />
        
        {/* Bottom face */}
        <div
          style={{
            ...faceStyle,
            transform: `translateY(${size / 2}px) rotateX(-90deg)`,
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        />
      </div>
    </div>
  );
};

export default RotatingCube;
