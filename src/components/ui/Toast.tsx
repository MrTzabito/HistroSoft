import React, { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info';

export interface ToastMessage {
  id: string;
  type: ToastType;
  title: string;
  description?: string;
}

interface ToastContextType {
  showToast: (title: string, description?: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(
    (title: string, description?: string, type: ToastType = 'success') => {
      const id = Math.random().toString(36).substring(2, 9);
      setToasts((prev) => [...prev, { id, title, description, type }]);

      setTimeout(() => {
        removeToast(id);
      }, 5000);
    },
    [removeToast]
  );

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* Toast container bottom-right */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none px-4 sm:px-0">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            role="status"
            className="theme-dark pointer-events-auto flex items-start gap-3 p-4 rounded-[16px] bg-[color:var(--surface-inverse)] border border-[color:var(--border-subtle)] text-[color:var(--text-primary)] shadow-[0_4px_16px_rgba(11,31,68,0.2),0_2px_4px_rgba(11,31,68,0.1)] animate-in fade-in slide-in-from-bottom-3 duration-200"
          >
            <div className="mt-0.5 shrink-0">
              {toast.type === 'success' && (
                <CheckCircle2 className="w-4 h-4 text-[color:var(--green)]" />
              )}
              {toast.type === 'error' && (
                <AlertCircle className="w-4 h-4 text-[color:var(--red)]" />
              )}
              {toast.type === 'info' && (
                <Info className="w-4 h-4 text-[color:var(--accent)]" />
              )}
            </div>
            <div className="flex-1 text-left">
              <p className="text-xs font-semibold text-[color:var(--text-primary)] leading-tight">
                {toast.title}
              </p>
              {toast.description && (
                <p className="text-[12px] text-[color:var(--text-muted)] mt-1 leading-normal">
                  {toast.description}
                </p>
              )}
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-[color:var(--text-faint)] hover:text-[color:var(--text-primary)] shrink-0 cursor-pointer p-0.5"
              aria-label="Cerrar notificación"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
