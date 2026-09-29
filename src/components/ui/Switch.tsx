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
        className={`relative inline-flex h-6 w-11 shrink-0 rounded-full border border-transparent transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B82E] ${
          checked ? 'bg-[#F5B82E]' : 'bg-[#2B2B30]'
        }`}
      >
        <span
          className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-[#F2EEE6] shadow-[0_1px_3px_rgba(0,0,0,0.4)] ring-0 transition duration-200 ease-in-out ${
            checked ? 'translate-x-5 !bg-[#17130A]' : 'translate-x-0.5'
          }`}
        />
      </button>
      {(label || description) && (
        <span className="flex flex-col text-left">
          {label && (
            <span className="text-xs font-semibold text-[#F2EEE6]">
              {label}
            </span>
          )}
          {description && (
            <span className="text-[11px] text-[#8C877E]">
              {description}
            </span>
          )}
        </span>
      )}
    </label>
  );
};
