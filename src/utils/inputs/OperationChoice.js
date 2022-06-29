import React, { useState } from "react";
import { Checkmark } from "react-ionicons";

const selectItems = [
  { type: "Operation by Creators (OBC)" },
  { type: "Operation by Lovie Aurora(OBLA)" },
  { type: "Wholesale by Lovie Aurora(WBLA)" },
];

const OperationChoice = () => {
  const [selected, setSelected] = useState();
  return (
    <div className="mt-4">
      {selectItems.map((item) => (
        <div key={item.type} className="flex items-center mb-2">
          <button
            type="button"
            onClick={() => setSelected(item.type)}
            className={`${item.type === selected
              ? "bg-coolDarkerGreen border border-white"
              : "border border-coolDarkerGreen"
              } rounded-md`}
          >
            <Checkmark color="white" />
          </button>
          <p className="ml-3 text-sm text-coolBlack">{item.type}</p>
        </div>
      ))}
    </div>
  );
};

export default OperationChoice;
