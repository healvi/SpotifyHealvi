import resource from '../resource';

const searchTrackApi = (params) => resource.get(`/search?q=${params.q}&type=${params.type}&market=${params.market}&limit=${params.limit}`);

export default searchTrackApi;
