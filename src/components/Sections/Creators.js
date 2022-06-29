import React from 'react';
import Image from 'next/image';
import Heading from '../Typography/Heading';
import Link from 'next/link';
import { popularStories } from '@/data/popularStories';

const Creators = () => {
  return (
    <section className='mt-[5rem] mb-[8rem]'>
      <Link href='/sellers'>
        <a>
          <Heading h2 text='Meet Our Amazing Creators' margin='mb-4' />
        </a>
      </Link>
      <div className='grid grid-col-1 md:grid-cols-2 grid-rows-1 gap-10'>
        {popularStories.slice(0, 2).map((story) => (
          <div
            key={story.id}
            className='relative w-full h-[20rem] md:h-[30rem] cursor-pointer group'
          >
            <Image src={story.image} objectFit='cover' layout='fill' />

            <div className='w-0 h-0 border-b-white border-opacity-70 border-b-[80px] border-r-transparent border-r-[40px] border-l-transparent border-l-[40px] transform rotate-90 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:border-opacity-100 transition duration-150'></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Creators;
