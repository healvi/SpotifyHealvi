import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface AuthState {
  token : string
}

const initialState: AuthState = {
  token: ''
}

export const Auths = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },

});

// Action creators are generated for each case reducer function
export const { setToken } = Auths.actions;
export const auths = (state: RootState) => state.Auth.token
export default Auths.reducer;
