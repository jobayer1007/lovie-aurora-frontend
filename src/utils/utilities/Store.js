import Cookies from 'js-cookie';
import { createContext, useReducer, useState } from 'react';
import { getFromStorage } from '@/functions/getFromStorage';
import { setToStorage } from '@/functions/setToStorage';

export const Store = createContext();
const initialState = {
  cart: {
    // cartItems: Cookies.get('cartItems')
    //   ? JSON.parse(Cookies.get('cartItems'))
    //   : [],
    cartItems: getFromStorage('cartItems')
      ? JSON.parse(getFromStorage('cartItems'))
      : [],

    shippingAddress: getFromStorage('shippingAddress')
      ? JSON.parse(getFromStorage('shippingAddress'))
      : {},
    paymentMethod: getFromStorage('paymentMethod')
      ? getFromStorage('paymentMethod')
      : '',
    paymentResult: getFromStorage('paymentResult')
      ? JSON.parse(getFromStorage('paymentResult'))
      : {},
  },
  userInfo: Cookies.get('userInfo')
    ? JSON.parse(Cookies.get('userInfo'))
    : null,
  wishlist: getFromStorage('wishlist')
    ? JSON.parse(getFromStorage('wishlist'))
    : [],
  buyNowItems: getFromStorage('buyItems')
    ? JSON.parse(getFromStorage('buyItems'))
    : [],
};

console.log(initialState.cart.cartItems);

function reducer(state, action) {
  switch (action.type) {
    case 'CART_ADD_ITEM': {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      setToStorage('cartItems', JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }

    case 'ADD_TO_WISHLIST': {
      const newItem = action.payload;
      const existItem = state.wishlist.find((item) => item._id === newItem._id);
      const wishlist = existItem
        ? state.wishlist.filter((x) => x._id !== action.payload._id)
        : [...state.wishlist, newItem];
      setToStorage('wishlist', JSON.stringify(wishlist));
      return { ...state, wishlist };
    }

    case 'CART_REMOVE_ITEM': {
      const cartItems = state.cart.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      setToStorage('cartItems', JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }

    case 'SAVE_SHIPPING_ADDRESS':
      return {
        ...state,
        cart: {
          ...state.cart,
          shippingAddress: {
            ...state.cart.shippingAddress,
            ...action.payload,
          },
        },
      };

    case 'SAVE_PAYMENT_METHOD':
      return {
        ...state,
        cart: { ...state.cart, paymentMethod: action.payload },
      };
    case 'CART_CLEAR':
      return { ...state, cart: { ...state.cart, cartItems: [] } };
    case 'USER_LOGIN':
      return { ...state, userInfo: action.payload };
    case 'USER_LOGOUT':
      return {
        ...state,
        userInfo: null,
        cart: {
          cartItems: [],
          shippingAddress: { location: {} },
          paymentMethod: '',
        },
      };
    case 'PAYMENT_RESULT':
      return {
        ...state,
        cart: { ...state.cart, paymentResult: action.payload },
      };

    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
