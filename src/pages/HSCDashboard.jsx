import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, PenTool } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';

const HSCDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 overflow-x-hidden">
      {/* Header */}
      <header className="flex justify-between items-center p-4 sm:p-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/')}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors flex-shrink-0"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400 flex-shrink-0" />
            <span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white truncate">HSC Dashboard</span>
          </div>
        </div>
        <ThemeToggle />
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Choose Your Subject
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 px-4">
            Select the English paper you want to practice
          </p>
        </div>

        {/* Subject Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl w-full px-4">
          {/* English 1st Paper */}
          <div
            onClick={() => navigate('/coming-soon')}
            className="group cursor-pointer bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700"
          >
            <div className="text-center">
              <div className="mb-6">
                <PenTool className="w-12 h-12 sm:w-16 sm:h-16 text-green-600 dark:text-green-400 mx-auto" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                ✍️ English 1st Paper
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
                Reading comprehension, creative writing, and literature
              </p>
              <div className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded-full text-xs sm:text-sm font-medium">
                Coming Soon
              </div>
            </div>
          </div>

          {/* English 2nd Paper */}
          <div
            onClick={() => navigate('/dashboard/hsc/english-2nd')}
            className="group cursor-pointer bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700"
          >
            <div className="text-center">
              <div className="mb-6">
                <BookOpen className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600 dark:text-blue-400 mx-auto" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                📘 English 2nd Paper
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
                Grammar rules, sentence completion, and language skills
              </p>
              <div className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-xs sm:text-sm font-medium">
                Available Now
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HSCDashboard;