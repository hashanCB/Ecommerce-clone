import React from 'react'
import ProductCard from './componetes/ProductCard'
import NavCar from './componetes/NavCar'
import ReduxProvider from './LocalState/Redux/ReduxProvider'
import ProductList from './pages/ProductList'
import Navbar from './componetes/NavBar/Navbar'
import Banner from './componetes/Banner'

const page = () => {
  return (
    <div>
      <ReduxProvider>
        <Banner/>
        <Navbar/>
        <ProductList/>
      
      <NavCar/>   
      </ReduxProvider>
     
    </div>
  )
}

export default page