import React, { useEffect, useRef, useState } from 'react';
// import Image from "next/image";
// import Link from "next/link";
// import Heading from "../Typography/Heading";
// import StarReviews from "../DataDisplay/StarReviews";
// import Paragraph from "../Typography/Paragraph";
// import { categories } from "../../data/index";
// import Carousel from "../DataDisplay/Carousel";

const SearchDropdown = ({
  categories: items,
  open,
  setOpen,
  setSearch,
  setOpenMenu,
  search,
}) => {
  const node = useRef();
  const handleClick = (e) => {
    // if (node.current.contains(e.target)) {
    //   // inside click
    //   return;
    // }
    // outside click
    setOpen(false);
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('scroll', () => setOpen(false));
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const checkPaths = (slug) => {
    if (slug === 'pre-order') {
      return '/pre-orders';
    }
    if (slug === 'sale') {
      return '/sales';
    }
    if (slug === 'auction') {
      return '/auctions';
    }
    return slug;
  };

  const [query, setQuery] = useState('');

  return (
    // <div
    //   ref={node}
    //   className="absolute max-w-[100%] bg-white left-0 w-full py-10 lg:-bottom-[27.9rem] px-8 flex items-start gap-10"
    // >
    //   {/* TENDY PRODUCTS */}
    //   <div className="hidden lg:block">
    //     <div className="flex mb-4 pr-3 items-center">
    //       <h3 className="font-cool mr-auto uppercase font-semibold text-lg">
    //         Trendy Products
    //       </h3>
    //     </div>
    //     <div className="flex items-center gap-4 ">
    //       {items[3].items.slice(0, 3).map((item) => (
    //         <div key={item.id} className=" transition duration-300 group mr-2">
    //           <Link
    //             href="/categories/[sub]/[slug]"
    //             as={`/categories/${categories[3].subs[0].slug}/${item.slug}`}
    //           >
    //             <a>
    //               <div className="relative h-[14rem] aspect-[8/10]">
    //                 <Image
    //                   src={item.supporting_images[0].url}
    //                   objectFit="cover"
    //                   layout="fill"
    //                 />
    //               </div>
    //             </a>
    //           </Link>
    //           <div className="mt-2 lg:mt-2 text-coolBlack relative group w-full">
    //             <Link href='/coopers'>
    //               <a className="uppercase tracking-[-0.02] md:tracking-[-0.05em] font-[300] text-[7px] md:text-[12px] text-coolBlack hover:underline">
    //                 COOPER'S
    //               </a>
    //             </Link>

    //             <Heading h3 text={item.name} size="text-coolBlack text-base truncate" />
    //             <div className="flex md:items-center flex-row sm:flex-col md:flex-row mt-1">
    //               <StarReviews />
    //               <Paragraph
    //                 margin="text-coolBlack ml-2 sm:ml-0 md:ml-2"
    //                 text="231"
    //                 size="text-[0.7rem]"
    //               />
    //             </div>
    //             <div className="mt-1 flex items-center ">
    //               <Heading h3 text={`$${item.price}`} size="text-coolBlack  text-base" />
    //               <div className='hidden group-hover:flex'>
    //                 <Paragraph
    //                   margin="text-coolBlack ml-2 sm:ml-0 md:ml-2"
    //                   text="4 left"
    //                   size="text-[0.7rem]"
    //                 />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       ))}

    //     </div>
    //   </div>

    //   {/* SUGGESTED SEARCHES */}
    //   <div className="w-full text-center md:text-left md:w-[12rem]">
    //     <h3 className="mb-4 font-cool uppercase font-semibold text-lg">
    //       Suggestions
    //     </h3>
    //     <div>
    //       <p
    //         onClick={() => {
    //           setSearch("ribbed button vest");
    //           setOpenMenu(false);
    //         }}
    //         className="text-coolBlack text-sm mb-4 cursor-pointer hover:text-coolBlack"
    //       >
    //         Ribbed Button Vest
    //       </p>
    //       <p
    //         onClick={() => {
    //           setSearch("white t-shirt");
    //           setOpenMenu(false);
    //         }}
    //         className="text-coolBlack text-sm mb-4 cursor-pointer hover:text-coolBlack"
    //       >
    //         White T-shirt
    //       </p>
    //       <p
    //         onClick={() => {
    //           setSearch("blue jeans");
    //           setOpenMenu(false);
    //         }}
    //         className="text-coolBlack text-sm cursor-pointer hover:text-coolBlack"
    //       >
    //         Blue Jeans
    //       </p>
    //     </div>
    //   </div>

    //   {/* CATEGORIES */}
    //   <div className="hidden md:block">
    //     <Link href="/categories">
    //       <a className="mb-4 font-cool uppercase text-coolBlack font-semibold text-lg">
    //         Categories
    //       </a>
    //     </Link>

    //     <div className="grid grid-cols-2 text-coolBlack gap-4 mt-5">
    //       {categories.map((category) => (
    //         <Link key={category.id} href={checkPaths(category.slug)}>
    //           <a
    //             onClick={() => setOpenMenu(false)}
    //             className=" text-coolBlack text-sm cursor-pointer hover:text-coolBlack"
    //           >
    //             {category.name}
    //           </a>
    //         </Link>
    //       ))}
    //       <Link href="/sellers">
    //         <a
    //           onClick={() => setOpenMenu(false)}
    //           className="text-coolBlack font-bold text-sm hover:text-coolBlack"
    //         >
    //           All Stores
    //         </a>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <>
      <div className='absolute max-w-[100%] bg-white left-0 w-full py-10  px-8 flex items-center flex-col gap-10 text-center space-y-5'>
        {itemsData.filter((product) =>
          product.name
            .toLowerCase()
            .includes(search)
            .map((p) => <h3>{p.name}</h3>)
        )}
      </div>
    </>
  );
};

export default SearchDropdown;
