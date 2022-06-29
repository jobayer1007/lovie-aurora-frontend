import React from "react";
import Image from "next/image";
import { HeartOutline } from "react-ionicons";
import Slider from "react-slick";
import { SmallForward, SmallBack } from "./CustomArrows";
import Link from "next/link";
import Heading from "../Typography/Heading";
import { StarIcon } from "../icons/VendorIcons";
import WishListButton from "../utils/WishListButton";

const CarouselSmall = ({ items, size, auction }) => {
  console.log(items);
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 4,
    nextArrow: <SmallForward />,
    prevArrow: <SmallBack />,

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
          slidesToShow: 2,
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
            className={`px-2 flex items-center justify-center cursor-pointer relative group`}
          >
            <div
              className={`aspect-[3/4] w-full max-h-[12rem] bg-gray-50 relative flex-col`}
            >
              <Image
                src={item.supporting_images[0].url}
                objectFit="cover"
                layout="fill"
              />
              <div className="h-full w-full bg-black absolute hover:opacity-100 opacity-0 bg-opacity-20 transition duration-200 z-10"></div>
              <WishListButton small={true} item={item} />
            </div>

            {/* DESCRIPTION */}
            <div className="mt-2 lg:mt-2 text-coolBlack relative group">
              <Link href="/sellers/[slug]" as={`/sellers/${item.tag}`}>
                <a className="uppercase tracking-[-0.02] md:tracking-[-0.05em] font-[300] text-[10px] md:text-[10px] hover:underline">
                  {item.store.store_name}
                </a>
              </Link>
              <Heading h3 text={item.name} size="text-md" />
              <div className="flex md:items-center flex-row sm:flex-col md:flex-row mt-1"></div>
              <div className="flex items-center">
                {["", "", "", "", ""].map((item, index) => (
                  <StarIcon key={index} color="#E84414" size="10" />
                ))}
                <p className="text-textColor text-[0.7rem] ml-2">214 reviews</p>
              </div>

              <div className="mt-1 flex items-center">
                <Heading h3 text={`$${item.price}`} size="text-base" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default CarouselSmall;
