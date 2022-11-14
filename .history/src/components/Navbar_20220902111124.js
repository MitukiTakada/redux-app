import React from 'react'
import {use}

const Navbar = () => {
  return (
    <nav className='nav-center'>
      <h3>Redux Shopping</h3>
      <div className='nav-container'>
        ロゴ
        <div className='amount-container'>
          <p className='total-amount'></p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
