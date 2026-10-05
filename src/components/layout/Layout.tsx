import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CartDrawer } from '../cart/CartDrawer';
import { WhatsAppButton } from './WhatsAppButton';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface LayoutProps {
  children: React.ReactNode;
  onOpenAgenda: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, onOpenAgenda }) => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[color:var(--surface-page)] text-[color:var(--text-primary)] flex flex-col font-sans selection:bg-[color:var(--accent)] selection:text-[color:var(--accent-fg)]">
      <Navbar onOpenAgenda={onOpenAgenda} />

      <main className="flex-1 relative">
        {/* Márgenes laterales en pantallas anchas: líneas apiladas del logo */}
        <div aria-hidden="true" className="edge-lines edge-lines-left" />
        <div aria-hidden="true" className="edge-lines edge-lines-right" />
        {children}
      </main>

      <Footer onOpenAgenda={onOpenAgenda} />

      <CartDrawer />
      <WhatsAppButton />
    </div>
  );
};
