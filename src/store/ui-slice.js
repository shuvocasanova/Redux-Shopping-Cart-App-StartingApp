import { createSlice } from "@reduxjs/toolkit";

// create new slice
const uiSlice = createSlice({
    name: "ui",
    initialState: {notification: null},
    reducers: {
        showNotification(state, action){
            state.notification = {
                message: action.payload.message,
                type: action.payload.type,
                open: action.payload.open
            }
        }
    }
});

export const uiAction = uiSlice.actions;
export default uiSlice;