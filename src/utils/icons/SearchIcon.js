import React from "react";

const SearchIcon = ({ size }) => {
  return (
    <>
      {size ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="30"
          viewBox="0 0 35.72 44.906"
        >
          <path
            id="Path_1645"
            data-name="Path 1645"
            d="M4.75,49.235l8.116-12.5a16.976,16.976,0,1,1,3.394,2.118L8.105,51.413ZM26.186,36.184a12.973,12.973,0,1,0-11.128-2.823L21.9,22.825,25.256,25,18.465,35.46A12.886,12.886,0,0,0,26.186,36.184Z"
            transform="translate(-4.75 -6.506)"
            fill="#363638"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="30"
          viewBox="0 0 35.72 44.906"
        >
          <path
            id="Path_1645"
            data-name="Path 1645"
            d="M4.75,49.235l8.116-12.5a16.976,16.976,0,1,1,3.394,2.118L8.105,51.413ZM26.186,36.184a12.973,12.973,0,1,0-11.128-2.823L21.9,22.825,25.256,25,18.465,35.46A12.886,12.886,0,0,0,26.186,36.184Z"
            transform="translate(-4.75 -6.506)"
            fill="#363638"
          />
        </svg>
      )}
    </>
  );
};

export default SearchIcon;
