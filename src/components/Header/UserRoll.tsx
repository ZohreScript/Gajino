"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoIosArrowDown, IoMdNotifications } from "react-icons/io";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import carticon from '../../../public/icons/shopcart.svg';
import user from "../../../public/icons/Subtract.svg";

interface CartProps {
  cartItemCount: number;
}

const UserRoll: React.FC<CartProps> = ({ cartItemCount }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="w-full hidden md:block">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="relative">
          <div className="flex items-center ">
            <Image
              src={user}
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full mx-1 shadow-md"
            />
            <button
              onClick={toggleDropdown}
              className="flex items-center text-primary-main cursor-pointer"
            >
              بهرام موسوی راد
              <IoIosArrowDown
                size={16}
                className={`mr-2 transform transition-transform duration-300 ease-in-out ${
                  dropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
          </div>

          {dropdownOpen && (
            <ul className="absolute right-0 mt-2 w-48 text-sm bg-white shadow-md rounded-lg z-10">
              <li className="flex items-center px-4 py-3 text-primary-textLight hover:bg-[#ECEAEF] hover:rounded-t-lg hover:text-primary-text">
                <IoMdNotifications size={20} className="ml-2" />
                <Link href="#" className="flex-1 pr-1">
                  اعلانات
                </Link>
              </li>
              <li className="flex items-center px-4 py-3 text-primary-textLight hover:bg-[#ECEAEF] hover:text-primary-text">
                <FaUser size={18} className="ml-2" />
                <Link href="#" className="flex-1 pr-1">
                  پنل کاربری من
                </Link>
              </li>
              <li className="flex items-center px-4 py-3 text-primary-textLight hover:bg-[#ECEAEF] hover:rounded-b-lg hover:text-primary-text">
                <IoLogOut size={20} className="ml-2" />
                <Link href="#" className="flex-1 pr-1">
                  خروج از حساب کاربری
                </Link>
              </li>
            </ul>
          )}
        </div>
        
        <div className="border-r-2 border-primary-textLight/70 h-8 mx-2"></div>

        <div className="flex items-center">
          <div className="relative">
            <Image
              src={carticon.src}
              alt="Shopping Cart"
              width={40}
              height={40}
              className="cursor-pointer"
            />
            
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-1 bg-red-500 text-white text-xs border border-white font-bold rounded-full w-5 h-5 text-center flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default UserRoll;
