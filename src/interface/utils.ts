import { ChangeEvent, FormEvent } from "react";
import { Playlist } from "./PlaylistData";
import { Track } from "./SearchData";
export interface playlistItem  {
    data : Playlist,
    event : (data : any) => void
    onOpen : () => void
  }

  export type formPlaylistPost = {
    title:string,
    description : string
}

  export interface PlaylistPost {
    valueForm: formPlaylistPost;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    handleForm: (
      e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
    ) => void;
    isLoading: boolean
  }

  export interface TrackSelect  {
    data : Track,
    isSelect? : boolean,
    display : boolean ,
    select : () => void
    openModal : () => void
  }

  export interface SongSelect  {
    data : Track,
    isSelect? : boolean,
    display : boolean ,
    select : () => void
  }
  
  export interface buttonTrack {
    data : Track,
    isSelect : boolean,
    name:string,
    color :string
    select : (track?: Track, playlist?: Playlist[]) => void
    openModal : () => void
  }

  export interface buttonSong {
    data : Track,
    isSelect : boolean,
    name:string,
    color :string
    select : (track?: Track, playlist?: Playlist[]) => void
  }
  
 export type buttonLogin = {
    name: string;
    event: () => void;
    color: string;
  };