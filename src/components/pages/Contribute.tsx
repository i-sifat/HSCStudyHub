'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Heart, Users, BookOpen, Star, Gift } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

const Contribute = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Header */}
      <header className="flex justify-between items-center p-4 sm:p-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => router.push('/')}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Contribute</h1>
        </div>
        <ThemeToggle />
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="text-center mb-8">
            <Heart className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Help Us Grow Together
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Your contributions make this platform better for everyone
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <BookOpen className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Content Contribution
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm">
                <li>• Share board questions and solutions</li>
                <li>• Provide grammar explanations</li>
                <li>• Submit practice materials</li>
                <li>• Create study guides</li>
              </ul>
            </div>

            <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl">
              <Users className="w-12 h-12 text-green-600 dark:text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Community Support
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm">
                <li>• Help fellow students</li>
                <li>• Share learning tips</li>
                <li>• Report issues or bugs</li>
                <li>• Suggest improvements</li>
              </ul>
            </div>

            <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
              <Star className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Quality Assurance
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm">
                <li>• Review content accuracy</li>
                <li>• Test new features</li>
                <li>• Provide feedback</li>
                <li>• Verify board questions</li>
              </ul>
            </div>

            <div className="p-6 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
              <Gift className="w-12 h-12 text-orange-600 dark:text-orange-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Recognition
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm">
                <li>• Contributor badges</li>
                <li>• Special mentions</li>
                <li>• Early access to features</li>
                <li>• Community appreciation</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold mb-3">Why Contribute?</h3>
            <p className="text-blue-100 mb-4">
              Every contribution, no matter how small, helps thousands of HSC students across Bangladesh. 
              By sharing your knowledge and resources, you&apos;re building a stronger educational community.
            </p>
            <p className="text-blue-100">
              Together, we can make quality education accessible to everyone and help students achieve their dreams.
            </p>
          </div>

          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Ready to Contribute?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Contact us through any of the following methods:
              </p>
            </div>
            
            <div className="space-y-3">
              <p className="text-gray-600 dark:text-gray-300">
                📧 Email: <span className="font-medium">contribute@onushilonhub.com</span>
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                💬 Join our community discussions
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                🤝 Collaborate with fellow educators
              </p>
            </div>

            <div className="mt-8">
              <button
                onClick={() => router.push('/')}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <BookOpen className="w-5 h-5" />
                <span>Start Learning</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contribute;