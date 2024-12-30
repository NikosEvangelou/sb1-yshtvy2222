import React, { ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function Text({ children, variant = 'primary', className = '' }: TextProps) {
  const variants = {
    primary: 'text-text',
    secondary: 'text-text/80'
  };

  return (
    <p className={`${variants[variant]} ${className}`}>
      {children}
    </p>
  );
}