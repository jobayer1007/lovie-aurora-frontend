import React from 'react';
import Layout from '@/components/layout/Layout';
import Image from 'next/image';
// import ContactForm from "../components/ContactForm/ContactForm";
import {
  Brand,
  BrandSmall,
  Income,
  IncomeSmall,
  Platform,
  PlatformSmall,
  Products,
  ProductsSmall,
} from '@/icons/SocialIcons';
// import SellerCTASection from "../components/sections/SellerCTASection";
// import Category from "../../models/Category";

const AboutUs = ({ categories }) => {
  return (
    <Layout categories={categories}>
      <div className='relative w-full h-[30rem] object-top'>
        <Image
          src='/images/about-us.png'
          objectFit='cover'
          layout='fill'
          className='object-top'
        />
        <div className='bg-coolBlack absolute w-full h-full bg-opacity-10 flex items-center justify-center flex-col'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl uppercase text-white font-semibold font-cool z-20 '>
            ABOUT US
          </h1>
        </div>
      </div>
      <div className='mb-14 mt-16 md:mt-40'>
        <div className='text-center'>
          <h1 className='uppercase md:tracking-[-2.4px] font-cool text-2xl md:text-5xl text-coolBlack font-semibold mb-2 md:mb-6 text-center'>
            What is Lovie Aurora
          </h1>
          <p className=' text-coolBlack text-sm md:text-[16px] text-coolBlack'>
            Lovie Aurora: a hassle-free shopping platform for both customers and
            creators
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 mb-20 md:mb-36'>
          <div className='place-self-center mb-10 md:mb-20 flex flex-col items-center'>
            <div className='md:block hidden'>
              <Income />
            </div>
            <div className='md:hidden block'>
              <IncomeSmall />
            </div>
            <p className=' text-coolBlack text-center mt-6'>
              All our products are uniquely designed with practicality
            </p>
          </div>
          <div className='place-self-center mb-10 md:mb-20 flex flex-col items-center'>
            <div className='md:block hidden'>
              <Platform />
            </div>
            <div className='md:hidden block'>
              <PlatformSmall />
            </div>

            <p className=' text-coolBlack mt-6 text-center'>
              Almost All our products are partly or completely handmade
            </p>
          </div>
          <div className='place-self-center mb-10 md:mb-0 flex flex-col items-center'>
            <div className='md:block hidden'>
              <Brand />
            </div>
            <div className='md:hidden block'>
              <BrandSmall />
            </div>
            <p className=' text-coolBlack mt-6 text-center'>
              Most of our products are eco-friendly and bio-degradable
            </p>
          </div>
          <div className='place-self-center flex flex-col items-center'>
            <div className='md:block hidden'>
              <Products />
            </div>
            <div className='md:hidden block'>
              <ProductsSmall />
            </div>
            <p className=' text-coolBlack mt-6 text-center'>
              Our products are sold directly by their creators - no middlemen
            </p>
          </div>
        </div>
        {/* CONTACT FORM */}
        <div className='relative w-full h-[20rem] object-top'>
          <Image
            src='/images/features-about-us.png'
            objectFit='cover'
            layout='fill'
            className='object-top'
          />
          <div className='bg-coolBlack absolute w-full h-full bg-opacity-10 flex items-center justify-center flex-col'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl uppercase text-white font-semibold font-cool z-20 '>
              Features
            </h1>
          </div>
        </div>

        <div className='flex items-center sm:items-start flex-col sm:flex-row justify-center gap-10 mt-20'>
          <div className='flex flex-col items-center flex-1'>
            <h3 className='text-[150px] md:text-[230px] font-cool font-medium text-coolBlack'>
              1
            </h3>
            <div className='border-t-4 border-gray-300 mb-10 h-1 w-[10rem]'></div>
            <div>
              <h4 className='font-medium text-sm text-center md:text-lg mt-2 text-coolBlack'>
                Uniquely designed products
              </h4>
            </div>
          </div>

          <div className='flex flex-col items-center flex-1'>
            <h3 className='text-[150px] md:text-[230px] font-cool font-medium text-coolBlack'>
              2
            </h3>
            <div className='border-t-4 border-gray-300 mb-10 h-1 w-[10rem]'></div>
            <div>
              <h4 className='font-medium text-sm text-center md:text-lg mt-2 text-coolBlack'>
                Free international shipping
              </h4>
            </div>
          </div>
        </div>
        <div className='flex items-center sm:items-start flex-col sm:flex-row justify-center mt-10'>
          <div className='flex flex-col items-center flex-1'>
            <h3 className='text-[150px] md:text-[230px] font-cool font-medium text-coolBlack'>
              3
            </h3>
            <div className='border-t-4 border-gray-300 mb-10 h-1 w-[10rem]'></div>
            <div>
              <h4 className='font-medium text-sm text-center md:text-lg mt-2 text-coolBlack'>
                Pre-order discounts for customers
              </h4>
            </div>
          </div>

          <div className='flex flex-col items-center flex-1'>
            <h3 className='text-[150px] md:text-[230px] font-cool font-medium text-coolBlack'>
              4
            </h3>
            <div className='border-t-4 border-gray-300 mb-10 h-1 w-[10rem]'></div>
            <div>
              <h4 className='font-medium text-sm text-center md:text-lg mt-2 text-coolBlack'>
                Open to customers and creators from all countries
              </h4>
            </div>
          </div>

          <div className='flex flex-col items-center flex-1'>
            <h3 className='text-[150px] md:text-[230px] font-cool font-medium text-coolBlack'>
              5
            </h3>
            <div className='border-t-4 border-gray-300 mb-10 h-1 w-[10rem]'></div>
            <div>
              <h4 className='font-medium text-sm text-center md:text-lg mt-2 text-coolBlack'>
                Eco-friendly and recycled packaging
              </h4>
            </div>
          </div>
        </div>
        {/* <SellerCTASection /> */}
      </div>
    </Layout>
  );
};

export default AboutUs;

// export async function getStaticProps() {
//   const categoryRes = await Category.find({});
//   const categoryData = await JSON.parse(JSON.stringify(categoryRes));
//   return {
//     props: { categories: categoryData },
//   };
// }
