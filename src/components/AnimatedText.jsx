import React, { useState, useEffect } from 'react';

const AnimatedText = () => {
  const words = [
    'questions',
    'rules',
    'past papers',
    'board questions',
    'analysis',
    'practice',
    'exam tests',
    'quizzes',
    'solutions',
    'explanations'
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
    }`}>
      <span className="text-blue-600 dark:text-blue-400 font-bold">
        {words[currentWordIndex]}
      </span>
    </span>
  );
};

export default AnimatedText;