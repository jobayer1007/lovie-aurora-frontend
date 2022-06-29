import React from "react";

const Heading = ({ text, size, h1, h2, h3, h4, h5, margin }) => {
  return (
    <>
      {h1 && (
        <h1
          className={`${
            size ? size : "text-[40px] lg:text-[60px]"
          } ${margin} tracking-[-0.02em]  text-coolBlack font-cool uppercase font-[500]`}
        >
          {text}
        </h1>
      )}
      {h2 && (
        <h2
          className={`${
            size ? size : "text-[24px] lg:text-[30px]"
          } ${margin} tracking-[-0.02em] antialiased  text-coolBlack font-cool uppercase font-bold`}
        >
          {text}
        </h2>
      )}
      {h3 && (
        <h3
          className={`${
            size ? size : "text-[20px] md:text-[25px]"
          } ${margin} tracking-[-0.05em]  text-coolBlack antialiased font-[500]`}
        >
          {text}
        </h3>
      )}
      {h4 && (
        <h4
          className={`${
            size ? size : "text-[40px] lg:text-[60px]"
          } ${margin} tracking-[-0.02em]  text-coolBlack font-cool uppercase font-[500]`}
        >
          {text}
        </h4>
      )}
      {h5 && (
        <h5
          className={`${
            size ? size : "text-[40px] lg:text-[60px]"
          } ${margin} tracking-[-0.02em]  text-coolBlack font-cool uppercase font-[500]`}
        >
          {text}
        </h5>
      )}
    </>
  );
};

export default Heading;
