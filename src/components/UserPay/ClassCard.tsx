import React from "react";
import courseicon from "../../../public/icons/courseicon.svg";
import teachericon from "../../../public/icons/teacher.svg";
import Image from "next/image";
import clockicon from "../../../public/icons/clock.svg";
import classtypeicon from "../../../public/icons/classtype.svg";
import priceicon from "../../../public/icons/price.svg";
import { MdDeleteForever } from "react-icons/md";
import calendaricon from "../../../public/icons/calandar icon.svg"
interface ClassCardProps {
  title: string;
  teacher: string;
  date: string;
  time: string;
  price: string;
  classtype: string;
}

const ClassCard: React.FC<ClassCardProps> = ({
  title,
  teacher,
  date,
  time,
  price,
  classtype,
}) => {
  return (
    <div className="bg-MokhWhite2 rounded-lg p-4 shadow-md mb-4 w-full">
      {/* Desktop */}
      <div className="hidden lg:grid grid-cols-3 gap-4">
        <div className="flex flex-col space-y-3">
          <h3 className="text-lg font-bold text-MokhDarkBlue flex items-center">
            <Image
              src={courseicon}
              alt="Course Icon"
              width={24}
              height={24}
              className="ml-2"
            />
            {title}
          </h3>
          <p className="text-base text-MokhFont2 flex items-center">
            <Image
              src={teachericon}
              alt="Teacher Icon"
              width={20}
              height={20}
              className="ml-2"
            />
            {teacher}
          </p>
        </div>

        <div className="flex flex-col space-y-3">
          <p className="text-base text-MokhFont2 flex items-center">
          <Image
              src={calendaricon}
              alt="Teacher Icon"
              width={20}
              height={20}
            />  
            {date}
          </p>
          <p className="text-base text-MokhFont2 flex items-center">
            <Image
              src={clockicon}
              alt="Teacher Icon"
              width={18}
              height={18}
              className="ml-2"
            />
            {time}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex flex-col space-y-3">
            <p className="text-base text-MokhFont2 flex items-center">
              <Image
                src={classtypeicon}
                alt="Teacher Icon"
                width={20}
                height={20}
              />
              {classtype}
            </p>
            <p className="text-base text-MokhFont2 flex items-center">
              <Image
                src={priceicon}
                alt="Teacher Icon"
                width={20}
                height={20}
                className="ml-2"
              />{" "}
              {price}
            </p>
          </div>
          <button className=" font-semibold">
            <MdDeleteForever className="text-MokhPink text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden grid grid-cols-2 gap-4 items-center">
        {/* Title and Delete button in one row */}
        <h5 className="col-span-1 text-sm font-bold text-MokhDarkBlue flex items-center whitespace-nowrap">
          <Image
            src={courseicon}
            alt="Course Icon"
            width={24}
            height={24}
            className="ml-2"
          />
          {title}
        </h5>
        <button className="col-span-1 text-MokhPink font-semibold justify-self-end">
          حذف
        </button>

        {/* Teacher and Price in two columns */}
        <div className="col-span-2 grid grid-cols-2 gap-2 items-center">
          <p className="text-sm text-MokhFont2 flex items-center">
          <Image
              src={calendaricon}
              alt="Teacher Icon"
              width={16}
              height={16}
            />  
                      {date}
          </p>
          <p className="text-base text-MokhFont2 flex items-center">
            <Image
              src={classtypeicon}
              alt="Teacher Icon"
              width={16}
              height={16}
            />
            {classtype}
          </p>
        </div>

        {/* Date and Time in two columns */}
        <div className="col-span-2 grid grid-cols-2 gap-2 items-center">
          <p className="text-base text-MokhFont2 flex items-center">
            <Image
              src={teachericon}
              alt="Teacher Icon"
              width={16}
              height={16}
              className="ml-2"
            />
            {teacher}
          </p>
          <p className="text-base text-MokhFont2 flex items-center">
            <Image
              src={clockicon}
              alt="Teacher Icon"
              width={16}
              height={16}
              className="ml-2"
            />
            {time}
          </p>
        </div>

        {/* Class Type in one column */}
        <div className="col-span-2 grid grid-cols-2 gap-2 items-center">
          <p className="text-base text-MokhFont2 flex items-center">
            <Image
              src={priceicon}
              alt="Teacher Icon"
              width={16}
              height={16}
              className="ml-2"
            />
            {price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
