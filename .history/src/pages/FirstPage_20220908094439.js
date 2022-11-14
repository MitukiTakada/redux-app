
import React from 'react'
import { useSelector } from 'react-redux'
import Modal from '../components/Modal'

const FirstPage = () => {
  const {isOpen} = useSelector((state) => state.modal)
  return (
    <div>
      {isOpen && <Modal />}
      {}
    </div>
  )
}

export default FirstPage
