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
            className="block text-xs font-semibold text-[color:var(--text-secondary)] tracking-tight"
          >
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          ref={ref}
          rows={rows}
          className={`w-full p-3.5 bg-[color:var(--surface-sunken)] border rounded-[12px] text-sm text-[color:var(--text-primary)] placeholder:text-[color:var(--text-disabled)] transition-all duration-150 focus:outline-none resize-y ${
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

Textarea.displayName = 'Textarea';
