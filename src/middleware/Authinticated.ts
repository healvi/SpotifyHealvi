import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

type Props = {
  children: JSX.Element;
};
const Authinticated = ({ children }: Props) => {
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.Auth.isAuth);

  if (!token) {
    navigate("/login");
  }

  return children;
};

export default Authinticated;
