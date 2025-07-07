import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, BookOpen } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';

const ComingSoon = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-purple-900 transition-colors duration-300">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
          <div className="flex items-center space-x-3">
            <BookOpen className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">English Subject Hub</span>
          </div>
        </div>
        <ThemeToggle />
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-[80vh] px-6">
        <div className="text-center max-w-2xl">
          <div className="mb-8">
            <Clock className="w-24 h-24 text-purple-600 dark:text-purple-400 mx-auto mb-6 animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Coming Soon
            </h1>
          </div>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            We're working hard to bring you this feature. Stay tuned for updates!
          </p>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              What's Coming?
            </h3>
            <ul className="text-left space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>Interactive practice exercises</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>Detailed explanations and solutions</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>Progress tracking and analytics</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>More board questions and topics</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
          >
            Back to Home
          </button>
        </div>
      </main>
    </div>
  );
};

export default ComingSoon;