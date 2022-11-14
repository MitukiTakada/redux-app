import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increase } from '../features/cart/CartSlice';
import { selectItem } from '../features/cart/ItemSlice';
import { openModal } from '../features/cart/modal/ModalSlice';


const ItemsContens = (props) => {
  const {id, price, title, amount, img} = props;
  const {selectedItem} = useSelector((state) => state.item)
  const dispatch = useDispatch();
  return (
    <div className={'items-contents' onClick={() => dispatch(selectItem(id))}>
      <article className='item-selected'>
        <img src={img} />
      </article>
      <div >
        <h4>{title}</h4>
        <h4 className='item-price'>{price}円</h4>
        <p>{amount}</p>
        <button 
        className='add-item-btn'
        onClick={() => {
          dispatch(openModal());
        }}
        >
          商品カートに追加
        </button>
      </div>
    </div>
  )
}

export default ItemsContens
