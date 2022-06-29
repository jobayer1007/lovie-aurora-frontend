import React from "react";
import SuperTitle from "../Typography/SuperTitle";
import Heading from "../Typography/Heading";
import Paragraph from "../Typography/Paragraph";
import StarReviews from "./StarReviews";
import Link from "next/link";

const ItemDescription = ({
  store_name,
  name,
  reviews,
  price,
  slug,
  remaining,
  sale,
  auction,
}) => {
  return (
    <div className="mt-2 text-coolBlack lg:mt-2 text-coolBlack relative group">
      <Link href="/sellers/[slug]" as={`/sellers/${slug}`}>
        <a className="uppercase tracking-[-0.02] md:tracking-[-0.05em] font-[300] text-[10px] md:text-[14px] text-coolBlack hover:underline">
          {store_name}
        </a>
      </Link>
      <Heading h3 text={name} size="text-xl" />
      <div className="flex md:items-center flex-row sm:flex-col md:flex-row mt-1">
        <StarReviews />
        <Paragraph
          margin="ml-2 sm:ml-0 md:ml-2"
          text={reviews}
          size="text-[0.7rem]"
        />
      </div>
      <div className="mt-2 flex items-center">
        {sale ? (
          <>
            <Heading
              h3
              text={price}
              size="text-base"
              margin="line-through mr-3"
            />
            <Heading
              h3
              text={"$10"}
              size="text-base"
              margin="text-coolOrange"
            />
          </>
        ) : (
          <>
            {auction ? (
              <p className="text-sm text-coolBlack">
                Current Bid: <span className="font-semibold text-coolBlack">{price}</span>
              </p>
            ) : (
              <Heading h3 text={price} size="text-base" />
            )}
          </>
        )}

        {remaining !== undefined && remaining < 6 && (
          <div className="group-hover:opacity-100 text-coolBlack opacity-0 pointer-events-none transition duration-150 ml-2">
            <Paragraph text={`${remaining} left`} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDescription;
