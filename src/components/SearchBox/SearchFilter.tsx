import React, { useState } from "react";
import Image from "next/image";
import teacherIcon from "../../../public/icons/teacher.svg";
import coursesicon from "../../../public/icons/courses.svg";
import tagicon from "../../../public/icons/tag.svg";
import allicon from "../../../public/icons/all a.svg"; 
import teacherA from "../../../public/icons/teacher a.svg"

const SearchFilter = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="flex w-full   mx-2 bg-gray-100 text-sm text-MokhFont2 rounded-md mt-4 md:mt-0 items-center justify-between  ">
      {/* Button 1 - نمایش همه */}
      <button
        className={`rounded-lg hidden md:flex items-center px-0.5 py-1 transition-all duration-300 ease-in-out ${
          activeButton === "all"
            ? "bg-white shadow-md text-MokhFont1"
            : "bg-gray-100"
        } hover:bg-white hover:shadow-md`}
        onClick={() => handleButtonClick("all")}
      >
        <span className="flex items-center">
          <Image
            src={activeButton === "all" ? allicon : allicon} 
            alt="All Icon"
            width={20}
            height={20}
          />
          نمایش همه
        </span>
      </button>

      <button
        className={`rounded-lg flex items-center px-0.5 py-1 transition-all duration-300 ease-in-out ${
          activeButton === "teacher"
            ? "bg-white shadow-md text-MokhFont1"
            : "bg-gray-100"
        } hover:bg-white hover:shadow-md`}
        onClick={() => handleButtonClick("teacher")}
      >
        <span className="flex items-center">
          <Image
            src={activeButton === "teacher" ? teacherA : teacherIcon} 
            alt="Teacher Icon"
            width={20}
            height={20}
            className="m-1"
          />
          مدرس‌ها
        </span>
      </button>

    

      <button
        className={`rounded-lg flex items-center px-0.5 py-1 transition-all duration-300 ease-in-out ${
          activeButton === "courses"
            ? "bg-white shadow-md text-MokhFont1"
            : "bg-gray-100"
        } hover:bg-white hover:shadow-md`}
        onClick={() => handleButtonClick("courses")}
      >
        <span className="flex items-center">
          <Image
            src={activeButton === "courses" ? coursesicon : coursesicon} 
            alt="Courses Icon"
            width={20}
            height={20}
            className="m-1"
          />
          درس‌ها
        </span>
      </button>
      <button
        className={`rounded-lg flex items-center px-0.5 py-1 transition-all duration-300 ease-in-out ${
          activeButton === "tag"
            ? "bg-white shadow-md text-MokhFont1"
            : "bg-gray-100"
        } hover:bg-white hover:shadow-md`}
        onClick={() => handleButtonClick("tag")}
      >
        <span className="flex items-center">
          <Image
            src={activeButton === "tag" ? tagicon : tagicon} 
            alt="Tag Icon"
            width={20}
            height={20}
            className="m-1"
          />
          برچسب‌ها
        </span>
      </button>
    </div>
  );
};

export default SearchFilter;
