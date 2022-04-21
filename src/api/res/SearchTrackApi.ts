import resource from '../resource';
import { searchTrack } from '../../interface/spotifyInterface';

const SearchTrackApi = (params : searchTrack) => resource.get(`/search?q=${params.q}&type=${params.type}&market=${params.market}&limit=${params.limit}`);

export default SearchTrackApi;
