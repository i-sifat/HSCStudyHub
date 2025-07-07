import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, LogIn, UserPlus } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';
import AuthModal from '../components/AuthModal';
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <div className="flex items-center space-x-3">
          <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <span className="text-xl font-bold text-gray-900 dark:text-white">English Subject Hub</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          
          {user ? (
            <div className="flex items-center space-x-3">
              <span className="text-gray-700 dark:text-gray-300">Welcome, {user.name}</span>
              <button
                onClick={logout}
                className="px-4 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <button
                onClick={() => openAuthModal('login')}
                className="flex items-center space-x-2 px-4 py-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
              >
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </button>
              <button
                onClick={() => openAuthModal('register')}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <UserPlus className="w-4 h-4" />
                <span>Register</span>
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-[80vh] px-6">
        <div className="text-center mb-12">
          <div className="mb-6">
            <BookOpen className="w-20 h-20 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              English Subject Hub
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium mb-8">
            "Master Grammar. Analyze the Past. Succeed in the Future."
          </p>
        </div>

        {/* Main Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mb-12">
          <button
            onClick={() => navigate('/dashboard/hsc')}
            className="group relative px-8 py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <div className="flex items-center space-x-3">
              <span className="text-3xl">🔵</span>
              <div className="text-left">
                <div className="text-2xl font-bold">HSC</div>
                <div className="text-blue-100">Higher Secondary</div>
              </div>
            </div>
          </button>

          <button
            onClick={() => navigate('/coming-soon')}
            className="group relative px-8 py-6 bg-yellow-500 hover:bg-yellow-600 text-white rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <div className="flex items-center space-x-3">
              <span className="text-3xl">🟡</span>
              <div className="text-left">
                <div className="text-2xl font-bold">SSC</div>
                <div className="text-yellow-100">Secondary School</div>
              </div>
            </div>
          </button>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 dark:text-gray-400">
          <p className="text-sm">Made with ☘️ by iSiFAT.</p>
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