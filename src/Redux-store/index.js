import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggle";
import pickedSlice from './picked'
import checkedSlice from './checked'

const store = configureStore({
    reducer: {
        toggle: toggleSlice.reducer,
        picked: pickedSlice.reducer,
        checked: checkedSlice.reducer

    }
})
export default store;







// import { createStore } from 'redux';

// const reducer = (state={counter: 0}, action) => {
//     switch (action.type){
//         case 'INC':
//             return {counter: state.counter + 1};
//         case 'DEC':
//             return {counter: state.counter - 1};
//         case 'ADD':
//             return {counter: state.counter + action.payload};
//         case 'RES':
//             return {counter: 0};
//         default:
//             return state;
//     }
// }

// const store = createStore(reducer);
// export default store;






