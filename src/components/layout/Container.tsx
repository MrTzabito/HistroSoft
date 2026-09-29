import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'default',
  ...props
}) => {
  const maxSizes = {
    narrow: 'max-w-[960px]',
    default: 'max-w-[1200px]',
    wide: 'max-w-[1360px]',
  };

  return (
    <div
      className={`w-full mx-auto px-4 sm:px-6 md:px-8 ${maxSizes[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
