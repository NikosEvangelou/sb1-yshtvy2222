import React, { TextareaHTMLAttributes } from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export function TextArea({ className = '', ...props }: TextAreaProps) {
  return (
    <textarea
      className={`w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-lg text-text placeholder-text/50 focus:outline-none focus:border-[#2B7582] ${className}`}
      {...props}
    />
  );
}