import React from 'react'


const ItemsContens = (props) => {
  const {id, price, title, amount, img} = props;
  const dispatch = useDispatch()
  return (
    <div>
      <article className='cart-item'>
      <img src={img} alt="" />
    </article>
    </div>
  )
}

export default ItemsContens
