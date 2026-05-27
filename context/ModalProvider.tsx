'use client';

import { createContext, useContext, useState } from 'react';

interface ModalContextProps {
  isOpen: boolean;

  openModal: () => void;

  closeModal: () => void;
}

const ModalContext = createContext<ModalContextProps>({
  isOpen: false,

  openModal: () => {},

  closeModal: () => {},
});

export const ModalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () =>
  useContext(ModalContext);