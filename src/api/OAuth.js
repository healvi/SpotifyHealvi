import { deleteStorage, getStorage } from '../utils/storage';
export const isAuthStorage = !!getStorage('token');
const { hash } = window.location;
export const authGenerate = () => {
  if (isAuthStorage) {
    return {
      token: getStorage('token'),
    };
  }

  if (!hash) {
    const errorMessage = window.location.href.split('error=')[1];
    if (errorMessage) {
      throw new Error(errorMessage);
    } else {
      throw new Error('Not authenticated');
    }
  }

  const token = hash
    .substring(1)
    .split('&')
    .find((elem) => elem.startsWith('access_token'))
    .split('=')[1];
  window.location.hash = '';

  return {
    token,
  };
};

export const Logout = () => {
  deleteStorage();
  window.location.reload();
};
