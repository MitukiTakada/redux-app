import React from 'react'

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
      <div></div>
    </article>
  )
}

export default CartItem
