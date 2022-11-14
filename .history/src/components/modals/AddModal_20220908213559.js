import React from 'react'
import { useDispatch } from 'react-redux';
import { increase } from '../../features/cart/CartSlice';
import { closeModal } from '../../features/cart/modal/ModalSlice';

const AddModal = () => {
  const dispatch= useDispatch();
  return (
    <div>
      <aside className='modal-container'>
      <div className='modal'>
        <h4>追加しました</h4>
        <div className='btn-container'>
          <button className='btn confirm-btn' onClick={() => {
            dispatch(closeModal());
            
          }}>OK</button>
          <button className='btn clear-btn' onClick={() => dispatch(closeModal())}>やめとく</button>
        </div>
      </div>
    </aside>
    </div>
  )
}

export default AddModal
