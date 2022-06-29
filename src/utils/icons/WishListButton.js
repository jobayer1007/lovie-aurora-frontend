import { setToStorage } from '@/functions/setToStorage';
import { Store } from '@/utilities/Store';
import React, { useContext, useEffect, useState } from 'react';
import { Heart, HeartOutline } from 'react-ionicons';
// import { wishlistContext } from '../../contexts/wishlistContext';

const WishListButton = ({ item, small }) => {
  const [iconCheck, setIconCheck] = useState(false);
  // const  wishListItems=[]
  const { state, dispatch } = useContext(Store);
  const { wishlist } = state;

  // const handleWishList = (newItem) => {
  //   // const check = wishListItems.some((item) => item.id === newItem.id);
  //   // if (check) {
  //   //   removeItemsFromWishList(newItem);
  //   // } else {
  //   //   addItemsToWishList(newItem);
  //   // }
  // };
  const handleWishList = (newItem) => {
    if (iconCheck) {
      let filtered = wishlist.filter((x) => x._id !== newItem._id);
      setToStorage('wishlist', JSON.stringify(filtered));
      setIconCheck(false);
    } else {
      // dispatch({ type: "ADD_TO_WISHLIST", payload: JSON.stringify(newItem) });
      setToStorage('wishlist', JSON.stringify([...wishlist, newItem]));
      setIconCheck(true);
    }

    console.log(wishlist);

    // console.log('wishlist clicked')
    // const existItem=wishlist.find(x=>x._id===newItem._id)
    // if(existItem){
    // }else{
    //   setToStorage('wishlist',JSON.stringify(newItem))
    // }
  };

  useEffect(() => {
    if (wishlist) {
      const filtered = wishlist.find((i) => i.id === item.id);
      if (filtered === true) {
        setIconCheck(true);
      } else {
        setIconCheck(false);
      }
    }
  }, [wishlist]);

  return (
    <>
      {small ? (
        <button
          onClick={() => handleWishList(item)}
          className='md:opacity-0 absolute top-[4px] right-[4px] md:group-hover:opacity-100 transition duration-200 z-20'
        >
          {iconCheck ? (
            <Heart height='20px' width='20px' color='white' />
          ) : (
            <HeartOutline height='20px' width='20px' color='white' />
          )}
        </button>
      ) : (
        <button
          onClick={() => handleWishList(item)}
          className='md:opacity-0  right-2 md:group-hover:opacity-100 transition duration-200 z-20 absolute top-2'
        >
          {iconCheck ? (
            <Heart height='30px' width='30px' color='white' />
          ) : (
            <HeartOutline height='30px' width='30px' color='white' />
          )}
        </button>
      )}
    </>
  );
};

export default WishListButton;
