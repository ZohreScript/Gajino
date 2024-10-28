import React, { useState } from "react";
import { TbArrowsSort } from "react-icons/tb";
import teacher1 from "../../../../public/images/teacher (1).png";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import TeacherProfileSummary from "./TeacherProfileSummary";

const searchResults = [
  {
    id: 1,
    firstName: "بهرام",
    lastName: "موسوی راد ",
    subjects: [
      { name: "ادبیات", description: "پایه دوازدهم تجربی و کنکور" },
      { name: "نویسندگی" },
      { name: "شعر نویسی" },
    ],
    location: "تهران",
    hoursTaught: 87,
    rating: 4.2,
    ratingCount: 87,
    ratePerHour: "140 هزار تومان",
    description:
      " لورم ایپسوم متن ساختگیورم ایپسوم متن ساختگی برای توضیح در مورد  معلم.ورم ایپسوم متن ساختگی برای توضیح در مورد  معلم. برای توضیح در مورد  معلم.",
    profileImage: teacher1,
  },
  {
    id: 2,
    firstName: "بهرام",
    lastName: "موسوی راد ",
    subjects: [
      { name: "ادبیات", description: "پایه دوازدهم تجربی و کنکور" },
      { name: "نویسندگی" },
      { name: "شعر نویسی" },
    ],
    location: "تهران",
    hoursTaught: 87,
    rating: 4.2,
    ratingCount: 87,
    ratePerHour: "140 هزار تومان",
    description:
      " لورم ایپسوم متن ساختگیورم ایپسوم متن ساختگی برای توضیح در مورد  معلم.ورم ایپسوم متن ساختگی برای توضیح در مورد  معلم. برای توضیح در مورد  معلم.",
    profileImage: teacher1,
  },
];

const SearchInfo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDescription = () => setIsOpen(!isOpen);
  return (
    <div className="container mx-auto py-8">
      {/* Title and Sorting Options */}
      <h2 className="font-bold text-MokhDarkBlue text-xl items-center flex  my-4 justify-center">
        28مورد نتایج جستجوی شما{" "}
      </h2>
      <div className=" justify-between flex mt-6 items-center p-2  text-MokhFont2 ">
        <p className="flex items-center text-sm gap-1">
          <TbArrowsSort />
          مرتب سازی براساس:
        </p>
        <div className="relative block  md:hidden">
          <select
            id="timeSelect"
            className=" w-full text-xs appearance-none bg-MokhDarkBlue text-white py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-MokhDarkBlue focus:border-MokhFont2"
          >
            <option value="1"> در دسترس ترین زمان</option>
            <option value="2">زمان 2</option>
            <option value="3">زمان 3</option>
          </select>

          {/* Downward Arrow */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
            <BsArrowDown className="text-white" />
          </div>
        </div>

        <button className="hover:bg-MokhDarkBlue hidden md:block hover:text-white rounded-lg px-4 py-2">
          محبوب ترین
        </button>
        <button className="hover:bg-MokhDarkBlue hidden md:block hover:text-white rounded-lg px-4 py-2">
          در دسترس ترین زمان
        </button>
        <button className="hover:bg-MokhDarkBlue hidden md:block hover:text-white rounded-lg px-4 py-2">
          بیشترین نظر
        </button>
        <button className="hover:bg-MokhDarkBlue hover:text-white hidden md:block rounded-lg px-4 py-2">
          ارزان ترین
        </button>
        <button className="hover:bg-MokhDarkBlue hover:text-white hidden md:block rounded-lg px-4 py-2">
          گران ترین
        </button>
        <button className="hover:bg-MokhDarkBlue hover:text-white hidden md:block rounded-lg px-4 py-2">
          جدیدترین
        </button>
      </div>

      {/* Search  Card */}
      <div className=" container mx-auto  shadow-lg rounded-lg">
        {searchResults.map((result) => (
          <TeacherProfileSummary
          key={result.id}
            firstName={result.firstName}
            lastName={result.lastName}
            subjects={result.subjects}
            location={result.location}
            hoursTaught={result.hoursTaught}
            rating={result.rating}
            ratingCount={result.ratingCount}
            ratePerHour={result.ratePerHour}
            description={result.description}
            profileImage={result.profileImage}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchInfo;
