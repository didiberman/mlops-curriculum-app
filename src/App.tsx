import React from 'react';
import Header from './components/Header';
import WeekSection from './components/WeekSection';
import Footer from './components/Footer';
import { weekData } from './data/weekData';

function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-white font-sans">
      <div className="max-w-5xl mx-auto px-4 py-12 md:px-8">
        <Header />
        
        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-electric-blue-500 transform md:-translate-x-1/2" />
          
          {weekData.map((week, index) => (
            <WeekSection 
              key={index} 
              week={week} 
              index={index} 
              isEven={index % 2 === 0} 
            />
          ))}
        </div>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;