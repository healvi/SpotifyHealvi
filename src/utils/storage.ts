
export const setStorage = (key : string, item : string) => window.localStorage.setItem(key, item);

export const getStorage = (key : string) => window.localStorage.getItem(key);

export const deleteStorage = () => window.localStorage.clear();

