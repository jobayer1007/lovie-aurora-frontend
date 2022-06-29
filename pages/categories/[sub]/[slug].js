import React, { useContext, useState, useEffect } from "react";
import Layout from "../../../components/layout/Layout";
import Breadcrumbs from "../../../components/navigation/Breadcrumbs";
import Paragraph from "../../../components/Typography/Paragraph";
import SuperTitle from "../../../components/Typography/SuperTitle";
import ProductImageGrid from "../../../components/ProductImageGrid";
import Heading from "../../../components/Typography/Heading";
import StarReviews from "../../../components/DataDisplay/StarReviews";
import Carousel from "../../../components/DataDisplay/Carousel";
import { newArrivals } from "../../../data/index";
import Colour2 from "../../../components/ProductOptions/Colour2";
import Size2 from "../../../components/ProductOptions/Size2";
import Quantity from "../../../components/ProductOptions/Quantity";
import Button from "../../../components/inputs/Button";
import Tabs from "../../../components/navigation/Tabs";
import Description from "../../../components/ProductViews/Description";
import Reviews from "../../../components/ProductViews/Reviews";
import ShippingAndReturns from "../../../components/ProductViews/ShippingAndReturns";
import IconGroup from "../../../components/icons/IconGroup";
import { Chat } from "../../../components/icons/SocialIcons";
import Link from "next/link";
import Style from "../../../components/ProductOptions/Style";
import { useRouter } from "next/router";
import { uuid } from "uuidv4";
import { cartContextTwo } from "../../../contexts/cartContextTwo";
import SellerDataIcon from "../../../components/SellerDataIcon";
import Customize from "../../../components/ProductOptions/Customize";
import Items from "../../../../models/Items";
import { addToCart } from "../../../../redux/cartSlice";
import { Store } from '../../../../utils/Store'
import Category from "../../../../models/Category";
import { setToStorage } from "../../../functions/setToStorage";
import { useDispatch, useSelector } from "react-redux";
import db from "../../../../utils/db";
import axios from "axios";

const ItemPage = ({ item, categories }) => {


  // const {addToCart} = useSelector(state=>state.cart)
  console.log(item)

  // const { addItemsToCart, cartItems } = useContext(cartContextTwo);

  // const {cartItems}=useSelector(store=>store.cart)


  const [selected, setSelected] = useState("Description");
  const [selectedColours, setSelectedColours] = useState(
    item.colours[0].colour
  );
  const [openColours, setOpenColours] = useState(false);
  const [selectedSize, setSelectedSize] = useState(item.sizes[0].size);
  const [selectedStyle, setSelectedStyle] = useState("Silk");
  const [openSizes, setOpenSizes] = useState(false);
  const [openStyles, setOpenStyles] = useState(false);
  const [qty, setQuantity] = useState(1);
  const [btnDisabled, setButtonDisabled] = useState(false);
  const router = useRouter();

  const { state, dispatch } = useContext(Store)


  const addItem = async(item) => {
   
    const newItem = item;
    newItem.image = item.supporting_images
    newItem.options = {
      colours: selectedColours,
      style: selectedStyle,
      sizes: selectedSize,
      quantity: qty,
    };
    const existItem = state.cart.cartItems.find((x) => x._id === item._id);
    console.log(existItem)
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item.id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    // const quantity = existItem ? newItem.options.quantity + 1 : 1;

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...newItem, quantity } })
  };


 const addToWishlist = (item) => {
   dispatch({ type: "ADD_TO_WISHLIST", payload: JSON.stringify(item) });
 };




  const handleBuyNow = () => {
    const newItem = item;
    newItem.options = {
      colours: selectedColours,
      style: selectedStyle,
      sizes: selectedSize,
      quantity: qty,
    };
    newItem.removeId = uuid();
    // addItemsToCart(newItem);
    router.push('/checkout')
  }

  return (
    <Layout categories={categories}>
      <Breadcrumbs />
      <div className="lg:flex lg:items-start mt-6">
        <ProductImageGrid
          item={item}
          supportingImages={item.supporting_images}
        />
        <div className="lg:ml-10 mt-[-7px] w-full">
          <Link href="/sellers/[slug]" as={`/sellers/${item.store.slug}`}>
            <a>
              <SuperTitle size="text-lg" color='text-coolBlack' text={item.store.store_name} />
            </a>
          </Link>

          <div className="flex  items-center mt-1">
            <Paragraph text="Followers: 5674" margin="mr-10" />
            <Paragraph text={`Store Sales: ${item.number_of_sales}`} />
          </div>
          <h1 className="text-[22px]  text-gray-700 tracking-tighter uppercase font-medium mt-4">
            {item.name}
          </h1>
          <div className="flex items-center">
            <button
              onClick={() => {
                setSelected("Reviews");
                router.push("#reviews");
              }}
            >
              <StarReviews />
            </button>
            <Paragraph text="4.9" margin="ml-4" />
            <span className="text-xs font-light  text-coolBlack mx-1">|</span>
            <Paragraph text={`${item.reviews.length} reviews`} />
            <span className="text-xs font-light  text-coolBlack mx-1">|</span>
            <Paragraph text={`${item.number_of_sales} sales`} />
          </div>
          <div className="flex items-center mt-5  gap-x-4 " >
            <SellerDataIcon icon={{ type: 'HS', score: '35' }} margin="mt-4" />
            <SellerDataIcon icon={{ type: 'OS', score: '101' }} margin="mt-4" />
          </div>
          <div className="mt-4 ml-4">
            <ul>
              <li className="text-coolBlack text-sm leading-relaxed list-disc">
                It is a long established fact that a reader will be distracted
              </li>
              <li className="text-coolBlack text-sm leading-relaxed list-disc">
                It is a long established fact that a reader will be distracted
              </li>
              <li className="text-coolBlack text-sm leading-relaxed list-disc">
                It is a long established fact that a reader will be distracted
              </li>
            </ul>
          </div>
          <div className="mt-6 flex gap-10">
            <div>
              <p className="font-bold text-xs text-coolBlack mb-3">
                LAID:{" "}
                <span className="font-normal text-coolBlack">LA123456789</span>
              </p>
              <p className="text-xs text-coolBlack font-bold">
                Weight: <span className="font-normal text-coolBlack">85g</span>
              </p>
            </div>
            <div
              className="flex items-start flex-col"
            >
              <p className="font-bold text-xs text-coolBlack mb-3">
                Dimension:{" "}
                <span className="font-normal  text-coolBlack">
                  20 / 10 / 20 cm
                </span>
              </p>
              <p className="font-bold text-xs text-coolBlack">
                Material:{" "}
                <span className="font-normal  text-coolBlack">100% Cotton</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col items-stretch gap-4 mt-6">

            <Style
              styles={item.colours}
              open={openStyles}
              setOpen={setOpenStyles}
              selected={selectedStyle}
              setSelected={setSelectedStyle}
            />

            <Colour2
              colours={item.colours}
              open={openColours}
              setOpen={setOpenColours}
              selected={selectedColours}
              item={item}
              setSelected={setSelectedColours}
            />

            <Size2
              sizes={item.sizes}
              selected={selectedSize}
              setSelected={setSelectedSize}
              open={openSizes}
              setOpen={setOpenSizes}
              item={item}
            />
            <Quantity quantity={qty} setQuantity={setQuantity} />
            <Customize />
          </div>
          <div className="flex items-center gap-4 mt-7">
            <Button
              padding='py-2.5 px-4'
              onClick={() => handleBuyNow(item)}
              text="Buy It Now" />
            <Button
              padding='py-2.5 px-4'
              disabled={btnDisabled}
              disabledOpacity={btnDisabled}
              onClick={() => addItem(item)}
              text="Add To Cart"
            />
            {/* <Button text="Customize" /> */}
          </div>
          <div className="flex items-center mt-10 gap-4">
            <Heading size="text-3xl font-bold text-coolBlack" className='text-coolBlack' h3 text={`$${item.price}`} />
            <Paragraph text="Local taxes included" className='text-coolBlack' />
          </div>

          <div className="mt-6 mb-6 w-full border-b border-borderColor pb-6 flex items-center justify-between">
            <div id="reviews" className="flex items-center">
              <Chat size="30" color />
              <p className="md:block hidden text-xs ml-2 text-coolBlack">Contact Store</p>
            </div>
            <IconGroup color />
          </div>
          <ShippingAndReturns />
        </div>
      </div>
      <div className="mt-14 pt-10 mb-24 border-t border-borderColor">
        <div className="flex item-start justify-between gap-10">
          <div className="w-[40rem]">
            <Tabs selected={selected} setSelected={setSelected} />
            {selected === "Description" && (
              <Description description={item.description} />
            )}
            {selected === "Reviews" && (
              <Reviews
                reviews={item.reviews}
                imageUrl={item.supporting_images}
                productName={item.name}
              />
            )}
          </div>
        </div>
        <Heading h2 text="More from this store..." margin="mt-20 mb-4 ml-3" />
        <Carousel items={newArrivals} size={true} />

        <Heading h2 text="You may also like..." margin="mt-20 mb-4 ml-3" />
        <Carousel items={newArrivals} size={true} />

        <Heading h2 text="Others are looking at..." margin="mt-20 mb-4 ml-3" />
        <Carousel items={newArrivals} size={true} />
      </div>
    </Layout>
  );
};

export default ItemPage;

export async function getStaticPaths() {
  // const api = process.env.NEXT_PUBLIC_API;
  await db.connect()
  const res = await Items.find({})
  const data = JSON.parse(JSON.stringify(res));

  const paths = data.map((item) => {
    return {
      params: { sub: item.category.slug, slug: item.slug },
    };
  });

  await db.disconnect()

  return {
    paths: paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(ctx) {
  // const api = process.env.NEXT_PUBLIC_API;
  await db.connect()
  const slug = ctx.params.slug;
  console.log(slug);
  const res = await Items.find({ slug: slug })

  const data = JSON.parse(JSON.stringify(res));

  // const categoryRes = await fetch(`${api}/categories`);
  const categoryRes = await Category.find({})

  // const categoryData = await categoryRes.json();
  const categoryData = await JSON.parse(JSON.stringify(categoryRes))
  await db.disconnect()
  return {
    props: { item: data[0], categories: categoryData },
    revalidate: 200,
  };
}
