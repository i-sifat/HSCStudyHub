import React, { useState, useEffect } from 'react';
import { X, Smartphone, Monitor } from 'lucide-react';

const MobileReminder = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobileDevice = () => {
      const width = window.innerWidth;
      const userAgent = navigator.userAgent;
      
      // Check screen width and user agent
      const isMobileWidth = width <= 768;
      const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      
      return isMobileWidth || isMobileUA;
    };

    const handleResize = () => {
      const mobile = checkMobileDevice();
      setIsMobile(mobile);
      
      // Check if user has dismissed this reminder before
      const dismissed = localStorage.getItem('mobile-reminder-dismissed');
      
      if (mobile && !dismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Initial check
    handleResize();
    
    // Listen for resize events
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('mobile-reminder-dismissed', 'true');
  };

  if (!isVisible || !isMobile) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg">
      <div className="flex items-center justify-between p-3 max-w-7xl mx-auto">
        <div className="flex items-center space-x-3 flex-1">
          <div className="flex items-center space-x-2">
            <Smartphone className="w-5 h-5 flex-shrink-0" />
            <Monitor className="w-5 h-5 flex-shrink-0" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium leading-tight">
              📱 For the best experience and full functionality, please use a Desktop or Laptop device.
            </p>
          </div>
        </div>
        <button
          onClick={handleDismiss}
          className="ml-3 p-1 hover:bg-white/20 rounded-full transition-colors flex-shrink-0"
          aria-label="Dismiss mobile reminder"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default MobileReminder;