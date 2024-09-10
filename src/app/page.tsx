import BannerSlider from "@/components/BannerSlider/BannerSlider";
import Category from "@/components/Category/Category";
import Course from "@/components/Coursers/Course";
import Search from "@/components/SearchBox/Search";
import Teacher from "@/components/Teacher/Teacher";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <BannerSlider />
      <div className="absolute inset-x-0  flex justify-center z-10">
        <div className="relative sm:top-[20%] md:top-[80%] -translate-y-1/3 md:-translate-y-1/2 w-full  ">
          <Search />
        </div>
      </div>
      <div className="w-full">
        <div className="container max-w-full xl:max-w-1440 mx-auto py-8 space-y-8">
          <Category />
          <Course />
          <Teacher />
        </div>
      </div>
    </>
  );
}
