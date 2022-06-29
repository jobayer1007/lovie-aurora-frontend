import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navigations/Navbar';
import HeroSection from '../Sections/HeroSection';

const Layout = ({ title, keywords, description, children, categories }) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>

      {router.pathname === '/' && (
        <div className='max-w-[1320px] mx-auto mb-3.5'>
          <div className='bg-gray-100 mx-4 md:mx-8 flex items-center justify-center text-sm py-3.5 text-coolBlack'>
            International Free Shipping
          </div>
        </div>
      )}

      <Navbar categories={categories} />

      {/* {
        (router.pathname = '/' && (
          <HeroSection
            imageUrl='/images/hero-image.jpg'
            text='Meet the makers'
            paragraph="We're Lovie Aurora, a community-driven online marketplace that
          connects you with uinique, exciting creators and their products from
          all over the world."
          />
        ))
      } */}
      <div className='max-w-[1320px] mt-6 px-4 md:px-8 w-full mx-auto'>
        {children}
        {/* {router.pathname !== '/auth/signup' && */}
        {/* router.pathname !== '/auth/signin' && <MailingListSection />} */}
      </div>

      <Footer />
    </div>
  );
};

export default Layout;

Layout.defaultProps = {
  title: 'Lovie Aurora: Original, Handmade and Quality Products',
  description:
    'Lovie Aurora was founded on the very simple idea that online shopping should be a stress-free, enjoyable experience, where 1000’s of high-quality products from an international roster of businesses are quickly and expertly organised to showcase to an active social community of buyers.',
  keywords: 'lovie, quality products',
};
