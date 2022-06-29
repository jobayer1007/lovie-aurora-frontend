import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";

const Breadcrumbs = ({ page }) => {
  const router = useRouter();

  return (
    <>
      {page === 'auction' ?
        <div >
          <Link href="/auctions">
            <a className="hover:text-coolOrange transition duration-150 text-sm text-coolDarkGreen font-light capitalize">
              Home
            </a>
          </Link>
          <span className="text-coolDarkGreen text-xs mx-1">|</span>
          <Link href="/women">
            <a className="hover:text-coolOrange transition duration-150 text-sm text-coolDarkGreen font-light capitalize">
              Auctions
            </a>
          </Link>
          <span className="text-coolDarkGreen text-xs mx-1">|</span>
          <Link href="/auctions">
            <a className="hover:text-coolOrange transition duration-150 text-sm text-coolDarkGreen font-light capitalize">
              {router.query.slug}
            </a>
          </Link>
        </div> :
        page === 'pre-order' ?
          <div >
            <Link href="/categories">
              <a className="hover:text-coolOrange transition duration-150 text-sm text-coolDarkGreen font-light capitalize">
                Home
              </a>
            </Link>
            <span className="text-coolDarkGreen text-xs mx-1">|</span>
            <Link href="/clothing-accessories">
              <a className="hover:text-coolOrange transition duration-150 text-sm text-coolDarkGreen font-light capitalize">
                Pre-order
              </a>
            </Link>
            <span className="text-coolDarkGreen text-xs mx-1">|</span>
            <Link
              href="/[categories]/[slug]"
              as={`/${router.query.categories}/${router.query.slug}`}
            >
              <a className="hover:text-coolOrange transition duration-150 text-sm text-coolDarkGreen font-light capitalize">
                {router.query.slug}
              </a>
            </Link>
          </div> : <div >
            <Link href="/categories">
              <a className="hover:text-coolOrange transition duration-150 text-sm text-coolDarkGreen font-light capitalize">
                Home
              </a>
            </Link>
            <span className="text-coolDarkGreen text-xs mx-1">|</span>
            <Link href="/clothing-accessories">
              <a className="hover:text-coolOrange transition duration-150 text-sm text-coolDarkGreen font-light capitalize">
                Clothing & Accessories
              </a>
            </Link>
            <span className="text-coolDarkGreen text-xs mx-1">|</span>
            <Link href="/categories/[sub]" as={`/categories/${router.query.sub}`}>
              <a className="hover:text-coolOrange transition duration-150 text-sm text-coolDarkGreen font-light capitalize">
                {router.query.sub}
              </a>
            </Link>
            <span className="text-coolDarkGreen text-xs mx-1">|</span>
            <Link
              href="/[categories]/[slug]"
              as={`/${router.query.categories}/${router.query.slug}`}
            >
              <a className="hover:text-coolOrange transition duration-150 text-sm text-coolDarkGreen font-light capitalize">
                {router.query.slug}
              </a>
            </Link>
          </div>}
    </>

  );
};

export default Breadcrumbs;
