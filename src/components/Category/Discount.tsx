import Image, { StaticImageData } from "next/image";
import badageAD from "../../../public/icons/badgeAD.svg";
import { toPersianNumbersInText } from "@/utils/toPersianNumbers";

interface DiscountCardProps {
  image: StaticImageData;
  category: string;
  sessions: string;
  instructor: string;
  originalPrice: string;
  discountedPrice: string;
}

function DiscountCard({
  image,
  category,
  instructor,
  originalPrice,
  discountedPrice,
}: DiscountCardProps) {
  return (
    <div className="rounded-xl relative overflow-hidden shadow-lg shadow-primary-textLight/50 bg-white">
      <div className="relative">
        <div className="absolute inset-0 bg-[#42246E] opacity-40 z-10"></div>
        <Image src={image} alt={category} className="w-full h-48 object-cover" />
      </div>
      <div className="pb-2 flex flex-col items-center justify-center relative">
        <h2 className="text-md font-bold mb-2 mt-3 text-center text-primary-text">
          {toPersianNumbersInText(category)}
        </h2>
        <div className="absolute top-2 left-6 items-center">
          <Image src={badageAD.src} alt="badgeAD" width={30} height={30} />
        </div>
        <p className="text-lg font-light text-center text-primary-text mb-2">
          {instructor}
        </p>
        <div className="flex items-center flex-col ">
          <span className="relative text-primary-textLight  m-3 font-semibold h-full inline-block">
            <span className="absolute inset-0 top-1/2 w-full  transform -rotate-6 bg-pink-700" style={{ height: '1.75px' }}/>
            {toPersianNumbersInText(originalPrice)}
          </span>
          <span className="text-primary-main font-bold text-lg">
            {toPersianNumbersInText(discountedPrice)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default DiscountCard;
