import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { isAuth } from '../utils/OAuth';

const Guest = (props) => {
  const history = useHistory();
  useEffect(() => {
    if (isAuth) {
      history.push('/create-playlist');
    }
  }, []);
  return props.children;
};

export default Guest;
