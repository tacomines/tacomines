'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';

interface ScrollToTopLinkProps {
  href: string;

  children: React.ReactNode;

  className?: string;

  onClick?: () => void;
}

export default function ScrollToTopLink({
  href,
  children,
  className,
  onClick,
}: ScrollToTopLinkProps) {
  const pathname = usePathname();

  const handleClick = () => {
    onClick?.();

    if (pathname === href) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Link
      href={href}
      scroll={true}
      className={className}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}