import { toPersianNumbersInText } from "@/utils/toPersianNumbers";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { IoIosArrowForward, IoIosStar } from "react-icons/io";

interface TeacherCardProps {
  image: StaticImageData;
  id:number;
  name: string;
  subject: string;
  rating: string;
  comments: string,

}

function TeacherCard({ image, rating,name, subject,comments }: TeacherCardProps) {
  return (
    <div className="flex h-auto flex-col mb-5 items-center justify-center gap-y-1 rounded-2xl drop-shadow-xl shadow-[#42246E] bg-white py-8 ">
    <div className="relative w-20 h-20 sm:w-20 sm:h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-[160px] xl:h-[160px]">
    <Image
      src={image}
      alt={name}
      layout="fill"
      objectFit="cover"
      className="rounded-full shadow-xl shadow-[#42246E]/20"
    />
    </div>
    <div className="flex flex-col items-center gap-y-2 sm:gap-y-3 md:gap-y-4">
      <h1 className="font-bold text-primary-text mt-3 text-md sm:text-sm  md:text-xl">{name}</h1>
      <p className="text-primary-text font-light gap-t-0 text-xs sm:text-sm md:text-base">{subject}</p>
   {/* Line */}
   <div className="sm:min-w-[150px] min-w-[160px] my-2 md:min-w-[200px]  h-[2px] mx-4 bg-gradient-to-r from-transparent via-MokhBlue via-60% to-transparent  "></div>


{/* Inline star and comments */}
<div className="flex items-center justify-center text-xs sm:text-sm md:text-sm text-gray-500">
<IoIosStar className="text-yellow-400 ml-2 mb-2 text-xl rounded-md" />
  <span className="text-gray-400">
  {toPersianNumbersInText(rating)}</span>
  <span className="mx-1 text-gray-400 ">|</span>
  <span className=" text-gray-400 space-x-1">از 
  {toPersianNumbersInText(comments)}
    نفر </span>
</div>

{/* Forward arrow */}
<Link href="#" className="mt-4">
  <IoIosArrowForward className="text-MokhBlue mx-auto text-xl" />
</Link>
    </div>

  </div>
  );
}

export default TeacherCard;
