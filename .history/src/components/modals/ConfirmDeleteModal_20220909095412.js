import React from 'react'
import { useDispatch } from 'react-redux';
import { increase, removeItem } from '../../features/cart/CartSlice';
import { closeConfirmDelete, closeModal } from '../../features/cart/modal/ModalSlice';

const ConfirmDeleteModal = () => {
  const dispatch= useDispatch();
  return (
    <div>
      <aside className='modal-container'>
      <div className='modal'>
        <h4>この商品を買い物かごから削除しますか？</h4>
        <div className='btn-container'>
          <button className='btn confirm-btn' onClick={(id) => {
            dispatch((removeItem(this.id)))
            dispatch(closeConfirmDelete());
          }}>OK</button>
          <button className='btn clear-btn' onClick={() => dispatch(closeConfirmDelete())}>やめと</button>
        </div>
      </div>
    </aside>
    </div>
  )
}

export default ConfirmDeleteModal