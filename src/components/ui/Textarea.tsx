import React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, className = '', id, rows = 4, ...props }, ref) => {
    const textareaId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full space-y-1.5 text-left">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-xs font-semibold text-[#D8D3C9] tracking-tight"
          >
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          ref={ref}
          rows={rows}
          className={`w-full p-3.5 bg-[#121214] border rounded-[12px] text-sm text-[#F2EEE6] placeholder-[#6B675F] transition-all duration-150 focus:outline-none resize-y ${
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

Textarea.displayName = 'Textarea';
