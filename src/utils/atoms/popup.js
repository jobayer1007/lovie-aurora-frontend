import { atom } from 'recoil';

export const modalState = atom({
  key: 'modal-state',
  default: false,
});

export const loginModal = atom({
  key: 'login-state',
  default: false,
});

export const paypalpopup = atom({
  key: 'paypal',
  default: false,
});

export const Paypaldraw = atom({
  key: 'paypal-withdraw',
  default: false,
});

export const bankWithdraw = atom({
  key: 'bank-withdraw',
  default: false,
});

export const createProfilePopup = atom({
  key: 'create-profile-popup',
  default: {
    type: 'create',
    show: false,
  },
});
export const OrderPopup = atom({
  key: 'order-popup',
  default: {
    type: 'cancel',
    show: false,
  },
});
export const reviewPopup = atom({
  key: 'review-popup',
  default: false,
});
export const sellership = atom({
  key: 'seller-ship',
  default: false,
});
export const buyerPopup = atom({
  key: 'buyer-popup',
  default: {
    type: 'changePassword',
    open: false,
  },
});
export const scorePopup = atom({
  key: 'score-popup',
  default: {
    type: 'handmade',
    open: false,
  },
});
export const financePopup = atom({
  key: 'finance-popup',
  default: {
    type: 'GoToPaypal',
    open: false,
  },
});
export const sellerPopup = atom({
  key: 'seller-popup',
  default: {
    type: 'ApplyForMoreUnits',
    open: false,
    cardData: {},
    accountData: {},
  },
});
export const scoreExplain = atom({
  key: 'score-explain',
  default: {
    type: 'HS',
    open: false,
  },
});

export const variation = atom({
  key: 'add-variation',
  default: {
    open: false,
  },
});
// export const variation1 = atom({
//   key: "addVariation",
//   default: {

//     open: false
//   }
// });
// export const variation = atom({
//   key: "addVariation",
//   default: {

//     open: false
//   }
// });
