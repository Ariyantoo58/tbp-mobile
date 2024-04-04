import { createSlice } from "@reduxjs/toolkit";

interface GlobalState {
    drawer?: boolean;
    title?: string;
};

const initialState: GlobalState = {
    drawer: false,
    title: ""
};

export const globalAdoption = createSlice({
    name: 'global',
    initialState: initialState,
    reducers: {
        setDrawer: (state, action) => {
            state.drawer = action.payload;
        },
        setTitle: (state, action) => {
            state.title = action.payload;
        }
    }
});

export const {
    setDrawer,
    setTitle,
} = globalAdoption.actions;
export default globalAdoption.reducer;