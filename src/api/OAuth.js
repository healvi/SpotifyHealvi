import { clear, setAuth, setToken } from "../store/Auth";
import { FindExpireTime } from "../utils/FindExpireTime";
import getKeyUrl from "../utils/getKeyUrl";
import { deleteStorage, getStorage } from "../utils/storage";
export const authGenerate = () => async (dispatch) => {
  const istoken = getStorage("token");
  const isAvaliable = getStorage("avaliable");
  console.log(window.location)
  if (istoken) {
    const isExpired =
    new Date().getTime() > new Date(parseInt(isAvaliable)).getTime();
    if (isExpired || null) {
      deleteStorage();
      dispatch(clear());
    } else {
      dispatch(setToken(istoken));
      dispatch(setAuth(true));
    }
  } else if (window.location.hash) {
    const key = getKeyUrl(window.location.hash);
    if (key.access_token && key.expires_in) {
      const avaliable = FindExpireTime(key);
      localStorage.setItem("avaliable", avaliable);
      localStorage.setItem("token", key.access_token);
      dispatch(setToken(key.access_token));
      dispatch(setAuth(true));
    }
  }
};

export const Logout = () => async (dispatch) => {
  deleteStorage();
  await dispatch(clear());
};
