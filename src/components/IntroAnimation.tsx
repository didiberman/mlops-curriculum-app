import React, { useState, useEffect } from 'react';
import { Bot } from 'lucide-react';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFlickering, setIsFlickering] = useState(false);

  useEffect(() => {
    // Fade in
    setTimeout(() => setIsVisible(true), 400);

    // Start flickering
    setTimeout(() => setIsFlickering(true), 1500);

    // Fade out and complete
    setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 400);
    }, 3000);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 bg-navy-950 flex items-center justify-center transition-opacity duration-400 z-50 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className={`transform ${isFlickering ? 'animate-flicker' : ''}`}>
        <Bot className="w-32 h-32 text-electric-blue-400" />
      </div>
    </div>
  );
};

export default IntroAnimation;