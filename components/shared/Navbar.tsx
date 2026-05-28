'use client';

import {
  useEffect,
  useRef,
  useState,
} from 'react';

import Link from 'next/link';

import Image from 'next/image';

import {
  Menu,
  X,
  ChevronDown,
} from 'lucide-react';

import { usePathname } from 'next/navigation';

import styles from './Navbar.module.css';

import Container from './Container';

import { NAVIGATION_LINKS } from '@/config/navigationConfig';

import ScrollToTopLink from './ScrollToTopLink';

const Navbar = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  const navRef =
    useRef<HTMLDivElement>(null);

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

  /* OUTSIDE CLICK CLOSE */

  useEffect(() => {
    const handleClickOutside = (
      event: MouseEvent
    ) => {
      if (
        navRef.current &&
        !navRef.current.contains(
          event.target as Node
        )
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener(
      'mousedown',
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside
      );
    };
  }, []);

  /* CLOSE ON ROUTE CHANGE */

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`${styles.header} ${
        scrolled
          ? styles.scrolled
          : ''
      }`}
    >
      <Container>
        <div
          className={styles.wrapper}
          ref={navRef}
        >

          {/* LOGO */}

          <ScrollToTopLink
            href='/'
            className={
              styles.logoWrapper
            }
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
            className={
              styles.mobileButton
            }
            onClick={() =>
              setIsOpen(!isOpen)
            }
            aria-label='Toggle Menu'
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
              isOpen
                ? styles.open
                : ''
            }`}
          >
            {NAVIGATION_LINKS.map(
              (item) => {

                /* DROPDOWN */

                if (item.dropdown) {

                  const isParentActive =
                    item.items?.some(
                      (subItem) =>
                        pathname ===
                        subItem.href
                    );

                  return (
                    <div
                      key={item.label}
                      className={
                        styles.dropdown
                      }
                    >

                      {/* PARENT */}

                      <div
                        className={
                          styles.dropdownTrigger
                        }
                      >
                        <ScrollToTopLink
                          href={
                            item.href ||
                            '/'
                          }
                          className={`${
                            styles.dropdownParentLink
                          } ${
                            isParentActive
                              ? styles.activeLink
                              : ''
                          }`}
                        >
                          {item.label}
                        </ScrollToTopLink>

                        <ChevronDown
                          size={16}
                          className={
                            styles.chevron
                          }
                        />
                      </div>

                      {/* MENU */}

                      <div
                        className={
                          styles.dropdownMenu
                        }
                      >
                        {item.items?.map(
                          (
                            subItem
                          ) => (
                            <Link
                              key={
                                subItem.label
                              }
                              href={
                                subItem.href
                              }
                              className={`${
                                styles.dropdownItem
                              } ${
                                pathname ===
                                subItem.href
                                  ? styles.activeDropdownItem
                                  : ''
                              }`}
                            >
                              {
                                subItem.label
                              }
                            </Link>
                          )
                        )}
                      </div>

                    </div>
                  );
                }

                /* NORMAL LINK */

                return (
                  <ScrollToTopLink
                    key={item.label}
                    href={
                      item.href || '/'
                    }
                    className={`${
                      styles.navLink
                    } ${
                      pathname ===
                      item.href
                        ? styles.activeLink
                        : ''
                    }`}
                  >
                    {item.label}
                  </ScrollToTopLink>
                );
              }
            )}
          </nav>

        </div>
      </Container>
    </header>
  );
};

export default Navbar;