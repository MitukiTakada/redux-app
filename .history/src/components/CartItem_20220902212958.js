import React from 'react'

const CartItem = (props) => {
  const {id, img, title, price, amount} = props;
  return (
    <article>
      <img src={img} />
      <div>
        <h4></h4>
      </div>
    </article>
  )
}

export default CartItem
