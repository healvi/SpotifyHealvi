import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { Track } from '../interface/SearchData';
import { Playlist } from '../interface/PlaylistData';

interface UserState {
  tracks : Track[],
  song : Track[],
  modalTrack: Track,
  selectTrack: Track[],
  selectSong: Track[],
  query : string,
  selectPlaylist: Playlist
  }
  
  const initialState: UserState = {
    tracks : [],
    song : [],
    modalTrack: {} as Track,
    selectTrack: [],
    selectSong: [],
    selectPlaylist: {} as Playlist,
    query : ""
  }

export const track = createSlice({
  name: 'track',
  initialState,
  reducers: {
    setTrack: (state, action) => {
      state.tracks = action.payload;
    },
    setSong: (state, action) => {
      state.song = action.payload;
    },
    setModalTrack: (state, action) => {
      state.modalTrack = action.payload;
    },
    setSelectTrack: (state, action) => {
      state.selectTrack = action.payload;
    },
    setSelectSong: (state, action) => {
      state.selectSong = action.payload;
    },
    setSelectPlaylist: (state, action) => {
      state.selectPlaylist = action.payload;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTrack,setSong, setModalTrack, setSelectTrack,setSelectSong,setSelectPlaylist, setQuery} = track.actions;
export const tracks = (state: RootState) => state.Track.tracks
export default track.reducer;
