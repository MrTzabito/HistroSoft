import React from 'react';
import { SoftwareConsultationSection } from '../components/sections/SoftwareConsultationSection';
import { useModal } from '../context/ModalContext';

export const SoftwarePage: React.FC = () => {
  const { openModal } = useModal();

  const handleOpenAgenda = () => {
    openModal(null);
  };

  return (
    <SoftwareConsultationSection onOpenAgenda={handleOpenAgenda} />
  );
};
