import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase, removeItem } from '../../features/cart/CartSlice';
import { closeConfirmDelete, closeModal } from '../../features/cart/modal/ModalSlice';

const ConfirmDeleteModal = () => {
  const dispatch= useDispatch();
  const {selectedItem} = useSelector((state) => state.item)
  return (
    <div>
      <aside className='modal-container'>
      <div className='modal'>
        <h4>この商品を買い物かごから削除しますか？</h4>
        <div className='btn-container'>
          <button className='btn confirm-btn' onClick={() => {
            dispatch((decrease(selectedItem)));
            dispatch((removeItem(selectedItem)))
            dispatch(closeConfirmDelete());
          }}>OK</button>
          <button className='btn clear-btn' onClick={() => dispatch(closeConfirmDelete())}>やめとく</button>
        </div>
      </div>
    </aside>
    </div>
  )
}

export default ConfirmDeleteModal