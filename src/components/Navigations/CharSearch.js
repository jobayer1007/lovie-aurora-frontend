import React from "react";
import { ChevronForwardSharp, ChevronBackSharp } from "react-ionicons";

const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const CharSearch = ({ char, setChar }) => {
  return (
    <div className="flex items-center justify-center mb-10 md:mb-20 mt-14 w-full mx-auto">

      <div className="flex items-center overflow-x-scroll shipping">
        <button
          onClick={() => setChar("All")}
          className={`${char === "All" ? "text-coolOrange" : "text-coolBlack"
            } mx-3 font-medium text-[13px] md:text-[20px] lg:text-[23px]`}
        >
          All
        </button>
        {letters.map((letter) => (
          <button
            onClick={() => setChar(letter)}
            key={letter}
            className={`${letter === char ? "text-coolOrange" : "text-coolBlack"
              } uppercase mx-3 font-medium text-[13px] md:text-[20px] lg:text-[23px]`}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CharSearch;
