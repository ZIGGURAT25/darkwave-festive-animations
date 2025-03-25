
import React from 'react';
import AnimatedText from '../AnimatedText';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  animation?: 'fade-in' | 'slide-up' | 'slide-down' | 'scale-in' | 'blur-in';
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  centered = true,
  animation = 'blur-in',
  className = '',
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <AnimatedText
        text={title}
        element="h2"
        className="section-heading text-gradient"
        animation={animation}
        splitType="chars"
      />
      
      {subtitle && (
        <AnimatedText
          text={subtitle}
          element="p"
          className="text-lg text-white/80 mt-4 max-w-3xl mx-auto"
          animation="fade-in"
          delay={0.3}
        />
      )}
    </div>
  );
};

export default SectionHeader;
