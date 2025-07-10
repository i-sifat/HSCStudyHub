import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Facebook, Heart, Code, Palette } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-gray-900 dark:to-emerald-900 transition-colors duration-300 overflow-x-hidden">
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
            <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
            <span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white truncate">About Us</span>
          </div>
        </div>
        <ThemeToggle />
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            About Onushilon Hub
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 px-4 leading-relaxed">
            Empowering students with comprehensive grammar analysis and practice tools
          </p>
        </div>

        {/* Developer Profile Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8 mb-8 sm:mb-12">
          <div className="text-center">
            {/* Profile Picture - Large Circle */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-4xl sm:text-5xl font-bold text-white">MS</span>
            </div>

            {/* Name and Role */}
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Murshed Alam Sifat
            </h2>
            
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Code className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <Palette className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-lg text-emerald-600 dark:text-emerald-400 font-semibold">
                Developer & Designer
              </span>
            </div>

            {/* Social Link */}
            <a
              href="https://www.facebook.com/me.isifat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium mb-6"
            >
              <Facebook className="w-5 h-5" />
              <span>Connect on Facebook</span>
            </a>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 sm:p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Heart className="w-8 h-8 text-red-500" />
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Our Mission
            </h3>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Onushilon Hub was born from a simple yet powerful vision: to make grammar learning 
              accessible, systematic, and effective for HSC students across Bangladesh. As a developer 
              and educator, I witnessed countless students struggling with English grammar rules, 
              especially when preparing for board examinations.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              This platform transforms the traditional approach to grammar learning by categorizing 
              real board questions from 2022-2024 according to specific grammar rules. Students can 
              now understand patterns, practice systematically, and build confidence through 
              data-driven insights.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Every feature, every categorization, and every analysis tool has been crafted with 
              one goal in mind: helping students master English grammar and succeed in their 
              academic journey. Your success is our success.
            </p>
          </div>
        </div>

        {/* Gratitude Section */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-200 dark:border-emerald-700 p-6 sm:p-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-emerald-900 dark:text-emerald-100 mb-4 text-center">
            A Message of Gratitude
          </h3>
          
          <div className="text-center">
            <p className="text-emerald-800 dark:text-emerald-200 leading-relaxed text-base sm:text-lg mb-4">
              To every student using this platform: Thank you for trusting us with your learning journey. 
              Your dedication to mastering English grammar inspires us to continuously improve and expand 
              our resources.
            </p>
            
            <p className="text-emerald-800 dark:text-emerald-200 leading-relaxed text-base sm:text-lg mb-6">
              Remember, every expert was once a beginner. Keep practicing, stay curious, and never 
              hesitate to reach out if you need help. Together, we're building a stronger foundation 
              for English education in Bangladesh.
            </p>
            
            <div className="inline-flex items-center space-x-2 text-emerald-700 dark:text-emerald-300 font-semibold">
              <Heart className="w-5 h-5 text-red-500" />
              <span>Happy Learning!</span>
              <Heart className="w-5 h-5 text-red-500" />
            </div>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="text-center mt-8 sm:mt-12">
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors text-sm sm:text-base"
          >
            Back to Home
          </button>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;