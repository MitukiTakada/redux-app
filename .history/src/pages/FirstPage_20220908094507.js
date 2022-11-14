
import React from 'react'
import { useSelector } from 'react-redux'
import CartContainer from '../components/CartContainer'
import Modal from '../components/Modal'

const FirstPage = () => {
  const {isOpen} = useSelector((state) => state.modal)
  return (
    <div>
      {isOpen && <Modal />}
      <
      <CartContainer />
    </div>
  )
}

export default FirstPage
