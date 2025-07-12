'use client'

import React, { useEffect } from 'react';
import { initializeFullProtection } from '@/utils/antiPiracy';

interface ProtectedContentProps {
  children: React.ReactNode;
  enableScreenshotProtection?: boolean;
}

const ProtectedContent: React.FC<ProtectedContentProps> = ({ 
  children, 
  enableScreenshotProtection = true 
}) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      initializeFullProtection();
    }
  }, []);

  return (
    <div className="protected-content">
      {children}
    </div>
  );
};

export default ProtectedContent;