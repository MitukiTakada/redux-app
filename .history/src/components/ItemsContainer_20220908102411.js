import React from 'react'
import {AllItems} from "../Items/AllItems"

const ItemsContainer = () => {
  return (
    <div>
      <header>
        <h2>商品一覧</h2>
      </header>
      <div>
        {AllItems.map((item) => {
          <Item
        })}
      </div>
    </div>
  )
}

export default ItemsContainer
