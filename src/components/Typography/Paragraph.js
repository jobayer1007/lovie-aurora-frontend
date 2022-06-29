import React from "react";

const Paragraph = ({ margin, text, size, fontWeight }) => {
  return (
    <p
      className={`${margin} ${size ? size : "text-xs"} ${fontWeight ? fontWeight : ''
        }  text-coolBlack`}
    >
      {text}
    </p>
  );
};

export default Paragraph;
