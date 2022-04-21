import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { getStorage } from "../utils/storage";
type Props = {
  children: JSX.Element;
};
const Guest = ({ children }: Props) => {
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.Auth.token);
  useEffect(() => {
    if (getStorage("token") && token) {
      navigate("/");
    }
  }, []);

  return children;
};

export default Guest;
