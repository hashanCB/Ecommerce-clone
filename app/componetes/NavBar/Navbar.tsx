import Image from 'next/image'
import React from 'react'
import SerachBox from '../SerachBox'
import NavCar from '../NavCar'

const Navbar = () => {
  return (
    <div className=' flex  gap-4 mx-2 my-4 w-full  px-10 h-[60px] items-center  justify-between  '>
        <div className=' flex-2'> <Image src={'/logo/logo.svg'} width={300} height={100} alt="logo"/></div>
        <div className=' flex-9'> <SerachBox/></div>
        <div className=' flex-1'> <NavCar/></div>
    </div>
  )
}

export default Navbar