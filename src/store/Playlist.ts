import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { Playlist } from '../interface/PlaylistData';

interface PlaylistState {
  playlist : Playlist[]
}

const initialState: PlaylistState = {
  playlist : []
}

export const playlist = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    setPlaylist: (state, action) => {
      state.playlist = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPlaylist } = playlist.actions;
export const auths = (state: RootState) => state.Playlist.playlist
export default playlist.reducer;
