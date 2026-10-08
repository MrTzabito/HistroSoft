import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CartDrawer } from '../cart/CartDrawer';
import { WhatsAppButton } from './WhatsAppButton';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useScrollbarVisibility } from '../../hooks/useScrollbarVisibility';

interface LayoutProps {
  children: React.ReactNode;
  onOpenAgenda: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, onOpenAgenda }) => {
  useScrollReveal();
  useScrollbarVisibility();

  return (
    <div className="min-h-screen bg-[color:var(--surface-page)] text-[color:var(--text-primary)] flex flex-col font-sans selection:bg-[color:var(--accent)] selection:text-[color:var(--accent-fg)]">
      <Navbar onOpenAgenda={onOpenAgenda} />

      <main className="flex-1 relative">
        {children}
      </main>

      <Footer onOpenAgenda={onOpenAgenda} />

      <CartDrawer />
      <WhatsAppButton />
    </div>
  );
};
