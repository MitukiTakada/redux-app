import React from 'react'


const ItemsContens = (props) => {
  const {id, price, title, amount, img} = props;
  return (
    <div className='items-contents'>
      <article className='cart-item'>
        <img src={img} />
      </article>
      <div >
        <h4>{title}</h4>
        <h4 className='item-price'>{price}円</h4>
        <button 
        className='add-item-btn'>
          商品カートに追加
        </button>
      </div>
    </div>
  )
}

export default ItemsContens
