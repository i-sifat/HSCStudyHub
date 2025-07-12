'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, BookOpen, Search } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import { hsc2ndPaperTopics } from '@/data/hsc_2ndpaper_topics';

const English2ndPaperDashboard = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTopics = hsc2ndPaperTopics.filter(topic =>
    topic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    topic.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleTopicClick = (topic: any) => {
    if (topic.route === '/coming-soon') {
      router.push('/coming-soon');
    } else {
      router.push(topic.route);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 overflow-x-hidden">
      {/* Header */}
      <header className="flex justify-between items-center p-4 sm:p-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => router.push('/dashboard/hsc')}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors flex-shrink-0"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400 flex-shrink-0" />
            <span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white truncate">English 2nd Paper</span>
          </div>
        </div>
        <ThemeToggle />
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Grammar Topics
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 px-4">
            Master HSC English grammar with past board questions (2022-2024)
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto px-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base"
            />
          </div>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredTopics.map((topic) => (
            <div
              key={topic.id}
              onClick={() => handleTopicClick(topic)}
              className="group cursor-pointer bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700"
            >
              <div className="text-center">
                <div className="mb-4">
                  <span className="text-3xl sm:text-4xl">{topic.icon}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                  {topic.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-xs sm:text-sm leading-relaxed">
                  {topic.description}
                </p>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${
                  topic.route === '/coming-soon' 
                    ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700'
                    : topic.color
                }`}>
                  {topic.route === '/coming-soon' ? 'Coming Soon' : 'Available'}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredTopics.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg px-4">
              No topics found matching your search.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default English2ndPaperDashboard;