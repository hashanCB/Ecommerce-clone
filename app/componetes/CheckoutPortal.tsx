'use client'

import React from 'react'
import usePortal from 'react-useportal'
import { motion } from 'motion/react'

const CheckoutPortal = () => {
    const [openPortal , ClosePortal , isopen , Portal] = usePortal()
  return (
    <div>
        <button onClick={ ()=> openPortal()}> Click and see what here</button>
        { isopen &&  
            <Portal>
                <motion.div 
                initial = { { opacity:0 , x : 100} }
                animate = {{ opacity:100, x : 50}}
                transition={ { duration : 0.3 , ease: "easeIn"}}
                className=' fixed right-0 top-0 bg-amber-200 min-h-screen shadow-2xl z-50'> 

                <h1> this is my portal data hello world</h1>
                <button onClick={()=>ClosePortal()}> Cloese this</button>
            </motion.div>
            </Portal>
        }
    </div>
  )
}

export default CheckoutPortal