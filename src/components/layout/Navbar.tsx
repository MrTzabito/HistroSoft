import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Wordmark } from '../ui/Wordmark';
import { Button } from '../ui/Button';
import { Container } from './Container';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export interface NavbarProps {
  onOpenAgenda: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAgenda }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, openCart } = useCart();

  const navLinks = [
    { label: 'Productos', href: '/productos' },
    { label: 'Metodología', href: '/metodologia' },
    { label: 'Casos', href: '/casos' },
    { label: 'Preguntas', href: '/preguntas' },
    { label: 'Software personalizado', href: '/software' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0D0D0F]/86 backdrop-blur-[8px] border-b border-[#2B2B30] transition-colors">
      <Container>
        <div className="h-16 md:h-20 flex items-center justify-between gap-4">
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <div className="flex items-center">
            <Link to="/" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B82E] rounded-md hover:opacity-80 transition-opacity">
              <Wordmark size="md" />
            </Link>
          </div>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs md:text-sm font-medium text-[#D8D3C9]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="hover:text-[#F5B82E] transition-colors whitespace-nowrap py-1 cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Cart */}
          <div className="flex items-center gap-3">
            {/* Cart Button */}
            <button
              onClick={openCart}
              className="relative p-2 rounded-full border border-[#2B2B30] text-[#D8D3C9] hover:text-[#F2EEE6] hover:border-[#F5B82E] transition-colors cursor-pointer"
              aria-label="Abrir carrito de compras"
            >
              <ShoppingCart className="w-4 h-4" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#F5B82E] text-[#17130A] text-[10px] font-mono font-bold flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            <Button
              variant="primary"
              size="sm"
              onClick={onOpenAgenda}
              className="hidden sm:inline-flex"
            >
              Agenda una llamada
            </Button>

            {/* Mobile menu toggle button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#D8D3C9] hover:text-[#F2EEE6] rounded-full border border-[#2B2B30] hover:border-[#4A4A52] cursor-pointer"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#2B2B30] bg-[#121214] px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#D8D3C9] hover:text-[#F5B82E] py-1.5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-3 border-t border-[#2B2B30] space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openCart();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-full border border-[#2B2B30] text-sm text-[#F2EEE6]"
            >
              <ShoppingCart className="w-4 h-4 text-[#F5B82E]" />
              <span>Ver carrito ({totalItems})</span>
            </button>
            <Button
              variant="primary"
              size="md"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAgenda();
              }}
              className="w-full justify-center"
            >
              Agenda una llamada
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
