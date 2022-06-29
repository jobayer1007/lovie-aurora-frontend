import React from "react";
 
const Button = ({
  margin,
  text,
  onClick,
  color,
  type,
  padding,
  disabledOpacity, 
  ...other
}) => {
  return (
    <button
      {...other}
      type='submit'
      className={`${margin} ${color ? color : "bg-coolOrange"
        }  text-white  rounded-[3px] ${padding ? padding : "py-2 px-3"} ${disabledOpacity
          ? "opacity-40"
          : "hover:bg-opacity-60 transition duration-150"
        }  text-md truncate pl-3`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
