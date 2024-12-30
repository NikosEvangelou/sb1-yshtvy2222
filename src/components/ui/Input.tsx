import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Input({ className = '', ...props }: InputProps) {
  return (
    <input
      className={`w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-lg text-text placeholder-text/50 focus:outline-none focus:border-[#2B7582] ${className}`}
      {...props}
    />
  );
}