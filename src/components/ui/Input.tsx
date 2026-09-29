import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className = '', id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full space-y-1.5 text-left">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-xs font-semibold text-[#D8D3C9] tracking-tight"
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={`w-full h-[44px] px-3.5 bg-[#121214] border rounded-[12px] text-sm text-[#F2EEE6] placeholder-[#6B675F] transition-all duration-150 focus:outline-none ${
            error
              ? 'border-[#F28B82] focus:border-[#F28B82] focus:ring-2 focus:ring-[#F28B82]/30'
              : 'border-[#2B2B30] hover:border-[#4A4A52] focus:border-[#F5B82E] focus:ring-2 focus:ring-[#F5B82E]/40'
          } ${className}`}
          {...props}
        />
        {error && (
          <p className="text-[12px] text-[#F28B82] font-medium">{error}</p>
        )}
        {helperText && !error && (
          <p className="text-[11px] text-[#8C877E]">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
