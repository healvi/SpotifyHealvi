import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { getStorage } from "../utils/storage";
import { useAppSelector } from '../app/hooks';

type Props = {
  children: JSX.Element,
};
const Authinticated = ({  children }: Props) => {
  const navigate = useNavigate()
  const token = useAppSelector((state) => state.Auth.token)
  useEffect(() => {
    if (!getStorage('token') && getStorage('token') !== null || token) {
     navigate("/login") 
    }
  }, [])

  return children;
};

export default Authinticated;
