import React, { useEffect, useState } from 'react';
import { Bot } from 'lucide-react';

interface FallingEmoji {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
  type: 'robot' | 'pineapple';
}

const DynamicBackground: React.FC = () => {
  const [emojis, setEmojis] = useState<FallingEmoji[]>([]);

  useEffect(() => {
    const initialEmojis = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 20,
      duration: 15 + Math.random() * 20,
      size: 16 + Math.random() * 24,
      rotation: Math.random() * 360,
      type: i % 5 === 0 ? 'pineapple' : 'robot', // Every 5th emoji is a pineapple
    }));
    setEmojis(initialEmojis);

    const interval = setInterval(() => {
      setEmojis(prev => prev.map(emoji => ({
        ...emoji,
        delay: Math.random() * 20,
        x: Math.random() * 100,
        rotation: Math.random() * 360,
      })));
    }, 35000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950 to-navy-900"></div>
      
      {/* Animated gradient orbs with reduced opacity */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-electric-blue-500/10 to-electric-blue-900/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-gradient-to-tr from-electric-blue-400/5 to-electric-blue-600/5 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      <div className="absolute -bottom-40 right-1/3 w-[30rem] h-[30rem] bg-gradient-to-tl from-electric-blue-600/8 to-electric-blue-400/8 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDBNIDAgMjAgTCA0MCAyMCBNIDIwIDAgTCAyMCA0MCBNIDAgMzAgTCA0MCAzMCBNIDMwIDAgTCAzMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjA0N0E5IiBvcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

      {/* Falling emojis */}
      {emojis.map(emoji => (
        <div
          key={emoji.id}
          className="absolute top-0 transform -translate-y-full"
          style={{
            left: `${emoji.x}%`,
            animation: `fall ${emoji.duration}s linear ${emoji.delay}s infinite`,
            transform: `translateY(-100%) rotate(${emoji.rotation}deg)`,
          }}
        >
          {emoji.type === 'robot' ? (
            <Bot 
              className="text-electric-blue-400/15" 
              style={{ 
                width: emoji.size, 
                height: emoji.size 
              }} 
            />
          ) : (
            <div 
              style={{ 
                fontSize: `${emoji.size * 1.2}px`,
                opacity: 0.2
              }}
            >
              🍍
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DynamicBackground;