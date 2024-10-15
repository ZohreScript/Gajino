import Image, { StaticImageData } from "next/image";
import badageAD from "../../../../public/icons/badgeAD.svg";
import { toPersianNumbersInText } from "@/utils/toPersianNumbers";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface CourseCardProps {
  image: StaticImageData;
  session:string;
  category: string;
  instructor: string;
}

function CourseCard({ image, category,session, instructor }: CourseCardProps) {
  return (
    <div className="  rounded-xl relative overflow-hidden shadow-xl m-1 mb-8 shadow-MokhFont2/40 bg-white ">
   <div className="relative h-24 sm:h-24 md:h-52 ">
      <div className="absolute inset-0 bg-[#42246E] opacity-40 z-10"></div>
      <Image
        src={image}
        alt={category}
        layout="fill" 
        objectFit="cover" 
        className="w-full h-full"
      />
    </div>
      <div className="p-3 reverceRtl  flex flex-col  md:items-center sm:justify-start md:justify-center relative">
      <div className="md:text-center sm:text-right text-MokhFont1 text-md  mb-2 sm:mt-1 md:mt-6">
          <span className="block md:inline text-xs  sm:text-sm md:text-base sm:font-light md:font-bold my-1 md:my-0">{toPersianNumbersInText(session)}</span>
          <span className="block md:inline text-sm sm:text-sm md:text-base font-bold">{toPersianNumbersInText(category)}</span>
        </div>
        <p className="sm:text-sm md:text-xl sm:text-right  md:text-center text-MokhFont1 mb-3 md:mb-8">
          {instructor}
        </p>
        <div className="flex items-center mb-2 everceRtl">
          <h4 className= "text-MokhBlue  hidden md:flex font-semibold  items-center">
          

            <IoIosArrowForward className="fill-MokhBlue ml-2 custom-icon" size="1rem" />
            مشاهده ویدئوها

          </h4>
          <h4 className= "text-MokhBlue   md:hidden font-semibold flex items-center">
          <IoIosArrowForward className="fill-MokhBlue ml-2 strock-2" />

            مشاهده ویدئوها
          </h4>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
