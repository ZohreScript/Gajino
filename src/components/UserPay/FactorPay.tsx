import Image from "next/image";
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import priceicon from "../../../public/icons/price.svg";
import { GoDotFill } from "react-icons/go";
import { MdDeleteForever } from "react-icons/md";

const FactorPay = () => {
  const [lessons] = useState([
    {
      id: 1,
      name: "ادبیات پایه دوازدهم",
      date: "چهارشنبه1403/04/16",
      time: "10:00 - 12:00",
    },
    {
      id: 2,
      name: "زبان انگلیسی پایه دوازدهم",
      date: "چهارشنبه 1403/04/17",
      time: "10:00 - 12:00",
    },
  ]);

  const totalSessions = lessons.length;
  const totalAmount = 900000;
  const discountCode = "";

  return (
    <div
      className=" container mx-auto  items-center
     justify-center flex flex-col"
    >
      <div className="w-full min-h-screen  shadow-[0_5px_15px_rgba(0,0,0,0.20)] bg-white rounded-lg  p-8">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-lg font-bold text-MokhDarkBlue  flex items-center">
            <Image
              src={priceicon}
              alt="Teacher Icon"
              width={20}
              height={20}
              className="ml-2"
            />
            پرداخت فاکتور
          </h3>
          <button className="">
            <BiArrowBack className="text-MokhFont1" />
          </button>
        </div>
        <div className="mb-6 space-y-4">
          <p className="text-MokhDarkBlue ‌ text-sm font-bold">
            نام درس:
            <span className="text-MokhFont2 mr-2 font-semibold">ادبیات</span>
          </p>

          <p className="text-MokhDarkBlue ‌ text-sm font-bold">
            نام مدرس:
            <span className="text-MokhFont2 mr-2 font-semibold">
              علی ایمانی
            </span>
          </p>
        </div>

        {/* Lessons List */}
        <div className="space-y-4 mb-6">
          <h3 className=" font-bold text-MokhDarkBlue flex items-center">
            جلسات انتخابی:{" "}
          </h3>
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              className="flex justify-between p-4 bg-MokhWhite2 rounded-xl mb-3"
            >
              <div className="flex flex-row items-center w-full space-x-4 justify-between">
                <p className=" text-MokhFont1 flex items-center">
                  <GoDotFill className="text-MokhDarkBlue" />
                  {lesson.name}
                </p>
                <p className="text-sm text-MokhFont2">{lesson.date}</p>
                <p className="text-sm text-MokhFont2">{lesson.time}</p>
                <div className="flex flex-col items-end">
                  <button className="">
                    <MdDeleteForever className="text-MokhPink text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Summary */}
        <div className="text-right text-gray-700 mb-6">
          {/* Session Details */}
          <div className="mb-8 space-y-4">
            <p className="text-MokhFont2 ‌  font-bold">
              مجموع جلسات:
              <span className="text-MokhDarkBlue mr-2 font-semibold">
                6جلسه(9 ساعت)
              </span>
            </p>
            <p className="text-MokhFont2  font-bold">
              مبلغ کل:{" "}
              <span className="text-MokhDarkBlue mr-2 font-semibold">
                1,800,000 تومان
              </span>
            </p>
          </div>

          {/* Discount Code */}
          <div className="mb-8 flex items-center">
            <label className="text-MokhFont2 text-sm ml-2">کد تخفیف: </label>
            <input
              placeholder="مثال:YLB140063"
              className="bg-MokhWhite2 rounded-lg px-1 py-2 justify-center items-center block focus:border-MokhFont2 text-MokhFont2 text-center placeholder-MokhFont2 focus:outline-none focus:ring-2 focus:ring-MokhFont2"
            />
          </div>

          <p className="text-MokhFont2 text-sm font-bold">
            مبلغ قابل پرداخت:
            <span className="text-MokhDarkBlue mr-2 font-semibold">
              {totalAmount.toLocaleString()} تومان
            </span>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-start gap-2 space-x-4 mt-4 w-1/4">
  <button className="bg-MokhBlue text-white py-2 px-12 rounded-lg">
    پرداخت
  </button>
  <button className="text-MokhFont3 bg-white border border-MokhFont3 py-2 px-4 rounded-lg">
    انصراف
  </button>
</div>

      </div>
    </div>
  );
};

export default FactorPay;
