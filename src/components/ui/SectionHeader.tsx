import React from 'react';

export interface SectionHeaderProps {
  number?: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  eyebrow,
  title,
  description,
  className = '',
}) => {
  const eyebrowText = number ? `${number} — ${eyebrow}` : eyebrow;

  return (
    <div className={`w-full mb-12 md:mb-16 ${className}`}>
      {/* 1px hairline rule above */}
      <div className="w-full h-px bg-[#4A4A52] mb-6 md:mb-8" />

      {/* 12-column grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-x-6 items-baseline">
        {/* Cols 1–3: Eyebrow in uppercase gold */}
        <div className="md:col-span-3">
          <span className="font-sans font-extrabold text-[12px] uppercase tracking-[0.18em] text-[#F5B82E]">
            {eyebrowText}
          </span>
        </div>

        {/* Cols 4–12: Title and description */}
        <div className="md:col-span-9 space-y-3">
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#F2EEE6] tracking-tight leading-[1.08] text-balance">
            {title}
          </h2>
          {description && (
            <p className="font-sans text-[#B5B0A6] text-base md:text-lg leading-relaxed max-w-3xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
