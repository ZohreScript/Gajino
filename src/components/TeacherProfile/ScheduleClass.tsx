import React, { useState, useEffect } from "react";
import DatePicker, { Calendar, DateObject } from "react-multi-date-picker";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "react-multi-date-picker/styles/layouts/prime.css";
import { FaCalendarDays } from "react-icons/fa6";
import Image from "next/image";
import onlineicon1 from "../../../public/icons/online1.svg";
import onlineicon2 from "../../../public/icons/online2.svg";
import presenticon1 from "../../../public/icons/present1.svg";
import presenticon2 from "../../../public/icons/present2.svg";
import ClassSelectionModal from "./ClassSelectionModal";
import SuccessModal from "./SuccssesModal";
import WeekPickerWithNavigation from "./WeekPickerWithNavigation";
import MobileClass from "./MobileClass";
import TeacherSlider from "./TeacherSlider";

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

const ScheduleClass = () => {
  const [showClassModal, setShowClassModal] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  // Open the class selection modal
  const openClassModal = () => {
    setShowClassModal(true);
  };

  // Close the class selection modal
  const closeClassModal = () => {
    setShowClassModal(false);
  };

  // Open the success modal after reservation
  const handleReserve = () => {
    setShowClassModal(false);
    setShowSuccessModal(true);
  };

  // Close the success modal
  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  const [weekRange, setWeekRange] = useState(null);
  return (
    <div className="  bg-white container mx-auto m-8 rounded-2xl shadow-custom">
      <div className="shadow-md sticky top-0 rounded-md mb-2 pb-1 md:pb-0">
        <h3 className=" p-4 text-xl font-semibold text-MokhDarkBlue flex items-center">
          <FaCalendarDays className="text-MokhDarkBlue m-2" />
          زمانبندی کلاس ها
        </h3>
        <div className=" flex justify-center mb-4 text-MokhFont2">
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
        {/* <WeekPickerWithNavigation /> */}

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
        {/* mobile datyweek */}
        <div className="flex md:hidden my-8  justify-center  text-MokhFont2">
          <button className="mx-2 p-4 bg-white  shadow-custom rounded-lg">
            <FaChevronRight className="text-MokhFont2" />
          </button>
          <span
            className="px-8 flex w-full py-2 bg-white shadow-custom  
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
        <div className="md:grid grid-cols-8 hidden gap-2 mt-1 min-h-screen">
          <div className="col-span-8 border-b-2 border-gray-300 py-4">
            <div className="grid grid-cols-7 border-b-2 border-gray-200">
              {/* کلاس اول */}
              <div className="col-start-1  col-span-1 ">
                <div className="bg-MokhYellow w-40 bg-opacity-20 border-t-8 border-t-MokhYellow rounded-lg  p-6 relative">
                  <>
                    <button
                      onClick={openClassModal}
                      className="absolute top-3 left-2 bg-cyan-500 w-8 h-8 rounded-full flex items-center leading-none pt-1 justify-center text-white text-xl font-bold"
                    >
                      +
                    </button>
                    <ClassSelectionModal
                      showModal={showClassModal}
                      closeModal={closeClassModal}
                      onReserve={handleReserve}
                    />

                    {/* Success Modal */}
                    <SuccessModal
                      showModal={showSuccessModal}
                      closeModal={closeSuccessModal}
                    />
                  </>
                  <div className="text-right text-lg font-semibold mb-4 text-MokhFont1">
                    ۸:۰۰ - ۱۰:۰۰
                  </div>
                  <div className="space-y-2 mb-2">
                    <div className="text-right">
                      <p className="text-base text-MokhFont1 font-bold">
                        درس فیزیک ۳
                      </p>
                      <p className="text-sm text-MokhFont2">
                        پایه دوازدهم تجربی
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-base text-MokhFont1 font-bold">
                        درس فیزیک ۳
                      </p>
                      <p className="text-sm text-MokhFont2">
                        پایه دوازدهم تجربی
                      </p>
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
            <div className="grid grid-cols-7  border-b-2 border-gray-200">
              {/* کلاس دوم */}
              <div className="col-start-6  col-span-1">
                <div className="bg-blue-600 w-40 bg-opacity-20 border-t-8 border-t-blue-600 rounded-lg  p-6 relative">
                  <>
                    <div
                      onClick={openClassModal}
                      className="absolute top-3 left-2 bg-cyan-500 w-8 h-8 rounded-full flex items-center leading-none pt-1 justify-center text-white text-xl font-bold"
                    >
                      +
                    </div>
                    <ClassSelectionModal
                      showModal={showClassModal}
                      closeModal={closeClassModal}
                      onReserve={handleReserve}
                    />

                    {/* Success Modal */}
                    <SuccessModal
                      showModal={showSuccessModal}
                      closeModal={closeSuccessModal}
                    />
                  </>

                  <div className="text-right text-lg font-semibold mb-4 text-MokhFont1">
                    10:۰۰ - 12:۰۰
                  </div>
                  <div className="space-y-2 mb-2">
                    <div className="text-right">
                      <p className="text-base text-MokhFont1 font-bold">
                        درس فیزیک ۳
                      </p>
                      <p className="text-sm text-MokhFont2">
                        پایه دوازدهم تجربی
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-base text-MokhFont1 font-bold">
                        درس فیزیک ۳
                      </p>
                      <p className="text-sm text-MokhFont2">
                        پایه دوازدهم تجربی
                      </p>
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
            <div className="grid grid-cols-7  border-b-2 border-gray-200">
              {/* کلاس سوم */}
              <div className="col-start-4  col-span-1">
                <div className="bg-green-600 w-40 bg-opacity-20 border-t-8 border-t-green-600 rounded-lg  p-6 relative">
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
                      <p className="text-sm text-MokhFont2">
                        پایه دوازدهم تجربی
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-base text-MokhFont1 font-bold">
                        درس فیزیک ۳
                      </p>
                      <p className="text-sm text-MokhFont2">
                        پایه دوازدهم تجربی
                      </p>
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
        <MobileClass/>
      </div>
    </div>
  );
};

export default ScheduleClass;
