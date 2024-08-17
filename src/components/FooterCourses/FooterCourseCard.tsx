import Image, { StaticImageData } from "next/image";
import React from "react";

interface CourseCardProps {
  image: StaticImageData;
  title: string;
  className?: string;
}

function FooterCourseCard({ image, title,className }: CourseCardProps) {
  return (
    <div className={`bg-white  shadow-xl shadow-primary-text/10 mb-6 rounded-3xl overflow-hidden relative aspect-w-4 aspect-h-3 ${className}`}>
    <div className="relative">
        <Image src={image} alt={title} className="w-full md:object-cover " />
        <div className="absolute inset-0 bg-[#42246E] opacity-40 z-10"></div>
      </div>
      <div className="p-2 md:p-4 text-center">
        <h3 className="text-sm md:text-lg text-primary-text font-semibold">{title}</h3>
      </div>
    </div>
  );
}

export default FooterCourseCard;
