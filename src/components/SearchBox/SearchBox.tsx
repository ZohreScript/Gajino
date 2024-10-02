import React from "react";
import Image from "next/image";
import pinIcon from "../../../public/icons/pin.svg";
import locationIcon from "../../../public/icons/location.svg";
import SearchFilter from "./SearchFilter";

interface SearchBoxProps {
  query: string;
  city: string;
  setQuery: (value: string) => void;
  setCity: (value: string) => void;
  handleSearch: () => void;
  setShowResults: (value: boolean) => void;
  showFilters?: boolean;  // Prop برای نمایش فیلترها
}

const SearchBox: React.FC<SearchBoxProps> = ({
  query,
  city,
  setQuery,
  setCity,
  handleSearch,
  setShowResults,
  showFilters = false,  // مقدار پیش‌فرض false است
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-y-4 md:gap-y-0">
      <div className="flex flex-col md:flex-row md:relative w-full items-center rounded-lg">
        <div className="relative w-full mb-4 md:mb-0 flex items-center">
          <span className="absolute inset-y-0 right-3 flex items-center text-primary-main">
            <Image src={pinIcon.src} width={16} height={16} alt="course name" />
          </span>
          <input
            type="text"
            placeholder="نام مدرس"
            className="w-full pl-16 pr-8 py-2 bg-gray-100 text-right focus:outline-none focus:ring-2 focus:ring-primary-main rounded-r-md"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowResults(!!e.target.value); // Show results as user types
            }}
          />
        </div>

        <div className="hidden md:block h-[20px] w-[2px] bg-gray-400"></div>

        <div className="relative w-full flex items-center">
          <span className="absolute inset-y-0 right-3 flex items-center ">
            <Image src={locationIcon.src} width={16} height={16} alt="city name" />
          </span>
          <input
            type="text"
            placeholder="شهر"
            className="w-full pl-10 pr-8 py-2 bg-gray-100 text-right focus:outline-none focus:ring-2 focus:ring-primary-main rounded-l-md"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
      {showFilters && (
    <SearchFilter/>
      )}
      </div>
      <button
        className="bg-primary-main text-white mr-0 md:mr-4 px-6 py-2 w-full md:w-auto rounded-md mt-2 md:mt-0"
        onClick={handleSearch}
      >
        جستجو
      </button>

  
    </div>
  );
};

export default SearchBox;
