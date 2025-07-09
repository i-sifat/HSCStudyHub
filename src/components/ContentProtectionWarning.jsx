import React from 'react';
import { X, Shield, AlertTriangle } from 'lucide-react';

const ContentProtectionWarning = ({ show, message, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border-2 border-red-500 dark:border-red-400 p-6 max-w-md mx-4 animate-pulse">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Shield className="w-6 h-6 text-red-500" />
            <h3 className="text-lg font-bold text-red-600 dark:text-red-400">
              Content Protected
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        <div className="flex items-start space-x-3 mb-6">
          <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            {message}
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-4">
          <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
            💡 How to Contribute:
          </h4>
          <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
            <li>• Report errors or suggest improvements</li>
            <li>• Share feedback about the platform</li>
            <li>• Help categorize more questions</li>
            <li>• Spread the word to help other students</li>
          </ul>
        </div>

        <div className="flex space-x-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
          >
            I Understand
          </button>
          <button
            onClick={() => {
              window.open('/contribute', '_blank');
              onClose();
            }}
            className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
          >
            Contribute
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentProtectionWarning;