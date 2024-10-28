// components/Breadcrumb.tsx
import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";

const Breadcrumb: React.FC = () => {
  return (
    <nav
      className="flex text-gray-600 text-sm mb-4 py-4 px-2"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1">
        <li className="inline-flex items-center justify-center m-1">
          <Link href="/" className="text-MokhFont2">
            خانه
          </Link>
        </li>
        <li className="flex items-center justify-center">
          <IoIosArrowBack className="text-MokhBlue" />
          <Link href="#" className="text-MokhBlue m-1">
            جستجو
          </Link>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
