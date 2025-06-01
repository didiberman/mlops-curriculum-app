import React from 'react';

interface ProgressIndicatorProps {
  weekNum: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ weekNum }) => {
  // Calculate progress percentage (1/8 of progress per week)
  const progressPercent = Math.min(100, (weekNum / 8) * 100);
  
  // Determine difficulty based on week number
  const getDifficulty = () => {
    if (weekNum <= 2) return { level: 'Beginner', color: 'bg-green-500' };
    if (weekNum <= 5) return { level: 'Intermediate', color: 'bg-yellow-500' };
    return { level: 'Advanced', color: 'bg-red-500' };
  };
  
  const difficulty = getDifficulty();
  
  return (
    <div className="mt-2">
      <div className="flex justify-between mb-1 items-center">
        <div className="flex items-center">
          <span className="text-xs font-medium text-gray-400">Progress</span>
          <span className="ml-1 text-xs font-semibold text-electric-blue-400">{Math.round(progressPercent)}%</span>
        </div>
        <div className="flex items-center">
          <span className={`w-2 h-2 rounded-full ${difficulty.color} mr-1`}></span>
          <span className="text-xs text-gray-400">Difficulty: <span className="text-gray-300">{difficulty.level}</span></span>
        </div>
      </div>
      
      <div className="w-full bg-navy-700 rounded-full h-1.5">
        <div 
          className="bg-gradient-to-r from-electric-blue-600 to-electric-blue-400 h-1.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressIndicator;