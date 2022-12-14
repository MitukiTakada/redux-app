import React from 'react'
import { useSelector } from 'react-redux';
import cartItems from '../CartItems';
import CartItem from './CartItem';

const CartContainer = () => {
  const {amount, cartItems} = useSelector((state) => state.cart)
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
          return <CartItem  key={item.id}/>
        })}
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          
        </div>
      </footer>
    </section>
  )
};

export default CartContainer
