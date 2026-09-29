import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'link' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      iconRight,
      iconLeft,
      children,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: 'h-[36px] px-4 text-xs font-semibold gap-1.5',
      md: 'h-[44px] px-6 text-sm font-semibold gap-2',
      lg: 'h-[48px] px-8 text-base font-semibold gap-2.5',
    };

    const variantClasses = {
      primary:
        'bg-[#F5B82E] text-[#17130A] hover:bg-[#FFD36B] active:bg-[#E0A21A] active:translate-y-px shadow-sm',
      secondary:
        'border border-[#2B2B30] text-[#F2EEE6] bg-transparent hover:bg-[#F2EEE6] hover:text-[#0D0D0F] hover:border-[#F2EEE6] active:translate-y-px',
      ghost:
        'text-[#F2EEE6] bg-transparent hover:bg-[#17171A] hover:text-[#FFD36B] active:translate-y-px',
      link:
        'text-[#F5B82E] hover:text-[#FFD36B] bg-transparent p-0 h-auto underline-offset-4 hover:underline',
      destructive:
        'bg-[#2E1B1A] border border-[#F28B82]/40 text-[#F28B82] hover:bg-[#F28B82] hover:text-[#17130A]',
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={`inline-flex items-center justify-center rounded-full font-sans tracking-tight transition-all duration-150 ease-out select-none whitespace-nowrap cursor-pointer disabled:opacity-45 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B82E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D0F] ${
          sizeClasses[size]
        } ${variantClasses[variant]} ${className}`}
        {...props}
      >
        {iconLeft && <span className="shrink-0">{iconLeft}</span>}
        <span>{children}</span>
        {iconRight && <span className="shrink-0 transition-transform duration-150 group-hover:translate-x-0.5">{iconRight}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
