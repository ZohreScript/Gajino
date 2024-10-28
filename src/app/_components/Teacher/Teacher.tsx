"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import Image, { StaticImageData } from "next/image";
import teacher1 from "../../../../public/images/teacher (1).png";
import teacher2 from "../../../../public/images/teacher (2).png";
import teacher3 from "../../../../public/images/teacher (3).png";
import teacher4 from "../../../../public/images/teacher (4).png";
import TeacherCard from "./TeacherCard";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useRef } from "react";
import { Swiper as SwiperType } from "swiper/types";

const TeacherCardData = [
  {
    id: 1,
    name: "مینا جعفری زاده همدانی",
    subject: "زبان انگلیسی",
    rating: "4/2",
    image: teacher3,
    comments: '586',
  },
  {
    id: 2,
    name: "علیرضا محمدیان",
    subject: "زبان آلمانی",
    rating: "4/2",
    image: teacher2,
    comments: '586',
  },
  {
    id: 3,
    name: "بهرام موسوی راد",
    subject: "ادبیات فارسی",
    rating: "4/4",
    image: teacher1,
    comments: '586',
  },
  {
    id: 4,
    name: "پژمان نوری",
    subject: "بستکتبال",
    rating: "4/4",
    image: teacher4,
    comments: '586',
  },
    {
    id: 5,
    name: "علیرضا محمدیان",
    subject: "زبان آلمانی",
    rating: "4/4",
    image: teacher2,
    comments: '586',
  },
  {
    id: 6,
    name: "بهرام موسوی راد",
    subject: "ادبیات فارسی",
    rating: "4/4",
    image: teacher1,
    comments: '586',
  },
];

const Teacher = () => {
    const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="max-w-screen-xl  mx-auto sm:ml-0 md:ml-0 lg:ml-0 ml-0 xl:ml-0 2xl:mx-auto py-10 p-4 pl-0 justify-center">
      <div className="flex  flex-col-reverse lg:flex-row w-full my-2 ">
        {/* Text Section */}
        <div className=" w-full sm:w-full md:w-3/12 p-1 ml-1 text-MokhFont1 mb-12 sm:mb-6 md:mb-0 lg:order-1 order-2 lg:text-right text-center">
          <h2 className="font-bold text-[#42246E] text-heading-2 my-4">
            برترین مدرسین
          </h2>

          <p className="line-clamp-5 lg:line-clamp-none text-body-1-hero text-[#534667]">
            رتبه مدرسین براساس امتیازی است که فراگیران بعد از هر جلسه به کلاس
            خود میدهند.
          </p>

          {/* Slider controls */}
          <div className=" items-start justify-right gap-4 mt-8 hidden md:flex">
            <div
              className="bg-MokhBlue p-2 rounded-md cursor-pointer"
              onClick={() => swiperRef.current?.slideNext()} // Trigger next slide
            >
              <IoIosArrowForward className="fill-white text-xl" />
            </div>
            <div
              className="bg-gray-300 p-2 rounded-md cursor-pointer"
              onClick={() => swiperRef.current?.slidePrev()} // Trigger previous slide
            >
              <IoIosArrowBack className="fill-white text-xl" />
            </div>
          </div>
        </div>

        {/* Slider Section */}
        <div className="lg:w-9/12 lg:order-2 order-1 flex justify-start">
        <div className="w-full ">
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={2.2}
            pagination={{ clickable: true }}
               onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
                640: {
                  slidesPerView: 2.6, 
                },
                1024: {
                  slidesPerView: 3.6, 
                    spaceBetween:25,
                },
              }}
          >
            {TeacherCardData.map((card, index) => (
              <SwiperSlide key={index}>
                <TeacherCard {...card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
     </div>
      </div>
    </div>
  );
};

export default Teacher;
