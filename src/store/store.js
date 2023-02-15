import { configureStore } from '@reduxjs/toolkit';
import {ModalSlice} from './Modal/ModalSlice';
import { ActiveSongSlice } from './Songs/ActiveSongSlice';

export const store = configureStore({
  reducer: {
    modal: ModalSlice.reducer,
    activeSong: ActiveSongSlice.reducer,
  },
});