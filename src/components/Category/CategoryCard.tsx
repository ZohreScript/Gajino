import Image, { StaticImageData } from "next/image";
import React from "react";

interface CategoryCardProps {
  image: StaticImageData;
  title: string;
}

function CategoryCard({ image, title }: CategoryCardProps) {
  return (
    <div className="bg-white  shadow-lg rounded-lg overflow-hidden relative aspect-w-4 aspect-h-3">
    <div className="relative">
        <Image src={image} alt={title} className="w-full md:object-cover " />
        <div className="absolute inset-0 bg-[#42246E] opacity-40 z-10"></div>
      </div>
      <div className="p-2 md:p-4 text-center">
        <h3 className="text-sm md:text-lg text-MokhFont1 font-semibold">{title}</h3>
      </div>
    </div>
  );
}

export default CategoryCard;
