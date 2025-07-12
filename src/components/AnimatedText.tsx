'use client'

import React, { useState, useEffect } from 'react';

const AnimatedText = () => {
  const words = [
    'Grammar Mastery',
    'Board Questions',
    'Rule Analysis', 
    'Practice Tests',
    'Exam Success',
    'Smart Learning',
    'Quick Solutions',
    'Expert Guidance'
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsVisible(true);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`inline-block transition-all duration-300 ${
      isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-2'
    } min-h-[1.2em]`}>
      {words[currentWordIndex]}
    </span>
  );
};

export default AnimatedText;