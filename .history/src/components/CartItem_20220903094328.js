import React from 'react'
import { plusIcon } from '../HeroIcons';

const CartItem = (props) => {
  const {id, img, title, price, amount} = props;
  return (
    <article className='cart-item'>
      <img src={img} alt="" />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>{price}円</h4>
        <button className='remove-btn'>
          削除
        </button>
      </div>
      <div>
        <button className='amount-btn'>
          <plusIcon />
        </button>
        <button className='amount-btn'>
          <plusIcon />
        </button>
      </div>
    </article>
  )
}

export default CartItem
