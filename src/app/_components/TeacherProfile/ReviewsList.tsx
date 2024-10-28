import React, { useEffect, useRef, useState } from "react";
import { AiFillStar, AiOutlineFlag } from "react-icons/ai";
import Image from "next/image";
import flag from "../../../../public/icons/flag.svg";
import { HiDotsVertical } from "react-icons/hi";

interface ReviewProps {
  userName: string;
  comment: string;
  date: string;
  rating: number;
  userImageUrl: string;
  teacherReply?: {
    teacherName: string;
    subject: string;
    replyComment: string;
    teacherImageUrl: string;
  };
}

const ReviewCard: React.FC<ReviewProps> = ({
  userName,
  comment,
  date,
  rating,
  userImageUrl,
  teacherReply,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);
  return (
    <div className="bg-white rounded-lg shadow-custom p-2 mb-4 pb-8 flex flex-col space-y-6 md:space-y-8">
      {/* Dropdown button and menu */}

      <div className="flex justify-between items-center">
        <div className="flex items-center sm:flex-col md:flex-row md:items-center">
          <div className="relative -top-6 md:top-2 right-2" ref={dropdownRef}>
            <button
              id="dropdownCommentButton"
              onClick={toggleDropdown}
              className="inline-flex items-center"
              type="button"
            >
              <HiDotsVertical className="text-MokhDarkBlue text-lg" />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div
                id="dropdownComment"
                className="absolute right-0 z-10 w-36
           bg-white rounded divide-y divide-gray-100 shadow-custom mt-2"
              >
                <ul
                  className="py-1 text-sm text-MokhFont2"
                  aria-labelledby="dropdownCommentButton"
                >
                  <li>
                    <a href="#" className="flex items-center gap-1 py-2 px-4">
                      <Image
                        src={flag.src}
                        alt="report"
                        width={20}
                        height={20}
                      />
                      گزارش تخلف
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* User profile and info */}
          <div className="flex flex-col md:flex-row items-start md:items-center space-x-0 sm:space-x-0 md:space-x-4 space-y-2 md:space-y-4 mr-4">
            <div className="w-12 h-12 rounded-full shadow-custom overflow-hidden ml-2">
              <Image
                src={userImageUrl}
                alt="Profile"
                width={48}
                height={48}
                className="rounded-full shadow-custom"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <h4 className=" text-sm md:text-lg text-MokhDarkBlue font-semibold">
                {userName}
              </h4>
              <p className=" text-xs md:text-sm text-MokhFont2">فراگیر</p>
            </div>
          </div>
        </div>

        {/* Rating and date */}
        <div className="flex flex-col items-end space-y-4 ml-4">
          <div className="flex items-center flex-row-reverse">
            {[...Array(5)].map((_, i) => (
              <AiFillStar
                key={i}
                className={`w-5 h-5 text-xs rounded-sm ${
                  i < rating ? "text-MokhYellow" : "text-MokhFont3"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-right text-MokhFont2">{date}</span>
        </div>
      </div>

      {/* Comment content */}
      <p className="text-MokhFont2 mt-8 mr-6 text-xs md:text-sm text-justify  md:mr-20">
        {comment}
      </p>

      {/* Teacher's reply section */}
      {teacherReply && (
        <div className=" mr-8 md:mr-32 my-4 rounded-sm border-r-2 md:border-r-4 border-r-MokhBlueHover">
          <div className="flex items-center mr-1">
            <div className="w-12 h-12 rounded-full  overflow-hidden ml-1">
              <Image
                src={teacherReply.teacherImageUrl}
                alt={teacherReply.teacherName}
                width={40}
                height={40}
                className="rounded-full shadow-custom"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <h4 className="text-sm md:text-lg text-MokhDarkBlue font-semibold">
                {" "}
                {teacherReply.teacherName}
              </h4>
              <p className=" text-xs md:text-sm text-MokhFont2">
                {teacherReply.subject}
              </p>
            </div>
          </div>
          <p className="text-MokhFont2 px-2  text-xs md:text-sm text-justify mt-2 md:mt-4 mr-10 md:mr-12">
            {teacherReply.replyComment}
          </p>
        </div>
      )}
    </div>
  );
};

const ReviewsList: React.FC = () => {
  const reviews = [
    {
      userName: "ایمان محمدزاده اصل",
      comment: "این یک دیدگاه خیلی خوب در مورد این کلاس است.",
      date: "24 بهمن 99",
      rating: 4,
      userImageUrl: "/icons/Subtract.svg",
      teacherReply: {
        teacherName: "بهرام امینی",
        subject: "ادبیات پایه دوازدهم",
        replyComment: "متشکرم از بازخورد خوب شما متشکرم از بازخورد خوب شما.",
        teacherImageUrl: "/icons/Subtract.svg",
      },
    },
    {
      userName: "فاطمه رضایی",
      comment: "این کلاس خیلی مفید بود و من چیزهای زیادی یاد گرفتم.",
      date: "15 اسفند 99",
      rating: 3,
      userImageUrl: "/icons/Subtract.svg",
    },
  ];

  return (
    <div className="space-y-6 my-4">
      {reviews.map((review, index) => (
        <ReviewCard key={index} {...review} />
      ))}
    </div>
  );
};

export default ReviewsList;
