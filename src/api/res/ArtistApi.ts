import resource from '../resource';

const ArtistApi = (id : string | undefined) => resource.get(`/artists/${id}`);
const ArtistAlbumApi = (id : string | undefined) => resource.get(`/artists/${id}/albums?market=ID&limit=10`);

export {ArtistApi , ArtistAlbumApi};
