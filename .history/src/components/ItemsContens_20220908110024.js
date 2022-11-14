import React from 'react'
import { MinusIcon, minusIcon, PlusIcon, plusIcon } from '../HeroIcons';
import { useDispatch } from 'react-redux';
import { removeItem } from '../features/cart/CartSlice';
import { increase, decrease } from '../features/cart/CartSlice';

const ItemsContens = (props) => {
  const {id, price, title, amount, img} = props;
  return (
    <div>
      <article className='cart-item'>
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
          if(amount === 1) {
            dispatch(removeItem(id));
            return;
          }
          dispatch(decrease(id))
        }}>
          <MinusIcon />
        </button>
      </div>
    </article>
    </div>
  )
}

export default ItemsContens
