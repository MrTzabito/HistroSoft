import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../layout/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { SkeletonImage } from '../ui/Skeleton';
import { PRODUCTS } from '../../data/products';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const FeaturedProductsSection: React.FC = () => {
  const navigate = useNavigate();
  const { addItem } = useCart();

  // Obtener productos destacados (que tengan badge o sean populares)
  const featuredProducts = PRODUCTS.filter(p => p.badge).slice(0, 3);

  const handleViewAllProducts = () => {
    navigate('/productos');
  };

  const handleAddToCart = (productId: string) => {
    const product = PRODUCTS.find(p => p.id === productId);
    if (product) {
      addItem(product);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[color:var(--surface-sunken)] relative">
      <Container>
        <SectionHeader
          title="Nuestros productos más adquiridos."
          description="Descubre las herramientas que están transformando negocios. Soluciones probadas y confiables para impulsar tu operación."
        />

        {/* Featured Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              data-reveal
              style={{ '--reveal-delay': `${index * 100}ms` } as React.CSSProperties}
              className="flex flex-col justify-between rounded-[22px] bg-[color:var(--surface-raised)] border border-[color:var(--border-subtle)] shadow-sm p-6 card-interactive group"
            >
              <div>
                {/* Image Preview */}
                {product.imageUrl && (
                  <div className="relative aspect-video w-full rounded-[14px] overflow-hidden bg-[color:var(--surface-sunken)] border border-[color:var(--border-subtle)] mb-4 group-hover:border-[color:var(--accent)]/40 transition-colors">
                    <SkeletonImage
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Badge */}
                {product.badge && (
                  <div className="mb-3">
                    <span
                      className={`text-[10px] font-sans font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full inline-block transition-transform duration-200 group-hover:scale-105 ${
                        product.badge === 'Más vendido'
                          ? 'bg-[color:var(--accent-subtle)] text-[color:var(--accent)] border border-[color:var(--accent)]/30'
                          : 'bg-[color:var(--green-soft)] text-[color:var(--green)] border border-[color:var(--green)]/30'
                      }`}
                    >
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Title */}
                <h3 className="text-lg md:text-xl font-semibold text-[color:var(--text-primary)] mb-2">
                  {product.name}
                </h3>

                {/* Tagline */}
                <p className="text-sm text-[color:var(--text-muted)] mb-4">
                  {product.tagline}
                </p>

                {/* Summary */}
                <p className="text-xs text-[color:var(--text-faint)] leading-relaxed mb-6">
                  {product.summary.substring(0, 120)}...
                </p>
              </div>

              {/* Price & Actions */}
              <div>
                <div className="mb-4 pb-4 border-t border-[color:var(--border-subtle)]">
                  <p className="text-xs text-[color:var(--text-faint)] mb-1">Desde</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-[color:var(--text-primary)]">
                      S/ {product.priceMonthlyPEN}
                    </span>
                    <span className="text-xs text-[color:var(--text-faint)]">
                      ${product.priceMonthlyUSD}/mes
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleAddToCart(product.id)}
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-full bg-[color:var(--accent-subtle)] text-[color:var(--accent)] border border-[color:var(--accent)]/30 hover:bg-[color:var(--accent)] hover:text-[color:var(--accent-fg)] transition-colors text-sm font-semibold cursor-pointer"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Agregar</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to view all products */}
        <div data-reveal className="flex justify-center">
          <Button
            variant="secondary"
            size="lg"
            onClick={handleViewAllProducts}
            className="gap-3 group w-80 hover:shadow-lg hover:border-[color:var(--accent)] hover:bg-[color:var(--accent-subtle)] transition-all duration-300"
          >
            Ver todos los productos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 group-hover:text-[color:var(--accent)] transition-all duration-300" />
          </Button>
        </div>
      </Container>
    </section>
  );
};
