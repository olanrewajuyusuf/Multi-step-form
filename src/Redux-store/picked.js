import { createSlice } from "@reduxjs/toolkit";

const pickedSlice = createSlice({
    name: 'isChecked',
    initialState: {
        isChecked: true,
        arcade: true,
        advanced: false,
        pro: false,
        plan: 'Arcade',
        price: [9, 12, 15, 90, 120, 150],
        hovArcade: true,
        hovAdvanced: false,
        hovPro: false,
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

        // Handling Hover effect
        hoverArcade(state){
            if (state.isChecked) {
                state.hovArcade = true;
                state.hovAdvanced = false;
                state.hovPro = false;
            } 
        },
        hoverAdvanced(state){
            if (state.isChecked) {
                state.hovArcade = false;
                state.hovAdvanced = true;
                state.hovPro = false;
            } 
        },
        hoverPro(state){
            if (state.isChecked) {
                state.hovArcade = false;
                state.hovAdvanced = false;
                state.hovPro = true;
            } 
        },
    }
})
export const pickedActions = pickedSlice.actions;
export default pickedSlice;