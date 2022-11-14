import React from 'react'
import AllItems from '../Items/AllItems'
import {useNavigate} from "react-router-dom"
import ItemsContens from './ItemsContens'
import "./"

const ItemsContainer = () => {
  const navigate = useNavigate();
  const backPage = () => {
    navigate("/")
  }
  return (
    <div>
      <section className='cart'>
        <header>
          <h2>商品一覧</h2>
        </header>
        <div>
          {AllItems.map((item) => (
            <ItemsContens key={item.id} {...item}/>
          ))}
        </div>
      </section>
      <footer>
        <button onClick={backPage}>戻る</button>
      </footer>
    </div>
  )
}

export default ItemsContainer
