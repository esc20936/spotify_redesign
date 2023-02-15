import { configureStore } from '@reduxjs/toolkit';
import {ModalSlice} from './Modal/ModalSlice';
import { ActiveSongSlice } from './Songs/ActiveSongSlice';
import { ActivePodcastSlice } from './Podcasts/PodcastsSlice';
import { ActivePageSlice } from './ActivePage/ActivePageSlice';

export const store = configureStore({
  reducer: {
    modal: ModalSlice.reducer,
    activeSong: ActiveSongSlice.reducer,
    activePodcast: ActivePodcastSlice.reducer,
    activePage: ActivePageSlice.reducer,
  },
});