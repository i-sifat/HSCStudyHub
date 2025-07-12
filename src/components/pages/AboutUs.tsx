'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Heart, Users, Target, BookOpen } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

const AboutUs = () => {
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
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">About Us</h1>
        </div>
        <ThemeToggle />
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="text-center mb-8">
            <BookOpen className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Onushilon Hub
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Empowering HSC students with comprehensive English learning resources
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <Target className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                To provide accessible, high-quality English learning resources for HSC students
              </p>
            </div>

            <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-xl">
              <Users className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Community
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Building a supportive learning community for students across Bangladesh
              </p>
            </div>

            <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
              <Heart className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Our Values
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Quality education, accessibility, and respect for intellectual property
              </p>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              About the Platform
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Onushilon Hub is a comprehensive learning platform designed specifically for HSC English students. 
              We provide detailed analysis of board questions from 2022-2024, grammar rule explanations, 
              and practice materials to help students excel in their examinations.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our platform features advanced content protection to respect the hard work of educators 
              and content creators while ensuring students have access to quality learning materials.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
              Created by iSiFAT
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              This platform is developed with love and dedication to help students succeed in their 
              HSC English examinations. We believe in the power of education and the importance of 
              accessible learning resources.
            </p>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => router.push('/contribute')}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <Heart className="w-5 h-5" />
              <span>Contribute to the Platform</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;