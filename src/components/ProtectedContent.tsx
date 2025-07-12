'use client'

import React, { useEffect } from 'react';
import { initializeFullProtection } from '@/utils/antiPiracy';

interface ProtectedContentProps {
  children: React.ReactNode;
}

const ProtectedContent: React.FC<ProtectedContentProps> = ({ children }) => {
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