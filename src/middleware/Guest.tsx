import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
type Props = {
  children: JSX.Element;
};
const Guest = ({ children }: Props) => {
  const location = useLocation();
  const token = useAppSelector((state) => state.Auth.isAuth);
  if (token) {
    return <Navigate to="/" state={{ from: location }} />;
  }
  return children;
};

export default Guest;
