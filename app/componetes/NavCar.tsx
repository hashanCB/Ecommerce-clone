'use client'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../LocalState/Redux/store'
import { addcount } from '../LocalState/CartSlice'
import { PresisData } from '../LocalState/Redux/PresitsData'

const NavCar = () => {
    const {count} = useSelector((state:RootState)=> state.CartSlice)
    const dispath  = useDispatch()
    PresisData()
  return (
    <div>Count is {count}
    <button onClick={() => dispath(addcount(1))}> add 1</button>
 
    </div>
  )
}

export default NavCar