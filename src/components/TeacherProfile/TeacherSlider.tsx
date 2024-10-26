// TeacherSlider.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import TeacherCard from "../Teacher/TeacherCard";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useRef } from "react";
import { Swiper as SwiperType } from "swiper/types";
import { StaticImageData } from "next/image";

interface TeacherSliderProps {
  teacherCardData: {
    id: number;
    name: string;
    subject: string;
    rating: string;
    image: StaticImageData;
    comments: string;
  }[];
}

const TeacherSlider = ({ teacherCardData }: TeacherSliderProps) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={2.2}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2.6,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
        }}
      >
        {teacherCardData.map((card, index) => (
          <SwiperSlide key={index}>
            <TeacherCard {...card} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Slider controls */}
      <div className="justify-center items-center flex gap-2">
        <div
          className="border-MokhBlue border-2 p-2 rounded-md cursor-pointer"
          onClick={() => swiperRef.current?.slideNext()} // Trigger next slide
        >
          <IoIosArrowForward className="fill-MokhBlue text-xl" />
        </div>
        <div
          className="border-MokhFont2 border-2 p-2 rounded-md cursor-pointer"
          onClick={() => swiperRef.current?.slidePrev()} // Trigger previous slide
        >
          <IoIosArrowBack className="fill-MokhFont2 text-xl" />
        </div>
      </div>
    </div>
  );
};

export default TeacherSlider;
