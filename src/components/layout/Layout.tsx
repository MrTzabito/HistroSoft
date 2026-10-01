import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CartDrawer } from '../cart/CartDrawer';

interface LayoutProps {
  children: React.ReactNode;
  onOpenAgenda: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, onOpenAgenda }) => {
  return (
    <div className="min-h-screen bg-[#0D0D0F] text-[#F2EEE6] flex flex-col font-sans selection:bg-[#F5B82E] selection:text-[#17130A]">
      <Navbar onOpenAgenda={onOpenAgenda} />

      <main className="flex-1">
        {children}
      </main>

      <Footer onOpenAgenda={onOpenAgenda} />

      <CartDrawer />
    </div>
  );
};
