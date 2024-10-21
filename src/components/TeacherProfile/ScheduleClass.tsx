import React, { useState, useEffect } from "react";
import { Calendar, DateObject } from "react-multi-date-picker";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "react-multi-date-picker/styles/layouts/prime.css";
import { FaCalendarDays } from "react-icons/fa6";
import Image from "next/image";
import onlineicon1 from "../../../public/icons/online1.svg";
import onlineicon2 from "../../../public/icons/online2.svg";
import presenticon1 from "../../../public/icons/present1.svg";
import presenticon2 from "../../../public/icons/present2.svg";

interface ClassSchedule {
  time: string;
  subject: string;
  grade: string;
}

interface DayClasses {
  date: string;
  classes: ClassSchedule[];
}
const daysOfWeek = [
  { day: "شنبه", date: "1402/07/17" },
  { day: "یک‌شنبه", date: "1402/07/18" },
  { day: "دوشنبه", date: "1402/07/19" },
  { day: "سه‌شنبه", date: "1402/07/20" },
  { day: "چهارشنبه", date: "1402/07/21" },
  { day: "پنج‌شنبه", date: "1402/07/22" },
  { day: "جمعه", date: "1402/07/23" },
];

const classes = [
  {
    day: "شنبه",
    time: "10:00 - 12:00",
    title: "درس فیزیک 3",
    grade: "پایه دوازدهم تجربی",
    color: "bg-blue-200",
    icon: "💻",
  },
  {
    day: "دوشنبه",
    time: "16:00 - 18:00",
    title: "درس ریاضی 2",
    grade: "پایه یازدهم تجربی",
    color: "bg-yellow-200",
    icon: "📘",
  },
  {
    day: "سه‌شنبه",
    time: "12:00 - 14:00",
    title: "درس شیمی 1",
    grade: "پایه دهم تجربی",
    color: "bg-purple-200",
    icon: "⚛️",
  },
];
const ScheduleClass = () => {
  return (
    <div className="  bg-white container mx-auto m-8 rounded-2xl shadow-custom">
      <div className="shadow-md sticky top-0 rounded-md mb-8">
        <h3 className=" p-4 text-xl font-semibold text-MokhDarkBlue flex items-center">
          <FaCalendarDays className="text-MokhDarkBlue m-2" />
          زمانبندی کلاس ها
        </h3>
        <div className=" flex justify-center text-MokhFont2">
          <button className="mx-2 p-4 bg-white  shadow-custom rounded-lg">
            <FaChevronRight className="text-MokhFont2" />
          </button>
          <span
            className="px-4 py-2 bg-white shadow-custom  flex 
       justify-center items-center rounded-lg"
          >
            16 اردیبهشت - 22 اردیبهشت
          </span>
          <button className="mx-2 p-4 bg-white shadow-custom rounded-lg">
            <FaChevronLeft className="text-MokhFont2" />
          </button>
        </div>
        <div className="hidden md:grid grid-cols-7 py-6 gap-4 m-4">
          {daysOfWeek.map((day, idx) => (
            <div
              key={idx}
              className="text-center p-2 bg-MokhWhite2 text-MokhFont2 rounded-lg"
            >
              <h2 className="text-sm font-semibold">{day.day}</h2>
              <p className="text-sm">{day.date}</p>
            </div>
          ))}
        </div>
        <div className="shadow-lg flex md:hidden justify-center mb-2 text-MokhFont2">
          <button className="mx-2 p-4 bg-white  shadow-custom rounded-lg">
            <FaChevronRight className="text-MokhFont2" />
          </button>
          <span
            className="px-4 py-2 bg-white shadow-custom  
       justify-center items-center rounded-lg"
          >
            شنبه
          </span>
          <button className="mx-2 p-4 bg-white shadow-custom rounded-lg">
            <FaChevronLeft className="text-MokhFont2" />
          </button>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-7 gap-2 mt-1  min-h-screen ">
          {/* کلاس اول */}
          <div className="col-start-1  col-span-1">
            <div className="bg-MokhYellow bg-opacity-20 border-t-8 border-t-MokhYellow rounded-lg  p-6 relative">
              <div className="absolute top-3 left-2 bg-cyan-500 w-8 h-8 rounded-full flex items-center leading-none pt-1 justify-center text-white text-xl font-bold">
                +
              </div>
              <div className="text-right text-lg font-semibold mb-4 text-MokhFont1">
                ۸:۰۰ - ۱۰:۰۰
              </div>
              <div className="space-y-2 mb-2">
                <div className="text-right">
                  <p className="text-base text-MokhFont1 font-bold">
                    درس فیزیک ۳
                  </p>
                  <p className="text-sm text-MokhFont2">پایه دوازدهم تجربی</p>
                </div>
                <div className="text-right">
                  <p className="text-base text-MokhFont1 font-bold">
                    درس فیزیک ۳
                  </p>
                  <p className="text-sm text-MokhFont2">پایه دوازدهم تجربی</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-MokhFont1">+4...</p>
                </div>
              </div>
              <div className="flex justify-around mt-2">
                <div className="text-center">
                  <Image
                    src={onlineicon1.src}
                    alt="Shopping Cart"
                    width={40}
                    height={40}
                    className="cursor-pointer"
                  />
                </div>
                <div className="text-center">
                  <Image
                    src={onlineicon2.src}
                    alt="Shopping Cart"
                    width={40}
                    height={40}
                    className="cursor-pointer"
                  />
                </div>
                <div className="text-center">
                  <Image
                    src={presenticon1.src}
                    alt="Shopping Cart"
                    width={40}
                    height={40}
                    className="cursor-pointer"
                  />
                </div>
                <div className="text-center">
                  <Image
                    src={presenticon2.src}
                    alt="Shopping Cart"
                    width={40}
                    height={40}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* کلاس دوم */}
          <div className="col-start-6  col-span-1">
            <div className="bg-blue-600 bg-opacity-20 border-t-8 border-t-blue-600 rounded-lg  p-6 relative">
              <div className="absolute top-3 left-2 bg-cyan-500 w-8 h-8 rounded-full flex items-center leading-none pt-1 justify-center text-white text-xl font-bold">
                +
              </div>
              <div className="text-right text-lg font-semibold mb-4 text-MokhFont1">
                ۸:۰۰ - ۱۰:۰۰
              </div>
              <div className="space-y-2 mb-2">
                <div className="text-right">
                  <p className="text-base text-MokhFont1 font-bold">
                    درس فیزیک ۳
                  </p>
                  <p className="text-sm text-MokhFont2">پایه دوازدهم تجربی</p>
                </div>
                <div className="text-right">
                  <p className="text-base text-MokhFont1 font-bold">
                    درس فیزیک ۳
                  </p>
                  <p className="text-sm text-MokhFont2">پایه دوازدهم تجربی</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-MokhFont1">+4...</p>
                </div>
              </div>
              <div className="flex justify-around mt-2">
                <div className="text-center">
                  <Image
                    src={onlineicon1.src}
                    alt="Shopping Cart"
                    width={40}
                    height={40}
                    className="cursor-pointer"
                  />
                </div>
                <div className="text-center">
                  <Image
                    src={onlineicon2.src}
                    alt="Shopping Cart"
                    width={40}
                    height={40}
                    className="cursor-pointer"
                  />
                </div>
                <div className="text-center">
                  <Image
                    src={presenticon1.src}
                    alt="Shopping Cart"
                    width={40}
                    height={40}
                    className="cursor-pointer"
                  />
                </div>
                <div className="text-center">
                  <Image
                    src={presenticon2.src}
                    alt="Shopping Cart"
                    width={40}
                    height={40}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* کلاس سوم */}
          <div className="col-start-4  col-span-1">
            <div className="bg-green-600 bg-opacity-20 border-t-8 border-t-green-600 rounded-lg  p-6 relative">
              <div className="absolute top-3 left-2 bg-cyan-500 w-8 h-8 rounded-full flex items-center leading-none pt-1 justify-center text-white text-xl font-bold">
                +
              </div>
              <div className="text-right text-lg font-semibold mb-4 text-MokhFont1">
                ۸:۰۰ - ۱۰:۰۰
              </div>
              <div className="space-y-2 mb-2">
                <div className="text-right">
                  <p className="text-base text-MokhFont1 font-bold">
                    درس فیزیک ۳
                  </p>
                  <p className="text-sm text-MokhFont2">پایه دوازدهم تجربی</p>
                </div>
                <div className="text-right">
                  <p className="text-base text-MokhFont1 font-bold">
                    درس فیزیک ۳
                  </p>
                  <p className="text-sm text-MokhFont2">پایه دوازدهم تجربی</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-MokhFont1">+4...</p>
                </div>
              </div>
              <div className="flex justify-around mt-2">
                <div className="text-center">
                  <Image
                    src={onlineicon1.src}
                    alt="Shopping Cart"
                    width={40}
                    height={40}
                    className="cursor-pointer"
                  />
                </div>
                <div className="text-center">
                  <Image
                    src={onlineicon2.src}
                    alt="Shopping Cart"
                    width={40}
                    height={40}
                    className="cursor-pointer"
                  />
                </div>
                <div className="text-center">
                  <Image
                    src={presenticon1.src}
                    alt="Shopping Cart"
                    width={40}
                    height={40}
                    className="cursor-pointer"
                  />
                </div>
                <div className="text-center">
                  <Image
                    src={presenticon2.src}
                    alt="Shopping Cart"
                    width={40}
                    height={40}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleClass;
