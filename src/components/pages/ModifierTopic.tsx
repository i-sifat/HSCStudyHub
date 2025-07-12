'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, BookOpen } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

const ModifierTopic = () => {
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
            <span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Modifier</span>
          </div>
        </div>
        <ThemeToggle />
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              🔧 Modifier
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Learn pre-modifiers, post-modifiers, and their correct usage in sentences
            </p>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              What is a Modifier?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              A modifier is a word, phrase, or clause that provides description in sentences. 
              Modifiers allow writers to take the experiences that they have in their own minds 
              and transfer them to their readers.
            </p>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Types of Modifiers
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-3">
                  Pre-modifiers
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  Words that come before the noun they modify.
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Example:</strong> <em>Beautiful</em> flowers</p>
                  <p><strong>Example:</strong> <em>Very tall</em> building</p>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-3">
                  Post-modifiers
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  Words that come after the noun they modify.
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Example:</strong> The book <em>on the table</em></p>
                  <p><strong>Example:</strong> A man <em>wearing a hat</em></p>
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

export default ModifierTopic;