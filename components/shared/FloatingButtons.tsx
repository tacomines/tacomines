'use client';

import { FaWhatsapp } from 'react-icons/fa';

import styles from './FloatingButtons.module.css';

const FloatingButtons = () => {
  return (
    <div className={styles.wrapper}>
      <a
        href='https://wa.me/919063725514'
        target='_blank'
        rel='noopener noreferrer'
        className={styles.whatsapp}
        aria-label='WhatsApp'
      >
        <FaWhatsapp size={30} />
      </a>
    </div>
  );
};

export default FloatingButtons;