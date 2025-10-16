'use client'

import { configureStore } from "@reduxjs/toolkit"
import { CartSlice } from "../CartSlice"

export const store = configureStore({
    reducer:{
        CartSlice : CartSlice.reducer
    }
})

export type RootState = ReturnType< typeof store.getState>
export type AppDispatch =  typeof store.dispatch