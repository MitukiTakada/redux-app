import React from 'react'
import { useDispatch } from 'react-redux';
import { closeModal } from '../../features/cart/modal/ModalSlice';

const AddModal = () => {
  const dispatch= useDispatch();
  return (
    <div>
      <aside className='modal-container'>
      <div className='modal'>
        <h4>この商品を追加しますか？</h4>
        <div className='btn-container'>
          <button className='btn confirm-btn' onClick={() => {
            dispatch(closeModal());
            dispatch()
          }}>OK</button>
          <button className='btn clear-btn' onClick={() => dispatch(closeModal())}>やめとく</button>
        </div>
      </div>
    </aside>
    </div>
  )
}

export default AddModal
