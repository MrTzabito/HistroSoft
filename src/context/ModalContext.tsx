import React, { createContext, useContext, useState } from 'react';
import { PreloadData } from '../components/sections/ContactModal';

interface ModalContextType {
  modalOpen: boolean;
  modalPreload: PreloadData | null;
  openModal: (preloadData?: PreloadData | null) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPreload, setModalPreload] = useState<PreloadData | null>(null);

  const openModal = (preloadData: PreloadData | null = null) => {
    setModalPreload(preloadData);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <ModalContext.Provider value={{ modalOpen, modalPreload, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal debe ser usado dentro de ModalProvider');
  }
  return context;
};
