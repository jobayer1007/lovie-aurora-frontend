import React, { useContext, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HeartOutline, Heart } from 'react-ionicons';
// import { wishlistContext } from '../../contexts/wishlistContext';
import ItemDescription from '../DataDisplay/ItemDescription';
import { useRecoilState } from 'recoil';
import WishListButton from '@/icons/WishListButton';
import ScorePopup from '@/popups/ScorePopup';
import { scorePopup } from '@/atoms/popup';

const CategoryLayout = ({ items }) => {
  // const { handleWishlistItems } = useContext(wishlistContext);
  const [heartHover, setHeartHover] = useState(false);
  const [scoreData, setScoreData] = useRecoilState(scorePopup);
  const handleOpenPopup = (type) => {
    setScoreData({ ...scoreData, type: type, open: true });
  };
  // console.log(items);
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3  md:grid-cols-3 lg:grid-cols-5 grid-rows-2 gap-8'>
      {/* <ScorePopup /> */}
      {items.slice(0, 7).map((item, index) => (
        <div
          key={item.id}
          className={`${
            index === 0
              ? 'row-span-2 col-span-4 hidden lg:block lg:row-span-2 lg:col-span-2 lg:h-[735px]'
              : 'lg:col-span-1 sm:col-span-1 aspect-[8/10]'
          } group cursor-pointer `}
        >
          <>
            <div
              style={{ height: `${index === 0 ? 'calc(100% + 1px)' : '100%'}` }}
              className={`bg-gray-500 relative`}
            >
              <Image
                src={item.supporting_images[0].url}
                objectFit='cover'
                layout='fill'
              />
              <Link
                href='/categories/[sub]/[slug]'
                as={`/categories/${item.sub.slug}/${item.slug}`}
              >
                <a className='h-full w-full bg-black absolute hover:opacity-100 opacity-0 bg-opacity-20 transition duration-200'></a>
              </Link>
              <WishListButton item={item} />
            </div>
            <ItemDescription
              store_name={item.store.store_name}
              name={item.name}
              reviews={`${item.reviews.length} reviews`}
              price={`$${item.price}`}
              slug={item.store.slug}
              remaining={item.remaining}
            />
          </>
          <div className='mt-1'>
            {index === 3 && (
              <div
                onClick={() => handleOpenPopup('handmade')}
                className='bg-coolOrange inline rounded-[2px] text-xs text-white px-1.5 py-[2px]'
              >
                Handmade
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryLayout;
