import React from 'react';
import Heading from '../Typography/Heading';
import Link from 'next/link';
import Carousel from '../DataDisplay/Carousel';
import { newArrivals } from '@/data/newArrivals';

const AuctionSection = () => {
  return (
    <section className='mt-[5rem]'>
      <Link href='/auction'>
        <a>
          <Heading h2 text='Auction' margin='mb-4 ml-3 font-bold' />
        </a>
      </Link>
      {/* <Carousel items={newArrivals} auction /> */}
    </section>
  );
};

export default AuctionSection;
