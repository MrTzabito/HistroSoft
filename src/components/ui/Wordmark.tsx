import React from 'react';

interface WordmarkProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export const Wordmark: React.FC<WordmarkProps> = ({
  className = '',
  size = 'md',
  onClick,
}) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center tracking-tight select-none ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      <span className={`font-sans font-medium text-[#F2EEE6] ${sizeClasses[size]}`}>
        Histro
      </span>
      <span className={`font-sans font-light text-[#D8D3C9] ${sizeClasses[size]}`}>
        Soft
      </span>
      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#F5B82E] ml-1 self-baseline mb-1" />
    </div>
  );
};
