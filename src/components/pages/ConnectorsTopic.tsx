'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, BookOpen } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

const ConnectorsTopic = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Header */}
      <header className="flex justify-between items-center p-4 sm:p-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => router.push('/dashboard/hsc/english-2nd')}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
          <div className="flex items-center space-x-3">
            <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400" />
            <span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Connectors</span>
          </div>
        </div>
        <ThemeToggle />
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              🔗 Connectors
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Master linking words, conjunctions, and transitional phrases for better writing
            </p>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              What are Connectors?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Connectors are words or phrases that link ideas, sentences, and paragraphs together. 
              They help create smooth transitions and logical flow in writing.
            </p>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Types of Connectors
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-3">
                  Addition
                </h4>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <p>• and, also, furthermore</p>
                  <p>• moreover, in addition</p>
                  <p>• besides, as well as</p>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-3">
                  Contrast
                </h4>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <p>• but, however, nevertheless</p>
                  <p>• on the other hand</p>
                  <p>• although, despite</p>
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-3">
                  Cause & Effect
                </h4>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <p>• because, since, as</p>
                  <p>• therefore, consequently</p>
                  <p>• as a result, due to</p>
                </div>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-orange-800 dark:text-orange-300 mb-3">
                  Time & Sequence
                </h4>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <p>• first, then, finally</p>
                  <p>• before, after, while</p>
                  <p>• meanwhile, subsequently</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-300 mb-4">
                📚 Board Questions Practice
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This section will contain HSC board questions from 2022-2024 with detailed solutions.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-center text-gray-500 dark:text-gray-400 italic">
                  Content is being prepared with board questions and solutions...
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ConnectorsTopic;