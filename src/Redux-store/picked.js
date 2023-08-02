import { createSlice } from "@reduxjs/toolkit";

const pickedSlice = createSlice({
    name: 'isChecked',
    initialState: {
        isChecked: true,
        arcade: true,
        advanced: false,
        pro: false,
        plan: 'Arcade',
        price: [9, 12, 15, 90, 120, 150]
    },
    reducers: {
        handleArcade(state){
            if (state.isChecked) {
                state.arcade = true;
                state.advanced = false;
                state.pro = false;
                state.plan = 'Arcade';
            } 
        },
        handleAdvanced(state){
            if (state.isChecked) {
                state.arcade = false;
                state.advanced = true;
                state.pro = false;
                state.plan = 'Advanced';
            } 
        },
        handlePro(state){
            if (state.isChecked) {
                state.arcade = false;
                state.advanced = false;
                state.pro = true;
                state.plan = 'Pro'
            } 
        },
        handleHover(state){
            if (state.arcade){
                state.hover = true;
            } else if (state.advanced){
                state.hover = true;
            } else if (state.pro){
                state.hover = true;
            } else {
                state.hover = false;
            }
        }

        // if (state.arcade) {
        //     state.plan = 'Arcade'
        // } else if (state.advanced) {
        //     state.plan = 'Advanced'
        // } else if (state.pro) {
        //     state.plan = 'Arcade'
        // }
    }
})
export const pickedActions = pickedSlice.actions;
export default pickedSlice;