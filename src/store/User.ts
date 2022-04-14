import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { User } from '../interface/UserData';

interface UserState {
user : User
}

const initialState: UserState = {
  user : {} as User
}

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = user.actions;
export const auths = (state: RootState) => state.User.user
export default user.reducer;
