'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import {
  Menu,
  X,
  ChevronDown,
} from 'lucide-react';

import styles from './Navbar.module.css';

import Container from './Container';

import { NAVIGATION_LINKS } from '@/config/navigationConfig';

import ScrollToTopLink from './ScrollToTopLink';

const Navbar = () => {
  const [isOpen, setIsOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener(
      'scroll',
      handleScroll
    );

    return () =>
      window.removeEventListener(
        'scroll',
        handleScroll
      );
  }, []);

  return (
    <header
      className={`${styles.header} ${
        scrolled ? styles.scrolled : ''
      }`}
    >
      <Container>
        <div className={styles.wrapper}>
          {/* LOGO */}
          <ScrollToTopLink
            href='/'
            className={styles.logoWrapper}
            onClick={() =>
              setIsOpen(false)
            }
          >
            <Image
              src='/images/logos/tacomines-logo.png'
              alt='TacoMines Logo'
              width={220}
              height={70}
              priority
              className={styles.logo}
            />
          </ScrollToTopLink>

          {/* MOBILE BUTTON */}
          <button
            className={styles.mobileButton}
            onClick={() =>
              setIsOpen(!isOpen)
            }
          >
            {isOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>

          {/* NAVIGATION */}
          <nav
            className={`${styles.navMenu} ${
              isOpen ? styles.open : ''
            }`}
          >
            {NAVIGATION_LINKS.map((item) => {
              if (item.dropdown) {
                return (
                  <div
                    key={item.label}
                    className={
                      styles.dropdown
                    }
                  >
                    <div
                      className={
                        styles.dropdownTrigger
                      }
                    >
                      <span>
                        {item.label}
                      </span>

                      <ChevronDown
                        size={16}
                      />
                    </div>

                    <div
                      className={
                        styles.dropdownMenu
                      }
                    >
                      {item.items?.map(
                        (subItem) => (
                          <Link
                            key={
                              subItem.label
                            }
                            href={
                              subItem.href
                            }
                            className={
                              styles.dropdownItem
                            }
                            onClick={() =>
                              setIsOpen(
                                false
                              )
                            }
                          >
                            {subItem.label}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                );
              }

              return (
                <ScrollToTopLink
                  key={item.label}
                  href={item.href || '/'}
                  className={styles.navLink}
                  onClick={() =>
                    setIsOpen(false)
                  }
                >
                  {item.label}
                </ScrollToTopLink>
              );
            })}
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;