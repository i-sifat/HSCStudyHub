import { useEffect, useCallback, useState } from 'react';

export const useContentProtection = () => {
  const [showWarning, setShowWarning] = useState(false);

  const showProtectionWarning = useCallback(() => {
    setShowWarning(true);
  }, []);

  // Disable right-click context menu
  const handleContextMenu = useCallback((e) => {
    e.preventDefault();
    showProtectionWarning();
    return false;
  }, [showProtectionWarning]);

  // Disable text selection and copy
  const handleCopy = useCallback((e) => {
    e.preventDefault();
    showProtectionWarning();
    return false;
  }, [showProtectionWarning]);

  // Enhanced mobile screenshot detection
  const handleVisibilityChange = useCallback(() => {
    // Mobile screenshot detection - when user takes screenshot, page becomes hidden briefly
    if (document.hidden) {
      // Additional mobile-specific checks
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      if (isMobile) {
        // On mobile, any visibility change could be a screenshot
        setTimeout(() => {
          if (!document.hidden) {
            showProtectionWarning();
          }
        }, 50);
      } else {
        // Desktop behavior
        setTimeout(() => {
          if (!document.hidden) {
            showProtectionWarning();
          }
        }, 100);
      }
    }
  }, [showProtectionWarning]);

  // Mobile-specific screenshot detection methods
  const handleMobileScreenshotDetection = useCallback(() => {
    // Method 1: Detect power + volume button combination (Android)
    let powerPressed = false;
    let volumePressed = false;
    
    const handleKeyDown = (e) => {
      if (e.key === 'Power' || e.keyCode === 26) powerPressed = true;
      if (e.key === 'VolumeDown' || e.keyCode === 25) volumePressed = true;
      
      if (powerPressed && volumePressed) {
        showProtectionWarning();
        powerPressed = false;
        volumePressed = false;
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === 'Power' || e.keyCode === 26) powerPressed = false;
      if (e.key === 'VolumeDown' || e.keyCode === 25) volumePressed = false;
    };

    // Method 2: Detect iOS screenshot (Home + Power button)
    const handleTouchStart = (e) => {
      if (e.touches.length >= 2) {
        // Multiple touches might indicate screenshot gesture
        setTimeout(() => {
          showProtectionWarning();
        }, 100);
      }
    };

    // Method 3: Monitor for rapid app switching (screenshot sharing)
    let focusChangeCount = 0;
    const handleFocus = () => {
      focusChangeCount++;
      setTimeout(() => {
        if (focusChangeCount > 0) focusChangeCount--;
      }, 1000);
      
      if (focusChangeCount > 2) {
        showProtectionWarning();
      }
    };

    const handleBlur = () => {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      if (isMobile) {
        // On mobile, losing focus often means screenshot or app switch
        setTimeout(() => {
          showProtectionWarning();
        }, 200);
      }
    };

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('focus', handleFocus);
    window.addEventListener('blur', handleBlur);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
      document.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('blur', handleBlur);
    };
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
      showProtectionWarning();
      return false;
    }

    // Detect Print Screen
    if (e.key === 'PrintScreen') {
      e.preventDefault();
      showProtectionWarning();
      return false;
    }
  }, [showProtectionWarning]);

  // Detect print attempts
  const handleBeforePrint = useCallback(() => {
    showProtectionWarning();
  }, [showProtectionWarning]);

  // Enhanced mobile detection for dev tools
  const handleResize = useCallback(() => {
    const threshold = 160;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // On mobile, any significant size change might indicate screenshot or dev tools
      if (
        window.outerHeight - window.innerHeight > threshold ||
        window.outerWidth - window.innerWidth > threshold
      ) {
        document.body.classList.add('dev-tools-open');
        showProtectionWarning();
      } else {
        document.body.classList.remove('dev-tools-open');
      }
    } else {
      // Desktop behavior
      if (
        window.outerHeight - window.innerHeight > threshold ||
        window.outerWidth - window.innerWidth > threshold
      ) {
        document.body.classList.add('dev-tools-open');
        showProtectionWarning();
      } else {
        document.body.classList.remove('dev-tools-open');
      }
    }
  }, [showProtectionWarning]);

  // Mobile-specific touch and gesture detection
  const handleTouchEvents = useCallback(() => {
    let touchStartTime = 0;
    let touchCount = 0;

    const handleTouchStart = (e) => {
      touchStartTime = Date.now();
      touchCount = e.touches.length;
      
      // Detect multi-touch gestures that might be screenshots
      if (touchCount >= 3) {
        e.preventDefault();
        showProtectionWarning();
      }
    };

    const handleTouchEnd = (e) => {
      const touchDuration = Date.now() - touchStartTime;
      
      // Detect quick multi-touch (potential screenshot gesture)
      if (touchCount >= 2 && touchDuration < 500) {
        showProtectionWarning();
      }
    };

    // Prevent long press context menu on mobile
    const handleTouchMove = (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchend', handleTouchEnd, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [showProtectionWarning]);

  useEffect(() => {
    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeprint', handleBeforePrint);
    window.addEventListener('resize', handleResize);

    // Initialize mobile-specific protections
    const cleanupMobileDetection = handleMobileScreenshotDetection();
    const cleanupTouchEvents = handleTouchEvents();

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

    // Mobile-specific: Disable text selection completely
    const handleSelectStart = (e) => {
      e.preventDefault();
      return false;
    };
    document.addEventListener('selectstart', handleSelectStart);

    // Initial check for dev tools
    handleResize();

    // Enhanced mobile screenshot detection using Page Visibility API
    const handlePageHide = () => {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      if (isMobile) {
        showProtectionWarning();
      }
    };

    window.addEventListener('pagehide', handlePageHide);

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
      document.removeEventListener('selectstart', handleSelectStart);
      window.removeEventListener('pagehide', handlePageHide);
      
      cleanupMobileDetection();
      cleanupTouchEvents();
    };
  }, [handleContextMenu, handleCopy, handleKeyDown, handleVisibilityChange, handleBeforePrint, handleResize, handleMobileScreenshotDetection, handleTouchEvents]);

  return {
    showWarning,
    hideWarning: () => setShowWarning(false)
  };
};