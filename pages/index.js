import Layout from '@/components/Layout/Layout';
import AuctionSection from '@/components/Sections/AuctionSection';
import BestSellersSection from '@/components/Sections/BestSellersSection';
import Creators from '@/components/Sections/Creators';
import DealsSection from '@/components/Sections/DealsSection';
import EditorsChoice from '@/components/Sections/EditorsChoice';
import HeroSection from '@/components/Sections/HeroSection';
import NewArrivals from '@/components/Sections/NewArrivals';
import PopularStories from '@/components/Sections/PopularStories';
import PreOrder from '@/components/Sections/PreOrder';
import ShopHomeSection from '@/components/Sections/ShopHomeSection';
import { API_URL } from '@/config/index';
// import { data } from '@/data/itemsData';

// import categories from db later
import { categories } from '@/data/categories';

export default function HomePage({ products }) {
  console.log(products);
  return (
    <Layout categories={categories}>
      {/* make HeroSection dynamic */}
      <HeroSection
        imageUrl='/images/hero-image.jpg'
        text='Meet the makers'
        paragraph="We're Lovie Aurora, a community-driven online marketplace that
          connects you with uinique, exciting creators and their products from
          all over the world."
      />
      <div className='max-w-[1320px] mx-auto'>
        <BestSellersSection items={products} />
        {/* <ShopHomeSection items={data} /> */}
        <DealsSection />
        {/* <NewArrivals /> */}
        {/* <EditorsChoice /> */}
        {/* <AuctionSection /> */}
        {/* <PreOrder /> */}
        {/* <PopularStories stores={stores} /> */}
        {/* <Creators /> */}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/products`);
  const products = await res.json();

  return {
    props: { products },
    // revalidate: 100,
  };
}
