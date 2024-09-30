//MobileMenu/MainMenu
import React from "react";
import Image from "next/image";
import { Pages, Page, SubPage, SubSubPage, ThirdSubPage } from "../../constants/list";
import menuIcon from "../../../public/icons/menuicon.svg";
import arrowDownIcon from "../../../public/icons/expand_more.svg";
import { FaArrowLeft } from "react-icons/fa";

interface MainMenuProps {
  menuPath: (Page | SubPage | ThirdSubPage)[];
  setMenuPath: React.Dispatch<React.SetStateAction<(Page | SubPage | ThirdSubPage)[]>>;
  setOpenSubMenu: React.Dispatch<React.SetStateAction<number | null>>;
  isMenuOpen: boolean;
  toggleMenu: () => void;
  currentLevelItems: (Page | SubPage | ThirdSubPage)[];
  currentUrl: string;
}

const MainMenu: React.FC<MainMenuProps> = ({
  menuPath,
  setMenuPath,
  setOpenSubMenu,
  isMenuOpen,
  toggleMenu,
  currentLevelItems,
  currentUrl
}) => {
  const handleBackClick = () => {
    setMenuPath((prev) => prev.slice(0, -1));
    setOpenSubMenu(null);
  };

  const handleMenuClick = (item: Page | SubPage | ThirdSubPage) => {
    setMenuPath((prev) => [...prev, item]);
    if ('subPages' in item) {
      setOpenSubMenu(item.id);
    }
  };

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
        <ul className="text-right flex flex-col gap-y-2 min-h-screen justify-start px-4 py-6">
          {menuPath.length > 0 && (
            <button
              className="flex border-b border-b-gray-200 pb-3 items-center justify-end text-base font-semibold text-primary-text cursor-pointer mb-2"
              onClick={handleBackClick}
            >
              بازگشت
              <FaArrowLeft className="text-primary-text mr-3" />
            </button>
          )}

          {currentLevelItems.map((item) => (
            <li key={item.id} className="text-base border-b border-gray-200 pb-3">
              <div
                className={`flex items-center justify-between ${currentUrl.startsWith(item.url) ? "text-primary-main font-semibold" : "text-primary-text font-normal"} cursor-pointer`}
                onClick={() => handleMenuClick(item)}
              >
               
                {('icon' in item) && (
                  <Image
                    src={currentUrl.startsWith(item.url) && 'activeicon' in item ? (item as SubPage).activeicon || (item as SubPage).icon : (item as SubPage).icon || menuIcon.src}
                    alt={`${item.url} icon`}
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                )}
                {item.type}
                {('subPages' in item || 'subsubPages' in item || 'thirdsubPages' in item) && (
                  <Image
                    src={arrowDownIcon.src}
                    alt="arrow icon"
                    width={16}
                    height={16}
                  />
                )}
              </div>
            </li>
          ))}

          <button className="bg-primary-main text-lg w-2/3 text-white py-2 px-2 rounded-lg">
            معلم خصوصی شو
          </button>
        </ul>
      </div>
    </div>
  );
};

export default MainMenu;
