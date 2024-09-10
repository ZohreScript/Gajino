"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { pages } from "../../constants/list";
import Image from "next/image";
import arrowDownIcon from "../../../public/icons/expandDown.svg";
import arrowUpIcon from "../../../public/icons/expand_more_secondary.svg";
import arrowLeftIcon from "../../../public/icons/arrowLeftIcon.svg";

const liStyle = "text-sm lg:text-lg py-1 duration-500 ";
const liActiveStyle = `${liStyle} text-secondary-main bg-purple-100`;
const liHoverStyle = " hover:text-secondary-main";

const chunkArray = (array: any[], chunkSize: number) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

const Menu = () => {
  const pathname = usePathname();
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);
  const [openSubSubMenu, setOpenSubSubMenu] = useState<number | null>(null);
  const [activeSubPageId, setActiveSubPageId] = useState<number | null>(null);
  const [hoveredSubPageId, setHoveredSubPageId] = useState<number | null>(null);

  const toggleSubMenu = (id: number) => {
    setOpenSubMenu((prevId) => (prevId === id ? null : id));
    setOpenSubSubMenu(null);
  };

  const closeMenus = () => {
    setOpenSubMenu(null);
    setOpenSubSubMenu(null);
  };

  const handleSubPageClick = (id: number) => {
    setActiveSubPageId(id);
    setOpenSubSubMenu(id);
  };

  return (
    <>
      {openSubMenu !== null && (
        <div
          className="fixed  inset-0 bg-gray-700 bg-opacity-50 z-9 w-full h-full"
          onClick={closeMenus}
        />
      )}

      <ul className="flex items-right text-lg font-medium md:gap-x-4 lg:gap-x-6 text-primary-main">
        {pages.map((item) => (
          <li
            key={item.id}
            className={`${pathname === `/${item.url}` ? liActiveStyle : liStyle} ${liHoverStyle}`}
          >
            {item.subPages ? (
              <div
                className={`flex items-center justify-between cursor-pointer ${
                  openSubMenu === item.id ? "text-secondary-main" : "text-primary-main"
                }`}
                onClick={() => toggleSubMenu(item.id)}
              >
                {item.type}
                <Image
                  src={openSubMenu === item.id ? arrowUpIcon.src : arrowDownIcon.src}
                  alt="toggle submenu"
                  width={24}
                  height={24}
                />
              </div>
            ) : (
              <Link href={`/${item.url}`}>{item.type}</Link>
            )}

            {item.subPages && (
              <div
                className={`absolute w-4/5 h-auto container mx-auto top-[6.5rem] z-10 flex flex-col md:flex-row bg-white shadow-lg rounded-lg ${
                  openSubMenu === item.id ? "block" : "hidden"
                }`}
              >
                <div className="flex w-1/5 border-l py-1 rounded-t-lg md:rounded-l-lg md:rounded-t-none">
                  <ul className="w-full">
                    {item.subPages.map((subPage) => (
                      <li
                        key={subPage.id}
                        className={`cursor-pointer w-full ${
                          activeSubPageId === subPage.id
                            ? "bg-purple-100 text-secondary-main"
                            : "text-secondary-light hover:text-secondary-main hover:bg-purple-50"
                        } p-4`}
                        onMouseEnter={() => {
                          setHoveredSubPageId(subPage.id);
                          setOpenSubSubMenu(subPage.id); // Open sub-sub menu on hover
                        }}
                        onMouseLeave={() => setHoveredSubPageId(null)}
                        onClick={() => handleSubPageClick(subPage.id)}
                      >
                        <div className="flex items-center justify-start">
                          <Image
                          src={
                            activeSubPageId === subPage.id || hoveredSubPageId === subPage.id
                              ? subPage.activeicon ?? ""  
                              : subPage.icon ?? "" 
                          }
                            alt={`${subPage.type} icon`}
                            width={24}
                            height={24}
                            className="ml-2"
                          />
                          <span>{subPage.type}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex w-3/5 rounded-b-lg md:rounded-r-lg md:rounded-b-none">
                  {openSubSubMenu !== null && (
                    <div className="flex flex-wrap w-full">
                      {chunkArray(
                        item.subPages.find(
                          (subPage) => subPage.id === openSubSubMenu
                        )?.subsubPages || [],
                        6
                      ).map((subsubPagesChunk, index) => (
                        <ul key={index} className="w-1/2 ">
                          {subsubPagesChunk.map((subSubPage) => (
                         <li
                         key={subSubPage.id}
                         className="flex w-full p-4 items-center cursor-pointer text-secondary-main font-light"
                       >
                         <Link  href={`/${subSubPage.url}`}>
                           <div className="flex items-center w-full">
                             {subSubPage.type}
                             <Image
                               src={arrowLeftIcon.src}
                               alt="left arrow"
                               width={24}
                               height={24}
                               className="mr-2"
                             />
                           </div>
                         </Link>
                       </li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Menu;
