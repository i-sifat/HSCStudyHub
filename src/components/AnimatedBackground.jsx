import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 animate-gradient-shift"></div>
      
      {/* Floating elements for subtle animation */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/20 dark:bg-blue-800/20 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-200/20 dark:bg-purple-800/20 rounded-full blur-3xl animate-float-slower"></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-200/20 dark:bg-indigo-800/20 rounded-full blur-3xl animate-float-reverse"></div>
      
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% {
            background: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 50%, #f3e8ff 100%);
          }
          25% {
            background: linear-gradient(135deg, #fef3c7 0%, #dbeafe 50%, #e0e7ff 100%);
          }
          50% {
            background: linear-gradient(135deg, #fce7f3 0%, #f3e8ff 50%, #dbeafe 100%);
          }
          75% {
            background: linear-gradient(135deg, #ecfdf5 0%, #fef3c7 50%, #fce7f3 100%);
          }
        }
        
        .dark .animate-gradient-shift {
          animation: gradient-shift-dark 20s ease-in-out infinite;
        }
        
        @keyframes gradient-shift-dark {
          0%, 100% {
            background: linear-gradient(135deg, #111827 0%, #1f2937 50%, #312e81 100%);
          }
          25% {
            background: linear-gradient(135deg, #1f2937 0%, #374151 50%, #1e1b4b 100%);
          }
          50% {
            background: linear-gradient(135deg, #374151 0%, #4b5563 50%, #312e81 100%);
          }
          75% {
            background: linear-gradient(135deg, #1f2937 0%, #111827 50%, #1e1b4b 100%);
          }
        }
        
        .animate-gradient-shift {
          animation: gradient-shift 20s ease-in-out infinite;
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
        
        @keyframes float-slower {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-40px, -40px) rotate(180deg); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-25px, 35px) rotate(-120deg); }
          66% { transform: translate(35px, -25px) rotate(-240deg); }
        }
        
        .animate-float-slow {
          animation: float-slow 25s ease-in-out infinite;
        }
        
        .animate-float-slower {
          animation: float-slower 30s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 35s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;