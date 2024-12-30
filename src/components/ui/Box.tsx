import React, { ReactNode } from 'react';

interface BoxProps {
  children: ReactNode;
  className?: string;
}

export function Box({ children, className = '' }: BoxProps) {
  return (
    <div className={`p-6 bg-gradient-to-br from-gray-900 to-black rounded-lg border border-gray-800 hover:border-primary transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}