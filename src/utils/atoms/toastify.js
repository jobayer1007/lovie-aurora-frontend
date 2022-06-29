import { atom } from 'recoil';

export const toastState = atom({
  key: 'toast-state',
  default: false,
});
