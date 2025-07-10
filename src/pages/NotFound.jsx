import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Home, ArrowLeft, Search, AlertTriangle } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';

const NotFound = () => {
  const navigate = useNavigate();

  const quickLinks = [
    { name: 'HSC Dashboard', path: '/dashboard/hsc', icon: BookOpen },
    { name: 'Completing Sentence', path: '/dashboard/hsc/english-2nd/completing-sentence', icon: BookOpen },
    { name: 'Modifier Practice', path: '/dashboard/hsc/english-2nd/modifier', icon: BookOpen },
    { name: 'Connectors', path: '/dashboard/hsc/english-2nd/connectors', icon: BookOpen }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 dark:from-gray-900 dark:to-red-900 transition-colors duration-300 overflow-x-hidden">
      {/* Header */}
      <header className="flex justify-between items-center p-4 sm:p-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors flex-shrink-0"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 dark:text-red-400 flex-shrink-0" />
            <span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white truncate">Onushilon Hub</span>
          </div>
        </div>
        <ThemeToggle />
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="relative">
              <div className="text-8xl sm:text-9xl font-bold text-red-200 dark:text-red-800 mb-4">
                404
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <AlertTriangle className="w-16 h-16 sm:w-20 sm:h-20 text-red-500 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Page Not Found
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Oops! It seems like you've wandered into uncharted grammar territory. 
              The page you're looking for doesn't exist, but don't worry – we'll help you get back on track!
            </p>
          </div>

          {/* Academic-themed message */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Search className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Grammar Tip
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
              Just like in grammar, every sentence needs proper structure. This URL seems to be missing 
              some essential components! Let's navigate back to where the learning happens.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="mb-8">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4">
              Quick Navigation
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => navigate(link.path)}
                  className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors text-left"
                >
                  <link.icon className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {link.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/')}
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors"
            >
              <Home className="w-5 h-5" />
              <span>Go Home</span>
            </button>
            
            <button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </button>
          </div>

          {/* Fun Academic Quote */}
          <div className="mt-8 p-4 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg border border-red-200 dark:border-red-700">
            <p className="text-sm text-red-800 dark:text-red-300 italic">
              "In grammar, as in navigation, sometimes we take wrong turns. 
              The key is to learn from the detour and find the right path forward."
            </p>
            <p className="text-xs text-red-600 dark:text-red-400 mt-2">
              — Onushilon Hub Team
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;