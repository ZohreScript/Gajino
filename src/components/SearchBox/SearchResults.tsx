import React from "react";
import Image from "next/image";
import teacherIcon from "../../../public/icons/teacher.svg";
import coursesicon from "../../../public/icons/courses.svg";
import tagicon from "../../../public/icons/tag.svg";
import locationIcon from "../../../public/icons/location.svg";
import { GoDotFill } from "react-icons/go";

interface SearchResultsProps {
  query: string;
  city: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({ query, city }) => {
  const searchResults = [
    {
      id: 1,
      teacher: "بهزاد فشی اژدری",
      subjects: ["شیمی", "فیزیک", "ریاضی"],
      location: "تهران",
      icon: teacherIcon,
    },
    {
      id: 2,
      teacher: "فریبرز رادمان اصل",
      subjects: ["فیزیک"],
      location: "اصفهان",
      icon: teacherIcon,
    },
  ];

  const courseResult = [
    {
      id: 1,
      course: "فیزیک",
      level: "پایه دوازدهم",
      icon: coursesicon,
    },
    {
      id: 2,
      course: "فیزیک",
      level: "پایه دهم",
      icon: coursesicon,
    },
  ];

  return (
    <div className="mt-6">
      {/* teachers */}
      <div className="border-b-2 border-gray-200 pb-4">
        <div className="flex items-center space-x-2">
          <Image
            src={teacherIcon}
            alt="Teacher Icon"
            width={24}
            height={24}
            className="block m-1 md:hidden"
          />
          <p className="text-md font-semibold text-primary-textLight">مدرسین</p>
        </div>

        {searchResults.map((result) => (
          <div key={result.id} className="flex flex-col rounded-md p-2 mb-4">
            <ul className="items-center grid grid-cols-1 md:grid-cols-[80%_20%] gap-2 w-full">
              {/* Teacher Information */}
              <li className="flex items-center w-full gap-2">
                {/* Teacher Icon */}
                <Image
                  src={result.icon}
                  alt="Teacher Icon"
                  width={16}
                  height={16}
                  className="hidden md:block"
                />

                {/* Teacher Name and Subjects */}
                <div className="flex items-center text-primary-textLight w-full">
                  <h6 className="text-md m-1">{result.teacher}</h6>

                  <div className="hidden md:block border-r-2 border-primary-textLight h-6 mx-2"></div>
               
                  <ul className=" gap-1 w-1/3 hidden md:flex">
                    {result.subjects.map((subject, index) => (
                      <li
                        key={index}
                        className="flex w-1/2 items-center text-sm font-semibold"
                      >
                        <GoDotFill className="mr-1" />
                        {subject}
                      </li>
                    ))}
                    <li className="font-xs w-1/2 text-primary-textLight/60">
                      +4مورد ...
                    </li>
                  </ul>
                </div>  
                 <div className="flex items-center gap-1 md:hidden">
                    <Image
                      src={locationIcon.src}
                      width={24}
                      height={24}
                      alt="city name"
                    />
                    <span>{result.location}</span>
                  </div>
              </li>

              {/* Location Information */}
              <li className="hidden md:flex items-center text-primary-textLight gap-1">
                <Image
                  src={locationIcon.src}
                  width={24}
                  height={24}
                  alt="city name"
                />
                <span>{result.location}</span>
              </li>
           
            </ul>
            <div className="block md:hidden m-1 items-center text-primary-textLight">
                <ul className="flex gap-1 w-full md:w-1/3 ">
                  {result.subjects.map((subject, index) => (
                    <li
                      key={index}
                      className="flex w-1/2 items-center text-sm font-semibold"
                    >
                      <GoDotFill className="mr-1" />
                      {subject}
                    </li>
                  ))}
                  <li className="font-xs w-1/2 text-primary-textLight/60">
                    +4مورد ...
                  </li>
                </ul>
              </div>
          </div>
        ))}
      </div>
      {/* courses */}
      <div className="border-b-2 border-gray-200 py-4">
        <div className="flex items-center space-x-2">
          <Image
            src={coursesicon}
            alt="Teacher Icon"
            width={24}
            height={24}
            className="block m-1 md:hidden"
          />
          <p className="text-md font-semibold text-primary-textLight">درس ها</p>
        </div>

        <div className="flex flex-col rounded-md p-2 mb-4">
          {/* Course Information */}
          {courseResult.map((course) => (
            <div
              key={course.id}
              className="flex items-center w-full text-primary-textLight gap-2"
            >
              <Image
                src={course.icon}
                alt="courses Icon"
                width={16}
                height={16}
                className="hidden md:block"
              />
              <p className="flex items-center text-sm font-semibold">
                {course.course}
              </p>
              <div className="border-r-2 border-primary-textLight h-6 m-1"></div>
              <p className="flex items-center text-sm font-semibold">
                {course.level}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* tags */}
      <div className="py-2">
        <div className="flex items-center space-x-2">
          <Image
            src={tagicon}
            alt="Teacher Icon"
            width={24}
            height={24}
            className="block m-1 md:hidden"
          />
          <p className="text-md font-semibold text-primary-textLight">
            برچسب ها
          </p>
        </div>
        <div className="flex flex-row rounded-md p-2 mb-4 ">
          {/* Tag Information */}
          <div className="flex items-center bg-[#ECEAEF] rounded-md px-4 m-1 py-2 text-primary-textLight gap-2">
            <Image
              src={tagicon}
              alt="tag Icon"
              width={16}
              height={16}
              className="hidden md:block"
            />
            <p className="text-sm font-semibold">شیمی</p>
          </div>
          <div className="flex items-center bg-[#ECEAEF] rounded-md px-4 m-1 py-2 text-primary-textLight gap-2">
            <Image src={tagicon} alt="tag Icon" width={16} height={16} />
            <p className="text-sm font-semibold">فیزیک</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
