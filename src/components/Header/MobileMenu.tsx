import React, { useState } from "react";
import Image from "next/image";
import { Pages, Page, SubPage, SubSubPage, ThirdSubPage } from "../../constants/list";
import menuIcon from "../../../public/icons/menuicon.svg";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";

const MobileMenu: React.FC = () => {
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);
  const [openSubSubMenu, setOpenSubSubMenu] = useState<number | null>(null);
  const [openThirdSubMenu, setOpenThirdSubMenu] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [hoveredSubPage, setHoveredSubPage] = useState<number | null>(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleSubMenuClick = (id: number) => {
    if (openSubMenu === id) {
      setOpenSubMenu(null);
      setOpenSubSubMenu(null);
      setOpenThirdSubMenu(null);
    } else {
      setOpenSubMenu(id);
      setOpenSubSubMenu(null);
      setOpenThirdSubMenu(null);
    }
  };

  const handleSubSubMenuClick = (id: number) => {
    if (openSubSubMenu === id) {
      setOpenSubSubMenu(null);
      setOpenThirdSubMenu(null);
    } else {
      setOpenSubSubMenu(id);
      setOpenThirdSubMenu(null);
    }
  };

  // const handleThirdSubMenuClick = (id: number) => {
  //   if (openThirdSubMenu === id) {
  //     setOpenThirdSubMenu(null);
  //   } else {
  //     setOpenThirdSubMenu(id);
  //   }
  // };

  const handleBackToSubSubMenu = () => {
    setOpenThirdSubMenu(null);
  };

  const handleBackToSubMenu = () => {
    setOpenSubSubMenu(null);
  };
  
  const [selectedSubSubPage, setSelectedSubSubPage] = useState<string | null>(null);

  const handleThirdSubMenuClick = (id: number, subSubPageType: string) => {
    if (openThirdSubMenu === id) {
      setOpenThirdSubMenu(null);
      setSelectedSubSubPage(null);
    } else {
      setOpenThirdSubMenu(id);
      setSelectedSubSubPage(subSubPageType); 
    }
  };
  
  const currentUrl = typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <div>
      <div onClick={toggleMenu} className="cursor-pointer">
        <Image src={menuIcon.src} alt="menu icon" width={24} height={24} />
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-20 ${isMenuOpen ? "block" : "hidden"}`}
        onClick={toggleMenu}
      ></div>

      <div
        className={`fixed top-0 right-0 w-[16rem] sm:w-[20rem] bg-white rounded-l-xl shadow-lg duration-700 z-30 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {openThirdSubMenu !== null ? (
          <div className="flex flex-col min-h-screen">
            <div className="bg-gray-100 border-b border-b-gray-200 p-4 flex items-center justify-end">
              <button
                className="flex items-center justify-end text-base font-semibold text-primary-text cursor-pointer mb-2"
                onClick={handleBackToSubSubMenu}
              >
                بازگشت
                <FaArrowLeft className="text-primary-text mr-3" />
              </button>
            </div>
            {selectedSubSubPage && (
      <div className="text-right p-1 text-primary-text">
        همه درس‌های {selectedSubSubPage}
      </div>
    )}
            <ul className="flex-1 overflow-y-auto">
              {Pages.flatMap((page) =>
                page.subPages?.flatMap((subPage) =>
                  subPage.subsubPages?.filter((subSubPage) => subSubPage.id === openSubSubMenu)
                    .flatMap((subSubPage) =>
                      subSubPage.thirdsubPages?.map((thirdSubPage) => (

                        <li
                          key={thirdSubPage.id}
                          className="text-base border-b p-4 text-primary-textLight border-gray-100 pb-2"
                        >
                          <Link
                            href={thirdSubPage.url}
                            className={`text-secondary-main ${currentUrl.startsWith(thirdSubPage.url) ? "font-semibold" : "font-normal"}`}
                            onClick={toggleMenu}
                          >
                            {thirdSubPage.type}
                          </Link>
                        </li>
                      ))
                    )
                )
              )}
            </ul>
          </div>
        ) : openSubSubMenu !== null ? (
          <div className="flex flex-col min-h-screen">
            <div className="bg-gray-100 border-b border-b-gray-200 p-4 flex items-center justify-end">
              <button
                className="flex items-center justify-end text-base font-semibold text-primary-text cursor-pointer mb-2"
                onClick={handleBackToSubMenu}
              >
                بازگشت
                <FaArrowLeft className="text-primary-text mr-3" />
              </button>
            </div>
            <ul className="flex-1 overflow-y-auto">
              {Pages.flatMap((page) =>
                page.subPages?.filter((subPage) => subPage.id === openSubMenu)
                  .flatMap((subPage) =>
                    subPage.subsubPages?.map((subSubPage) => (
                      <li
                        key={subSubPage.id}
                        className={`text-base p-4 border-b text-primary-text border-gray-100 pb-2 ${hoveredSubPage === subSubPage.id ? "bg-gray-200" : ""}`}
                        onMouseEnter={() => setHoveredSubPage(subSubPage.id)}
                        onMouseLeave={() => setHoveredSubPage(null)}
                      >
                        <div
                          className={`flex items-center justify-between rounded-md text-secondary-main cursor-pointer ${openThirdSubMenu === subSubPage.id ? "font-semibold" : "font-normal"}`}
                          onClick={() => handleThirdSubMenuClick(subSubPage.id,subSubPage.type)}
                        >
                      

                          {subSubPage.type}
                          {subSubPage.thirdsubPages && (
                            <IoIosArrowBack className="text-primary-text" />
                          )}
                        </div>
                      </li>
                    ))
                  )
              )}
            </ul>
          </div>
        ) : openSubMenu !== null ? (
          <div className="flex flex-col min-h-screen">
            <div className="bg-gray-100 border-b border-b-gray-200 p-4 flex items-center justify-end">
              <button
                className="flex items-center justify-end text-base font-semibold text-primary-text cursor-pointer mb-2"
                onClick={() => setOpenSubMenu(null)}
              >
                بازگشت
                <FaArrowLeft className="text-primary-text mr-3" />
              </button>
            </div>
            <ul className="flex-1 overflow-y-auto">
              {Pages.flatMap((page) =>
                page.subPages?.map((subPage) => (
                  <li
                    key={subPage.id}
                    className={`text-base p-4 border-b text-primary-text border-gray-100 pb-2 ${hoveredSubPage === subPage.id ? "bg-gray-200" : ""}`}
                    onMouseEnter={() => setHoveredSubPage(subPage.id)}
                    onMouseLeave={() => setHoveredSubPage(null)}
                  >
                    <div
                      className={`flex items-right justify-between text-secondary-main cursor-pointer ${openSubSubMenu === subPage.id ? "font-semibold" : "font-normal"}`}
                      onClick={() => handleSubSubMenuClick(subPage.id)}
                    >
                      <div className="flex">
                      <Image
                        src={openSubSubMenu === subPage.id || hoveredSubPage === subPage.id
                          ? subPage.activeicon ?? ""
                          : subPage.icon ?? ""
                        }
                        alt={`${subPage.type} icon`}
                        width={20}
                        height={20}
                        className="mx-2"
                      />
                      {subPage.type}</div>
                      {subPage.subsubPages && (
                        <IoIosArrowBack className="text-primary-text" />
                      )}
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>
        ) : (
          <ul className="text-right flex flex-col gap-y-2 min-h-screen justify-start px-4 py-6">
          {Pages.map((item: Page) => (
            <li
              key={item.id}
              className={`text-base border-b border-gray-200 pb-3 ${
                currentUrl.startsWith(item.url) ? "bg-gray-200" : ""
              }`}
              onMouseEnter={() => setHoveredSubPage(item.id)}
              onMouseLeave={() => setHoveredSubPage(null)}
            >
              <div
                className={`flex items-center justify-between text-primary-main cursor-pointer ${
                  currentUrl.startsWith(item.url) ? "font-semibold" : "font-normal"
                }`}
                onClick={() => handleSubMenuClick(item.id)}
              >
                {item.type}
                {item.subPages && <IoIosArrowBack className="text-primary-main" />}
              </div>
            </li>
          ))}
          <button className="bg-primary-main text-lg w-2/3 text-white py-2 px-2 rounded-lg">
            معلم خصوصی شو
          </button>
        </ul>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
