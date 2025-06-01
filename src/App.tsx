import React, { useState, useRef } from 'react';
import Header from './components/Header';
import WeekSection from './components/WeekSection';
import Footer from './components/Footer';
import IntroAnimation from './components/IntroAnimation';
import DynamicBackground from './components/DynamicBackground';
import Sitemap from './components/Sitemap';
import { weekData } from './data/weekData';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToWeek = (index: number) => {
    const weekElements = contentRef.current?.getElementsByClassName('week-section');
    if (weekElements && weekElements[index]) {
      weekElements[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {showIntro ? (
        <IntroAnimation onComplete={() => setShowIntro(false)} />
      ) : (
        <div className="min-h-screen bg-transparent text-white font-sans relative">
          <DynamicBackground />
          <Sitemap onWeekSelect={scrollToWeek} />
          
          <div ref={contentRef} className="relative z-10">
            <div className="max-w-5xl mx-auto px-4 py-12 md:px-8">
              <Header />
              
              <div className="mt-12 relative">
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-electric-blue-500 transform md:-translate-x-1/2" />
                
                {weekData.map((week, index) => (
                  <div key={index} className="week-section">
                    <WeekSection 
                      week={week} 
                      index={index} 
                      isEven={index % 2 === 0} 
                    />
                  </div>
                ))}
              </div>
              
              <Footer />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;