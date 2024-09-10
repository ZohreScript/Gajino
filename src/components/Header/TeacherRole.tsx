"use client";
import React, { useState } from "react";
import Image from "next/image";
import avatar from "../../../public/icons/teacheravatar.svg";
import { IoIosNotificationsOutline, IoIosArrowDown } from "react-icons/io";

interface TeacherRoleProps {}

const TeacherRole: React.FC<TeacherRoleProps> = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="bg-white shadow-md w-full">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Left Side: Status and Options */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">وضعیت:</span>
            <button className="bg-teal-400 text-white px-4 py-2 rounded-lg">فعال</button>
            <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded-lg">غیر فعال</button>
          </div>
        </div>

        {/* Right Side: Profile and Notifications */}
        <div className="relative">
          <div className="flex items-center space-x-4">
            <button>
              <IoIosNotificationsOutline size={24} className="text-gray-600" />
            </button>
            <div className="flex items-center space-x-2">
              {/* Profile Image */}
              <Image
                src="/profile-pic.jpg" // Replace with your image source
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full"
              />
              {/* Profile Dropdown */}
              <button
                onClick={toggleDropdown}
                className="flex items-center text-gray-700"
              >
                بهرام موسوی راد
                <IoIosArrowDown size={20} className="ml-2" />
              </button>
            </div>
          </div>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                اعلانات
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                پنل کاربری من
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                خروج از حساب کاربری
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default TeacherRole;
