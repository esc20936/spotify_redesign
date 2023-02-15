import { createSlice } from '@reduxjs/toolkit';

export const ActiveSongSlice = createSlice({
    name: 'activeSong',
    initialState: {
        name:'',
        artist:'',
        image:'',
        _id:0,
    },
    reducers: {
        clean: (state, action) => {
            state.name = '';
            state.artist = '';
            state.image = '';
            state._id = 0;
        },
        setSong: (state, action) => {
           const {name, artist, image,_id} = action.payload;
              state.name = name;
                state.artist = artist;
                state.image = image;
                state._id = _id;
        },

    }
});

export const { clean, setSong } = ActiveSongSlice.actions;
