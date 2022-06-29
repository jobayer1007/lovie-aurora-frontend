import React from "react";

const Logo = ({ size, different, color }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size ? size : "60"}
        height={size ? size : "60"}
        viewBox="0 0 73.5 60.75"
      >
        <g
          id="Group_490"
          data-name="Group 490"
          transform="translate(-521.263 -39.906)"
        >
          <g
            id="Group_228"
            data-name="Group 228"
            transform="translate(521.263 39.906)"
          >
            <g
              id="Artwork_5"
              data-name="Artwork 5"
              transform="translate(36.75 30.375)"
            >
              <path
                id="Path_220"
                data-name="Path 220"
                d="M64.33,24.751l-7.789,7.791L55.411,33.67H18.094l-1.132-1.132L9.174,24.751A11.015,11.015,0,0,1,24.751,9.174l7.787,7.789,4.212,4.212,4.212-4.212,7.787-7.789A11.016,11.016,0,0,1,64.33,24.751M36.75,52.33l-12.7-12.707H49.457ZM68.537,4.962a16.989,16.989,0,0,0-24,0L36.75,12.751,28.963,4.962a16.971,16.971,0,0,0-24,24L9.671,33.67H5.07v5.953H15.625L36.75,60.75,57.875,39.623H68.434V33.67h-4.6l4.707-4.708a16.988,16.988,0,0,0,0-24"
                transform="translate(-36.75 -30.375)"
                fill={color ? "white" : different ? '#337357' : "#363638"}
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Logo;
