"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import slide1 from "../../../../public/images/slide1.png";
import slide2 from "../../../../public/images/slide2.png";

const BannerSlider  = () => {
  return (
      
    <div className=" w-full  justify-center   xl:mx-auto">
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
          src={slide1.src}
          width={1920}
          height={902}
          alt={"slider1.title"}
        />
      </SwiperSlide>
      <SwiperSlide className="relative">
      <Image
          src={slide2.src}
          width={1920}
          height={902}
          alt={"slider2.title"}
      />
      </SwiperSlide>
      {/* Add more slides as needed */}
    </Swiper>
    </div>
  );
};

export default BannerSlider;
