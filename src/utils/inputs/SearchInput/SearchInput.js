import React, { useState } from "react";
import SearchIcon from "../../icons/SearchIcon";

const SearchInput = ({ openMenu, setOpenMenu, search, setSearch }) => {
  const handleSearch = () => {
    setSearch(""); 
    setOpenMenu(true);
  };

  return (
    <div className="border-[3px] border-coolBlack py-[0.4rem] px-2 lg:w-[26rem] rounded-full border-coolBlack flex items-center justify-center focus:outline-none group w-full relative">
      <input
        onClick={() => handleSearch()}
        onFocus={() => setSearch("")}
        onBlur={() => setSearch("what are you looking for?")}
        onChange={(e) => setSearch(e.target.value)}
        className=" text-coolBlack py-[0.2rem] px-2 lg:w-[26rem] border-coolBlack flex text-center items-center justify-center focus:outline-none group w-full self-center transition duration-150 text-sm sm:text-base font-bold"
        value={search}
      />
      <div className="ml-auto hover:bg-gray-100 w-[43px] h-[43px] flex items-center justify-center rounded-full absolute  text-coolBlack right-0 cursor-pointer z-10 bg-white">
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchInput;
