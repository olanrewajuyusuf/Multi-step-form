import { createSlice } from "@reduxjs/toolkit";

const checkedSlice = createSlice({
    name: 'isChecked',
    initialState: {
        isChecked: true,
        service: true,
        storage: true,
        profile: false,
        isService: true,
        isStorage: true,
        isProfile: false 
    },
    reducers: {
        handleService(state){
            state.isChecked = !state.isChecked
            if (state.isChecked) {
                state.service = true;
            }  else {
                state.service = false;
            }
        },
        handleStorage(state){
            state.isChecked = !state.isChecked
            if (state.isChecked) {
                state.storage = true;
            } else {
                state.storage = false;
            }
        },
        handleProfile(state){
            state.isChecked = !state.isChecked
            if (state.isChecked) {
                state.profile = true;
            } else {
                state.profile = false;
            }
        },

        // Handling Hover effect
        hoverService(state){
            if (state.isChecked) {
                state.isService = true;
                state.isStorage = false;
                state.isProfile = false;
            }
        },
        hoverStorage(state){
            if (state.isChecked) {
                state.isService = false;
                state.isStorage = true;
                state.isProfile = false;
            }
        },
        hoverProfile(state){
            if (state.isChecked) {
                state.isService = false;
                state.isStorage = false;
                state.isProfile = true;
            }
        },
    }
})
export const checkedActions = checkedSlice.actions;
export default checkedSlice;