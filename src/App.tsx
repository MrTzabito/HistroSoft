import React, { useState } from 'react';
import { ToastProvider } from './components/ui/Toast';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { ProductsCatalogSection } from './components/sections/ProductsCatalogSection';
import { MethodologySection } from './components/sections/MethodologySection';
import { CaseStudiesSection } from './components/sections/CaseStudiesSection';
import { FaqSection } from './components/sections/FaqSection';
import { SoftwareConsultationSection } from './components/sections/SoftwareConsultationSection';
import { CtaBandSection } from './components/sections/CtaBandSection';
import { ContactModal, PreloadData } from './components/sections/ContactModal';
import { CartDrawer } from './components/cart/CartDrawer';
import { PricingPlan } from './types';

export function MainApp() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPreload, setModalPreload] = useState<PreloadData | null>(null);

  const handleOpenGeneralAgenda = () => {
    setModalPreload(null);
    setModalOpen(true);
  };

  const handleConsultCustom = (productOrTopic: string) => {
    setModalPreload({
      serviceName: `Consulta sobre: ${productOrTopic}`,
    });
    setModalOpen(true);
  };

  const handleExploreProducts = () => {
    const el = document.getElementById('productos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreConsultation = () => {
    const el = document.getElementById('consultar');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0D0D0F] text-[#F2EEE6] flex flex-col font-sans selection:bg-[#F5B82E] selection:text-[#17130A]">
      {/* Top Navbar with Cart counter */}
      <Navbar onOpenAgenda={handleOpenGeneralAgenda} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onOpenAgenda={handleOpenGeneralAgenda}
          onExploreProducts={handleExploreProducts}
          onExploreConsultation={handleExploreConsultation}
        />

        {/* 01 — Catálogo: Elige tus herramientas (con carrito y checkout Yape/Plin) */}
        <ProductsCatalogSection onConsultCustom={handleConsultCustom} />

        {/* 02 — Metodología de implementación y puesta en marcha */}
        <MethodologySection />

        {/* 03 — Casos de estudio cuantificados */}
        <CaseStudiesSection />

        {/* 04 — Preguntas frecuentes sobre productos y contratos */}
        <FaqSection />

        {/* Consultas técnicas sobre producto o software a la medida */}
        <SoftwareConsultationSection onOpenAgenda={handleOpenGeneralAgenda} />

        {/* Full-bleed brand gold CTA band */}
        <CtaBandSection onOpenAgenda={handleOpenGeneralAgenda} />
      </main>

      {/* Engineering Footer */}
      <Footer onOpenAgenda={handleOpenGeneralAgenda} />

      {/* Interactive Cart Drawer */}
      <CartDrawer />

      {/* Interactive Contact / Agenda Modal */}
      <ContactModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        preloadData={modalPreload}
      />
    </div>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <CartProvider>
        <MainApp />
      </CartProvider>
    </ToastProvider>
  );
}
