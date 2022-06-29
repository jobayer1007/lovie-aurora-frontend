export const getFromStorage = (key,value) => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem(`${key}`);
  }
};
