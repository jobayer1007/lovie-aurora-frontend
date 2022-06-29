import React, { useState } from "react";
import { ChevronDown } from "react-ionicons";

const SelectInput = ({ selectedItems }) => {
  const [selected, setSelected] = useState("OFF-WHITE");
  return (
    <div className="flex flex-col">
      <h4 className="text-light text-coolBlack text-sm">Colour</h4>
      <div className="border border-coolBlack rounded-md flex items-center px-3 py-2 cursor-pointer">
        <div className="bg-gray-50 h-7 w-7 rounded-full mr-4"></div>
        <span className="text-lg">{selected}</span>
        <div className="ml-auto border-l border-coolBlack pl-3">
          <ChevronDown />
        </div>
      </div>
    </div>
  );
};

export default SelectInput;
