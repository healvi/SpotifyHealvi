import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { isAuth } from '../utils/OAuth';

const Authinticated = (props) => {
  const history = useHistory();
  useEffect(() => {
    if (!isAuth) {
      history.push('/login');
    }
  }, []);
  return props.children;
};

export default Authinticated;
