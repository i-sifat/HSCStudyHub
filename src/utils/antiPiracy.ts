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
      if (navigator.mediaDevices && (navigator.mediaDevices as Record<string, unknown>)[indicator]) {
        console.warn('Screen recording capability detected');
      }
    });
  };

  // Initialize protections
  detectScreenRecording();

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
export const createWatermark = (text = 'Onushilon Hub - Protected') => {
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
 * Protect images from being saved
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
 * Initialize all anti-piracy measures
 */
export const initializeFullProtection = () => {
  initializeAntiPiracy();
  protectImages();
  
  // Enhanced mobile screenshot protection
  const initializeMobileProtection = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Disable context menu on mobile
      document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        return false;
      }, { passive: false });
      
      // Disable text selection on mobile
      document.addEventListener('selectstart', (e) => {
        e.preventDefault();
        return false;
      }, { passive: false });
    }
  };
  
  initializeMobileProtection();
  
  // Add a subtle message for legitimate users
  console.log('%c🛡️ Onushilon Hub - Content Protection Active', 'color: #ff6b6b; font-size: 16px; font-weight: bold;');
  console.log('%cThis platform is protected to respect the creator\'s hard work. Please contribute positively!', 'color: #4ecdc4; font-size: 12px;');
};