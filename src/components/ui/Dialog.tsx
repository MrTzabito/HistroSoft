import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Dialog: React.FC<DialogProps> = ({
  open,
  onClose,
  title,
  description,
  children,
  maxWidth = 'md',
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  const maxWidthClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-3xl',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Dialog Scrim (black 64%) */}
      <div
        className="fixed inset-0 bg-black/64 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dialog Window: 22px radius, --surface-raised #17171A, 1px #2B2B30 border, --shadow-3 */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        className={`relative w-full ${maxWidthClasses[maxWidth]} bg-[#17171A] border border-[#2B2B30] rounded-[22px] shadow-[0_12px_36px_rgba(0,0,0,0.65),0_4px_12px_rgba(0,0,0,0.4)] p-6 md:p-8 z-10 my-8 max-h-[90vh] overflow-y-auto text-left transform transition-all duration-300 animate-in fade-in zoom-in-95`}
      >
        <div className="flex items-start justify-between gap-4 mb-5 pb-4 border-b border-[#2B2B30]">
          <div>
            <h3
              id="dialog-title"
              className="font-display font-bold text-xl md:text-2xl text-[#F2EEE6] tracking-tight"
            >
              {title}
            </h3>
            {description && (
              <p className="text-xs md:text-sm text-[#B5B0A6] mt-1 leading-relaxed">
                {description}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-[#2B2B30] flex items-center justify-center text-[#B5B0A6] hover:text-[#F2EEE6] hover:border-[#8C877E] transition-colors shrink-0 cursor-pointer"
            aria-label="Cerrar ventana"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="relative">{children}</div>
      </div>
    </div>
  );
};
