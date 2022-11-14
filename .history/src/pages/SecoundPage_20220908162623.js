import React from 'react'
import { useSelector } from 'react-redux'
import ItemsContainer from '../components/ItemsContainer'
import Navbar from '../components/Navbar'
import WideNavbar from '../components/WideNavBar'

const SecoundPage = () => {
  const {isOpen} = useSelector((state) => state.modal)
  return (
    <div>
      {isOpen &&}
      <WideNavbar />
      <ItemsContainer />
    </div>
  )
}

export default SecoundPage
