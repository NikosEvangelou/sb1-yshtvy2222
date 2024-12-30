import React, { ReactNode } from 'react';

interface IconWrapperProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export function IconWrapper({ children, size = 'md' }: IconWrapperProps) {
  const sizes = {
    sm: 'p-2',
    md: 'p-3',
    lg: 'p-4'
  };

  return (
    <div className={`${sizes[size]} rounded-lg bg-[#2B7582] text-text`}>
      {children}
    </div>
  );
}