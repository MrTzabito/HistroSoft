import React from 'react';

interface WordmarkProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  /** 'dark' = logo blanco para fondos oscuros; 'light' = logo a color para fondos claros */
  tone?: 'light' | 'dark';
  onClick?: () => void;
}

// Ancho mínimo del logo: 120 px (alto 28 px => ~123 px de ancho con proporción 441:100)
const sizeClasses = {
  sm: 'h-7',
  md: 'h-8',
  lg: 'h-10',
};

export const Wordmark: React.FC<WordmarkProps> = ({
  className = '',
  size = 'md',
  tone = 'light',
  onClick,
}) => {
  const src = tone === 'dark'
    ? '/histrosoft-logo-horizontal-blanco.svg'
    : '/histrosoft-logo-horizontal.svg';

  return (
    <img
      src={src}
      alt="HistroSoft"
      onClick={onClick}
      draggable={false}
      className={`block w-auto select-none ${sizeClasses[size]} ${onClick ? 'cursor-pointer' : ''} ${className}`}
    />
  );
};
