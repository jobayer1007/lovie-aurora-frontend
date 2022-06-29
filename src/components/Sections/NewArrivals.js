import React from 'react';
import Carousel from '../DataDisplay/Carousel';
import Heading from '../Typography/Heading';
import Link from 'next/link';
import { newArrivals } from '@/data/newArrivals';

const NewArrivals = () => {
  return (
    <section className='mt-[5rem]'>
      <Link href='/new-arrivals'>
        <a>
          <Heading h2 text='New Arrivals' margin='mb-4 ml-3' />
        </a>
      </Link>

      {/* <Carousel items={newArrivals} size={false} /> */}
    </section>
  );
};

export default NewArrivals;
