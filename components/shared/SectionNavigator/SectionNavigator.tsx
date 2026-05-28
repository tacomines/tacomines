'use client';

import {
  useEffect,
  useRef,
  useState,
} from 'react';

import styles from './SectionNavigator.module.css';

interface SectionItem {
  id: string;

  label: string;
}

interface SectionNavigatorProps {
  sections: SectionItem[];
}

export default function SectionNavigator({
  sections,
}: SectionNavigatorProps) {
  const [activeSection, setActiveSection] =
    useState(sections[0]?.id || '');

  const [visible, setVisible] =
    useState(false);

  const navRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 320);

      let current = '';

      sections.forEach((section) => {
        const element =
          document.getElementById(
            section.id
          );

        if (element) {
          const rect =
            element.getBoundingClientRect();

          if (
            rect.top <= 180 &&
            rect.bottom >= 180
          ) {
            current = section.id;
          }
        }
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener(
      'scroll',
      handleScroll
    );

    handleScroll();

    return () =>
      window.removeEventListener(
        'scroll',
        handleScroll
      );
  }, [sections]);

  /* AUTO SCROLL ACTIVE ITEM */

  useEffect(() => {
    const activeButton =
      document.getElementById(
        `section-nav-${activeSection}`
      );

    if (
      activeButton &&
      navRef.current
    ) {
      activeButton.scrollIntoView({
        behavior: 'smooth',

        inline: 'center',

        block: 'nearest',
      });
    }
  }, [activeSection]);

  const handleScrollTo = (
    id: string
  ) => {
    const element =
      document.getElementById(id);

    if (element) {
      const offset = 140;

      const top =
        element.offsetTop - offset;

      window.scrollTo({
        top,

        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      className={`${styles.wrapper} ${
        visible
          ? styles.visible
          : ''
      }`}
    >
      <div
        className={styles.inner}
        ref={navRef}
      >
        {sections.map((section) => (
          <button
            id={`section-nav-${section.id}`}
            key={section.id}
            onClick={() =>
              handleScrollTo(
                section.id
              )
            }
            className={`${
              styles.link
            } ${
              activeSection ===
              section.id
                ? styles.active
                : ''
            }`}
          >
            {section.label}
          </button>
        ))}
      </div>
    </div>
  );
}