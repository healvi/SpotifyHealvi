import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getStorage } from '../utils/storage';

const Authinticated = (props) => {
  const history = useHistory();
  useEffect(() => {
    if (!(getStorage('token'))) {
      history.push('/login');
    }
  }, []);
  return props.children;
};

export default Authinticated;
