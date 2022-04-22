import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

type Props = {
  children: JSX.Element;
};
const Authinticated = ({ children }: Props) => {
  const token = useAppSelector((state) => state.Auth.isAuth);

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};

export default Authinticated;
