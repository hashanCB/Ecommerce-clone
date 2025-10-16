'use client'
import React, { useEffect, useState } from 'react'
import { ProductT } from '../Types/ProducatT'
import { Products } from '../Data/Producat'
import ProductCard from '../componetes/ProductCard'

function ProductList() {
    const [ProdustLists,setProduxatLists] = useState<ProductT[] | []>([])

    useEffect(()=>{
        setProduxatLists(Products)
    },[])
  return (
    <div className=' grid grid-cols-4'>
        {ProdustLists.map((ele,index)=>( 
            
          <div>  <ProductCard singaldata={ele} />  </div>
        ))}
        
    </div>
  )
}

export default ProductList