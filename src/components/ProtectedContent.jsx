import React from 'react';
import { useContentProtection } from '../hooks/useContentProtection';
import ContentProtectionWarning from './ContentProtectionWarning';
import ScreenshotOverlay from './ScreenshotOverlay';

const ProtectedContent = ({ children, enableScreenshotProtection = true }) => {
  const { showWarning, warningMessage, hideWarning } = useContentProtection();

  return (
    <div className="protected-content">
      {/* Add CSS classes for protection */}
      <style jsx>{`
        .protected-content {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: transparent;
        }
        
        .protected-content img {
          -webkit-user-drag: none;
          -khtml-user-drag: none;
          -moz-user-drag: none;
          -o-user-drag: none;
          user-drag: none;
          pointer-events: none;
        }
        
        .dev-tools-open {
          filter: blur(5px);
          pointer-events: none;
        }
        
        .dev-tools-open::before {
          content: "🔧 Developer tools detected! Please close dev tools to continue.";
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(0, 0, 0, 0.9);
          color: white;
          padding: 20px;
          border-radius: 10px;
          z-index: 9999;
          font-size: 18px;
          text-align: center;
        }
        
        @media print {
          .protected-content {
            display: none !important;
          }
          
          .protected-content::before {
            content: "This content is protected and cannot be printed. Please respect the creator's work.";
            display: block;
            font-size: 24px;
            text-align: center;
            padding: 50px;
          }
        }
      `}</style>
      
      {children}
      
      {enableScreenshotProtection && <ScreenshotOverlay />}
      
      <ContentProtectionWarning
        show={showWarning}
        message={warningMessage}
        onClose={hideWarning}
      />
    </div>
  );
};

export default ProtectedContent;