import { deleteStorage, setStorage } from "../utils/storage";
import getUserApi from "./api/userApi";
import { authGenerate } from "./OAuth";


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
  const user = await getUserApi()
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
