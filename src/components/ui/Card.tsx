import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
  highlighted?: boolean;
  sunken?: boolean;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  interactive = false,
  highlighted = false,
  sunken = false,
  children,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`rounded-[22px] transition-all duration-200 ease-out border ${
        sunken
          ? 'bg-[#121214] border-[#2B2B30]'
          : highlighted
          ? 'bg-[#17171A] border-[#F5B82E]'
          : 'bg-[#17171A] border-[#2B2B30]'
      } ${
        interactive
          ? 'cursor-pointer hover:border-[#F5B82E] hover:-translate-y-0.5'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className = '',
  children,
  ...props
}) => (
  <div className={`p-6 pb-3 ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className = '',
  children,
  ...props
}) => (
  <h3 className={`text-xl font-bold font-display text-[#F2EEE6] tracking-tight ${className}`} {...props}>
    {children}
  </h3>
);

export const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className = '',
  children,
  ...props
}) => (
  <p className={`text-sm text-[#B5B0A6] mt-1.5 leading-relaxed ${className}`} {...props}>
    {children}
  </p>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className = '',
  children,
  ...props
}) => (
  <div className={`p-6 pt-2 ${className}`} {...props}>
    {children}
  </div>
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className = '',
  children,
  ...props
}) => (
  <div className={`p-6 pt-2 border-t border-[#2B2B30] mt-auto flex items-center justify-between ${className}`} {...props}>
    {children}
  </div>
);
