import { createSlice } from '@reduxjs/toolkit';

export const ModalSlice = createSlice({
    name: 'Modal',
    initialState: {
        type: '',
    },
    reducers: {
        setTypeOfModal: (state, action) => {
            state.type = action.payload
        }
    }
});

export const { setTypeOfModal } = ModalSlice.actions;
