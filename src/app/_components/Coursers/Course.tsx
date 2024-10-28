"use client";

import React from "react";
import basketball from "../../../../public/images/basket.png";
import statue from "../../../../public/images/statue.png";
import gitar from "../../../../public/images/gitar.png";
import paintkids from "../../../../public/images/paintkids.png";
import frenchln from "../../../../public/images/frenchln.png";
import CourseCard from "./CourseCard";
import { toPersianNumbersInText } from "@/utils/toPersianNumbers";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Course = () => {
  const CourseCardData = [
    {
      image: statue,
      session: "12جلسه",
      category: "  آموزش مجسمه سازی",
      instructor: "فرید انصاری فرد",
    },
    {
      image: gitar,
      session: "8جلسه",
      category: " آموزش گیتار",
      instructor: "آرمان پیروزه",
    },
    {
      image: basketball,
      session: "10جلسه",
      category: "  آموزش بسکتبال",
      instructor: "پژمان نصیری",
    },
    {
      image: frenchln,
      session: "8جلسه",
      category: " آموزش زبان فرانسوی",
      instructor: "مارال صفارس نژاد",
    },
    {
      image: paintkids,
      session: "8جلسه",
      category: "  آموزش نقاشی به کودکان",
      instructor: "مونا سعیدی پور",
    },
  ];

  return (
    <div className="w-full bg-white text-white py-8 mb-60">
      <div className="container mx-auto pr-4">
        <h1 className="text-2xl text-MokhDarkBlue text-center justify-center font-bold  md:my-2 mb-8">
          برترین ویدئوهای آموزشی
        </h1>

        {/* Desktop View */}
        <div className=" grid-rtl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mb-25 hidden md:grid">
          {CourseCardData.map((card, index) => (
            <CourseCard key={index} {...card} />
          ))}
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-7xl font-bold text-MokhDarkBlue mb-4  after:content-[''] after:block after:h-[4px] after:w-[110%] after:bg-MokhBlue after:mx-auto">
              + {toPersianNumbersInText("218")}
            </h2>
            <p className="text-lg text-MokhDarkBlue mb-2">
              ویدئو با موضوعات مختلف
            </p>
            <Link
              href="/"
              className="bg-MokhBlue px-6 py-1 text-lg w-2/3-important rounded-lg mt-4 text-white font-semibold cursor-pointer hover:underline"
            >
              مشاهده تمام ویدئوها
            </Link>
          </div>
        </div>

        {/* Mobile View */}
        <div className="block md:hidden">
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={2.1}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {CourseCardData.map((card, index) => (
              <SwiperSlide key={index}>
                <CourseCard {...card} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-12 text-center">
            <h3 className="relative text-7xl font-bold text-MokhDarkBlue mb-4  after:content-[''] after:block after:h-[4px] after:w-[60%] after:bg-MokhBlue after:mx-auto">
              {toPersianNumbersInText("218")} +
            </h3>
            <p className="text-MokhDarkBlue font-medium mb-8">
              ویدئو با موضوعات مختلف
            </p>
            <Link
              href="#"
              className="  flex items-center mx-auto justify-center w-1/2 px-2 py-2 text-white bg-MokhBlue rounded-lg shadow-lg"
            >
              <IoIosArrowForward className="fill-white ml-2 strock-4" />
              مشاهده تمام ویدئوها
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
