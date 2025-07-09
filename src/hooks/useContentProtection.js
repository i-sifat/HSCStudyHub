import { useEffect, useCallback, useState } from 'react';

export const useContentProtection = () => {
  const [showWarning, setShowWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState('');

  const showProtectionWarning = useCallback((message) => {
    setWarningMessage(message);
    setShowWarning(true);
    
    // Auto hide after 5 seconds
    setTimeout(() => {
      setShowWarning(false);
    }, 5000);
  }, []);

  // Disable right-click context menu
  const handleContextMenu = useCallback((e) => {
    e.preventDefault();
    showProtectionWarning(
      "❌ This website is made with hours of work. Don't just copy paste and break someone's motivation. Please contribute instead!"
    );
    return false;
  }, [showProtectionWarning]);

  // Disable text selection and copy
  const handleCopy = useCallback((e) => {
    e.preventDefault();
    showProtectionWarning(
      "❌ Content copying is disabled. This platform represents countless hours of work. Please respect the effort and contribute positively!"
    );
    return false;
  }, [showProtectionWarning]);

  // Detect keyboard shortcuts
  const handleKeyDown = useCallback((e) => {
    // Disable Ctrl+C, Ctrl+A, Ctrl+S, Ctrl+P, F12, Ctrl+Shift+I, Ctrl+U
    if (
      (e.ctrlKey && (e.key === 'c' || e.key === 'C')) ||
      (e.ctrlKey && (e.key === 'a' || e.key === 'A')) ||
      (e.ctrlKey && (e.key === 's' || e.key === 'S')) ||
      (e.ctrlKey && (e.key === 'p' || e.key === 'P')) ||
      (e.ctrlKey && (e.key === 'u' || e.key === 'U')) ||
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) ||
      (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j')) ||
      (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c'))
    ) {
      e.preventDefault();
      showProtectionWarning(
        "❌ Developer tools and shortcuts are disabled. This website represents hours of dedicated work. Please don't copy content and contribute instead!"
      );
      return false;
    }

    // Detect Print Screen
    if (e.key === 'PrintScreen') {
      e.preventDefault();
      showProtectionWarning(
        "📷 Screenshots are discouraged. This content is protected. Please respect the creator's effort and contribute to the platform!"
      );
      return false;
    }
  }, [showProtectionWarning]);

  // Detect visibility change (potential screenshot detection)
  const handleVisibilityChange = useCallback(() => {
    if (document.hidden) {
      // User might be taking a screenshot or switched tabs
      setTimeout(() => {
        if (!document.hidden) {
          showProtectionWarning(
            "📷 Screenshot detected! This content is protected. Please respect the hours of work put into this platform."
          );
        }
      }, 100);
    }
  }, [showProtectionWarning]);

  // Detect print attempts
  const handleBeforePrint = useCallback(() => {
    showProtectionWarning(
      "🖨️ Printing is disabled. This content is protected. Please respect the creator's work and contribute positively!"
    );
  }, [showProtectionWarning]);

  // Blur content when dev tools might be open
  const handleResize = useCallback(() => {
    const threshold = 160;
    if (
      window.outerHeight - window.innerHeight > threshold ||
      window.outerWidth - window.innerWidth > threshold
    ) {
      document.body.classList.add('dev-tools-open');
      showProtectionWarning(
        "🔧 Developer tools detected! Please close dev tools and respect the content protection."
      );
    } else {
      document.body.classList.remove('dev-tools-open');
    }
  }, [showProtectionWarning]);

  useEffect(() => {
    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeprint', handleBeforePrint);
    window.addEventListener('resize', handleResize);

    // Disable drag and drop
    const handleDragStart = (e) => {
      e.preventDefault();
      return false;
    };
    document.addEventListener('dragstart', handleDragStart);

    // Disable image saving
    const handleDragOver = (e) => {
      e.preventDefault();
      return false;
    };
    document.addEventListener('dragover', handleDragOver);

    // Initial check for dev tools
    handleResize();

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeprint', handleBeforePrint);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('dragover', handleDragOver);
    };
  }, [handleContextMenu, handleCopy, handleKeyDown, handleVisibilityChange, handleBeforePrint, handleResize]);

  return {
    showWarning,
    warningMessage,
    hideWarning: () => setShowWarning(false)
  };
};