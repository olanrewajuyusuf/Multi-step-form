import { createSlice } from "@reduxjs/toolkit";

const checkedSlice = createSlice({
    name: 'isChecked',
    initialState: {
        isChecked: true,
        service: true,
        storage: true,
        profile: false, 
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
    }
})
export const checkedActions = checkedSlice.actions;
export default checkedSlice;