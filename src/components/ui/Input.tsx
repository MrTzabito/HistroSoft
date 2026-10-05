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
            className="block text-xs font-semibold text-[color:var(--text-secondary)] tracking-tight"
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={`w-full h-[44px] px-3.5 bg-[color:var(--surface-sunken)] border rounded-[12px] text-sm text-[color:var(--text-primary)] placeholder:text-[color:var(--text-disabled)] transition-all duration-150 focus:outline-none ${
            error
              ? 'border-[color:var(--red)] focus:border-[color:var(--red)] focus:ring-2 focus:ring-[color:var(--red)]/30'
              : 'border-[color:var(--border-subtle)] hover:border-[color:var(--border-strong)] focus:border-[color:var(--accent)] focus:ring-2 focus:ring-[color:var(--accent)]/40'
          } ${className}`}
          {...props}
        />
        {error && (
          <p className="text-[12px] text-[color:var(--red)] font-medium">{error}</p>
        )}
        {helperText && !error && (
          <p className="text-[11px] text-[color:var(--text-faint)]">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
