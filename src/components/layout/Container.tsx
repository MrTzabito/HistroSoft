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
    narrow: 960,
    default: 1200,
    wide: 1360,
  };

  return (
    <div
      className={`w-full mx-auto px-4 sm:px-6 md:px-8 ${className}`}
      style={{
        maxWidth: `min(${maxSizes[size]}px, 90vw)`,
      }}
      {...props}
    >
      {children}
    </div>
  );
};
