import { useEffect } from 'react';

export const useScrollbarVisibility = () => {
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      // Mostrar la scrollbar
      document.documentElement.classList.add('scrolling');

      // Limpiar timeout anterior
      clearTimeout(scrollTimeout);

      // Ocultar después de 2 segundos de inactividad
      scrollTimeout = setTimeout(() => {
        document.documentElement.classList.remove('scrolling');
      }, 2000);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);
};
