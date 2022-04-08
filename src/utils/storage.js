export const setStorage = (key, item) => window.localStorage.setItem(key, item);

export const getStorage = (key) => window.localStorage.getItem(key);

export const deleteStorage = () => window.localStorage.clear();
