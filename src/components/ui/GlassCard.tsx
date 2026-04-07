import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  [key: string]: any;
}

export default function GlassCard({
  children,
  className = '',
  hover = true,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={`glass-card p-8 rounded-2xl ${
        hover && 'transition-all duration-300 hover:bg-surface-container-high hover:border-primary/30'
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
