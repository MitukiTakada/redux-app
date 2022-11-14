import React from 'react'
import {AllItems} from "./"

const ItemsContainer = () => {
  return (
    <div>
      <header>
        <h2>商品一覧</h2>
      </header>
      <div>
        {AllItems}
      </div>
    </div>
  )
}

export default ItemsContainer
