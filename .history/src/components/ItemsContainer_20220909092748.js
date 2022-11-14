import React from 'react'
import AllItems from '../Items/AllItems'
import {useNavigate} from "react-router-dom"
import ItemsContens from './ItemsContens'
import "./Items.css";import cartItems from '../Items/CartItems';
;

const ItemsContainer = () => {
  const navigate = useNavigate();
  const backPage = () => {
    navigate("/")
  }
  return (
    <div>
      <section className='item-cart'>
        <header>
          <h2 className='page-title'>商品一覧</h2>
        </header>
        <div className='all-item-list'>
          {cartItems.map((item) => (
            <ItemsContens key={item.id} {...item}/>
          ))}
        </div>
        <footer>
          <button onClick={backPage} className='back-btn'>戻る</button>
        </footer>
      </section>
    </div>
  )
}

export default ItemsContainer
