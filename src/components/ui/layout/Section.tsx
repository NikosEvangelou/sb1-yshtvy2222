import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  bgColor?: string;
}

export function Section({ children, className = '', bgColor = 'rgb(3, 3, 3)' }: SectionProps) {
  return (
    <div className={`py-16 ${className}`} style={{ backgroundColor: bgColor }}>
      {children}
    </div>
  );
}