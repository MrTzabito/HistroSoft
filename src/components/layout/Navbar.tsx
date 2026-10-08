import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Wordmark } from '../ui/Wordmark';
import { Button } from '../ui/Button';
import { Container } from './Container';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export interface NavbarProps {
  onOpenAgenda?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAgenda }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const location = useLocation();

  const navLinks = [
    { label: 'Productos', href: '/productos' },
    { label: 'Casos', href: '/casos' },
    { label: 'Preguntas', href: '/preguntas' },
    { label: 'Metodología', href: '/metodologia' },
    { label: 'Software personalizado', href: '/software' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[color:var(--surface-page)]/86 backdrop-blur-[8px] border-b border-[color:var(--border-subtle)] transition-colors">
      <Container>
        <div className="h-16 md:h-20 flex items-center justify-between gap-4">
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <div className="flex items-center">
            <Link to="/" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] rounded-md hover:opacity-80 transition-opacity">
              <Wordmark size="md" />
            </Link>
          </div>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs md:text-sm font-medium text-[color:var(--text-secondary)]">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`relative whitespace-nowrap py-1 cursor-pointer transition-colors ${
                    isActive
                      ? 'text-[color:var(--accent)] font-semibold'
                      : 'hover:text-[color:var(--accent)]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <div className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--celeste-soporte)] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Cart */}
          <div className="flex items-center gap-3">
            {/* Cart Button */}
            <button
              onClick={openCart}
              className="relative p-2 rounded-full border border-[color:var(--border-subtle)] text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] hover:border-[color:var(--accent)] transition-colors cursor-pointer"
              aria-label="Abrir carrito de compras"
            >
              <ShoppingCart className="w-4 h-4" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[color:var(--accent)] text-[color:var(--accent-fg)] text-[10px] font-mono font-bold flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            <Link to="/contacto" className="hidden sm:inline-flex">
              <Button
                variant="primary"
                size="sm"
              >
                Contáctanos
              </Button>
            </Link>

            {/* Mobile menu toggle button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] rounded-full border border-[color:var(--border-subtle)] hover:border-[color:var(--border-strong)] cursor-pointer"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[color:var(--border-subtle)] bg-[color:var(--surface-sunken)] px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-sm font-medium text-[color:var(--text-secondary)] hover:text-[color:var(--accent)] py-1.5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-3 border-t border-[color:var(--border-subtle)] space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openCart();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-full border border-[color:var(--border-subtle)] text-sm text-[color:var(--text-primary)]"
            >
              <ShoppingCart className="w-4 h-4 text-[color:var(--accent)]" />
              <span>Ver carrito ({totalItems})</span>
            </button>
            <Link
              to="/contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full"
            >
              <Button
                variant="primary"
                size="md"
                className="w-full justify-center"
              >
                Contáctanos
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
