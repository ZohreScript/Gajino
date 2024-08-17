"use client"; // Required for client-side rendering

import React, { useState } from "react";
import Link from "next/link";
import { pages } from "../../constants/list";

// icons
import menuIcon from "../../../public/icons/menuicon.svg";
import arrowDownIcon from "../../../public/icons/expand_more.svg";
import arrowUpIcon from "../../../public/icons/expandedLess.svg";

import Image from "next/image";

const MobileMenu = () => {
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleSubMenu = (id: number) =>
    setOpenSubMenu((prevId) => (prevId === id ? null : id));

  return (
    <div >
      <div onClick={toggleMenu} className="cursor-pointer">
        <Image src={menuIcon.src} alt="menu icon" width={24} height={24} />
      </div>

      {/* Bg overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-10 ${
          isMenuOpen ? "block" : "hidden"
        }`}
        onClick={toggleMenu}
      ></div>

      <div
        className={`fixed top-0 right-0 w-[16rem] sm:w-[20rem] bg-white rounded-l-lg shadow-lg duration-700 z-20 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="text-right flex flex-col gap-y-2 min-h-screen  px-4 py-6">
          {pages.map((item) => (
            <li
              key={item.id}
              className="text-xs sm:text-sm border-b
              border-gray-100 pb-3 "
            >
              {item.subPages ? (
                <div
                  className={`flex items-center justify-between  text-primary-main cursor-pointer  ${
                    openSubMenu === item.id ? "font-semibold" : "font-normal"
                  }`}
                  onClick={() => toggleSubMenu(item.id)}
                >
                  {item.type}
                  <Image
                    src={
                      openSubMenu === item.id
                        ? arrowUpIcon.src
                        : arrowDownIcon.src
                    }
                    alt="toggle submenu"
                    width={16}
                    height={16}
                  />
                </div>
              ) : (
                <Link
                  href={item.url}
                  className={`block text-primary-main hover:text-secondary-main ${
                    typeof window !== "undefined" &&
                    window.location.href === item.url
                      ? "font-semibold"
                      : "font-normal"
                  }`}
                  onClick={toggleMenu}
                >
                  {item.type}
                </Link>
              )}
              <div
                className={`overflow-hidden transition-max-height duration-700 ease-in-out ${
                  openSubMenu === item.id
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {item.subPages && (
                  <ul className="pl-4 py-4 ">
                    {item.subPages.map((subItem) => (
                      <li
                        key={subItem.id}
                        className="duration-500 text-xs sm:text-sm border-b  border-gray-100 pb-2"
                      >
                        <Link
                          href={subItem.url}
                          className="block text-secondary-main "
                          onClick={toggleMenu}
                        >
                          {subItem.type}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
