import React, { useState } from 'react';
import { modifierRules } from '../../data/topics/modifier/modifierRules';
import RuleNumberDisplay from './RuleNumberDisplay';

const RuleTooltip = ({ ruleId, children, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const rule = modifierRules.find(r => r.id === ruleId);

  if (!rule) return children;

  return (
    <div className="relative inline-block">
      <div
        className={`cursor-help ${className}`}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={() => setIsVisible(!isVisible)}
      >
        {children}
      </div>
      
      {isVisible && (
        <div className="absolute z-50 w-72 sm:w-80 p-3 sm:p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl bottom-full left-1/2 transform -translate-x-1/2 mb-2 max-w-[90vw]">
          <div className="flex items-center space-x-2 mb-2">
            <RuleNumberDisplay ruleNo={rule.ruleNo} />
            <h4 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
              {rule.title}
            </h4>
          </div>
          
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 italic leading-relaxed">
            {rule.description}
          </p>
          
          <div className="mb-2">
            <p className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 leading-tight">
              Structure:
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400 font-mono bg-gray-50 dark:bg-gray-700 px-2 py-1 rounded leading-relaxed break-words">
              {rule.structure}
            </p>
          </div>
          
          <div>
            <p className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 leading-tight">
              Examples:
            </p>
            <div className="space-y-1">
              {rule.examples.slice(0, 2).map((example, index) => (
                <p key={index} className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 px-2 py-1 rounded leading-relaxed break-words">
                  {example}
                </p>
              ))}
            </div>
          </div>
          
          {/* Arrow */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-200 dark:border-t-gray-700"></div>
        </div>
      )}
    </div>
  );
};

export default RuleTooltip;