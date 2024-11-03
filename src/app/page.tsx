import BannerSlider from "./_components/BannerSlider/BannerSlider";
import Category from "./_components/Category/Category";
import Course from "./_components/Coursers/Course";
import Search from "./_components/SearchBox/Search";
import Teacher from "./_components/Teacher/Teacher";

export default function Home() {
  return (
    <>
      <BannerSlider />
      <Search />
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
