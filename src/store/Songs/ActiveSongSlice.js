import { createSlice } from '@reduxjs/toolkit';

export const ActiveSongSlice = createSlice({
    name: 'activeSong',
    initialState: {
        name:'',
        artist:'',
        image:'',
    },
    reducers: {
        clean: (state, action) => {
            state.name = '';
            state.artist = '';
            state.image = '';
        },
        setSong: (state, action) => {
           const {name, artist, image} = action.payload;
              state.name = name;
                state.artist = artist;
                state.image = image;
        },

    }
});

export const { clean, setSong } = ActiveSongSlice.actions;
