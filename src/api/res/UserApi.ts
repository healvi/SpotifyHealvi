import resource from '../resource';

const UserApi = () => resource.get('/me');
const UserApiProfile = (id : number) => resource.get(`users/${id}`);
export {UserApi, UserApiProfile};
