import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, ArrowRight, GraduationCap, School } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';
import AuthButton from '../components/AuthButton';
import MobileReminder from '../components/MobileReminder';
import AntiPiracyNotice from '../components/AntiPiracyNotice';
import AnimatedBackground from '../components/AnimatedBackground';

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <AnimatedBackground />
      <MobileReminder />
      
      {/* Header */}
      <header className="relative z-10 flex justify-between items-center p-4 sm:p-6">
        <div className="flex items-center space-x-3">
          <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400 flex-shrink-0" />
          <span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white truncate">English Subject Hub</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <AuthButton />
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-4 sm:px-6">
        {/* Hero Section with Inspirational Tagline */}
        <div className="text-center mb-16 sm:mb-20 max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-8 shadow-lg animate-pulse">
              <BookOpen className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            </div>
            
            {/* Inspirational Tagline */}
            <div className="mb-8 p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mb-4 leading-tight">
                "Learning is the key that unlocks infinite possibilities"
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-medium">
                Master English grammar with confidence and excel in your academic journey
              </p>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Your Gateway to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                English Excellence
              </span>
            </h1>
          </div>
          
          {/* Welcome Message */}
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 mb-12">
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
              Welcome to your dedicated learning companion! Master English grammar through 
              <span className="text-blue-600 dark:text-blue-400 font-semibold"> board-wise analysis</span>, 
              past paper questions, and interactive practice tools designed for your success.
            </p>
          </div>
        </div>

        {/* Main Action Cards - SSC and HSC */}
        <div className="w-full max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* SSC Card */}
            <div
              onClick={() => navigate('/coming-soon')}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-3xl p-8 sm:p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 h-full">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <School className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    SSC English
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    Build a strong foundation in English grammar for Secondary School Certificate. 
                    Comprehensive practice materials and structured learning path for academic success.
                  </p>
                  <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full text-sm font-medium shadow-lg">
                    <span>Coming Soon</span>
                  </div>
                </div>
              </div>
            </div>

            {/* HSC Card */}
            <div
              onClick={() => navigate('/dashboard/hsc')}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-3xl p-8 sm:p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 h-full">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <GraduationCap className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    HSC English
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    Master Higher Secondary English with board questions from 2022-2024. 
                    Complete grammar analysis, sentence completion, modifiers, connectors, and more.
                  </p>
                  <div className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-semibold group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                    <span className="text-lg">Start Learning</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="text-center text-gray-500 dark:text-gray-400 pb-8 mt-auto">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-sm sm:text-base font-medium">Made with ☘️ by iSiFAT for students like you.</p>
            <div className="flex items-center space-x-6 text-sm">
              <button
                onClick={() => navigate('/about')}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                About Us
              </button>
              <button
                onClick={() => navigate('/contribute')}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                Contribute
              </button>
            </div>
          </div>
        </div>
      </main>

      <AntiPiracyNotice />
    </div>
  );
};

export default Homepage;