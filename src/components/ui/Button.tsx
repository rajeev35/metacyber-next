import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'font-headline font-bold rounded-full transition-all duration-300 uppercase tracking-wider';

  const variants = {
    primary:
      'bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed shadow-[0_4px_20px_rgba(0,245,255,0.3)] hover:shadow-[0_8px_30px_rgba(0,245,255,0.5)] active:scale-90',
    secondary: 'bg-surface-container-high text-on-surface hover:bg-surface-container transition-colors',
    outline:
      'bg-transparent border border-outline-variant text-on-surface hover:border-primary hover:text-primary transition-all',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} scale-95`} {...props}>
      {children}
    </button>
  );
}
