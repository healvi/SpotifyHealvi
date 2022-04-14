import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import AuthReducer from '../store/Auth';
import UserReducer from '../store/User';
import PlaylistReducer from '../store/Playlist';
import TracksReducer from '../store/Tracks';
export const store = configureStore({
  reducer: {
    Auth: AuthReducer,
    User: UserReducer,
    Playlist: PlaylistReducer,
    Track: TracksReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
