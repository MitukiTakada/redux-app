
import React from 'react'
import { useSelector } from 'react-redux'
import CartContainer from '../components/CartContainer'
import Modal from '../components/modals/Modal'
import Navbar from '../components/Navbar'

const FirstPage = () => {
  const {isOpen} = useSelector((state) => state.modal);
  const {isDelete} = useSelector((state) => state.modal);
  return (
    <div>
      {isOpen && <Modal />}
      {isDelete }
      <Navbar />
      <CartContainer />
    </div>
  )
}

export default FirstPage
