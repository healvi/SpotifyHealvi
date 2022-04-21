import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { getStorage } from "../utils/storage";
type Props = {
  children: JSX.Element,
};
const Guest = ({  children }: Props) => {
  const navigate = useNavigate()
  useEffect(() => {
    if (getStorage('token') && getStorage('token') !== null) {
      navigate("/")

    }
  }, [])

  return children;
};


export default Guest;
