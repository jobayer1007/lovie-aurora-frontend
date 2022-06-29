import React from 'react';
import Heading from '../Typography/Heading';
// import { preOrders } from "../../data";
import Image from 'next/image';
import StarReviews from '../DataDisplay/StarReviews';
import Link from 'next/link';
import { preOrders } from '@/data/preOrders';

const PreOrder = () => {
  return (
    <section className='mt-[5rem]'>
      <Link href='/pre-order'>
        <a>
          <Heading h2 text='Pre-order' margin='mb-4' />
        </a>
      </Link>

      <div className='flex items-center gap-10 flex-wrap'>
        {preOrders.map((preOrder) => (
          <div key={preOrder.id} className='grow'>
            <div className='relative h-[24rem] md:h-[30rem] w-full'>
              <Image src={preOrder.image} objectFit='cover' layout='fill' />
            </div>
            <div className='flex items-stretch justify-between mt-6'>
              <div className='h-full'>
                <p className='font-md text-coolBlack uppercase text-sm mb-1'>
                  {preOrder.tag}
                </p>
                <h3 className='text-xl font-medium text-coolBlack'>
                  {preOrder.title}
                </h3>
                <div className='flex items-center my-1.5'>
                  <StarReviews />
                  <p className='text-[0.7rem] mt-0.5 ml-2 text-coolBlack'>
                    321 reviews
                  </p>
                </div>
                <div className='flex items-center mt-1 space-x-2'>
                  <p className='text-coolBlack text-lg font-semibold '>
                    ${preOrder.price}
                  </p>
                  <span className='text-xs text-coolBlack'>3 left</span>
                </div>
              </div>
              {/* <div className="min-h-full flex flex-col">
                <button className="bg-coolDarkGreen text-white px-4 text-sm py-4 hover:bg-opacity-70 transition duration-150">
                  Share to join Waitlist
                </button>
                <p className="text-sm mt-auto self-end">
                  On waitlist:{" "}
                  <span className="text-red-400 font-medium">
                    {preOrder.onWaitlist}
                  </span>{" "}
                </p>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PreOrder;
