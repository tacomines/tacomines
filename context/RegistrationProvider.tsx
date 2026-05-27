'use client';

import { createContext, useContext, useState } from 'react';

interface RegistrationContextProps {
  selectedCourse: string;

  setSelectedCourse: (course: string) => void;
}

const RegistrationContext =
  createContext<RegistrationContextProps>({
    selectedCourse: '',

    setSelectedCourse: () => {},
  });

export const RegistrationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedCourse, setSelectedCourse] =
    useState('');

  return (
    <RegistrationContext.Provider
      value={{
        selectedCourse,
        setSelectedCourse,
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistration = () =>
  useContext(RegistrationContext);