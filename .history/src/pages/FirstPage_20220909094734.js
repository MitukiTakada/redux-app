
import React from 'react'
import { useSelector } from 'react-redux'
import CartContainer from '../components/CartContainer'
import ConfirmDeleteModal from '../components/modals/ConfirmDeleteModal'
import Modal from '../components/modals/Modal'
import Navbar from '../components/Navbar'

const FirstPage = () => {
  const {isOpen} = useSelector((state) => state.modal);
  const {isDelete} = useSelector((state) => state.modal);
  return (
    <div>
      {isOpen }
      {isDelete && <ConfirmDeleteModal />}
      <Navbar />
      <CartContainer />
    </div>
  )
}

export default FirstPage
