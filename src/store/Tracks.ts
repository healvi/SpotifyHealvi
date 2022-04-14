import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { Track } from '../interface/TrackData';

interface UserState {
  tracks : Track[],
  modalTrack: Track,
  selectTrack: Track[],
  }
  
  const initialState: UserState = {
    tracks : [],
    modalTrack: {} as Track,
    selectTrack: [] ,
  }

export const track = createSlice({
  name: 'track',
  initialState,
  reducers: {
    setTrack: (state, action) => {
      state.tracks = action.payload;
    },
    setModalTrack: (state, action) => {
      state.modalTrack = action.payload;
    },
    setSelectTrack: (state, action) => {
      state.selectTrack = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTrack, setModalTrack, setSelectTrack} = track.actions;
export const tracks = (state: RootState) => state.Track.tracks
export default track.reducer;
