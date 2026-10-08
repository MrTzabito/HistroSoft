import React, { useState } from 'react';

// Número de contacto directo (Perú, +51)
const WHATSAPP_NUMBER = '51944017041';
const WHATSAPP_MESSAGE = 'Hola HistroSoft, quisiera más información sobre sus soluciones.';

/** Botón flotante de WhatsApp (esquina inferior derecha). */
export const WhatsAppButton: React.FC = () => {
  const [showLabel, setShowLabel] = useState(false);
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  const handleClick = () => {
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[42] flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Etiqueta que aparece solo al pasar el mouse sobre el icono */}
      <span className={`pointer-events-none hidden md:block rounded-full bg-[color:var(--azul-noche)] text-white text-xs font-semibold px-3.5 py-2 shadow-lg transition-all duration-200 whitespace-nowrap ${
        showLabel ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
      }`}>
        Escríbanos por WhatsApp
      </span>

      <button
        onClick={handleClick}
        onMouseEnter={() => setShowLabel(true)}
        onMouseLeave={() => setShowLabel(false)}
        aria-label="Escribir por WhatsApp al 944 017 041"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(11,31,68,0.28)] transition-transform duration-200 hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366] animate-whatsapp-bounce animate-whatsapp-pulse cursor-pointer border-none">
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
          <path d="M16.04 3C8.84 3 3 8.83 3 16.02c0 2.3.6 4.55 1.75 6.53L3 29l6.62-1.73a13.02 13.02 0 0 0 6.42 1.7h.01C23.24 28.97 29 23.14 29 15.95 29 8.83 23.23 3 16.04 3Zm0 23.74h-.01a10.8 10.8 0 0 1-5.5-1.5l-.4-.23-3.93 1.03 1.05-3.83-.26-.4a10.7 10.7 0 0 1-1.65-5.7c0-5.93 4.84-10.76 10.8-10.76 2.88 0 5.58 1.12 7.62 3.15a10.65 10.65 0 0 1 3.16 7.62c0 5.94-4.85 10.62-10.88 10.62Zm5.97-8.06c-.33-.16-1.93-.95-2.23-1.06-.3-.11-.52-.16-.74.17-.22.32-.85 1.06-1.04 1.28-.19.22-.38.24-.7.08-.33-.16-1.38-.51-2.63-1.62-.97-.87-1.62-1.93-1.81-2.26-.19-.33-.02-.5.14-.66.15-.15.33-.38.5-.57.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.57-.08-.16-.74-1.78-1.01-2.44-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.33-1.14 1.11-1.14 2.7 0 1.6 1.17 3.14 1.33 3.36.16.22 2.3 3.5 5.57 4.91.78.34 1.38.54 1.86.69.78.25 1.49.21 2.05.13.63-.09 1.93-.79 2.2-1.55.27-.76.27-1.41.19-1.55-.08-.14-.3-.22-.63-.38Z" />
        </svg>
      </button>
    </div>
  );
};
