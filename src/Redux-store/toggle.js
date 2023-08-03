import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name: 'isToggled',
    initialState: {
        isToggled: true,
        arcade: 9,
        advanced: 12,
        pro: 15,
    },
    reducers: {
        handleToggle(state){
            state.isToggled = !state.isToggled;
            if (!state.isToggled) {
                state.arcade = 90;
                state.advanced = 120;
                state.pro = 150;
            } else {
                state.arcade = 9;
                state.advanced = 12;
                state.pro = 15;
            }
        },
    }
})
export const toggleActions = toggleSlice.actions;
export default toggleSlice;