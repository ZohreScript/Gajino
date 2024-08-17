import Image from 'next/image';
import React from 'react';
import pin from "../../../../public/icons/pin.svg";
import location from "../../../../public/icons/location.svg";

const Search = () => {
  return (
    <div className="container mx-auto">
    <div className="w-full px-8 md:px-6 lg:px-8 xl:px-12">
      <div className="w-full -mt-7">  
         <h1 className="block text-white text-sm sm:text-sm md:text-xl font-bold mb-4 text-center">
        دنبال یادگیری چی با کی هستی؟
      </h1>
      <div className="flex flex-col md:flex-row items-center p-7 bg-white rounded-md shadow-md gap-y-4 md:gap-y-0">
        
        <div className="flex flex-col md:flex-row md:relative bg-white md:bg-gray-100 w-full items-center rounded-lg">
       
          <div className="relative w-full mb-4 md:mb-0 flex items-center">
            <span className="absolute inset-y-0 right-3 flex items-center text-teal-500">
              <Image src={pin.src} width={12} height={12} alt="course name" />
            </span>
            <input
              type="text"
              placeholder="نام مدرس"
              className="w-full pl-16 pr-8 py-2 bg-gray-100 text-right focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-md"
            />
          </div>

          <div className="hidden md:block h-[20px] w-[2px] bg-gray-400"></div>

          <div className="relative w-full flex items-center">
            <span className="absolute inset-y-0 right-3 flex items-center text-teal-500">
              <Image src={location.src} width={16} height={16} alt="city name" />
            </span>
            <input
              type="text"
              placeholder="شهر"
              className="w-full pl-10 pr-8 py-2 bg-gray-100 text-right focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-md"
            />
          </div>

        </div>
        <button className="bg-teal-500 text-white mr-0 md:mr-4 px-6 py-2 w-full md:w-auto rounded-md mt-2 md:mt-0">
          جستجو
        </button>
      </div>
    </div>
   </div>
   </div>
   
  );
};

export default Search;
