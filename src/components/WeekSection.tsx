import React, { useState } from 'react';
import { WeekData } from '../types';
import { 
  ArrowRight, Check, Clock, FileCode, Target, Book, 
  PenTool as Tool, Lightbulb, GraduationCap, ExternalLink, 
  CheckCircle2, Trophy, BookOpen, Star, Github
} from 'lucide-react';
import ProgressIndicator from './ProgressIndicator';

interface WeekSectionProps {
  week: WeekData;
  index: number;
  isEven: boolean;
}

const WeekSection: React.FC<WeekSectionProps> = ({ week, index, isEven }) => {
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());

  const toggleTaskCompletion = (task: string) => {
    const newCompletedTasks = new Set(completedTasks);
    if (completedTasks.has(task)) {
      newCompletedTasks.delete(task);
    } else {
      newCompletedTasks.add(task);
    }
    setCompletedTasks(newCompletedTasks);
    localStorage.setItem(`week${index + 1}-tasks`, JSON.stringify([...newCompletedTasks]));
  };

  const totalTasks = Object.values(week.days).flat().length;
  const completionPercentage = Math.round((completedTasks.size / totalTasks) * 100);

  return (
    <div className={`relative mb-16 md:mb-24`}>
      <div className="absolute left-4 md:left-1/2 top-0 w-8 h-8 rounded-full bg-navy-950 border-2 border-electric-blue-500 flex items-center justify-center transform md:-translate-x-1/2 z-10">
        <span className="font-bold text-sm">{index + 1}</span>
      </div>
      
      <div className={`ml-16 md:ml-0 md:w-5/12 ${isEven ? 'md:ml-auto' : 'md:mr-auto'} relative`}>
        <div className="bg-navy-900 border-l-4 border-electric-blue-500 p-4 rounded-r-lg rounded-bl-lg shadow-lg transform transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-electric-blue-900/30">
          <h2 className="text-2xl font-bold text-electric-blue-400 flex items-center mb-4">
            Week {index + 1}: {week.title}
          </h2>

          {week.intro && (
            <div className="mb-6 bg-navy-800/30 p-3 rounded-lg border border-electric-blue-900/20">
              <p className="text-sm text-gray-300">{week.intro}</p>
            </div>
          )}
          
          <div className="mb-6">
            <div className="flex items-center text-gray-300">
              <Target className="w-4 h-4 mr-2 text-electric-blue-400" />
              <p className="font-medium text-base"><span className="text-electric-blue-300">Goal:</span> {week.goal}</p>
            </div>
          </div>

          <div className="mb-6 bg-navy-800/30 p-3 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Trophy className="w-4 h-4 mr-2 text-electric-blue-400" />
                <span className="text-sm font-medium">Week Progress</span>
              </div>
              <span className="text-sm font-bold text-electric-blue-300">{completionPercentage}%</span>
            </div>
            <div className="w-full bg-navy-700 rounded-full h-2">
              <div 
                className="bg-electric-blue-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>

          <ProgressIndicator weekNum={index + 1} />
          
          <div className="mt-8 space-y-6">
            {week.prerequisites && (
              <div className="bg-navy-800/30 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Book className="w-4 h-4 mr-2 text-electric-blue-400" />
                  Prerequisites
                </h3>
                <ul className="space-y-2">
                  {week.prerequisites.map((prereq, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-electric-blue-400 mt-2 mr-2"></span>
                      <span className="text-sm text-gray-300">{prereq}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {week.resources && (
              <div className="bg-navy-800/30 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Tool className="w-4 h-4 mr-2 text-electric-blue-400" />
                  Learning Resources
                </h3>
                <div className="space-y-4">
                  {week.resources.documentation.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-electric-blue-300 mb-2">Documentation</h4>
                      <ul className="space-y-2">
                        {week.resources.documentation.map((doc, i) => (
                          <li key={i} className="flex items-center text-sm">
                            <ExternalLink className="w-3 h-3 mr-2 text-electric-blue-400" />
                            <a href="#" className="text-gray-300 hover:text-electric-blue-400 transition-colors">{doc}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {week.resources.tutorials.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-electric-blue-300 mb-2">Tutorials & Guides</h4>
                      <ul className="space-y-2">
                        {week.resources.tutorials.map((tutorial, i) => (
                          <li key={i} className="flex items-center text-sm">
                            <ExternalLink className="w-3 h-3 mr-2 text-electric-blue-400" />
                            <a href="#" className="text-gray-300 hover:text-electric-blue-400 transition-colors">{tutorial}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {week.resources.tools.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-electric-blue-300 mb-2">Required Tools</h4>
                      <ul className="space-y-2">
                        {week.resources.tools.map((tool, i) => (
                          <li key={i} className="flex items-center text-sm">
                            <Tool className="w-3 h-3 mr-2 text-electric-blue-400" />
                            <span className="text-gray-300">{tool}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}

            {week.outcomes && (
              <div className="bg-navy-800/30 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <GraduationCap className="w-4 h-4 mr-2 text-electric-blue-400" />
                  Expected Outcomes
                </h3>
                <ul className="space-y-2">
                  {week.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-4 h-4 text-electric-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {week.tips && (
              <div className="bg-navy-800/30 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Lightbulb className="w-4 h-4 mr-2 text-electric-blue-400" />
                  Pro Tips
                </h3>
                <ul className="space-y-2">
                  {week.tips.map((tip, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-electric-blue-400 mt-2 mr-2"></span>
                      <span className="text-sm text-gray-300">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Clock className="w-4 h-4 mr-2 text-electric-blue-400" />
                Daily Tasks
              </h3>
              
              <div className="space-y-3">
                {Object.entries(week.days).map(([day, tasks]) => (
                  <div key={day} className="bg-navy-800 p-3 rounded-lg">
                    <h4 className="font-medium text-electric-blue-300">{day}:</h4>
                    <ul className="mt-2 space-y-2">
                      {Array.isArray(tasks) && tasks.map((task, i) => (
                        <li key={i} className="flex items-start group">
                          <button
                            onClick={() => toggleTaskCompletion(task)}
                            className="flex items-start w-full text-left hover:bg-navy-700/50 p-2 rounded-lg transition-colors"
                          >
                            <div className={`w-5 h-5 rounded border ${
                              completedTasks.has(task) 
                                ? 'bg-electric-blue-500 border-electric-blue-500' 
                                : 'border-gray-500 group-hover:border-electric-blue-400'
                            } flex items-center justify-center mr-2 mt-0.5`}>
                              {completedTasks.has(task) && (
                                <Check className="w-3 h-3 text-white" />
                              )}
                            </div>
                            <span className={`text-sm ${
                              completedTasks.has(task) 
                                ? 'text-gray-400 line-through' 
                                : 'text-gray-200'
                            }`}>{task}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {week.reflection && (
              <div className="bg-navy-800/30 p-4 rounded-lg border border-electric-blue-900/30">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Star className="w-4 h-4 mr-2 text-electric-blue-400" />
                  Weekly Reflection
                </h3>
                <p className="text-sm text-gray-300">{week.reflection}</p>
              </div>
            )}
            
            <div className="bg-navy-800/50 p-4 rounded-lg border border-navy-700">
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <FileCode className="w-4 h-4 mr-2 text-electric-blue-400" />
                Key Deliverables
              </h3>
              <ul className="space-y-2">
                {week.deliverables.map((deliverable, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="w-4 h-4 text-electric-blue-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-2">Skills Focus</h3>
              <div className="flex flex-wrap gap-2">
                {week.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-2 py-1 text-xs rounded-full bg-navy-800 text-electric-blue-300 border border-electric-blue-700/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {week.portfolioGuide && (
              <div className="bg-navy-800/30 p-6 rounded-lg border border-electric-blue-900/30 mt-8">
                <h3 className="text-xl font-bold mb-4 flex items-center text-electric-blue-300">
                  <Github className="w-5 h-5 mr-2" />
                  {week.portfolioGuide.title}
                </h3>
                <p className="text-gray-300 mb-6">{week.portfolioGuide.description}</p>
                
                <div className="space-y-6">
                  {week.portfolioGuide.projects.map((project, i) => (
                    <div key={i} className="bg-navy-900/50 p-4 rounded-lg border border-electric-blue-900/20">
                      <h4 className="font-semibold text-electric-blue-400 mb-2">{project.name}</h4>
                      <p className="text-sm text-gray-300 mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill, j) => (
                          <span 
                            key={j}
                            className="px-2 py-1 text-xs rounded-full bg-navy-800 text-electric-blue-300 border border-electric-blue-700/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-navy-900/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-electric-blue-300 mb-3">Portfolio Best Practices</h4>
                  <ul className="space-y-2">
                    {week.portfolioGuide.tips.map((tip, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-4 h-4 text-electric-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            
            {index < 7 && (
              <div className="flex justify-end">
                <div className="flex items-center text-sm text-electric-blue-400 group cursor-pointer">
                  <span>Up next: Week {index + 2}</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeekSection;