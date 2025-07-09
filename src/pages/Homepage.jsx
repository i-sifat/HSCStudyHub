import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, LogIn, UserPlus } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';
import AuthModal from '../components/AuthModal';
import MobileReminder from '../components/MobileReminder';
import { useAuth } from '../contexts/AuthContext';

const Homepage = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [authModal, setAuthModal] = useState({ isOpen: false, mode: 'login' });

  const openAuthModal = (mode) => {
    setAuthModal({ isOpen: true, mode });
  };

  const closeAuthModal = () => {
    setAuthModal({ isOpen: false, mode: 'login' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 overflow-x-hidden">
      <MobileReminder />
      
      {/* Header */}
      <header className="flex justify-between items-center p-4 sm:p-6">
        <div className="flex items-center space-x-3">
          <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400 flex-shrink-0" />
          <span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white truncate">English Subject Hub</span>
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-4">
          <ThemeToggle />
          
          {user ? (
            <div className="flex items-center space-x-2 sm:space-x-3">
              <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 hidden sm:inline">Welcome, {user.name}</span>
              <span className="text-sm text-gray-700 dark:text-gray-300 sm:hidden">{user.name}</span>
              <button
                onClick={logout}
                className="px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-1 sm:space-x-2">
              <button
                onClick={() => openAuthModal('login')}
                className="flex items-center space-x-1 sm:space-x-2 px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
              >
                <LogIn className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Login</span>
              </button>
              <button
                onClick={() => openAuthModal('register')}
                className="flex items-center space-x-1 sm:space-x-2 px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <UserPlus className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Register</span>
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 max-w-4xl mx-auto">
          <div className="mb-6">
            <BookOpen className="w-16 h-16 sm:w-20 sm:h-20 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              English Subject Hub
            </h1>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium mb-8 px-4">
            "Master Grammar. Analyze the Past. Succeed in the Future."
          </p>
        </div>

        {/* Main Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-12 w-full max-w-2xl px-4">
          <button
            onClick={() => navigate('/dashboard/hsc')}
            className="group relative px-6 py-4 sm:px-8 sm:py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl w-full sm:w-auto"
          >
            <div className="flex items-center justify-center sm:justify-start space-x-3">
              <span className="text-2xl sm:text-3xl">🔵</span>
              <div className="text-left">
                <div className="text-xl sm:text-2xl font-bold">HSC</div>
                <div className="text-sm sm:text-base text-blue-100">Higher Secondary</div>
              </div>
            </div>
          </button>

          <button
            onClick={() => navigate('/coming-soon')}
            className="group relative px-6 py-4 sm:px-8 sm:py-6 bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl w-full sm:w-auto"
          >
            <div className="flex items-center justify-center sm:justify-start space-x-3">
              <span className="text-2xl sm:text-3xl">🟡</span>
              <div className="text-left">
                <div className="text-xl sm:text-2xl font-bold">SSC</div>
                <div className="text-sm sm:text-base text-yellow-100">Secondary School</div>
              </div>
            </div>
          </button>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 dark:text-gray-400">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 px-4">
            <p className="text-xs sm:text-sm">Made with ☘️ by iSiFAT.</p>
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

      <AuthModal
        isOpen={authModal.isOpen}
        onClose={closeAuthModal}
        mode={authModal.mode}
      />
    </div>
  );
};

export default Homepage;