'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Clock, BookOpen, Star } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

const ComingSoon = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Header */}
      <header className="flex justify-between items-center p-4 sm:p-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => router.back()}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Coming Soon</h1>
        </div>
        <ThemeToggle />
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center min-h-[calc(100vh-120px)] px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-8">
            <Clock className="w-24 h-24 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Coming Soon!
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              We're working hard to bring you this feature. Stay tuned for updates!
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-xl mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              What's Coming?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                <BookOpen className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  More Topics
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Additional grammar topics and practice materials
                </p>
              </div>
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                <Star className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Enhanced Features
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Interactive exercises and detailed explanations
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => router.back()}
              className="w-full sm:w-auto px-8 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors font-medium"
            >
              Go Back
            </button>
            <br />
            <button
              onClick={() => router.push('/')}
              className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
            >
              Explore Available Topics
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ComingSoon;