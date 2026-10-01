import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../layout/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
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
      addItem({
        productId: product.id,
        productName: product.name,
        quantity: 1,
        priceUSD: product.priceMonthlyUSD,
        pricePEN: product.priceMonthlyPEN,
      });
    }
  };

  return (
    <section className="py-20 md:py-28 border-b border-[#2B2B30] bg-[#0D0D0F] relative">
      <Container>
        <SectionHeader
          title="Nuestros productos más adquiridos."
          description="Descubre las herramientas que están transformando negocios. Soluciones probadas y confiables para impulsar tu operación."
        />

        {/* Featured Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col justify-between rounded-[22px] bg-[#17171A] border border-[#2B2B30] p-6 hover:border-[#F5B82E]/40 transition-colors group"
            >
              <div>
                {/* Image Preview */}
                {product.imageUrl && (
                  <div className="relative aspect-video w-full rounded-[14px] overflow-hidden bg-[#121214] border border-[#2B2B30] mb-4 group-hover:border-[#F5B82E]/40 transition-colors">
                    <img
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
                          ? 'bg-[#2A2316] text-[#F5B82E] border border-[#F5B82E]/30'
                          : 'bg-[#1C2A1D] text-[#8FD694] border border-[#8FD694]/30'
                      }`}
                    >
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Title */}
                <h3 className="text-lg md:text-xl font-semibold text-[#F2EEE6] mb-2">
                  {product.name}
                </h3>

                {/* Tagline */}
                <p className="text-sm text-[#B5B0A6] mb-4">
                  {product.tagline}
                </p>

                {/* Summary */}
                <p className="text-xs text-[#8C877E] leading-relaxed mb-6">
                  {product.summary.substring(0, 120)}...
                </p>
              </div>

              {/* Price & Actions */}
              <div>
                <div className="mb-4 pb-4 border-t border-[#2B2B30]">
                  <p className="text-xs text-[#8C877E] mb-1">Desde</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-[#F2EEE6]">
                      S/ {product.priceMonthlyPEN}
                    </span>
                    <span className="text-xs text-[#8C877E]">
                      ${product.priceMonthlyUSD}/mes
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleAddToCart(product.id)}
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-full bg-[#2A2316] text-[#F5B82E] border border-[#F5B82E]/30 hover:bg-[#F5B82E] hover:text-[#17130A] transition-colors text-sm font-semibold cursor-pointer"
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
        <div className="flex justify-center">
          <Button
            variant="secondary"
            size="md"
            onClick={handleViewAllProducts}
            className="gap-2 group"
          >
            Ver todos los productos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </Container>
    </section>
  );
};
