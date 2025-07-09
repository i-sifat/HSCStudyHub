import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, ArrowRight, Users, Target, TrendingUp, Award } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';
import AuthButton from '../components/AuthButton';
import MobileReminder from '../components/MobileReminder';
import AntiPiracyNotice from '../components/AntiPiracyNotice';
import AnimatedText from '../components/AnimatedText';

const Homepage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Target,
      title: "Board-Wise Analysis",
      description: "Questions categorized by specific grammar rules from all education boards"
    },
    {
      icon: TrendingUp,
      title: "Past Paper Questions",
      description: "Comprehensive collection of HSC questions from 2022-2024"
    },
    {
      icon: Users,
      title: "Interactive Practice",
      description: "Engaging tools to master English grammar step by step"
    },
    {
      icon: Award,
      title: "Exam Preparation",
      description: "Structured learning path for HSC English 2nd Paper success"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 transition-colors duration-300 overflow-x-hidden">
      <MobileReminder />
      
      {/* Header */}
      <header className="flex justify-between items-center p-4 sm:p-6">
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
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-4 sm:px-6">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6 shadow-lg">
              <BookOpen className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Your Home for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                English Excellence
              </span>
            </h1>
          </div>
          
          {/* Welcome Message */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200 dark:border-gray-700 mb-8">
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-medium mb-4 leading-relaxed">
              Welcome to your dedicated learning companion! This platform helps HSC and SSC students master 
              <span className="text-blue-600 dark:text-blue-400 font-semibold"> English 2nd Paper</span> through 
              board-wise grammar rules, past paper questions, and interactive practice tools.
            </p>
            
            {/* Animated Text */}
            <div className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              <span>Explore </span>
              <AnimatedText />
              <span> and excel in your exams!</span>
            </div>
          </div>
        </div>

        {/* Main Action Cards - Perfectly Centered */}
        <div className="w-full max-w-4xl mx-auto mb-12">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center justify-center">
            {/* HSC Card */}
            <div
              onClick={() => navigate('/dashboard/hsc')}
              className="group cursor-pointer w-full max-w-sm lg:max-w-none lg:flex-1"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700 h-full">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                    <span className="text-2xl sm:text-3xl font-bold text-white">HSC</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Higher Secondary
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Complete grammar analysis with board questions from 2022-2024. 
                    Master completing sentences, modifiers, connectors, and more.
                  </p>
                  <div className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-semibold group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                    <span>Start Learning</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>

            {/* SSC Card */}
            <div
              onClick={() => navigate('/coming-soon')}
              className="group cursor-pointer w-full max-w-sm lg:max-w-none lg:flex-1"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700 h-full">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                    <span className="text-2xl sm:text-3xl font-bold text-white">SSC</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Secondary School
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Comprehensive grammar foundation for SSC students. 
                    Build strong English skills for academic success.
                  </p>
                  <div className="inline-flex items-center space-x-2 px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded-full text-sm font-medium">
                    <span>Coming Soon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="w-full max-w-6xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Why Choose English Subject Hub?
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 dark:text-gray-400 pb-8">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 px-4">
            <p className="text-xs sm:text-sm">Made with ☘️ by iSiFAT for students like you.</p>
            <div className="flex items-center space-x-4 text-xs sm:text-sm">
              <button
                onClick={() => navigate('/about')}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                About Us
              </button>
              <span className="text-gray-300 dark:text-gray-600">•</span>
              <button
                onClick={() => navigate('/contribute')}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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