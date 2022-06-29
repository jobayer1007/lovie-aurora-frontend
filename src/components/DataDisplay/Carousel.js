import React from "react";
import Image from "next/image";
import { HeartOutline } from "react-ionicons";
import Slider from "react-slick";
import { Back, Forward } from "./CustomArrows";
import ItemDescription from "./ItemDescription";

const Carousel = ({ items, size, small, auction }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 4,
    nextArrow: <Forward size={size} />,
    prevArrow: <Back size={size} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`px-4 md:px-4 cursor-pointer relative group`}
          >
            <div className={`aspect-[3/4] w-full bg-gray-50 relative flex-col`}>
              <Image src={item.image} objectFit="cover" layout="fill" />
              <div className="h-full w-full bg-black absolute hover:opacity-100 opacity-0 bg-opacity-20 transition duration-200 z-10"></div>
              <button className="opacity-0 absolute top-2 right-2 group-hover:opacity-100 transition duration-200 z-20">
                <HeartOutline height="30px" width="30px" color="white" />
              </button>
            </div>
            <ItemDescription
              store_name={item.tag}
              name={item.title}
              reviews={`${item.reviews?.length} reviews`}
              price={`$${item.price}`}
              auction={auction}
            />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Carousel;
