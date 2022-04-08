import resource from '../resource';

const getUserApi = () => resource.get('/me');
export default getUserApi;
