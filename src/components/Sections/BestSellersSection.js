import React from 'react';
import Heading from '../Typography/Heading';
import Link from 'next/link';
import CategoryLayout from '../layout/CategoryLayout';

const BestSellersSection = ({ items }) => {
  const bestSellerItems = items
    .slice(0, 7)
    .sort((a, b) => b.number_of_sales - a.number_of_sales);

  return (
    <section className='mt-[5rem]'>
      <Link href='/bestsellers'>
        <a>
          <Heading h2 text='BestSellers' margin='mb-4' />
        </a>
      </Link>
      <CategoryLayout items={bestSellerItems} />
    </section>
  );
};

export default BestSellersSection;
