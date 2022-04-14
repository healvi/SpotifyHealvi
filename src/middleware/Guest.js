import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getStorage } from '../utils/storage';

const Guest = (props) => {
  const history = useHistory();
  useEffect(() => {
    if (getStorage('token')) {
      history.push('/create-playlist');
    }
  }, []);
  return props.children;
};

export default Guest;
