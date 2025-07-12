'use client'

import React, { useState, useEffect } from 'react';
import { Shield, Heart, Users, AlertTriangle } from 'lucide-react';

const AntiPiracyNotice = () => {
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    // Show notice on first visit or periodically
    const lastShown = localStorage.getItem('antiPiracyNoticeShown');
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;

    if (!lastShown || now - parseInt(lastShown) > oneDay) {
      setTimeout(() => setShowNotice(true), 3000); // Show after 3 seconds
    }
  }, []);

  const handleClose = () => {
    setShowNotice(false);
    localStorage.setItem('antiPiracyNoticeShown', Date.now().toString());
  };

  if (!showNotice) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[9999] max-w-sm">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-2xl p-4 border border-blue-400">
        <div className="flex items-start space-x-3">
          <Shield className="w-6 h-6 text-blue-200 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h4 className="font-bold text-sm mb-2 flex items-center">
              <Heart className="w-4 h-4 mr-1 text-red-300" />
              Content Protected with Love
            </h4>
            <p className="text-xs text-blue-100 mb-3 leading-relaxed">
              This platform represents countless hours of work. Instead of copying, 
              please contribute and help other students learn!
            </p>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => window.open('/contribute', '_blank')}
                className="flex items-center space-x-1 bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded-lg text-xs font-medium transition-colors"
              >
                <Users className="w-3 h-3" />
                <span>Contribute</span>
              </button>
              <button
                onClick={handleClose}
                className="text-blue-200 hover:text-white text-xs font-medium transition-colors"
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AntiPiracyNotice;