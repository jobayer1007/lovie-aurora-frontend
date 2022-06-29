import React from "react";

const TextInput = ({ placeholder, margin, type, defaultValue, width }) => {
  return (
    <>
      <input
        className={`${margin} ${
          width && width
        } border rounded-md p-2 border-coolBlack text-sm`}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </>
  );
};

export default TextInput;
