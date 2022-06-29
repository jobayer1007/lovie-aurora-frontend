import React from "react";
import { ChevronForward, ChevronBack } from "react-ionicons";

export const Back = (props) => {
  const { className, style, onClick, size } = props;
  return (
    <div
      onClick={onClick}
      className={`${
        size
          ? "top-[11.6rem] md:top-[8.5rem]"
          : "top-[12.6rem] sm:top-[5rem] md:top-[8rem] lg:top-[8.5rem]"
      } absolute z-10 -left-4 cursor-pointer`}
    >
      <div className="w-0 h-0 border-b-gray-300 border-b-[20px] border-r-transparent border-r-[12.5px] border-l-transparent border-l-[12.5px] transform -rotate-90 hover:border-b-gray-400 transition duration-150"></div>
    </div>
  );
};

export const Forward = (props) => {
  const { className, style, onClick, size } = props;
  return (
    <div
      onClick={onClick}
      className={`${
        size
          ? "top-[11.6rem] md:top-[8.5rem]"
          : "top-[12.6rem] sm:top-[5rem] md:top-[8rem] lg:top-[8.5rem]"
      } absolute z-10 -right-5 cursor-pointer`}
    >
      <div className="w-0 h-0 border-b-gray-300 border-b-[20px] border-r-transparent border-r-[12.5px] border-l-transparent border-l-[12.5px] transform rotate-90 hover:border-b-gray-400 transition duration-150"></div>
    </div>
  );
};

export const SmallBack = (props) => {
  const { className, style, onClick, size } = props;
  return (
    <div
      onClick={onClick}
      className={`top-[5.2rem] absolute z-10 -left-3 cursor-pointer`}
    >
      <div className="w-0 h-0 border-b-gray-300 border-b-[12px] border-r-transparent border-r-[8px] border-l-transparent border-l-[8px] transform -rotate-90 hover:border-b-gray-400 transition duration-150"></div>
    </div>
  );
};

export const SmallForward = (props) => {
  const { onClick, size } = props;
  return (
    <div
      onClick={onClick}
      className={`top-[5.2rem] absolute z-10 -right-3 cursor-pointer`}
    >
      <div className="w-0 h-0 border-b-gray-300 border-b-[12px] border-r-transparent border-r-[8px] border-l-transparent border-l-[8px] transform rotate-90 hover:border-b-gray-400 transition duration-150"></div>
    </div>
  );
};
