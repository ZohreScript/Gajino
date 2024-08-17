import BannerSlider from "@/components/BannerSlider/BannerSlider";
import Category from "@/components/Category/Category";
import Course from "@/components/Coursers/Course";
import FooterCourse from "@/components/FooterCourses/FooterCourse";
import Search from "@/components/SearchBox/Search";
import Teacher from "@/components/Teacher/Teacher";

export default function page() {
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
    <FooterCourse/>
  </div>
</div>
</>
  );
}