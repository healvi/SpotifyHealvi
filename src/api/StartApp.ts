import { deleteStorage, setStorage } from "../utils/storage";
import { authGenerate } from "./OAuth";
import { UserApi } from "./res/UserApi";

const StartApp = () => {
  setTokena();
  setMeProfile();
};

export const setTokena = () => {
  try {
    const { token } = authGenerate();
    token !== null ? setStorage("token", token) : deleteStorage();
    return token;
  } catch (error) {
    deleteStorage();
    
  }
};

export const setMeProfile = async () => {
  const user = await UserApi()
    .then((response) => {     
      response.data
    })
    .catch(() => {
      deleteStorage();
      throw new Error("User Get is Failed");
    });
    return user
};

export default StartApp;
