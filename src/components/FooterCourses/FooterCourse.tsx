"use client";

import React from "react";
import programming from "../../../public/images/programming.png";
import pastry from "../../../public/images/pastery.png";
import speaker from "../../../public/images/speaker.png";
import drawing from "../../../public/images/drawing.png";
import FooterCourseCard from "./FooterCourseCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const FooterCourse = () => {
  const coursees = [
    { image: programming, title: "برنامه نویسی" },
    { image: pastry, title: "شیرینی پزی" },
    { image: speaker, title: "گویندگی" },
    { image: drawing, title: "نقاشی سیاه قلم" },
  ];

  return (
    <div className=" container mx-auto  pb-10">
      <div className=" ">
      <div className="hidden md:block relative -mt-40   translate-y-52">
      <div className="grid gap-6 grid-cols-4 md:gap-10 relative z-10">
          {coursees.map((course, index) => (
            <FooterCourseCard
              key={index}
              image={course.image}
              title={course.title}
              className={`transform ${
                index % 4 === 0
                  ? "md:-translate-y-10" // even1
                  : index % 4 === 1
                  ? "md:translate-y-5" // odd1
                  : index % 4 === 2
                  ? "md:-translate-y-20" // even2
                  : "md:translate-y-16" // odd2
              }`}
            />
          ))}
     </div>
      </div>
      </div>

      {/* Mobile View */}
      <div className="relative   md:hidden translate-y-36 -mt-36  pr-4">
        <div className="relateive z-10">
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={2.2}
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
            {coursees.map((card, index) => (
              <SwiperSlide key={index}>
                <FooterCourseCard {...card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default FooterCourse;
