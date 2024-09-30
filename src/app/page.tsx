import BannerSlider from "@/components/BannerSlider/BannerSlider";
import Category from "@/components/Category/Category";
import Course from "@/components/Coursers/Course";
import Search from "@/components/SearchBox/Search";
import ShowSearch from "@/components/SearchBox/ShowSearch";
import Teacher from "@/components/Teacher/Teacher";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <BannerSlider />
      
      <ShowSearch />
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
