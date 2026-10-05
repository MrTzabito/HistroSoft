import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
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

// URLs antiguas (anclas #seccion) -> rutas actuales
const LEGACY_HASH_REDIRECTS: Record<string, string> = {
  '#productos': '/productos',
  '#metodologia': '/metodologia',
  '#casos': '/casos',
  '#faq': '/preguntas',
  '#consultar': '/software',
};

// Alias de ruta -> ruta canónica
const PATH_REDIRECTS: Record<string, string> = {
  '/catalogo': '/productos',
  '/metodología': '/metodologia',
  '/faq': '/preguntas',
  '/casos-de-estudio': '/casos',
  '/software-personalizado': '/software',
  '/consultar': '/software',
};

function LegacyHashRedirect() {
  const { pathname, hash } = useLocation();
  const target = pathname === '/' ? LEGACY_HASH_REDIRECTS[hash] : undefined;
  return target ? <Navigate to={target} replace /> : null;
}

function MainApp() {
  const { modalOpen, modalPreload, openModal, closeModal } = useModal();

  const handleOpenGeneralAgenda = () => {
    openModal(null);
  };

  return (
    <BrowserRouter>
      <LegacyHashRedirect />
      <Layout onOpenAgenda={handleOpenGeneralAgenda}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productos" element={<ProductsPage />} />
          <Route path="/metodologia" element={<MethodologyPage />} />
          <Route path="/casos" element={<CasesPage />} />
          <Route path="/preguntas" element={<FaqPage />} />
          <Route path="/software" element={<SoftwarePage />} />
          {Object.entries(PATH_REDIRECTS).map(([from, to]) => (
            <Route key={from} path={from} element={<Navigate to={to} replace />} />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
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
