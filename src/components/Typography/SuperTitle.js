import React from "react";

const SuperTitle = ({ margin, text, size, color }) => {
  return (
    <p
      className={`${margin} ${size ? size : "text-[14px]"
        } ${color} uppercase text-coolBlack  tracking-[-0.05em] font-[300]`}
    >
      {text}
    </p>
  );
};

export default SuperTitle;
