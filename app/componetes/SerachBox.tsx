import React from 'react'

const SerachBox = () => {
  return (
    <div className=' w-full  bg-[#f3f4f6] rounded-md h-10 items-center flex'>
        <input type='text'   placeholder='Type and hit enter to serach...' className=' w-full h-full p-2 text-[14px] placeholder:text-sm placeholder:text-gray-500'/>
    </div>
  )
}

export default SerachBox