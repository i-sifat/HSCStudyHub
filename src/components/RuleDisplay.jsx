import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';

const RuleDisplay = ({ rule }) => {
  if (!rule) return null;

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-6">
      <div className="flex items-center space-x-3 mb-4">
        <BookOpen className="h-6 w-6 text-blue-600" />
        <h2 className="text-xl font-bold text-blue-900">
          Rule {rule.id === 141 ? '14 (If)' : rule.id} ► {rule.title}
        </h2>
        <span className="text-lg text-blue-700 font-medium">({rule.bengali})</span>
      </div>
      
      <p className="text-gray-700 mb-4 italic">{rule.description}</p>
      
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Structure:</h3>
          <div className="space-y-2">
            {rule.structures.map((structure, index) => (
              <div key={index} className="flex items-start space-x-2">
                <ArrowRight className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700 font-mono text-sm bg-white px-3 py-1 rounded border">
                  {structure}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Examples:</h3>
          <div className="space-y-2">
            {rule.examples.map((example, index) => (
              <div key={index} className="bg-white p-3 rounded border-l-4 border-blue-400">
                <p className="text-gray-800">{example}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RuleDisplay;