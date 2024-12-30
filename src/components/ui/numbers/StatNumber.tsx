import React from 'react';

interface StatNumberProps {
  value: string | number;
  label: string;
  className?: string;
}

export function StatNumber({ value, label, className = '' }: StatNumberProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className="text-3xl font-bold text-text mb-2 font-cambria">{value}</div>
      <div className="text-text">{label}</div>
    </div>
  );
}