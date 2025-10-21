import React from 'react'
import ProductCard from './componetes/ProductCard'
import NavCar from './componetes/NavCar'
import ReduxProvider from './LocalState/Redux/ReduxProvider'
import ProductList from './pages/ProductList'
import Navbar from './componetes/NavBar/Navbar'
import Banner from './componetes/Banner'
import CheckoutPortal from './componetes/CheckoutPortal'

const page = () => {
  return (
    <div>
      <ReduxProvider>
        <Banner/>
        <Navbar/>
        <CheckoutPortal/>
        <ProductList/>
      
      <NavCar/>   
      </ReduxProvider>
     
    </div>
  )
}

export default page