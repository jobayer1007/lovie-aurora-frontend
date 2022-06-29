import React from 'react';
import { popularStories } from '@/data/popularStories';
import Image from 'next/image';
import { ArrowForward } from 'react-ionicons';
import BigArrow from '@/icons/BigArrow';
import Heading from '../Typography/Heading';
import Link from 'next/link';

const PopularStories = ({ stores }) => {
  const api = process.env.NEXT_PUBLIC_API;
  return (
    <section className='mt-[5rem]'>
      <Link href='/blog'>
        <a>
          <Heading h2 text='Popular Stories' margin='mb-4' />
        </a>
      </Link>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
        {stores.slice(0, 3).map((store) => (
          <Link
            key={store.id}
            href='/sellers/[slug]'
            as={`/sellers/${store.slug}`}
          >
            <a className='relative w-full aspect-[9/10] cursor-pointer group'>
              <Image src={store.store_image} objectFit='cover' layout='fill' />
              <div className='h-full w-full bg-black absolute hover:opacity-100 opacity-0 bg-opacity-20 transition duration-200 z-10'>
                <div className='bottom-6 right-6 absolute -translate-x-4 transition duration-300 group-hover:translate-x-0'>
                  <BigArrow />
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PopularStories;
