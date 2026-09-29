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
            className="block text-xs font-semibold text-[#D8D3C9] tracking-tight"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            id={selectId}
            ref={ref}
            className={`w-full h-[44px] pl-3.5 pr-10 bg-[#121214] border rounded-[12px] text-sm text-[#F2EEE6] appearance-none cursor-pointer transition-all duration-150 focus:outline-none ${
              error
                ? 'border-[#F28B82] focus:border-[#F28B82] focus:ring-2 focus:ring-[#F28B82]/30'
                : 'border-[#2B2B30] hover:border-[#4A4A52] focus:border-[#F5B82E] focus:ring-2 focus:ring-[#F5B82E]/40'
            } ${className}`}
            {...props}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-[#17171A] text-[#F2EEE6]">
                {opt.label}
              </option>
            ))}
          </select>
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#8C877E]">
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
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

Select.displayName = 'Select';
