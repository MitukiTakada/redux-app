import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { increase } from '../../features/cart/CartSlice';
import { closeModal } from '../../features/cart/modal/ModalSlice';

const AddModal = () => {
  const dispatch= useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <aside className='modal-container'>
      <div className='modal'>
        <h4>この商品を追加しますか？</h4>
        <div className='btn-container'>
          <button className='btn confirm-btn' onClick={() => {
            dispatch(closeModal());
            navigate("/")
          }}>OK</button>
          <button className='btn clear-btn' onClick={() => dispatch(closeModal())}>やめとく</button>
        </div>
      </div>
    </aside>
    </div>
  )
}

export default AddModal
