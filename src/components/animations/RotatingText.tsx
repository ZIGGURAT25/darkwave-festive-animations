
import React, { useState, useEffect } from 'react';

interface RotatingTextProps {
  texts: string[];
  period?: number;
  className?: string;
  prefix?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
}

const RotatingText: React.FC<RotatingTextProps> = ({
  texts,
  period = 2000,
  className = '',
  prefix = '',
  typingSpeed = 100,
  deletingSpeed = 50, 
  delayBetween = 1000
}) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(typingSpeed);

  useEffect(() => {
    let ticker = setTimeout(() => {
      tick();
    }, delta);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNum, delta]);

  const tick = () => {
    const i = loopNum % texts.length;
    const fullText = texts[i];

    if (isDeleting) {
      setText(fullText.substring(0, text.length - 1));
      setDelta(deletingSpeed);
    } else {
      setText(fullText.substring(0, text.length + 1));
      setDelta(typingSpeed);
    }

    if (!isDeleting && text === fullText) {
      setIsDeleting(true);
      setDelta(delayBetween);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <span className={`${className} inline-block`}>
      {prefix && <span>{prefix}</span>}
      <span className="relative">
        <span>{text}</span>
        <span className="absolute right-0 top-0 w-0.5 h-full bg-festival-accent animate-pulse"></span>
      </span>
    </span>
  );
};

export default RotatingText;
