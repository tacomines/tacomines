'use client';

import Link from 'next/link';
import styles from './CTAButton.module.css';

interface CTAButtonProps {
  href: string;
  label: string;
}

const CTAButton = ({ href, label }: CTAButtonProps) => {
  return (
    <Link href={href} className={styles.button}>
      {label}
    </Link>
  );
};

export default CTAButton;