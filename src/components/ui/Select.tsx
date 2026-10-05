import React from 'react';
import { ChevronDown } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  error?: string;
  helperText?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, error, helperText, className = '', id, ...props }, ref) => {
    const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full space-y-1.5 text-left">
        {label && (
          <label
            htmlFor={selectId}
            className="block text-xs font-semibold text-[color:var(--text-secondary)] tracking-tight"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            id={selectId}
            ref={ref}
            className={`w-full h-[44px] pl-3.5 pr-10 bg-[color:var(--surface-sunken)] border rounded-[12px] text-sm text-[color:var(--text-primary)] appearance-none cursor-pointer transition-all duration-150 focus:outline-none ${
              error
                ? 'border-[color:var(--red)] focus:border-[color:var(--red)] focus:ring-2 focus:ring-[color:var(--red)]/30'
                : 'border-[color:var(--border-subtle)] hover:border-[color:var(--border-strong)] focus:border-[color:var(--accent)] focus:ring-2 focus:ring-[color:var(--accent)]/40'
            } ${className}`}
            {...props}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-[color:var(--surface-raised)] text-[color:var(--text-primary)]">
                {opt.label}
              </option>
            ))}
          </select>
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[color:var(--text-faint)]">
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
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

Select.displayName = 'Select';
