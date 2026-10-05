import React from 'react';
import { Dialog } from '../ui/Dialog';
import { ProductDetails } from '../../types';
import { Button } from '../ui/Button';
import { Play, Check, ShieldCheck, Plus, ArrowRight } from 'lucide-react';

export interface ProductDemoModalProps {
  product: ProductDetails | null;
  open: boolean;
  onClose: () => void;
  onViewPlans: (product: ProductDetails) => void;
  onAddToCart: (product: ProductDetails) => void;
}

export const ProductDemoModal: React.FC<ProductDemoModalProps> = ({
  product,
  open,
  onClose,
  onViewPlans,
  onAddToCart,
}) => {
  if (!product) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      title={product.demoVideoTitle || `Demostración de ${product.name}`}
      description={product.summary}
      maxWidth="lg"
    >
      <div className="space-y-6 text-left">
        {/* Mock/Simulated Video Player Window */}
        <div className="relative aspect-video rounded-[16px] bg-[color:var(--surface-page)] border border-[color:var(--border-subtle)] overflow-hidden flex flex-col items-center justify-center p-6 text-center group">
          <div className="absolute inset-0 bg-radial from-[color:var(--accent)]/10 via-transparent to-[color:var(--azul-noche)]/60 pointer-events-none" />

          {/* Video simulation badge */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[color:var(--green)] animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-wider text-[color:var(--text-secondary)] bg-[color:var(--surface-raised)]/80 px-2 py-0.5 rounded-full border border-[color:var(--border-subtle)]">
              Vista previa interactiva · HistroSoft 2026
            </span>
          </div>

          <div className="w-16 h-16 rounded-full bg-[color:var(--accent)] text-[color:var(--accent-fg)] flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-105 mb-4">
            <Play className="w-7 h-7 fill-current ml-1" />
          </div>

          <h4 className="font-display font-bold text-lg text-[color:var(--text-primary)] relative z-10 max-w-sm">
            Recorrido guiado de {product.name}
          </h4>
          <p className="text-xs text-[color:var(--text-faint)] relative z-10 mt-1 max-w-md">
            Visualiza cómo interactúan los usuarios, el flujo de datos en tiempo real y la emisión automática de reportes.
          </p>
        </div>

        {/* Highlights list */}
        {product.demoHighlights && product.demoHighlights.length > 0 && (
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[color:var(--accent)] block">
              Funcionalidades clave que verás en este sistema:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.demoHighlights.map((hl, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-[color:var(--text-secondary)] bg-[color:var(--surface-sunken)] p-3 rounded-[12px] border border-[color:var(--border-subtle)]"
                >
                  <Check className="w-3.5 h-3.5 text-[color:var(--accent)] shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action bar */}
        <div className="pt-4 border-t border-[color:var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-[color:var(--green)]">
            <ShieldCheck className="w-4 h-4" />
            <span>Infraestructura lista y puesta en marcha en 48 horas</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                onClose();
                onViewPlans(product);
              }}
              className="flex-1 sm:flex-initial"
            >
              Ver planes
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                onClose();
                onAddToCart(product);
              }}
              iconLeft={<Plus className="w-3.5 h-3.5" />}
              className="flex-1 sm:flex-initial"
            >
              Agregar al carrito
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
