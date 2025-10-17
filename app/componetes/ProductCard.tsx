import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { ProductT } from '../Types/ProducatT'
import { motion } from "framer-motion";

type PropsT = {
  singaldata : ProductT
}
const ProductCard = ({singaldata}: PropsT ) => {
  const [sizedata,setSizedata] = useState< string[]>()

  useEffect(()=>{
    let temparry = []
    const UK8 = singaldata.size.find((ele)=> ele === "UK8")
    const UK10 = singaldata.size.find((ele)=> ele === "UK10")
    const UK12 = singaldata.size.find((ele)=> ele === "UK12")
    const UK14 = singaldata.size.find((ele)=> ele === "UK14")
    const UK16 = singaldata.size.find((ele)=> ele === "UK16")
    temparry.push(UK8 ? "UK8" : "NO" )
     temparry.push(UK10  ? "UK10" : "NO")
      temparry.push(UK12  ? "UK12" : "NO")
       temparry.push(UK14  ? "UK14" : "NO")
        temparry.push(UK16  ? "UK16" : "NO") 
        console.log(UK8)
    setSizedata(temparry)
  },[singaldata])

  return (
    <div className='flex flex-col max-w-max gap-1 p-2 border-1 border-white hover:shadow-neutral-200 hover:shadow-2xl'>
       
        <motion.div
         initial={"hidden"}
         whileHover={"visible"}
         variants={{
           hidden: {},
           visible: {},
         }}
        className=' relative group'> 
            <Image src={singaldata?.thumbnail}  width={300} height={200} className=" inset-0 object-cover opacity-100 transition-opacity duration-300 hover:opacity-0"  alt='preview images'/>
            <Image src={singaldata?.images[1]} width={300} height={200} className=' absolute inset-0  object-cover opacity-0 transition-opacity duration-300 hover:opacity-100  z-10'   alt='preview imagess'/>
            <motion.div
             variants={
               {
                 hidden: { opacity: 0, y: 50 },
                 visible: { opacity: 1, y: 0 },
               }
             }
             transition={{ duration: 1 }}
              className="absolute bg-[#fff]/70 rounded-md bottom-10 left-4 m-1 z-20">
              <p className=' text-[12px] pl-3 h-8 items-center flex'>QUICK ADD</p>
              <hr></hr>
              <div className=' flex gap-3 m-2 '>
                <button className= { sizedata && sizedata.includes("UK8") ? 'buttontext' : 'buttontext line-through pointer-events-none '} > UK8</button>
                  <button className= { sizedata && sizedata.includes("UK10") ? 'buttontext' : 'buttontext line-through pointer-events-none '} > UK10</button>
                 <button className= { sizedata && sizedata.includes("UK12") ? 'buttontext' : 'buttontext line-through pointer-events-none '} > UK12</button>
                 <button className= { sizedata && sizedata.includes("UK14") ? 'buttontext' : 'buttontext  pointer-events-none line-through'} > UK14</button>
                  <button className= { sizedata && sizedata.includes("UK16") ? 'buttontext' : 'buttontext pointer-events-none  line-through'} > UK16</button>
              </div>
            </motion.div>
            <div className=' absolute right-0 top-0 bg-green-700 px-2 m-2 font-medium text-white rounded-sm text-sm z-20'>
                { singaldata?.New ? "New" : ''}
            </div>
        </motion.div>
   
        <div className=''><p className=' div-primany uppercase '>  {singaldata?.title}</p> </div>
        <div className=' font-semibold text-[12px] '> LKR { singaldata.price}.00 </div>
        <div className=' flex text-center items-center gap-1 font-semibold text-[12px] text-[#4e535d]  '> 
            <p> or LKR {singaldata.Instalment}.00 with</p>
             <Image src={'/Prodcuts/koko.svg'}  width={30} height={20} alt='koko images'/>
             <Image src={'/Prodcuts/mp.svg'}  width={40} height={20} alt='mp images'/>
             </div>
        <div>
            <Image src={singaldata?.metirial}   width={10} height={10}  className=' size-5 rounded-full border-1 p-[2px] border-black ' alt='metirial' />
             

      {/* Sliding div */}
   
             </div>

         
    </div>
  )
}

export default ProductCard