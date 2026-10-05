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
          ? 'bg-[color:var(--surface-sunken)] border-[color:var(--border-subtle)]'
          : highlighted
          ? 'bg-[color:var(--surface-raised)] border-[color:var(--accent)]'
          : 'bg-[color:var(--surface-raised)] border-[color:var(--border-subtle)]'
      } ${
        interactive
          ? 'cursor-pointer hover:border-[color:var(--accent)] hover:-translate-y-0.5'
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
  <h3 className={`text-xl font-bold font-display text-[color:var(--text-primary)] tracking-tight ${className}`} {...props}>
    {children}
  </h3>
);

export const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className = '',
  children,
  ...props
}) => (
  <p className={`text-sm text-[color:var(--text-muted)] mt-1.5 leading-relaxed ${className}`} {...props}>
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
  <div className={`p-6 pt-2 border-t border-[color:var(--border-subtle)] mt-auto flex items-center justify-between ${className}`} {...props}>
    {children}
  </div>
);
