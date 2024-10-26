import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import teacher1 from "../../../public/images/teacher (1).png";
import { FaStar } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { HiLocationMarker } from "react-icons/hi";
import { PiTimerFill } from "react-icons/pi";
import teacherIcon from "../../../public/icons/teacher.svg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface TeacherProfileSummaryProps {
    firstName: string;
    lastName: string;
        subjects: { name: string; description?: string }[];
    location: string;
    hoursTaught: number;
    rating: number;
    ratingCount: number;
    ratePerHour: string;
    description: string;
    profileImage: StaticImageData;
  }

  const TeacherProfileSummary: React.FC<TeacherProfileSummaryProps> = ({
    firstName, lastName ,
    subjects,
    location,
    hoursTaught,
    rating,
    ratingCount,
    ratePerHour,
    description,
    profileImage,
  }) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggleDescription = () => setIsOpen(!isOpen);
  const fullName = `${firstName} ${lastName}`;
  return (
<div className="bg-white rounded-lg p-6 md:flex flex-row justify-between items-center gap-6 mb-4">
  <div className="md:w-1/5 w-full grid grid-rows-1">
  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 rounded-full overflow-hidden">
  <Image
    src={profileImage}
    alt="teacher"
    layout="fill"
    objectFit="cover"
    className="rounded-full shadow-xl shadow-[#42246E]/20"
  />
</div>

  </div>

  <div className="flex-grow md:w-3/5 w-full md:grid md:mb-0 mb-8 gap-3">
    <h2 className="md:text-xl text-base font-bold text-MokhDarkBlue my-2">
      {fullName}
    </h2>

    <div className="flex md:flex-col flex-row gap-4 md:col-span-2">
      <ul className="text-MokhDarkBlue w-full md:w-2/3">
        {subjects.map((subject, index) => (
          <li key={index} className="md:text-lg text-sm py-1">
            <p className="flex items-center">
              <GoDotFill className="text-MokhBlue text-sm ml-1" />
              {subject.name}
              {subject.description && (
                <span className="md:text-xs text-[10px] text-MokhFont2 mx-1">
                  {subject.description}
                </span>
              )}
            </p>
          </li>
        ))}
      </ul>

      <ul className="text-MokhFont2 w-full md:w-1/3">
        <li className="flex items-center md:text-base text-sm gap-1 p-1">
          <HiLocationMarker className="text-MokhFont2" />
          {location}
        </li>
        <li className="flex items-center md:text-base text-xs p-1 gap-1">
          <PiTimerFill className="text-MokhFont2" />
          {hoursTaught} ساعت تدریس
        </li>
        <li className="flex items-center md:text-base text-sm p-1">
          <div className="flex items-center justify-center text-xs sm:text-sm md:text-sm text-gray-500">
            <FaStar className="text-yellow-400" />
            <span className="text-gray-400">{rating}</span>
            <span className="mx-1 text-gray-400">|</span>
            <span className="text-gray-400 space-x-1">از {ratingCount} نفر</span>
          </div>
        </li>
      </ul>
    </div>
  </div>

  {/* <div className="md:w-2/5 grid md:grid-rows-3 grid-rows-2 w-full space-y-6"> */}
  <div className="flex-grow md:w-2/5 md:grid h-full w-full space-y-6">
    <div className="flex flex-col text-sm text-MokhFont1 md:flex-row items-start row-span-1">
      {/* Icon and Title */}
      <div className="inline-flex items-center md:space-x-2 shrink-0">
        <Image
          src={teacherIcon.src}
          alt="Teacher Icon"
          width={20}
          height={20}
          className="shrink-0"
        />

        <span className="font-semibold mx-2 text-MokhFont1 md:hidden block text-base md:ml-2">
          درباره مدرس :
        </span>

        <button
          className="md:hidden -translate-x-1/4 w-1/3 transform flex items-center justify-center ml-2 text-MokhFont1"
          onClick={toggleDescription}
        >
          {isOpen ? (
            <IoIosArrowUp className="text-lg text-MokhFont1" />
          ) : (
            <IoIosArrowDown className="text-lg text-MokhFont1" />
          )}
        </button>
      </div>

      {/* Description */}
      <div
        className={`flex text-MokhFont2 transition-all duration-300 ease-in-out ${
          isOpen ? 'block' : 'hidden'
        } md:flex md:items-center space-y-2 md:space-x-4`}
      >
        <p className="mt-2 md:mt-0 md:leading-8 leading-6">
          <span className="hidden text-base font-medium leading-5 md:inline">درباره مدرس: </span>
          {description}
        </p>
      </div>
    </div>

    <div className="row-span-1 hidden md:block"></div>
    
    <div className="flex flex-col items-center row-span-1 justify-center md:mt-8">
      <p className="text-MokhDarkBlue font-semibold mb-1 items-center">
        هزینه یک ساعت کلاس :
        <span className="text-MokhBlue">{ratePerHour} هزار تومان</span>
      </p>
      <button className="md:px-10 px-6 text-sm md:text-base w-full py-2 bg-MokhBlue font-semibold items-center text-white rounded-lg">
        مشاهده پروفایل / رزرو کلاس
      </button>
    </div>
  </div>
</div>

  );
};

export default TeacherProfileSummary;
