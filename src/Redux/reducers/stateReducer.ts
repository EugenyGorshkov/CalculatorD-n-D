import { ItemTypes } from './../../itemTypes/itemTypes';
import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 0, type: ItemTypes.DISPLAY, canDrag: true },
  { id: 1, type: ItemTypes.OPERATORS, canDrag: true },
  { id: 2, type: ItemTypes.NUMBERS, canDrag: true },
  { id: 3, type: ItemTypes.EQUALS, canDrag: true },
];

// export const changeCanDrag = createAction('CHANGE_CAN_DRAG');

export default createSlice({
    name: 'elements',
    initialState: initialState,
    reducers: {
        changeCanDrag: state => {
            state
        }
    }

})

// import { createSlice } from '@reduxjs/toolkit'

// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState: {
//     value: 0
//   },
//   reducers: {
//     increment: state => {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the Immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
//       state.value += 1
//     },
//     decrement: state => {
//       state.value -= 1
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload
//     }
//   }
// })

// // Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// export default counterSlice.reducer