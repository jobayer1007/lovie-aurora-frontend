import React from "react";
import Image from "next/image";
import Link from "next/link";
import Heading from "../Typography/Heading";
import Paragraph from "../Typography/Paragraph";
import StarReviews from "../DataDisplay/StarReviews";

const StoreCard = ({ stores, type }) => {
  const api = process.env.NEXT_PUBLIC_API;
  return (
    <div className={` grid md:grid-cols-2 lg:grid-cols-3 gap-10`}>
      {stores.map((store, index) => (
        <div key={store.id} className={`${type === 'following' ? 'w-[276px]' : ''} group cursor-pointer`}>
          {type === 'following' ? <div className={`h-[276px] w-[276px] bg-gray-50 relative`}>
            <Image
              src={`${store.store_image}`}
              layout="fill"
              objectFit="cover"
            />
            <Link href="/sellers/[slug]" as={`/sellers/${store.slug}`}>
              <a className="h-full w-full bg-black absolute hover:opacity-100 opacity-0 bg-opacity-20 transition duration-200"></a>
            </Link>
          </div> : <div className={`h-[450px] lg:h-[500px] bg-gray-50 relative`}>
            <Image
              src={`${store.store_image}`}
              objectFit="cover"
              layout="fill"
            />
            <Link href="/sellers/[slug]" as={`/sellers/${store.slug}`}>
              <a className="h-full w-full bg-black absolute hover:opacity-100 opacity-0 bg-opacity-20 transition duration-200"></a>
            </Link>
          </div>}
          <div className="mt-4 text-coolBlack">
            <Heading
              h3
              text={store.store_name}
              size="text-[28px] tracking-[-2px] uppercase"
            />
            <div>
              <div className="flex items-center mb-4">
                <StarReviews />
                <Paragraph
                  margin="ml-2"
                  text={`${store.number_of_reviews} reviews`}
                />
              </div>

              <Paragraph margin="mt-2" text={store.store_description} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StoreCard;
