import React from 'react';

export interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
}

export const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  label,
  description,
  disabled = false,
}) => {
  return (
    <label className={`inline-flex items-center gap-3 select-none ${disabled ? 'opacity-50 pointer-events-none' : 'cursor-pointer'}`}>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-6 w-11 shrink-0 rounded-full border border-transparent transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] ${
          checked ? 'bg-[color:var(--accent)]' : 'bg-[color:var(--border-subtle)]'
        }`}
      >
        <span
          className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-[color:var(--contrast-fill)] shadow-[0_1px_3px_rgba(11,31,68,0.18)] ring-0 transition duration-200 ease-in-out ${
            checked ? 'translate-x-5 !bg-[color:var(--accent-fg)]' : 'translate-x-0.5'
          }`}
        />
      </button>
      {(label || description) && (
        <span className="flex flex-col text-left">
          {label && (
            <span className="text-xs font-semibold text-[color:var(--text-primary)]">
              {label}
            </span>
          )}
          {description && (
            <span className="text-[11px] text-[color:var(--text-faint)]">
              {description}
            </span>
          )}
        </span>
      )}
    </label>
  );
};
