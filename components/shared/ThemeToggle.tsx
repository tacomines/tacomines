'use client';

import { Moon, Sun } from 'lucide-react';

import styles from './ThemeToggle.module.css';

import { useTheme } from '@/context/ThemeProvider';

const ThemeToggle = () => {
  const { theme, toggleTheme } =
    useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={styles.button}
    >
      {theme === 'light' ? (
        <Moon size={18} />
      ) : (
        <Sun size={18} />
      )}
    </button>
  );
};

export default ThemeToggle;