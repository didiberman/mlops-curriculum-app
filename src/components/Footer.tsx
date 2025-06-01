import React from 'react';
import { BookOpen, Github, Linkedin, MessageSquare, Brain, Rocket, Target } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-navy-800 pt-8 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Additional Resources</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <BookOpen className="w-4 h-4 mr-2 text-electric-blue-400" />
              <a href="#" className="text-gray-300 hover:text-electric-blue-400 transition-colors">
                Free MLOps Learning Resources
              </a>
            </li>
            <li className="flex items-center">
              <Github className="w-4 h-4 mr-2 text-electric-blue-400" />
              <a href="#" className="text-gray-300 hover:text-electric-blue-400 transition-colors">
                GitHub Project Templates
              </a>
            </li>
            <li className="flex items-center">
              <Linkedin className="w-4 h-4 mr-2 text-electric-blue-400" />
              <a href="#" className="text-gray-300 hover:text-electric-blue-400 transition-colors">
                MLOps Network & Communities
              </a>
            </li>
            <li className="flex items-center">
              <MessageSquare className="w-4 h-4 mr-2 text-electric-blue-400" />
              <a href="#" className="text-gray-300 hover:text-electric-blue-400 transition-colors">
                Discord Community
              </a>
            </li>
          </ul>

          <div className="mt-6">
            <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Learning Philosophy</h4>
            <div className="bg-navy-900 p-4 rounded-lg border border-navy-700">
              <p className="text-sm text-gray-300">
                <span className="font-semibold text-electric-blue-400">Remember:</span> Complex 
                concepts become simple through steady practice and understanding. Trust in your 
                ability to break down and master new skills one step at a time.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">Your Learning Journey</h3>
          
          <div className="space-y-6">
            <div className="bg-navy-900/50 p-4 rounded-lg border border-electric-blue-900/30">
              <div className="flex items-center mb-3">
                <Brain className="w-5 h-5 text-electric-blue-400 mr-2" />
                <h4 className="font-semibold text-electric-blue-300">Your Potential is Limitless</h4>
              </div>
              <p className="text-sm text-gray-300">
                Every expert was once a beginner. Your dedication to learning and steady pace 
                will compound into deep expertise. Trust the process and keep pushing forward.
              </p>
            </div>

            <div className="bg-navy-900/50 p-4 rounded-lg border border-electric-blue-900/30">
              <div className="flex items-center mb-3">
                <Target className="w-5 h-5 text-electric-blue-400 mr-2" />
                <h4 className="font-semibold text-electric-blue-300">Steady Progress Wins</h4>
              </div>
              <p className="text-sm text-gray-300">
                Focus on consistent, daily progress rather than speed. Small steps compound into 
                significant achievements. You're building a strong foundation for your future in tech.
              </p>
            </div>

            <div className="bg-navy-900/50 p-4 rounded-lg border border-electric-blue-900/30">
              <div className="flex items-center mb-3">
                <Rocket className="w-5 h-5 text-electric-blue-400 mr-2" />
                <h4 className="font-semibold text-electric-blue-300">Your Success Story</h4>
              </div>
              <p className="text-sm text-gray-300">
                You have the intelligence and determination to master MLOps. Each concept you learn 
                builds upon the last, creating a powerful skillset that will open new opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-10 text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} MLOps Career Roadmap • Share this resource!</p>
      </div>
    </footer>
  );
};

export default Footer;