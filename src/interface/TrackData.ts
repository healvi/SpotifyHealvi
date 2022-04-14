import { Playlist } from "./PlaylistData"

export interface AllTrack {
    href : string,
    items : Track[]
}

export interface Track {
        album : {
          album_type : string,
          artists : artisTrack[],
          external_urls : {
            spotify : string
          },
          href : string,
          id : string,
          images : imagesTrack[],
          name : string,
          release_date : string,
          release_date_precision : string,
          total_tracks : number,
          type : string,
          uri : string
        },
        artists : artisTrack[],
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
      
export interface TrackSelect  {
  data : Track,
  isSelect? : boolean,
  display : boolean ,
  select : () => void
  openModal : () => void
}

export interface buttonSelect  {
  data : Track,
  isSelect : boolean,
  name:string,
  color :string
  select : (track?: Track, playlist?: Playlist[]) => void
  openModal : () => void
}

export interface imagesTrack {
    height : number,
    url : string,
    width : number
}

export interface artisTrack {
  external_urls : {
    spotify : string
  },
  href : string,
  id : string,
  name : string,
  type : string,
  uri : string
}