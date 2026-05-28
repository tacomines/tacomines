'use client';

import Link from 'next/link';

import styles from './CTAButton.module.css';

interface CTAButtonProps {
  href?: string;

  label: string;

  variant?: 'primary' | 'secondary';

  fullWidth?: boolean;

  type?: 'button' | 'submit';

  onClick?: () => void;
}

const CTAButton = ({
  href,
  label,
  variant = 'primary',
  fullWidth = false,
  type = 'button',
  onClick,
}: CTAButtonProps) => {

  const classNames = `
    ${styles.button}
    ${styles[variant]}
    ${
      fullWidth
        ? styles.fullWidth
        : ''
    }
  `;

  if (href) {
    return (
      <Link
        href={href}
        className={classNames}
      >
        {label}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default CTAButton;