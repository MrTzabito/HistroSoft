import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastProvider } from './components/ui/Toast';
import { CartProvider } from './context/CartContext';
import { ModalProvider, useModal } from './context/ModalContext';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { MethodologyPage } from './pages/MethodologyPage';
import { CasesPage } from './pages/CasesPage';
import { FaqPage } from './pages/FaqPage';
import { SoftwarePage } from './pages/SoftwarePage';
import { ContactModal } from './components/sections/ContactModal';

function MainApp() {
  const { modalOpen, modalPreload, openModal, closeModal } = useModal();

  const handleOpenGeneralAgenda = () => {
    openModal(null);
  };

  return (
    <BrowserRouter>
      <Layout onOpenAgenda={handleOpenGeneralAgenda}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productos" element={<ProductsPage />} />
          <Route path="/metodologia" element={<MethodologyPage />} />
          <Route path="/casos" element={<CasesPage />} />
          <Route path="/preguntas" element={<FaqPage />} />
          <Route path="/software" element={<SoftwarePage />} />
        </Routes>
      </Layout>

      <ContactModal
        open={modalOpen}
        onClose={closeModal}
        preloadData={modalPreload}
      />
    </BrowserRouter>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <CartProvider>
        <ModalProvider>
          <MainApp />
        </ModalProvider>
      </CartProvider>
    </ToastProvider>
  );
}
