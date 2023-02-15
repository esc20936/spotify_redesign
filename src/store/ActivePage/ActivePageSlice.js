import { createSlice } from '@reduxjs/toolkit';

export const ActivePageSlice = createSlice({
    name: 'ActivePage',
    initialState: {
        state: false,
    },
    reducers: {
        reDraw: (state, action) => {
            state.state = !state.state
        }
    }
});

export const { reDraw } = ActivePageSlice.actions;
