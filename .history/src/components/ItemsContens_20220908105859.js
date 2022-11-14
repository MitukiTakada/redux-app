import React from 'react'

const ItemsContens = (props) => {
  const {id, price, title, amount, img} = props;
  return (
    <div>
      <article>
        <img src={img}/>
      </article>
    </div>
  )
}

export default ItemsContens
