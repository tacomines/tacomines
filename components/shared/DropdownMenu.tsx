'use client';

import Link from 'next/link';

import styles from './DropdownMenu.module.css';

interface DropdownItem {
  label: string;

  href: string;
}

interface DropdownMenuProps {
  items: DropdownItem[];
}

const DropdownMenu = ({
  items,
}: DropdownMenuProps) => {
  return (
    <div className={styles.dropdownMenu}>
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={styles.dropdownItem}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default DropdownMenu;