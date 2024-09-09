"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import slide1 from "../../../public/images/slide2.png";
import slide2 from "../../../public/images/slide1.png";
import slide3 from "../../../public/images/slide3.webp";

const BannerSlider = () => {
  return (
    <div className="w-full max-w-[1920px] mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay]}
        className="relative mySwiper"
      >
        <SwiperSlide className="relative">
          <Image
            src={slide2.src}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt={"slider1.title"}
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Image
            src={slide1.src}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt={"slider2.title"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
