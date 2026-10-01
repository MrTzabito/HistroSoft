import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { CtaBandSection } from '../components/sections/CtaBandSection';
import { useNavigate } from 'react-router-dom';
import { useModal } from '../context/ModalContext';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { openModal } = useModal();

  const handleOpenGeneralAgenda = () => {
    openModal(null);
  };

  const handleExploreProducts = () => {
    navigate('/productos');
  };

  const handleExploreConsultation = () => {
    navigate('/software');
  };

  return (
    <>
      <HeroSection
        onOpenAgenda={handleOpenGeneralAgenda}
        onExploreProducts={handleExploreProducts}
        onExploreConsultation={handleExploreConsultation}
      />

      <CtaBandSection onOpenAgenda={handleOpenGeneralAgenda} />
    </>
  );
};
