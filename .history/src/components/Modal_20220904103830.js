import React from 'react'
import { useSelector } from 'react-redux'

const Modal = () => {
  const dispatch = useSelector((state) => state.cart)
  return (
    <aside className='modal-container'>
      <div className='modal'>
        <h4>買い物かごを全て空にしますか？</h4>
        <div className='btn-container'>
          <button className='btn confirm-btn'>OK</button>
          <button className='btn clear-btn'>やめとく</button>
        </div>
      </div>
    </aside>
  )
}

export default Modal
