import React from 'react';
import Carousel from '../DataDisplay/Carousel';
import Heading from '../Typography/Heading';
import Link from 'next/link';
import { newArrivals } from '@/data/newArrivals';

const EditorsChoice = () => {
  return (
    <section className='mt-[5rem]'>
      <Link href='/editors-choice'>
        <a>
          <Heading h2 text='Editors Choice' margin='mb-4 ml-3' />
        </a>
      </Link>

      {/* <Carousel items={newArrivals} /> */}
    </section>
  );
};

export default EditorsChoice;
