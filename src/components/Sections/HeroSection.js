import React from "react";
import Image from "next/image";

const HeroSection = ({ imageUrl, text, paragraph, light, seller }) => {
  return (
    <section className="bg-gray-50 h-[35rem] relative">
      <Image src={imageUrl} objectFit="cover" layout="fill" />
      <div
        className={`${light ? "md:w-2/3" : "md:w-1/2"
          } flex flex-col justify-center md:items-stretch items-center h-full w-full  absolute md:right-0 md:top-1/2 md:transform c-b-n md:-translate-y-1/2`}
      >
        <h1
          className={`${light ? "text-white" : "text-coolBlack"
            } font-cool uppercase text-[50px] sm:text-[50px] md:text-[80px] lg:text-[100px] xl:text-[100px] md:leading-[100px] lg:leading-[110px] line font-medium tracking-[-2.6px] text-center md:text-left`}
        >
          {text}
        </h1>
        <p
          className={`${light ? "text-white" : "text-coolBlack"
            }  font-light text-sm sm:text-lg text-center md:text-left  sm:max-w-[34rem] max-w-[20rem] mt-6`}
        >
          {paragraph}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
