
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Brow}
import { calculateTotal } from './features/cart/CartSlice';

function App() {
  const dispatch = useDispatch();
  const {cartItems} = useSelector((state) => state.cart)
  const {isOpen} = useSelector((state) => state.modal)
  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems])
  return(
    <main>
      <
    </main>
  )
}

export default App;
