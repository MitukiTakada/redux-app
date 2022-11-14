import React from 'react'
import {AllItems} from "../Items/AllItems"
import ItemsContens from './ItemsContens'

const ItemsContainer = () => {
  return (
    <div>
      <header>
        <h2>商品一覧</h2>
      </header>
      <div>
        {AllItems.map((item) => {
          <ItemsContens key={item.id} />
        })}
      </div>
    </div>
  )
}

export default ItemsContainer
