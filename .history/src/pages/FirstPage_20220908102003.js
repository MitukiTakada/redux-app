
import React from 'react'
import { useSelector } from 'react-redux'
import CartContainer from '../components/CartContainer'
import Modal from '../components/Modal'
import Navbar from '../components/Navbar'

const FirstPage = () => {
  const {isOpen} = useSelector((state) => state.modal)
  return (
    <div>
      {isOpen && <Modal />}
      <Navbar />
      
    </div>
  )
}

export default FirstPage
