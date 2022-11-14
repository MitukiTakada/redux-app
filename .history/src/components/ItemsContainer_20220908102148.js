import React from 'react'
import {AllItems}

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
