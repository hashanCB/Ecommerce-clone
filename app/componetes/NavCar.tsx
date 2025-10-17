'use client'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../LocalState/Redux/store'
import { addcount } from '../LocalState/CartSlice'
import { PresisData } from '../LocalState/Redux/PresitsData'
import { ShoppingBag } from 'lucide-react'

const NavCar = () => {
    const {count} = useSelector((state:RootState)=> state.CartSlice)
    const dispath  = useDispatch()
    PresisData()
  return (
    
    <button onClick={() => dispath(addcount(1))}>
      <div className='relative  h-[50px]  gap-2 items-center flex font-semibold'>
        <ShoppingBag/>
        <div className='  '> 
          <p className=' text-sm'>Cart</p> 
           <p className=' bg-[#fde9c9] size-6 rounded-full justify-center items-center  absolute top-[-10px] right-[-10px] flex  text-sm'>  10</p>   
          </div>
       
      </div>
      
      </button>
 
 
  )
}

export default NavCar