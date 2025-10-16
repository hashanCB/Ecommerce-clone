'use client'

import { createSlice } from "@reduxjs/toolkit"

type initialStateT = {
    count : number
}

type actionT = {
    payload :number 
}
const initialState : initialStateT = {
    count : 0
}
export const CartSlice = createSlice({
    name : 'CartSlice',
    initialState,
    reducers : {

        addcount : (state,action:actionT)=>{
            state.count = action.payload + state.count 
        }
    }
})

export default  CartSlice.reducer
export const {addcount} = CartSlice.actions