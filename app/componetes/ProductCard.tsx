import Image from 'next/image'
import React from 'react'
import { ProductT } from '../Types/ProducatT'

type PropsT = {
  singaldata : ProductT
}
const ProductCard = ({singaldata}: PropsT ) => {
  return (
    <div className='flex flex-col max-w-max gap-1 p-2 border-1 border-white hover:shadow-neutral-200 hover:shadow-2xl'>
       
        <div className=' relative'> 
            <Image src={singaldata?.thumbnail}  width={300} height={200} className=" inset-0 object-cover opacity-100 transition-opacity duration-300 hover:opacity-0"  alt='preview images'/>
            <Image src={singaldata?.images[1]} width={300} height={200} className=' absolute inset-0  object-cover opacity-0 transition-opacity duration-300 hover:opacity-100  z-10'   alt='preview imagess'/>
            <div className=' absolute right-0 top-0 bg-green-700 px-2 m-2 font-medium text-white rounded-sm text-sm z-20'>
                { singaldata?.New ? "New" : ''}
            </div>
        </div>
   
        <div className=''><p className=' div-primany uppercase '>  {singaldata?.title}</p> </div>
        <div className=' font-semibold text-[12px] '> LKR { singaldata.price}.00 </div>
        <div className=' flex text-center items-center gap-1 font-semibold text-[12px] text-[#4e535d]  '> 
            <p> or LKR {singaldata.Instalment}.00 with</p>
             <Image src={'/Prodcuts/koko.svg'}  width={30} height={20} alt='koko images'/>
             <Image src={'/Prodcuts/mp.svg'}  width={40} height={20} alt='mp images'/>
             </div>
        <div>
            <Image src={singaldata?.metirial}   width={10} height={10}  className=' size-5 rounded-full border-1 p-[2px] border-black ' alt='metirial' />
             
             </div>
    </div>
  )
}

export default ProductCard