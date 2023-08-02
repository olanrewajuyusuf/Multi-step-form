import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name: 'isToggled',
    initialState: {
        isToggled: true,
        arcade: 9,
        advanced: 12,
        pro: 15,
        hover: false,
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

        handleHover(state){
            if (state.arcade === 9 && state.arcade === 90){
                state.hover = true;
            } else {
                state.hover = false;
            }
            if (state.advanced === 12 || state.advanced === 120){
                state.hover = true;
            } else {
                state.hover = false;
            }
            if (state.pro === 15 || state.pro === 150){
                state.hover = true;
            } else {
                state.hover = false;
            }
        },
        handleMouseLeave(state){
            if (state.arcade === 9 || state.arcade === 90){
                state.hover = false;
            } 
            if (state.advanced === 12 || state.advanced === 120){
                state.hover = false;
            }
            if (state.pro === 15 || state.pro === 150){
                state.hover = false;
            } 
        }
    }
})
export const toggleActions = toggleSlice.actions;
export default toggleSlice;