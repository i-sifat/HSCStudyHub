import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, ArrowRight, GraduationCap, School } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';
import AuthButton from '../components/AuthButton';
import MobileReminder from '../components/MobileReminder';
import AntiPiracyNotice from '../components/AntiPiracyNotice';
import AnimatedBackground from '../components/AnimatedBackground';
import AnimatedText from '../components/AnimatedText';

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
          <span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white truncate">Onushilon Hub</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <AuthButton />
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-4 sm:px-6">
        {/* Hero Section with Single-line Dynamic Text */}
        <div className="text-center mb-20 sm:mb-24 max-w-6xl mx-auto mt-8 sm:mt-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
            Your Gateway to English
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 tracking-wide">
            <AnimatedText />
          </h2>
        </div>

        {/* Main Action Cards - SSC and HSC */}
        <div className="w-full max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* SSC Card */}
            <div
              onClick={() => navigate('/coming-soon')}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 h-full">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <School className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    SSC English
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Get ready for SSC with past exam questions and simple analysis rules. Practice easily and build confidence for success!
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
              <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 h-full">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    HSC English
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Master HSC English with board questions, grammar rule analysis, understand concepts and more.
                  </p>
                  <div className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-semibold group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                    <span className="text-base">Start Learning</span>
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
            <p className="text-sm sm:text-base font-medium">Made with ☘️ by iSiFAT</p>
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