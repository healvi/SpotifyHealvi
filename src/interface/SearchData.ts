import { AllAlbum } from './Album';
import { allArtist } from './Artist';
import { AllPlaylist } from './PlaylistData';

export interface Allsearch {
  albums : AllAlbum,
  artist : allArtist,
  tracks : AllTrack,
  playlist : AllPlaylist
}

export interface AllTrack {
    href : string,
    items : Track[]
}

export interface Track {
        album : {
          album_type : string,
          artists : artistSearch[],
          external_urls : {
            spotify : string
          },
          href : string,
          id : string,
          images : imagesSearch[],
          name : string,
          release_date : string,
          release_date_precision : string,
          total_tracks : number,
          type : string,
          uri : string
        },
        artists : artistSearch[],
        disc_number : number,
        duration_ms : number,
        explicit : boolean,
        external_ids : {
          isrc : string
        },
        external_urls : {
          spotify : string
        },
        href : string,
        id : string,
        is_local : boolean,
        is_playable : boolean,
        name : string,
        popularity : number,
        preview_url :string | null,
        track_number : number,
        type : string,
        uri : string,
        isSelected? : boolean
}

export interface imagesSearch {
  height : number,
  url : string,
  width : number
}

export interface artistSearch {
external_urls : {
  spotify : string
},
href : string,
id : string,
name : string,
type : string,
uri : string
}




