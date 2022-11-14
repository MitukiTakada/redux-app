import React from 'react'
import AllItems from '../Items/AllItems'

import ItemsContens from './ItemsContens'

const ItemsContainer = () => {
  return (
    <div>
      <section className='cart'>
        <header>
          <h2>商品一覧</h2>
        </header>
        <div>
          {AllItems.map((item) => (
            <ItemsContens key={item.id} {...item/>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ItemsContainer
