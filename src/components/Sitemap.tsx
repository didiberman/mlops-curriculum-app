import React, { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { weekData } from '../data/weekData';

interface SitemapProps {
  onWeekSelect: (index: number) => void;
}

const Sitemap: React.FC<SitemapProps> = ({ onWeekSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-4 top-4 z-50 bg-navy-900 p-2 rounded-lg border border-electric-blue-500/30 hover:border-electric-blue-500 transition-colors"
        aria-label="Toggle sitemap"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-electric-blue-400" />
        ) : (
          <Menu className="w-6 h-6 text-electric-blue-400" />
        )}
      </button>

      {/* Sitemap panel */}
      <div
        className={`fixed right-0 top-0 h-full w-80 bg-navy-900/95 border-l border-electric-blue-900/30 transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 pt-20">
          <h2 className="text-xl font-bold text-electric-blue-300 mb-6">Course Navigation</h2>
          <nav className="space-y-2">
            {weekData.map((week, index) => (
              <button
                key={index}
                onClick={() => {
                  onWeekSelect(index);
                  setIsOpen(false);
                }}
                className="w-full text-left p-3 rounded-lg bg-navy-800/50 hover:bg-navy-800 border border-electric-blue-900/30 hover:border-electric-blue-500/50 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-300 group-hover:text-electric-blue-300">
                    Week {index + 1}
                  </span>
                  <ChevronRight className="w-4 h-4 text-electric-blue-400 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-xs text-gray-400 mt-1 truncate">{week.title}</p>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sitemap;