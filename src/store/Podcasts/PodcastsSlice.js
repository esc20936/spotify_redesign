import { createSlice } from '@reduxjs/toolkit';

export const ActivePodcastSlice = createSlice({
    name: 'activePodcast',
    initialState: {
        name:'',
        author:'',
        image:'',
        _id:0,
        description:'',
    },
    reducers: {
        clean: (state, action) => {
            state.name = '';
            state.author = '';
            state.image = '';
            state._id = 0;
            state.description = '';
        },
        setPodcast: (state, action) => {
           const {name, author, image,_id, description} = action.payload;
              state.name = name;
                state.author = author;
                state.image = image;
                state._id = _id;
                state.description = description;
        },

    }
});

export const { clean, setPodcast } = ActivePodcastSlice.actions;
