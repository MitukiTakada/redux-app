import React from 'react'
import { useDispatch } from 'react-redux'
import { clearCart } from '../features/cart/CartSlice';
import { closeModal } from '../features/cart/modal/ModalSlice';

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className='modal-container'>
      <div className='modal'>
        <h4>買い物かごを全て空にしますか？</h4>
        <div className='btn-container'>
          <button className='btn confirm-btn' onClick={() => {
            dispatch()
          }}>OK</button>
          <button className='btn clear-btn' onClick={() => dispatch(closeModal())}>やめとく</button>
        </div>
      </div>
    </aside>
  )
}

export default Modal
