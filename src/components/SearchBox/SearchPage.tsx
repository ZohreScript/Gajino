"use client";

import React, { useState } from "react";

import SearchResults from "./SearchResults"; // Import the SearchResults component
import SearchBox from "./SearchBox";
import SortAndSearchResult from "./SearchInfo";

const SearchPage: React.FC = () => {
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
    <>
    <div className="bg-white p-7 rounded-md shadow-md">
 <SearchBox
  query={query}
  city={city}
  setQuery={setQuery}
  setCity={setCity}
  handleSearch={handleSearch}
  setShowResults={setShowResults}
  showFilters={true} 
/>

 
  </div>
  <SortAndSearchResult/>
</>
  );
};

export default SearchPage;
