import React from 'react'
import { useSelector , useDispatch} from 'react-redux';
import cartItems from '../CartItems';
import CartItem from './CartItem';
import { clreaCart } from '../features/cart/CartSlice'; 

const CartContainer = () => {
  const {amount, cartItems, total} = useSelector((state) => state.cart)
  const dispatch = 
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
        <button className='btn clear-btn'>全て削除</button>
      </footer>
    </section>
  )
};

export default CartContainer
