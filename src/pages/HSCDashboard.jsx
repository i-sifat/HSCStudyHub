import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, PenTool } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';

const HSCDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/')}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
          <div className="flex items-center space-x-3">
            <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">HSC Dashboard</span>
          </div>
        </div>
        <ThemeToggle />
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-[80vh] px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Choose Your Subject
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Select the English paper you want to practice
          </p>
        </div>

        {/* Subject Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
          {/* English 1st Paper */}
          <div
            onClick={() => navigate('/coming-soon')}
            className="group cursor-pointer bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700"
          >
            <div className="text-center">
              <div className="mb-6">
                <PenTool className="w-16 h-16 text-green-600 dark:text-green-400 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                ✍️ English 1st Paper
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Reading comprehension, creative writing, and literature
              </p>
              <div className="inline-block px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded-full text-sm font-medium">
                Coming Soon
              </div>
            </div>
          </div>

          {/* English 2nd Paper */}
          <div
            onClick={() => navigate('/dashboard/hsc/english-2nd')}
            className="group cursor-pointer bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700"
          >
            <div className="text-center">
              <div className="mb-6">
                <BookOpen className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                📘 English 2nd Paper
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Grammar rules, sentence completion, and language skills
              </p>
              <div className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium">
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