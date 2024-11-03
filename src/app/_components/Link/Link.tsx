// components/Link.tsx
import React from 'react';
import Link from 'next/link';

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, children }) => {
  return (
    <Link href={href}>
      <a className="text-blue-500 hover:text-blue-700 active:text-red-500 transition">
        {children}
      </a>
    </Link>
  );
};

export default CustomLink;
