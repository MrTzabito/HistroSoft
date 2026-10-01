import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { PRODUCTS } from '../../data/products';
import { ProductDetails } from '../../types';
import { useCart } from '../../context/CartContext';
import { Button } from '../ui/Button';
import { Play, Plus, ArrowRight, ShoppingCart } from 'lucide-react';
import { ProductPlansModal } from '../modals/ProductPlansModal';
import { ProductDemoModal } from '../modals/ProductDemoModal';

export interface ProductsCatalogSectionProps {
  onConsultCustom: (productName: string) => void;
}

export const ProductsCatalogSection: React.FC<ProductsCatalogSectionProps> = ({
  onConsultCustom,
}) => {
  const { addItem, openCart, totalItems, totalAmount } = useCart();

  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [selectedProductForPlans, setSelectedProductForPlans] = useState<ProductDetails | null>(null);
  const [selectedProductForDemo, setSelectedProductForDemo] = useState<ProductDetails | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'erp-negocio', label: 'Punto de venta y negocio' },
    { id: 'herramientas', label: 'Herramientas' },
  ];

  const filteredProducts =
    activeCategory === 'todos'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.categorySlug === activeCategory);

  return (
    <section id="productos" className="py-20 md:py-28 border-b border-[#2B2B30] bg-[#121214] relative">
      <Container>
        {/* Split Section Header with 01 as requested */}
        <SectionHeader
          eyebrow="Productos"
          title="Elige tus herramientas."
          description="Agrega lo que necesites al carrito, revisa el total y paga por Yape o Plin. Cada producto cuenta con planes adaptados a tu escala y despliegue rápido."
        />

        {/* Category Filters Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer select-none ${
                activeCategory === cat.id
                  ? 'bg-[#F2EEE6] text-[#0D0D0F] shadow-sm font-bold'
                  : 'bg-[#17171A] text-[#B5B0A6] border border-[#2B2B30] hover:text-[#F2EEE6] hover:border-[#4A4A52]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid with visual image preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {filteredProducts.map((product) => {
            const isCustomApp = product.categorySlug === 'app-medida';

            return (
              <div
                key={product.id}
                className="flex flex-col justify-between rounded-[22px] bg-[#17171A] border border-[#2B2B30] p-5 sm:p-6 card-interactive group relative"
              >
                <div>
                  {/* Category & Badge Header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#8C877E]">
                      {product.category}
                    </span>

                    {product.badge && (
                      <span
                        className={`text-[10px] font-sans font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full transition-transform duration-200 group-hover:scale-105 ${
                          product.badge === 'Más vendido' || product.badge === 'Destacado'
                            ? 'bg-[#2A2316] text-[#F5B82E] border border-[#F5B82E]/30'
                            : product.badge === 'Nuevo producto'
                            ? 'bg-[#1C2A1D] text-[#8FD694] border border-[#8FD694]/30'
                            : 'bg-[#15222E] text-[#7CC4FF] border border-[#7CC4FF]/30'
                        }`}
                      >
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Visual Software Image Preview Space */}
                  <div className="relative aspect-video w-full rounded-[14px] overflow-hidden bg-[#121214] border border-[#2B2B30] mb-4 group-hover:border-[#F5B82E]/40 transition-colors">
                    {product.imageUrl ? (
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-full object-cover object-top img-zoom"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-xs text-[#8C877E] bg-[#121214]">
                        <span>Captura del sistema</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#17171A] via-transparent to-transparent opacity-20 pointer-events-none" />
                  </div>

                  {/* Product Title */}
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F2EEE6] group-hover:text-[#F5B82E] transition-colors tracking-tight mb-2.5">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#B5B0A6] leading-relaxed mb-6">
                    {product.summary}
                  </p>
                </div>

                {/* Bottom Actions and Price Bar */}
                <div className="pt-4 border-t border-[#2B2B30] space-y-4">
                  {/* Action links: Ver video / Ver planes */}
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <button
                      type="button"
                      onClick={() => setSelectedProductForDemo(product)}
                      className="text-[#D8D3C9] hover:text-[#F5B82E] flex items-center gap-1.5 cursor-pointer transition-colors"
                    >
                      <Play className="w-3.5 h-3.5 text-[#F5B82E] fill-current" />
                      <span>Ver video</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedProductForPlans(product)}
                      className="text-[#D8D3C9] hover:text-[#F5B82E] underline underline-offset-4 cursor-pointer transition-colors"
                    >
                      Ver planes
                    </button>
                  </div>

                  {/* Price & Add to Cart button */}
                  <div className="flex items-center justify-between gap-3 pt-1">
                    <div>
                      {isCustomApp ? (
                        <span className="font-mono font-bold text-sm text-[#F5B82E]">
                          A medida
                        </span>
                      ) : (
                        <div className="flex items-baseline gap-1">
                          <span className="font-mono font-bold text-lg sm:text-xl text-[#F2EEE6]">
                            S/ {product.priceMonthlyPEN.toFixed(2)}
                          </span>
                          <span className="text-[11px] text-[#8C877E]">/mes</span>
                        </div>
                      )}
                    </div>

                    {isCustomApp ? (
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => onConsultCustom(product.name)}
                        iconRight={<ArrowRight className="w-3.5 h-3.5" />}
                        className="hover:border-[#F5B82E] transition-all"
                      >
                        Cotizar
                      </Button>
                    ) : (
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => addItem(product)}
                        iconLeft={<Plus className="w-3.5 h-3.5" />}
                        className="btn-shimmer shadow-sm hover:shadow-[0_4px_16px_rgba(245,184,46,0.3)] transition-all"
                      >
                        Agregar
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Software Prompt Card */}
        <div className="mt-12 p-6 md:p-8 rounded-[22px] bg-[#17171A] border border-[#2B2B30] flex flex-col md:flex-row md:items-center justify-between gap-6 card-interactive">
          <div className="space-y-1 max-w-2xl text-left">
            <span className="text-[11px] font-mono text-[#F5B82E] uppercase tracking-wider block">
              Software a la medida
            </span>
            <h4 className="font-display font-bold text-xl text-[#F2EEE6]">
              ¿Ningún plan estándar cubre el 100% de tu operación?
            </h4>
            <p className="text-xs sm:text-sm text-[#B5B0A6] leading-relaxed">
              Desarrollamos módulos personalizados o sistemas completos desde cero con arquitectura modular y código propio entregado a tu empresa.
            </p>
          </div>

          <Button
            variant="secondary"
            size="md"
            onClick={() => onConsultCustom('Software a la medida')}
            iconRight={<ArrowRight className="w-4 h-4" />}
            className="shrink-0 hover:border-[#F5B82E] transition-all"
          >
            Consultar software a medida
          </Button>
        </div>
      </Container>

      {/* Floating Cart Trigger Pill when items exist */}
      {totalItems > 0 && (
        <div className="fixed bottom-6 left-6 z-40 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <button
            onClick={openCart}
            className="animate-float-gentle flex items-center gap-3 px-5 py-3 rounded-full bg-[#F5B82E] text-[#17130A] font-bold text-sm shadow-[0_8px_24px_rgba(245,184,46,0.35)] hover:bg-[#FFD36B] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <div className="relative">
              <ShoppingCart className="w-4 h-4" />
              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#17130A] text-[#F5B82E] text-[10px] flex items-center justify-center font-mono font-bold animate-pulse-subtle">
                {totalItems}
              </span>
            </div>
            <span>Ver carrito (S/ {totalAmount.toFixed(2)})</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      )}

      {/* Modals */}
      <ProductPlansModal
        product={selectedProductForPlans}
        open={Boolean(selectedProductForPlans)}
        onClose={() => setSelectedProductForPlans(null)}
        onConsultCustom={onConsultCustom}
      />

      <ProductDemoModal
        product={selectedProductForDemo}
        open={Boolean(selectedProductForDemo)}
        onClose={() => setSelectedProductForDemo(null)}
        onViewPlans={(prod) => setSelectedProductForPlans(prod)}
        onAddToCart={(prod) => addItem(prod)}
      />
    </section>
  );
};
