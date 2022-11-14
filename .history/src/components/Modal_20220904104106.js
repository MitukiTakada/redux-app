import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../features/cart/CartSlice';

const Modal = () => {
  const dispatch = useDispatch();
  const {isOpen} = useSelector((state) => state.modal)
  return (
    <aside className='modal-container'>
      <div className='modal'>
        <h4>買い物かごを全て空にしますか？</h4>
        <div className='btn-container'>
          <button className='btn confirm-btn' onClick={() => dispatch(clearCart)}>OK</button>
          <button className='btn clear-btn'>やめとく</button>
        </div>
      </div>
    </aside>
  )
}

export default Modal
