import React from 'react';
import { Code, Cpu, Network, Rocket, TrendingUp, DollarSign, Clock, Brain, Target, Star, Award } from 'lucide-react';

const Header = () => {
  return (
    <header className="text-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-electric-blue-600 opacity-10 rounded-full blur-xl"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-electric-blue-400 opacity-10 rounded-full blur-xl"></div>
      
      <div className="relative z-10">
        {/* Motivational Banner */}
        <div className="bg-navy-900/50 border border-electric-blue-900/30 rounded-lg p-4 mb-8 max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-3">
            <Brain className="w-6 h-6 text-electric-blue-400" />
            <h2 className="text-xl font-bold text-electric-blue-300 ml-2">Your Journey to Excellence</h2>
          </div>
          <p className="text-gray-300 text-sm">
            You possess the innate ability to master complex systems and make them simple. 
            This roadmap is your guide to unlocking that potential, one step at a time.
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-4">
          <Code className="text-electric-blue-500 w-8 h-8" />
          <Cpu className="text-electric-blue-400 w-8 h-8" />
          <Network className="text-electric-blue-300 w-8 h-8" />
        </div>
        
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-electric-blue-400 to-electric-blue-600">
          8-Week MLOps/DevOps Career Launch Plan
        </h1>
        
        <div className="flex items-center justify-center mt-3 mb-6">
          <div className="h-0.5 w-16 bg-electric-blue-500"></div>
          <Rocket className="mx-4 text-electric-blue-500 w-6 h-6" />
          <div className="h-0.5 w-16 bg-electric-blue-500"></div>
        </div>
        
        <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
          A structured roadmap for someone with basic technical skills who wants to break into
          MLOps or DevOps. Study and build projects for 2-3 hours a day over 8 weeks.
        </p>

        {/* Success Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
          <div className="bg-navy-900/50 p-4 rounded-lg border border-electric-blue-900/30">
            <div className="flex items-center justify-center mb-2">
              <Star className="w-6 h-6 text-electric-blue-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Trust Your Journey</h3>
            <p className="text-sm text-gray-300">Every expert started exactly where you are now. Your dedication will compound into mastery.</p>
          </div>

          <div className="bg-navy-900/50 p-4 rounded-lg border border-electric-blue-900/30">
            <div className="flex items-center justify-center mb-2">
              <Target className="w-6 h-6 text-electric-blue-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Embrace the Process</h3>
            <p className="text-sm text-gray-300">Focus on daily progress. Small, consistent steps lead to remarkable transformations.</p>
          </div>

          <div className="bg-navy-900/50 p-4 rounded-lg border border-electric-blue-900/30">
            <div className="flex items-center justify-center mb-2">
              <Award className="w-6 h-6 text-electric-blue-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Your Potential</h3>
            <p className="text-sm text-gray-300">You have the power to understand and simplify complex systems. Trust in your abilities.</p>
          </div>
        </div>

        {/* Career Potential Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
          <div className="bg-navy-900/50 p-6 rounded-lg border border-electric-blue-900/30">
            <div className="flex items-center justify-center mb-3">
              <TrendingUp className="w-8 h-8 text-electric-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">High Growth Field</h3>
            <p className="text-gray-300">35% YoY growth in MLOps/DevOps positions with 200k+ open roles globally</p>
          </div>

          <div className="bg-navy-900/50 p-6 rounded-lg border border-electric-blue-900/30">
            <div className="flex items-center justify-center mb-3">
              <DollarSign className="w-8 h-8 text-electric-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Monthly Salary (€)</h3>
            <p className="text-gray-300">
              Entry: 6,022€/mo<br />
              3+ years: 9,033€/mo<br />
              Senior: 12,044€/mo
            </p>
          </div>

          <div className="bg-navy-900/50 p-6 rounded-lg border border-electric-blue-900/30">
            <div className="flex items-center justify-center mb-3">
              <Clock className="w-8 h-8 text-electric-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Quick Entry</h3>
            <p className="text-gray-300">Land your first role in 3-6 months with portfolio projects + this roadmap</p>
          </div>
        </div>
        
        <div className="inline-block px-5 py-3 rounded-lg border border-electric-blue-500 bg-navy-900 shadow-lg shadow-electric-blue-900/20">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-3 h-3 bg-electric-blue-500 rounded-full animate-pulse"></span>
            <p className="font-semibold">Journey starts now. Let's build your future in MLOps!</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;