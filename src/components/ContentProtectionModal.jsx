import React from 'react';
import { X } from 'lucide-react';

const ContentProtectionModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full mx-4 animate-in fade-in-0 zoom-in-95 duration-300">
        <div className="p-6 text-center">
          <div className="mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📚</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Built with Love for Students
            </h3>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-6">
            This website is built with hours of dedicated work for students. Please don't copy-paste and damage someone's motivation. Learn, grow, and be kind.
          </p>

          <button
            onClick={onClose}
            className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentProtectionModal;