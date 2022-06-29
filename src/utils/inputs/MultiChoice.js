import React, { useState } from "react";
import { Checkmark } from "react-ionicons";

const selectItems = [
  { type: "Home" },
  { type: "Handmade" },
  { type: "Clothing & Accessories" },
  { type: "Jewelry" },
  { type: "Gifts" },
  { type: "Celebration" },
  { type: "Art" },
  { type: "Custom" },
];

const MultiChoice = () => {
  const [selected, setSelected] = useState([]);
  const [otherInput, setOtherInput] = useState(false);

  const validateSelection = (selectedOption) => {
    return selected.some((s) => s === selectedOption);
  };

  const handleSelction = (selectedOption) => {
    const inSelectedArr = selected.some((s) => s === selectedOption);

    if (inSelectedArr) {
      const filtered = selected.filter(
        (selection) => selection !== selectedOption
      );
      setSelected(filtered);
    } else {
      setSelected([...selected, selectedOption]);
    }
  };
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-4 mt-4">
        {selectItems.map((item) => (
          <div key={item.type} className="flex items-center">
            <button
              type="button"
              onClick={() => handleSelction(item.type)}
              className={`${validateSelection(item.type) === true
                  ? "bg-coolDarkerGreen border border-white"
                  : "border border-coolDarkerGreen"
                } rounded-md`}
            >
              <Checkmark color="white" />
            </button>
            <p className="ml-3 text-sm truncate">{item.type}</p>
          </div>
        ))}
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => setOtherInput(!otherInput)}
            className={`${otherInput === true
                ? "bg-coolDarkerGreen border border-white"
                : "border border-coolDarkerGreen"
              } rounded-md`}
          >
            <Checkmark green={true} color="white" />
          </button>
          <p className="ml-3 text-sm">Other</p>
        </div>
      </div>

      <textarea
        className="border mt-4 min-w-full border-coolBlack rounded-md p-2"
        type="text"
      />
    </div>
  );
};

export default MultiChoice;
