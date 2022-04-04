import { createSlice } from '@reduxjs/toolkit'

export const track = createSlice({
  name: 'track',
  initialState: {
   tracks : [],
  },
  reducers: {
    setTrack : (state, action) => {
        state.tracks = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setTrack  } = track.actions

export default track.reducer