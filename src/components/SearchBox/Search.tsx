"use client";
import React, { useState } from "react";
import Image from "next/image";
import pinIcon from "../../../public/icons/pin.svg";
import locationIcon from "../../../public/icons/location.svg";
import teacherIcon from "../../../public/icons/teacher.svg";
import coursesicon from "../../../public/icons/courses.svg";
import tagicon from "../../../public/icons/tag.svg";
import { GoDotFill } from "react-icons/go";

interface SearchProps {
  setShowResults: (value: boolean) => void;
}

const Search: React.FC<SearchProps> = ({ setShowResults }) => {
  const [query, setQuery] = useState<string>("");
  const [city, setCity] = useState<string>("");

  const handleSearch = () => {
    setShowResults(true); // Trigger the top position change in Home component
  };

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (e.target.value) {
      setShowResults(true); // Show results as user types
    } else {
      setShowResults(false); // Hide results when input is empty
    }
  };

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
    <div className="container mx-auto">
      {/* Search Box and Results Container */}
      <div className="w-full px-8 md:px-6 lg:px-8 xl:px-12 ">
        <div className="w-full -mt-7">
          <h1 className="block text-white md:text-heading-1 text-sm sm:text-sm font-bold mb-4 text-center">
            دنبال یادگیری چی با کی هستی؟
          </h1>
          <div className="bg-white p-7 rounded-md shadow-md ">
            {/* Search Box */}
            <div className="flex flex-col md:flex-row items-center gap-y-4 md:gap-y-0">
              <div className="flex flex-col md:flex-row md:relative w-full items-center rounded-lg">
                <div className="relative w-full mb-4 md:mb-0 flex items-center">
                  <span className="absolute inset-y-0 right-3 flex items-center text-primary-main">
                    <Image
                      src={pinIcon.src}
                      width={16}
                      height={16}
                      alt="course name"
                    />
                  </span>
                  <input
                    type="text"
                    placeholder="نام مدرس"
                    className="w-full pl-16 pr-8 py-2 bg-gray-100 text-right focus:outline-none focus:ring-2 focus:ring-primary-main rounded-r-md"
                    value={query}
                    onChange={handleQueryChange} // Updated here
                  />
                </div>

                <div className="hidden md:block h-[20px] w-[2px] bg-gray-400"></div>

                <div className="relative w-full flex items-center">
                  <span className="absolute inset-y-0 right-3 flex items-center ">
                    <Image
                      src={locationIcon.src}
                      width={16}
                      height={16}
                      alt="city name"
                    />
                  </span>
                  <input
                    type="text"
                    placeholder="شهر"
                    className="w-full pl-10 pr-8 py-2 bg-gray-100 text-right focus:outline-none focus:ring-2 focus:ring-primary-main rounded-l-md"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
              </div>
              <button
                className="bg-primary-main text-white mr-0 md:mr-4 px-6 py-2 w-full md:w-auto rounded-md mt-2 md:mt-0"
                onClick={handleSearch}              
              >
                جستجو
              </button>
            </div>

            {/* Search Results */}
            {query && (
              <div className="mt-6">
                {/* teachers */}
                <div className="border-b-2 border-gray-200 pb-4">
                  <p className="text-md font-semibold text-primary-textLight mb-4">
                    مدرسین
                  </p>
                  {searchResults.map((result) => (
                    <div
                      key={result.id}
                      className="flex flex-col rounded-md p-2 mb-4"
                    >
                      <ul className="items-center grid grid-cols-[80%_20%] gap-2 w-full">
                        {/* Teacher Information */}
                        <li className="flex items-center w-full gap-2">
                          {/* Teacher Icon */}
                          <Image
                            src={result.icon}
                            alt="Teacher Icon"
                            width={16}
                            height={16}
                          />

                          {/* Teacher Name and Subjects */}
                          <div className="flex items-center text-primary-textLight w-full">
                            <h6 className="text-md m-1">{result.teacher}</h6>

                            <div className="border-r-2 border-primary-textLight h-6 mx-2"></div>

                            <ul className="flex gap-2 w-1/3 ">
                              {result.subjects.map((subject, index) => (
                                <li
                                  key={index}
                                  className="flex w-1/2 items-center text-sm font-semibold"
                                >
                                  <GoDotFill className="mr-1" />
                                  {subject}
                                </li>
                              ))}
                              <li className="font-xs w-1/2 text-primary-textLight/60">+4مورد ...</li>
                            </ul>
                          </div>
                        </li>

                        {/* Location Information */}
                        <li className="flex items-center text-primary-textLight gap-1">
                          <Image
                            src={locationIcon.src}
                            width={24}
                            height={24}
                            alt="city name"
                          />
                          <span>{result.location}</span>
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
                {/* courses */}
                <div className="border-b-2 border-gray-200 py-4">
                  <p className="text-md font-semibold text-primary-textLight mb-4">
                    درس ها
                  </p>
                  <div className="flex flex-col rounded-md p-2 mb-4">
                    {/* Course Information */}
                    <div className="flex items-center w-full text-primary-textLight gap-2">
                      {/* Course Icon */}
                      <Image
                        src={coursesicon.src}
                        alt="courses Icon"
                        width={16}
                        height={16}
                      />

                      <p className="flex items-center text-sm font-semibold">
                        فیزیک
                      </p>
                      <div className="border-r-2 border-primary-textLight h-6 mx-2"></div>
                      <p className="flex items-center text-sm font-semibold">
                        پایه دوازدهم
                      </p>
                    </div>
                  </div>
                </div>
                {/* tags */}
                <div className="border-b-2 border-gray-200 py-4">
                  <p className="text-md font-semibold text-primary-textLight mb-4">
                    برچسب ها
                  </p>
                  <div className="flex flex-row rounded-md p-2 mb-4 ">
                    {/* Tag Information */}
                    <div className="flex items-center bg-[#ECEAEF] rounded-md px-4 m-1 py-2 text-primary-textLight gap-2">
                      {/* Tag Icon */}
                      <Image
                        src={tagicon.src}
                        alt="courses Icon"
                        width={16}
                        height={16}
                      />
                      <p className="text-sm">فیزیک</p>
                    </div>
                    <div className="flex items-center bg-[#ECEAEF] rounded-md px-4 m-1 py-2 text-primary-textLight gap-2">
                      {/* Tag Icon */}
                      <Image
                        src={tagicon.src}
                        alt="courses Icon"
                        width={16}
                        height={16}
                      />
                      <p className="text-sm">ریاضی</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
