import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaChevronDown,
  FaChevronUp,
  FaClock,
} from "react-icons/fa";
import {
  MdArrowDropDown,
  MdArrowDropUp,
  MdOutlineArrowDropDown,
} from "react-icons/md";

interface ClassSelectionModalProps {
  showModal: boolean;
  closeModal: () => void;
  onReserve: () => void;
}

const ClassSelectionModal: React.FC<ClassSelectionModalProps> = ({
  showModal,
  closeModal,
  onReserve,
}) => {
  const [classType, setClassType] = useState<string>("onlinePrivate");
  const [groupSize, setGroupSize] = useState<number>(2);

  const prices = {
    onlinePrivate: 100000,
    onlineGroup: 180000,
    inPersonPrivate: 150000,
    inPersonGroup: 130000,
  };

  const originalPrices = {
    onlineGroup: 200000,
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-20 flex justify-center items-center z-10">
      <div className="bg-white p-6 rounded-xl shadow-custom  w-full max-w-md">
        {/* Date and Time Section */}
        <div className="mb-4 flex flex-col items-start">
          <div className="flex font-semibold items-center mb-2 text-MokhDarkBlue">
            <FaCalendarAlt className="ml-2" />
            <span className="text-lg">یکشنبه، 17 اسفند</span>
          </div>
          <div className="flex font-semibold items-center text-MokhDarkBlue">
            <FaClock className="ml-2" />
            <span className="text-base">10:00 تا 12:00</span>
          </div>
        </div>

        {/* Course Title */}
        <div className="mb-4">
          <label
            htmlFor="classTitle"
            className="text-sm font-semibold text-MokhDarkBlue block mb-2"
          >
            عنوان درس
          </label>
          <select
            id="classTitle"
            className="w-full p-2 border-none rounded-xl text-MokhDarkBlue bg-MokhWhite2 mb-4"
          >
            <option value="Physics">فیزیک</option>
            <option value="Math">ریاضی</option>
            <option value="Chemistry">شیمی</option>
          </select>
        </div>

        {/* Class Type Options */}
        <div className="space-y-3">
          {/* Online Private */}
          <div className="flex items-center">
            {/* Radio button outside the border */}
            <input
              type="radio"
              name="classType"
              value="onlinePrivate"
              checked={classType === "onlinePrivate"}
              onChange={() => setClassType("onlinePrivate")}
              className="ml-2 text-MokhBlue"
            />

            {/* Bordered container for the class name and price */}
            <div
              className={`flex items-center justify-between border ${
                classType === "onlinePrivate"
                  ? "border-MokhBlue text-MokhDarkBlue"
                  : "border-MokhDarkBlue"
              } text-MokhFont2 font-semibold p-2 rounded-lg w-full`}
            >
              <span
                className={`${
                  classType === "onlinePrivate"
                    ? "text-MokhDarkBlue"
                    : "text-MokhFont2"
                }`}
              >
                آنلاین خصوصی
              </span>
              <span
                className={`${
                  classType === "onlinePrivate"
                    ? "text-MokhDarkBlue"
                    : "text-MokhFont2"
                }`}
              >
                {prices.onlinePrivate.toLocaleString()} تومان
              </span>
            </div>
          </div>

          {/* Online Group */}
          <div className="flex items-center">
            {/* Radio button outside the border */}
            <input
              type="radio"
              name="classType"
              value="onlineGroup"
              checked={classType === "onlineGroup"}
              onChange={() => setClassType("onlineGroup")}
              className="ml-2 text-MokhBlue"
            />

            {/* Bordered container */}
            <div
              className={`flex items-center justify-between border ${
                classType === "onlineGroup"
                  ? "border-MokhBlue text-MokhDarkBlue"
                  : "border-MokhDarkBlue"
              } text-MokhFont2 font-semibold p-2 rounded-lg w-full`}
            >
              <span
                className={`${classType === "onlineGroup" ? "text-MokhDarkBlue" : "text-MokhFont2"}`}
              >
                آنلاین گروهی
              </span>
              {/* Group Size Selector */}
              {classType === "onlineGroup" && (
                <div className="md:flex hidden items-center ml-1">
                  <span className="mx-1 text-xs">تعداد نفرات</span>

                  <div className="flex  items-center bg-MokhWhite2 text-MokhDarkBlue  justify-between w-12 rounded-md">
                    {/* Button to increment group size */}
                    <span className="pr-2">{groupSize}</span>

                    <div className="flex flex-col justify-center -space-y-3">
                      <button
                        onClick={() => setGroupSize(groupSize + 1)}
                        className="p-0 m-0 leading-none"
                      >
                        <MdArrowDropUp className="text-2xl text-MokhBlue" />
                      </button>
                      <button
                        onClick={() => setGroupSize(Math.max(1, groupSize - 1))}
                        className="p-0 m-0 leading-none"
                      >
                        <MdArrowDropDown className="text-2xl text-MokhBlue" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <span className="flex  items-center">
                <span
                  className={`line-through mr-2 text-xs ${
                    classType === "onlineGroup"
                      ? "text-gray-400"
                      : "text-gray-400"
                  }`}
                >
                  {originalPrices.onlineGroup.toLocaleString()}
                </span>

                <span
                  className={` text-sm mr-1 ${classType === "onlineGroup" ? "text-MokhDarkBlue" : "text-MokhFont2"}`}
                >
                  {prices.onlineGroup.toLocaleString()} تومان
                </span>
              </span>
            </div>
       
          </div>
          {classType === "onlineGroup" && (
                <div className="md:hidden flex items-center justify-between ml-1">
                  <span className="mx-1 text-xs">تعداد نفرات</span>

                  <div className="flex  items-center bg-MokhWhite2 text-MokhDarkBlue  justify-between w-12 rounded-md">
                    {/* Button to increment group size */}
                    <span className="pr-2">{groupSize}</span>

                    <div className="flex flex-col justify-center -space-y-3">
                      <button
                        onClick={() => setGroupSize(groupSize + 1)}
                        className="p-0 m-0 leading-none"
                      >
                        <MdArrowDropUp className="text-2xl text-MokhBlue" />
                      </button>
                      <button
                        onClick={() => setGroupSize(Math.max(1, groupSize - 1))}
                        className="p-0 m-0 leading-none"
                      >
                        <MdArrowDropDown className="text-2xl text-MokhBlue" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

          {/* In-person Private */}
          <div className="flex items-center">
            {/* Radio button outside the border */}
            <input
              type="radio"
              name="classType"
              value="inPersonPrivate"
              checked={classType === "inPersonPrivate"}
              onChange={() => setClassType("inPersonPrivate")}
              className="ml-2 text-MokhBlue"
            />

            {/* Bordered container */}
            <div
              className={`flex items-center justify-between border ${
                classType === "inPersonPrivate"
                  ? "border-MokhBlue text-MokhDarkBlue"
                  : "border-MokhDarkBlue"
              } text-MokhFont2 font-semibold p-2 rounded-lg w-full`}
            >
              <span
                className={`${classType === "inPersonPrivate" ? "text-MokhDarkBlue" : "text-MokhFont2"}`}
              >
                حضوری خصوصی
              </span>
              <span
                className={`${classType === "inPersonPrivate" ? "text-MokhDarkBlue" : "text-MokhFont2"}`}
              >
                {prices.inPersonPrivate.toLocaleString()} تومان
              </span>
            </div>
          </div>

          {/* In-person Group */}
          <div className="flex items-center">
            {/* Radio button outside the border */}
            <input
              type="radio"
              name="classType"
              value="inPersonGroup"
              checked={classType === "inPersonGroup"}
              onChange={() => setClassType("inPersonGroup")}
              className="ml-2 text-MokhBlue"
            />

            {/* Bordered container */}
            <div
              className={`flex items-center justify-between border ${
                classType === "inPersonGroup"
                  ? "border-MokhBlue text-MokhDarkBlue"
                  : "border-MokhDarkBlue"
              } text-MokhFont2 font-semibold p-2 rounded-lg w-full`}
            >
              <span
                className={`${classType === "inPersonGroup" ? "text-MokhDarkBlue" : "text-MokhFont2"}`}
              >
                حضوری گروهی
              </span>
              {/* Group Size Selector */}
              {classType === "inPersonGroup" && (
                <div className=" hidden md:flex items-center ml-1">
                  <span className="mx-1 text-xs">تعداد نفرات</span>

                  <div className="flex  items-center bg-MokhWhite2 text-MokhDarkBlue  justify-between w-12 rounded-md">
                    {/* Button to increment group size */}
                    <span className="pr-2">{groupSize}</span>

                    <div className="flex flex-col justify-center -space-y-3">
                      <button
                        onClick={() => setGroupSize(groupSize + 1)}
                        className="p-0 m-0 leading-none"
                      >
                        <MdArrowDropUp className="text-2xl text-MokhBlue" />
                      </button>
                      <button
                        onClick={() => setGroupSize(Math.max(1, groupSize - 1))}
                        className="p-0 m-0 leading-none"
                      >
                        <MdArrowDropDown className="text-2xl text-MokhBlue" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <span className="flex  items-center">
             

                <span
                  className={` text-sm mr-1 ${classType === "inPersonGroup" ? "text-MokhDarkBlue" : "text-MokhFont2"}`}
                >
                  {prices.inPersonGroup.toLocaleString()} تومان
                </span>
              </span>
            </div>
          </div>
            {classType === "inPersonGroup" && (
                <div className=" flex md:hidden items-center justify-between ml-1">
                  <span className="mx-1 text-xs">تعداد نفرات</span>

                  <div className="flex  items-center bg-MokhWhite2 text-MokhDarkBlue  justify-between w-12 rounded-md">
                    {/* Button to increment group size */}
                    <span className="pr-2">{groupSize}</span>

                    <div className="flex flex-col justify-center -space-y-3">
                      <button
                        onClick={() => setGroupSize(groupSize + 1)}
                        className="p-0 m-0 leading-none"
                      >
                        <MdArrowDropUp className="text-2xl text-MokhBlue" />
                      </button>
                      <button
                        onClick={() => setGroupSize(Math.max(1, groupSize - 1))}
                        className="p-0 m-0 leading-none"
                      >
                        <MdArrowDropDown className="text-2xl text-MokhBlue" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
        </div>

        {/* Reserve and Cancel Buttons */}
        <div className="mt-4 flex gap-1 justify-start">
        <button
            className="bg-MokhBlue hover:bg-MokhBlueHover active:bg-MokhBlueActive text-white px-6 py-2 rounded-lg"
            onClick={onReserve}
          >
            رزرو کلاس
          </button>
          <button
            className="bg-white border-2 border-MokhFont2 text-MokhFont2 px-4 py-2 rounded-lg ml-2"
            onClick={closeModal}
          >
            انصراف
          </button>
    
        </div>
      </div>
    </div>
  );
};

export default ClassSelectionModal;
