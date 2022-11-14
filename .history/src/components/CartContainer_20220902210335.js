import React from 'react'

const CartContainer = () => {
  if(amount < 1) {
    return (
      <section className='cart'>
        <header>
          <h2>買い物かご</h2>
          <h4>何も入っていません</h4>
        </header>
      </section>
    )
  }
};

export default CartContainer
