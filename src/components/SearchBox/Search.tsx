"use client";

import React, { useState } from "react";

import SearchResults from "./SearchResults"; // Import the SearchResults component
import SearchBox from "./SearchBox";

const Search: React.FC = () => {
  const [showResults, setShowResults] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [city, setCity] = useState<string>("");

  const handleSearch = () => {
    setShowResults(true); // Trigger the top position change
  };

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setShowResults(!!e.target.value); // Show results as user types
  };

  return (
    <div
      className={`md:absolute relative inset-x-0 flex justify-center z-10 ${
        showResults ? "md:top-[30%]" : "sm:top-[30%] md:top-[110%]"
      }`}
    >
      <div className="relative w-full transition-all duration-500">
        <div className="container mx-auto">
          <div className="w-full px-8 md:px-6 lg:px-8 xl:px-12 ">
            <div className="w-full -mt-7">
              <h1 className="block text-white md:text-heading-1 text-sm sm:text-sm font-bold mb-4 text-center">
                دنبال یادگیری چی با کی هستی؟
              </h1>
              <div className="bg-white p-7 rounded-md shadow-md">
                {/* Search Box */}
                <SearchBox
                  query={query}
                  city={city}
                  setQuery={setQuery}
                  setCity={setCity}
                  handleSearch={handleSearch}
                  setShowResults={setShowResults}
                />

                {/* Search Results */}
                {query && <SearchResults query={query} city={city} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
