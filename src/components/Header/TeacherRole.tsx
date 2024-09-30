"use client";
import React, { useState } from "react";
import Image from "next/image";
import avatar from "../../../public/icons/teacheravatar.svg"; // If you use an avatar image locally
import {
  IoIosNotificationsOutline,
  IoIosArrowDown,
  IoIosArrowUp,
  IoMdNotifications,
} from "react-icons/io";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

interface TeacherRoleProps {}

const TeacherRole: React.FC<TeacherRoleProps> = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const toggleStatus = () => {
    setIsActive(!isActive);
  };
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="w-full hidden md:block">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Right Side: Profile and Notifications */}
        <div className="relative">
          <div className="flex items-center ">
            {/* Profile and Dropdown */}
            <Image
              src={avatar}
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

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <ul className="absolute right-0 mt-2 w-48 text-sm bg-white shadow-md rounded-lg  z-10">
              <li className="flex items-center px-4 py-3 text-primary-textLight hover:bg-[#ECEAEF] hover:rounded-t-lg  hover:text-primary-text">
                <IoMdNotifications size={20} className=" ml-2" />
                <Link href="#" className="flex-1 pr-1">
                  {" "}
                  اعلانات{" "}
                </Link>
              </li>
              <li className="flex items-center px-4 py-3 text-primary-textLight hover:bg-[#ECEAEF] hover:text-primary-text">
                <FaUser size={18} className=" ml-2" />
                <Link href="#" className="flex-1 pr-1">
                  {" "}
                  پنل کاربری من{" "}
                </Link>
              </li>
              <li className="flex items-center px-4 py-3 text-primary-textLight hover:bg-[#ECEAEF] hover:rounded-b-lg hover:text-primary-text">
                <IoLogOut size={20} className=" ml-2" />
                <Link href="#" className="flex-1 pr-1">
                  {" "}
                  خروج از حساب کاربری{" "}
                </Link>
              </li>
            </ul>
          )}
        </div>
        <div className="border-r-2 border-primary-textLight/70 h-8 mx-2"></div>
        {/* Left Side: Status and Options */}
        <div className="flex items-center ">
          <span className="text-primary-textLight ml-1">وضعیت:</span>
          <div className="flex bg-[#ECEAEF] text-xs px-2  py-2 items-center text-center rounded-xl">
            <button
              onClick={toggleStatus}
              className={`${
                isActive
                  ? "bg-primary-main font-semibold text-white"
                  : "bg-gray-200 text-gray-600"
              } px-4 py-2 rounded-xl transition-all duration-300 ease-in-out`}
            >
              فعال
            </button>
            <button
              onClick={toggleStatus}
              className={`${
                !isActive
                  ? "bg-primary-textLight text-white"
                  : "bg-gray-200 text-gray-600"
              } px-2 py-2 rounded-xl transition-all duration-300 ease-in-out`}
            >
              غیر فعال
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TeacherRole;
