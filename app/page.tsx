import React from 'react'
import ProductCard from './componetes/ProductCard'
import NavCar from './componetes/NavCar'
import ReduxProvider from './LocalState/Redux/ReduxProvider'
import ProductList from './pages/ProductList'

const page = () => {
  return (
    <div>
      <ReduxProvider>
        <ProductList/>
      
      <NavCar/>   
      </ReduxProvider>
     
    </div>
  )
}

export default page