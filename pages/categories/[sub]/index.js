import Image from 'next/image';
import React, { useContext } from 'react';
// import Filters from "../../../components/Filters/Filters";
// import Layout from "../../../components/layout/Layout";
import Link from 'next/link';
import { HeartOutline } from 'react-ionicons';
// import ItemDescription from "../../../components/DataDisplay/ItemDescription";
// import { wishlistContext } from "../../../contexts/wishlistContext";
// import { Store } from "../../../../utils/Store";
import { useEffect } from 'react';
// import { setToStorage } from "../../../functions/setToStorage";
// import { categories } from '@/data/categories';
import Layout from '@/components/Layout/Layout';
import { API_URL } from '@/config/index';

const index = ({ data, items, categories }) => {
  console.log(items);
  // const categoryName = data.category.name;
  //  const { state, dispatch } = useContext(Store);
  // const { wishlist } = state;
  // const {
  //   addItemsToWishList,
  //   wishListItems,
  //   removeItemsFromWishList,
  // } = useContext(wishlistContext);

  // const handleWishlistItems = (newItem) => {
  //   const check = wishListItems.some((item) => item.id === newItem.id);
  //   if (check) {
  //     removeItemsFromWishList(newItem);
  //   } else {
  //     addItemsToWishList(newItem);
  //   }
  // };

  const handleWishlistItems = (newItem) => {
    // const check = wishlist.some((item) => item.id === newItem.id);
    // if (check) {
    //   removeItemsFromWishList(newItem);
    // } else {
    //   addItemsToWishList(newItem);
    // }
    console.log('wishlist clicked');
    console.log(newItem);
    //  const existItem = wishlist.find((x) => x._id === newItem._id);
    //  if (existItem) {
    //  wishlist.filter((x) => x._id !== newItem._id);
    //  } else {
    //  setToStorage("wishlist", JSON.stringify(newItem));
    // dispatch({ type: "ADD_TO_WISHLIST",payload:newItem });
  };
  // dispatch({ type: "ADD_TO_WISHLIST", payload: JSON.stringify(newItem) });
  //  };

  //  useEffect(() => {
  //    const filtered = wishlist.some((i) => i.id === item.id);
  //    if (filtered === true) {
  //      setIconCheck(true);
  //    } else {
  //      setIconCheck(false);
  //    }
  //  }, [wishlist]);

  return (
    <Layout categories={categories}>
      <div className='flex flex-col md:flex-row mt-20 mb-10 gap-20'>
        {/* Filters */}
        <div className='w-[16rem] hidden md:block mt-[7.1rem]'>
          {/* <h3 className="uppercase text-2xl font-semibold w-[12rem]">
            {categoryName}
          </h3> */}
          {/* <Filters /> */}
        </div>
        <div className='flex-1'>
          <h1 className='text-4xl text-center font-bold uppercase text-coolBlack font-cool'>
            {/* {data.name} */}
            commented out
          </h1>
          <p className='text-coolBlack text-md max-w-[48rem] text-center mx-auto mt-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            labore maxime nobis ipsam unde eaque debitis.
          </p>

          {/* ITEMS */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10'>
            {items.map((item) => (
              <div key={item.id}>
                <div className='relative aspect-[8/10] group cursor-pointer'>
                  <Image
                    src={item.supporting_images[0].url}
                    objectFit='cover'
                    layout='fill'
                  />
                  <Link
                    href='/categories/[sub]/[slug]'
                    as={`/categories/${data.slug}/${item.slug}`}
                  >
                    <a className='h-full w-full bg-black absolute hover:opacity-100 opacity-0 bg-opacity-20 transition duration-200 left-0 top-0'></a>
                  </Link>
                  <button
                    onClick={() => handleWishlistItems(item)}
                    className='opacity-0 absolute top-2 right-2 group-hover:opacity-100 transition duration-200 z-20'
                  >
                    <HeartOutline height='30px' width='30px' color='white' />
                  </button>
                </div>
                <ItemDescription
                  store_name={item.store.store_name}
                  name={item.name}
                  reviews={`${item.reviews.length} reviews`}
                  price={`$${item.price}`}
                  slug={item.store.slug}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;

// export async function getStaticPaths() {
//   const api = process.env.NEXT_PUBLIC_API;
//   const res = await fetch(`${api}/subs`);
//   const data = await res.json();

//   const paths = data.map((item) => {
//     return {
//       params: { sub: item.slug },
//     };
//   });

//   return {
//     paths: paths,
//     fallback: "blocking",
//   };
// }

// export async function getStaticProps(ctx) {
//   const api = process.env.NEXT_PUBLIC_API;
//   const { sub } = ctx.params;
//   console.log(sub);
//   const res = await fetch(`${api}/subs?slug=${sub}`);
//   const data = await res.json();
//   const categoryRes = await fetch(`${api}/categories`);
//   const categoryData = await categoryRes.json();
//   const itemsRes = await fetch(`${api}/items?sub.slug=${sub}`);
//   const itemsData = await itemsRes.json();
//   console.log(data);
//   return {
//     props: { data: data[0], items: itemsData, categories: categoryData },
//   };
// }

export async function getServerSideProps({ query: { sub } }) {
  // const res = await fetch(`${API_URL}/api/categories/${sub}`);
  // const products = await res.json();

  // return {
  //   props: {
  //     items: products,
  //   },
  // };

  // const res = await fetch(`${API_URL}/api/products/subs?slug=${sub}`);
  // const data = await res.json();
  const categoryRes = await fetch(`${API_URL}/categories`);
  const categoryData = await categoryRes.json();
  const itemsRes = await fetch(`${API_URL}/api/products?sub.slug=${sub}`);
  const itemsData = await itemsRes.json();
  return {
    props: { data: data[0], items: itemsData, categories: categoryData },
  };
}
