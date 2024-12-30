import React, { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export function Heading({ children, level = 2, className = '' }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const baseStyles = "font-bold text-text";
  const sizes = {
    1: "text-4xl sm:text-5xl lg:text-6xl",
    2: "text-3xl",
    3: "text-2xl",
    4: "text-xl",
    5: "text-lg",
    6: "text-base"
  };

  return (
    <Tag className={`${baseStyles} ${sizes[level]} ${className}`}>
      {children}
    </Tag>
  );
}