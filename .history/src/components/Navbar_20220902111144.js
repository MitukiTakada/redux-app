import React from 'react'
import { useSelector } from 'react-redux';

const Navbar = () => {
  const amount = useSelector(s)
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
