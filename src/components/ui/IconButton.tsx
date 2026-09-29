import React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  ariaLabel: string;
  children: React.ReactNode;
}

export const IconButton: React.FC<IconButtonProps> = ({
  variant = 'secondary',
  size = 'md',
  ariaLabel,
  children,
  className = '',
  ...props
}) => {
  const sizeClasses = {
    sm: 'w-[36px] h-[36px]',
    md: 'w-[44px] h-[44px]',
    lg: 'w-[48px] h-[48px]',
  };

  const variantClasses = {
    primary: 'bg-[#F5B82E] text-[#17130A] hover:bg-[#FFD36B]',
    secondary: 'border border-[#2B2B30] text-[#F2EEE6] bg-[#17171A] hover:border-[#8C877E] hover:text-[#F5B82E]',
    ghost: 'text-[#B5B0A6] hover:text-[#F2EEE6] hover:bg-[#1F1F23]',
  };

  return (
    <button
      aria-label={ariaLabel}
      className={`inline-flex items-center justify-center rounded-full transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B82E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D0F] active:translate-y-px ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
