import React from 'react'
import { useDispatch} from 'react-redux';
import cartItems from '../Items/CartItems';
import CartItem from './CartItem';
import {openModal} from "../features/cart/modal/ModalSlice";
import {clearCart} from "../features/cart/CartSlice"
import {useNavigate} from "react-router-dom"


const CartContainer = () => {
  const {amount, cartItems, total} = useSelector((state) => state.cart)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const toItems = () => {
    navigate("/items");
  }
  if(amount < 1) {
    return (
      <section className='cart'>
        <header>
          <h2>買い物かご</h2>
          <h4 className='empty-cart'>何も入っていません</h4>
        </header>
      </section>
    )
  }
  return (
    <section className='cart'>
      <header>
        <h2>買い物かご</h2>
      </header>
      <div>
        {cartItems.map((item) =>{
          return <CartItem  key={item.id} {...item}/>
        })}
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            合計 <span>{total}円</span>
          </h4>
        </div>
        <div className='bottom-btns'>
          <button 
          className='btn clear-btn' 
          onClick={() => dispatch(openModal())}>全て削除
          </button>
          <button className='btn change-btn' onClick={toItems}>商品一覧</button>
        </div>
      </footer>
    </section>
  )
};

export default CartContainer
