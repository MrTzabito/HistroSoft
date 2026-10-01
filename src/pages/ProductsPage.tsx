import React from 'react';
import { ProductsCatalogSection } from '../components/sections/ProductsCatalogSection';
import { useModal } from '../context/ModalContext';

export const ProductsPage: React.FC = () => {
  const { openModal } = useModal();

  const handleConsultCustom = (productOrTopic: string) => {
    openModal({
      serviceName: `Consulta sobre: ${productOrTopic}`,
    });
  };

  return (
    <ProductsCatalogSection onConsultCustom={handleConsultCustom} />
  );
};
