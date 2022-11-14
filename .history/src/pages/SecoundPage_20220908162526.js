import React from 'react'
import ItemsContainer from '../components/ItemsContainer'
import Navbar from '../components/Navbar'
import WideNavbar from '../components/WideNavBar'

const SecoundPage = () => {
  const {amount, cartItems, total} = useSelector((state) => state.cart)
  return (
    <div>
      <WideNavbar />
      <ItemsContainer />
    </div>
  )
}

export default SecoundPage
