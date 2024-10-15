import React from "react";
import slide3 from "../../../public/images/contactus.png";
import Image from "next/image";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="relative w-full h-[calc(35rem)]  md:h-96 overflow-hidden"> 
        <Image
          src={slide3.src}
          layout="fill"
          objectFit="cover" 
          alt="contact us banner"
        />
        <div className="absolute inset-0 bg-[#42246ECC] z-10"></div>
        <div className="absolute top-4 sm:top-6 md:top-8 lg:top-10 px-4 sm:px-10 md:px-12 lg:px-15 z-20 w-full text-white">
          <h2 className="text-lg sm:text-2xl font-bold mb-4 ">
            درباره مخ (معلم خصوصی)
          </h2>
          <p className="mb-4 text-lg sm:text-xl leading-10"> 
            رزومه باید شامل اطلاعات دقیق و شفاف درباره تجربیات کاری، مهارت‌ها، و
            سوابق تحصیلی فرد باشد. در صورتی که رزومه مختصر و مفید ارائه شود، به
            کارفرمایان کمک می‌کند تا به‌ سرعت فرد مناسب را پیدا کنند. همچنین،
            افراد می‌توانند با بروزرسانی مداوم رزومه خود، آمادگی بیشتری برای
            فرصت‌های شغلی جدید داشته باشند.
          </p>
          <ul className="list-disc px-4 marker:text-MokhBlue space-y-1">
            <li>مورد ۱</li>
            <li>مورد ۲</li>
            <li>مورد ۳</li>
            <li>مورد ۴</li>
          </ul>
        </div>
      </div>

      <div className="flex-grow container mx-auto -mt-10 mb-10 px-4 sm:px-10 lg:px-20 flex items-center justify-center w-full">
        <div className="relative z-30 bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 max-w-xl sm:max-w-2xl lg:max-w-7xl w-full flex flex-col md:flex-row items-start justify-between space-y-4 sm:space-y-0">
          <div className="w-full md:w-2/3 flex flex-col h-full">
            <div>
              <p className="text-lg font-medium text-MokhBlue mb-4">ارتباط با ما</p>
              <h2 className="text-lg sm:text-xl font-bold text-MokhDarkBlue mb-4 sm:mb-7">
                چطور میتوانیم کمکتون کنیم؟
              </h2>
              <p className="text-MokhDarkBlue font-medium mb-4">
                در فرم ارسال پیام، پیامتون رو با ما در میان بذارید یا از راه‌های زیر با ما در ارتباط باشید.
              </p>
            </div>

            <div className="md:block hidden mb-16"></div>

            <div className="mb-4 text-MokhFont2 space-y-5">
              <div className="flex items-center gap-2">
                <IoMdMail className="text-xl text-MokhBlue" />
                <p className="text-sm">info@gajino.com</p>
              </div>
              <div className="flex items-center gap-2">
                <IoCall className="text-xl text-MokhBlue" />
                <p className="text-sm">۰۲۱-۶۶۴۳۶۰۰۰</p>
              </div>
              <div className="flex items-center gap-2">
                <FaLocationDot className="text-xl text-MokhBlue" />
                <p className="text-sm">
                  تهران، کیلومتر ۱۴ جاده مخصوص، بلوار ایران خودرو نرسیده به فتح، پلاک ۲
                </p>
              </div>
            </div>
          </div>

          <form className="w-full md:w-1/3 space-y-4 flex flex-col justify-start">
            <div>
              <label className="block text-sm font-medium text-MokhFont2">
                نام و نام خانوادگی
              </label>
              <input
                placeholder="مثال:علی"
                type="text"
                className="mt-1 bg-gray-100 rounded-xl block w-full p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-MokhFont2">
                آدرس ایمیل
              </label>
              <input
                placeholder="info@gmail.com"
                type="email"
                className="mt-1 bg-gray-100 rounded-xl block w-full p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-MokhFont2">
                پیام
              </label>
              <textarea
                placeholder="پیام خود را بنویسید"
                rows={4}
                className="mt-1 bg-gray-100 rounded-xl block w-full p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="w-full mt-6 py-2 px-4 bg-MokhBlue text-white font-semibold rounded-xl"
            >
              ارسال پیام
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
