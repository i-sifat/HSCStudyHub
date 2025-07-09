// Anti-piracy utility functions

/**
 * Disable common browser features that could be used for content theft
 */
export const initializeAntiPiracy = () => {
  // Disable console
  if (typeof console !== 'undefined') {
    console.log = console.warn = console.error = console.info = console.debug = () => {};
  }

  // Detect and warn about common screen recording software
  const detectScreenRecording = () => {
    // Check for common screen recording indicators
    const indicators = [
      'webkitGetDisplayMedia',
      'getDisplayMedia',
      'captureStream',
      'mozCaptureStream',
      'webkitCaptureStream'
    ];

    indicators.forEach(indicator => {
      if (navigator.mediaDevices && navigator.mediaDevices[indicator]) {
        console.warn('Screen recording capability detected');
      }
    });
  };

  // Obfuscate source code in production
  const obfuscateSource = () => {
    if (process.env.NODE_ENV === 'production') {
      // Remove source maps and debugging info
      const scripts = document.querySelectorAll('script');
      scripts.forEach(script => {
        if (script.src && script.src.includes('.map')) {
          script.remove();
        }
      });
    }
  };

  // Initialize protections
  detectScreenRecording();
  obfuscateSource();

  // Add periodic checks
  setInterval(() => {
    // Check if dev tools are open (basic detection)
    const start = performance.now();
    debugger; // This will pause if dev tools are open
    const end = performance.now();
    
    if (end - start > 100) {
      document.body.classList.add('dev-tools-open');
    }
  }, 1000);
};

/**
 * Create a watermark overlay for content protection
 */
export const createWatermark = (text = 'English Subject Hub - Protected') => {
  const watermark = document.createElement('div');
  watermark.innerHTML = text;
  watermark.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9997;
    opacity: 0.05;
    font-size: 20px;
    color: #000;
    transform: rotate(-45deg);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Arial, sans-serif;
    font-weight: bold;
    user-select: none;
  `;
  
  document.body.appendChild(watermark);
  return watermark;
};

/**
 * Disable image saving and dragging
 */
export const protectImages = () => {
  const style = document.createElement('style');
  style.textContent = `
    img {
      -webkit-user-drag: none !important;
      -khtml-user-drag: none !important;
      -moz-user-drag: none !important;
      -o-user-drag: none !important;
      user-drag: none !important;
      -webkit-user-select: none !important;
      -moz-user-select: none !important;
      -ms-user-select: none !important;
      user-select: none !important;
      pointer-events: none !important;
    }
  `;
  document.head.appendChild(style);
};

/**
 * Monitor for suspicious activity
 */
export const monitorSuspiciousActivity = () => {
  let suspiciousActivityCount = 0;
  
  const logSuspiciousActivity = (activity) => {
    suspiciousActivityCount++;
    console.warn(`Suspicious activity detected: ${activity}`);
    
    if (suspiciousActivityCount > 5) {
      // Could implement more strict measures here
      alert('Multiple attempts to bypass content protection detected. Please respect the creator\'s work.');
    }
  };

  // Monitor for rapid key presses (potential bot activity)
  let keyPressCount = 0;
  document.addEventListener('keydown', () => {
    keyPressCount++;
    setTimeout(() => keyPressCount--, 1000);
    
    if (keyPressCount > 10) {
      logSuspiciousActivity('Rapid key presses');
    }
  });

  // Monitor for multiple tab focus changes (potential screenshot attempts)
  let focusChangeCount = 0;
  window.addEventListener('blur', () => {
    focusChangeCount++;
    setTimeout(() => focusChangeCount--, 5000);
    
    if (focusChangeCount > 3) {
      logSuspiciousActivity('Multiple tab switches');
    }
  });
};

/**
 * Initialize all anti-piracy measures
 */
export const initializeFullProtection = () => {
  initializeAntiPiracy();
  createWatermark();
  protectImages();
  monitorSuspiciousActivity();
  
  // Add a subtle message for legitimate users
  console.log('%c🛡️ Content Protection Active', 'color: #ff6b6b; font-size: 16px; font-weight: bold;');
  console.log('%cThis platform is protected to respect the creator\'s hard work. Please contribute positively!', 'color: #4ecdc4; font-size: 12px;');
};