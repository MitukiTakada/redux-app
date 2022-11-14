import React from 'react'
import { useDispatch } from 'react-redux';


const ItemsContens = (props) => {
  const {id, price, title, amount, img} = props;
  const dispatch = useDispatch();
  return (
    <div className='items-contents'>
      <article className='cart-item'>
        <img src={img} />
      </article>
      <div >
        <h4>{title}</h4>
        <h4 className='item-price'>{price}円</h4>
        <button 
        className='add-item-btn'
        onClick={() => dispatch(open)}
        >
          商品カートに追加
        </button>
      </div>
    </div>
  )
}

export default ItemsContens
