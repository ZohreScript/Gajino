"use client";

import { useState } from "react";
import Search from "@/components/SearchBox/Search";

const ShowSearch: React.FC = () => {
  const [showResults, setShowResults] = useState<boolean>(false);

  return (
    <div
      className={`absolute inset-x-0 flex justify-center z-10 ${
        showResults ? "md:top-[30%]" : "sm:top-[20%] md:top-[110%]"
      }`}
    >
      <div className="relative w-full transition-all duration-500">
        <Search setShowResults={setShowResults} />
      </div>
    </div>
  );
};

export default ShowSearch;
