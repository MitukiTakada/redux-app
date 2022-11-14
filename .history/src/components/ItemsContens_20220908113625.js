import React from 'react'


const ItemsContens = (props) => {
  const {id, price, title, amount, img} = props;
  return (
    <div>
      <article className='cart-item'>
        <img src={img} />
      </article>
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>{price}円</h4>
        <button>
          削除
        </button>
      </div>
    </div>
  )
}

export default ItemsContens
