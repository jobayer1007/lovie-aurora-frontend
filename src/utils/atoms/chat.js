import { atom } from 'recoil';

export const chatState = atom({
  key: 'chat-state',
  default: {
    showProfiles: true,
    chatId: null,
  },
});
