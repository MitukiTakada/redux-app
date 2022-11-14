import React from 'react'
import { MinusIcon, minusIcon, PlusIcon, plusIcon } from '../HeroIcons';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../features/cart/CartSlice';
import { increase, decrease } from '../features/cart/CartSlice';
import { openConfirmDelete } from '../features/cart/modal/ModalSlice';
import { selectItem } from '../features/cart/ItemSlice';


const CartItem = (props) => {
  const {id, img, title, price, amount} = props;
  const {selectedItem} = useSelector((state)=> state)
  const dispatch = useDispatch();
  return (
    <article className={`cart-item ${id === }`} onClick={() => dispatch(selectItem(id))}>
      <img src={img} alt="" />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>{price}円</h4>
        <button className='remove-btn' onClick={() => dispatch(removeItem(id))}>
          削除
        </button>
      </div>
      <div>
        <button className='amount-btn' onClick={() => dispatch(increase(id))}>
          <PlusIcon />
        </button>
        <p className='amount'>{amount}</p>
        <button className='amount-btn' onClick={() => {
          if(amount === 0) {
            dispatch(openConfirmDelete());
            return;
          }
          dispatch(decrease(id))
        }}>
          <MinusIcon />
        </button>
      </div>
    </article>
  )
}

export default CartItem
