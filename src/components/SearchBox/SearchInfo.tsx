import Image from "next/image";
import React, { useState } from "react";
import { TbArrowsSort } from "react-icons/tb";
import teacher1 from "../../../public/images/teacher (1).png";
import { FaStar } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { HiLocationMarker } from "react-icons/hi";
import { PiTimerFill } from "react-icons/pi";
import teacherIcon from "../../../public/icons/teacher.svg";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const SearchInfo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDescription = () => setIsOpen(!isOpen);
  return (
    <div className="container mx-auto py-8">
      {/* Title and Sorting Options */}
      <h2 className="font-bold text-secondary-main text-xl items-center flex  my-4 justify-center">
        28مورد نتایج جستجوی شما{" "}
      </h2>
      <div className=" justify-between flex mt-6 items-center p-2  text-primary-textLight ">
        <p className="flex items-center text-sm gap-1">
          <TbArrowsSort />
          مرتب سازی براساس:
        </p>
        <div className="relative block  md:hidden">
          <select
            id="timeSelect"
            className=" w-full text-xs appearance-none bg-secondary-main text-white py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-secondary-main focus:border-primary-textLight"
          >
            <option value="1"> در دسترس ترین زمان</option>
            <option value="2">زمان 2</option>
            <option value="3">زمان 3</option>
          </select>

          {/* Downward Arrow */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
            <BsArrowDown className="text-white" />
          </div>
        </div>

        <button className="hover:bg-secondary-main hidden md:block hover:text-white rounded-lg px-4 py-2">
          محبوب ترین
        </button>
        <button className="hover:bg-secondary-main hidden md:block hover:text-white rounded-lg px-4 py-2">
          در دسترس ترین زمان
        </button>
        <button className="hover:bg-secondary-main hidden md:block hover:text-white rounded-lg px-4 py-2">
          بیشترین نظر
        </button>
        <button className="hover:bg-secondary-main hover:text-white hidden md:block rounded-lg px-4 py-2">
          ارزان ترین
        </button>
        <button className="hover:bg-secondary-main hover:text-white hidden md:block rounded-lg px-4 py-2">
          گران ترین
        </button>
        <button className="hover:bg-secondary-main hover:text-white hidden md:block rounded-lg px-4 py-2">
          جدیدترین
        </button>
      </div>

      {/* Search  Card */}
      <div className="container mx-auto bg-white shadow-lg rounded-lg p-6 md:flex flex-row justify-between items-center gap-6 mb-4">
        <div className="md:w-1/5 w-full gride gride-rows-1">
          <div className="relative md:w-64 md:h-64 w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={teacher1.src}
              alt="teacher"
              layout="fill"
              objectFit="cover"
              className="rounded-full shadow-xl shadow-[#42246E]/20"
            />
          </div>
        </div>

        <div className="flex-grow md:w-3/5 w-full md:grid md:mb-0 mb-8  gap-3">
          <h2 className="md:text-xl text-base row-span-1 font-bold text-secondary-main my-2">
            بهرام موسوی راد
          </h2>

          <div className="flex md:flex-col flex-row gap-4 md:col-span-2">
            <ul className="text-secondary-main w-full md:w-2/3">
              <li className="md:text-lg text-sm py-1">
                <p className="flex items-center">
                  <GoDotFill className="text-primary-main text-sm ml-1" />
                  ادبیات
                  <span className="md:text-xs text-[10px] text-primary-textLight mx-1 ">
                    پایه دوازدهم تجربی و کنکور
                  </span>
                </p>
              </li>
              <li className="flex items-center md:text-lg text-sm py-1">
                <GoDotFill className="text-primary-main text-sm ml-1" />
                نویسندگی
              </li>
              <li className="md:text-lg text-sm py-1 flex items-center">
                <GoDotFill className="text-primary-main text-sm ml-1" />
                شعر نویسی
              </li>
            </ul>

            <ul className="text-primary-textLight w-full md:w-1/3">
              <li className="flex items-center md:text-base text-sm gap-1 p-1">
                <HiLocationMarker className="text-primary-textLight" />
                تهران
              </li>
              <li className="flex items-center md:text-base text-xs p-1 gap-1">
                <PiTimerFill className="text-primary-textLight" />
                87 ساعت تدریس
              </li>
              <li className="flex items-center md:text-base text-sm p-1">
                <div className="flex items-center justify-center text-xs sm:text-sm md:text-sm text-gray-500">
                  <FaStar className="text-yellow-400" />
                  <span className="text-gray-400">4/2</span>
                  <span className="mx-1 text-gray-400">|</span>
                  <span className="text-gray-400 space-x-1">از 87 نفر</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:w-2/5 grid md:grid-rows-3 grid-rows-2  w-full space-y-6">
        <div className="flex flex-col text-sm text-primary-text md:flex-row items-start row-span-1">
      {/* Icon and Title */}
      <div className="inline-flex items-center md:space-x-2 shrink-0">
        <Image
          src={teacherIcon.src} 
          alt="Teacher Icon"
          width={20}
          height={20}
          className="shrink-0"
        />

        <span className="font-semibold mx-2 text-primary-text md:hidden block text-base md:ml-2">
          درباره مدرس :
        </span>

        <button
          className="md:hidden -translate-x-1/4 w-1/3 transform  flex items-center justify-center ml-2 text-primary-text"
          onClick={toggleDescription}
        >
          {isOpen ? (
           <IoIosArrowUp className="text-lg text-primary-text" /> 
          ) : (
            <IoIosArrowDown className="text-lg text-primary-text"/> 
          )}
        </button>
      </div>

      {/* Description */}
      <div
        className={`flex text-primary-textLight transition-all duration-300 ease-in-out ${
          isOpen ? 'block' : 'hidden'
        } md:flex md:items-center  space-y-2 md:space-x-4`}
      >
        <p className="mt-2 md:mt-0 md:leading-8 leading-6">
          <span className="hidden text-base font-medium leading-5 md:inline">درباره مدرس: </span>
          لورم ایپسوم متن ساختگی لورم ایپسوم متن ساختگی لورم ایپسوم متن ساختگی
          لورم ایپسوم متن ساختگی لورم ایپسوم متن ساختگی
        </p>
      </div>
    </div>

          <div className="row-span-1 hidden md:block"></div>
          <div className="flex flex-col items-center row-span-1 justify-center md:mt-8">
            <p className="text-secondary-main font-semibold mb-1 items-center">
              هزینه یک ساعت کلاس :
              <span className="text-primary-main">140 هزار تومان</span>
            </p>
            <button className="px-10 w-full py-2 bg-primary-main font-semibold items-center text-white rounded-lg">
              مشاهده پروفایل / رزرو کلاس
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInfo;
