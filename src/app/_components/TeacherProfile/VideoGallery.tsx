import React from "react";
import Image from "next/image";
import { AiOutlineEye } from "react-icons/ai"; // Eye icon import
import videobanner from "../../../../public/images/videobanner.png";
import { TbEyeFilled } from "react-icons/tb";

interface VideoCardProps {
  title: string;
  sessions: number;
  duration: string;
  views: number; 
  imageUrl: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  sessions,
  duration,
  views, 
  imageUrl,
}) => {
  return (
    <div className="relative  overflow-hidden max-w-sm">
      <div className="relative rounded-lg mt-10">
        {/* Main Image */}
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={250}
          className="w-full h-48 object-cover rounded-xl z-10 relative"
        />

        {/* Second Image */}
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={250}
          className="absolute blur-xs top-[-12px] left-1/2 transform -translate-x-1/2 w-11/12  h-48 object-cover rounded-lg opacity-65 z-9"
        />

        {/* Third Image */}
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={250}
          className="absolute blur-xs top-[-22px] left-1/2 transform -translate-x-1/2 w-10/12  h-48 object-cover rounded-lg opacity-50 z-7"
        />
      </div>

      {/* Text Section */}
      <div className="p-4 ">
        <h2 className="text-lg font-semibold text-right text-MokhDarkBlue truncate">
          {title}
        </h2>
        <div className="flex justify-between  items-center text-sm text-MokhFont2 mt-1">
        <div className="flex  items-center text-sm gap-1 text-MokhFont2 mt-2">
          <span>{sessions} جلسه</span>
          <span className="p-1">/ </span>
          <span >{duration}</span>
        </div>
          <span className="justify-end flex items-center">
            {views}
          <TbEyeFilled className="mx-1 text-lg text-MokhFont2 rounded-sm" /> 
            </span> 
        </div>
      </div>
    </div>
  );
};

const VideoGallery: React.FC = () => {
  const videos = [
    {
      title: "ادبیات پایه دوازدهم ریاضی فیزیک",
      sessions: 10,
      duration: "279 دقیقه",
      views: 3872, 
      imageUrl: videobanner.src,
    },
    {
      title: "ادبیات پایه دوازدهم ریاضی فیزیک",
      sessions: 10,
      duration: "279 دقیقه",
      views: 2874, 
      imageUrl: videobanner.src,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5 py-2">
      {videos.map((video, index) => (
        <VideoCard key={index} {...video} />
      ))}
    </div>
  );
};

export default VideoGallery;
