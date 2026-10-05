import React, { useEffect, useRef, useState } from 'react';
import { Container } from '../layout/Container';

/** Bloque "esqueleto" con brillo suave. Se dimensiona con className (alto, ancho, radio). */
export const Skeleton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div aria-hidden="true" className={`skeleton rounded-[8px] ${className}`} />
);

export interface SkeletonImageProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'onLoad' | 'onError'> {
  src: string;
  alt: string;
}

/**
 * Imagen que muestra un esqueleto hasta terminar de cargar.
 * Debe ir dentro de un contenedor `relative` con tamaño definido (p. ej. aspect-video).
 */
export const SkeletonImage: React.FC<SkeletonImageProps> = ({ className = '', ...props }) => {
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  // Si la imagen ya estaba en caché, onLoad puede dispararse antes de hidratar
  useEffect(() => {
    if (ref.current?.complete && ref.current.naturalWidth > 0) setLoaded(true);
  }, []);

  return (
    <>
      {!loaded && !failed && <Skeleton className="absolute inset-0 !rounded-none" />}
      {failed && (
        <div className="absolute inset-0 flex items-center justify-center text-xs text-[color:var(--text-faint)] bg-[color:var(--surface-sunken)]">
          Captura no disponible
        </div>
      )}
      <img
        ref={ref}
        {...props}
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        className={`${className} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </>
  );
};

/** Esqueleto de una página completa (mientras se descarga su código): encabezado de sección + tarjetas. */
export const PageSkeleton: React.FC = () => (
  <section role="status" aria-busy="true" aria-label="Cargando" className="py-20 md:py-28 bg-[color:var(--surface-sunken)] min-h-[70vh]">
    <Container>
      <div className="w-full h-px bg-[color:var(--border-strong)] mb-8" />
      <Skeleton className="h-10 w-2/3 max-w-xl mb-4" />
      <Skeleton className="h-4 w-full max-w-2xl mb-2" />
      <Skeleton className="h-4 w-3/4 max-w-xl mb-14" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="rounded-[22px] bg-[color:var(--surface-raised)] border border-[color:var(--border-subtle)] p-6 space-y-4"
          >
            <Skeleton className="aspect-video w-full !rounded-[14px]" />
            <Skeleton className="h-4 w-24 !rounded-full" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-5/6" />
            <Skeleton className="h-10 w-full !rounded-full mt-6" />
          </div>
        ))}
      </div>
    </Container>
  </section>
);
