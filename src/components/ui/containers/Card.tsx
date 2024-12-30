import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-gradient-to-br from-gray-900 to-black rounded-lg border border-gray-800 p-6 hover:border-[#2B7582] transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}