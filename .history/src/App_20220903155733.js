
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartContainer from './components/CartContainer';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import { calculateTotal } from './features/cart/CartSlice';

function App() {
  const dispatch = useDispatch();
  const {cartItems} = useSelector((state) => state.cart)
  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems])
  return(
    <main>
      {isOpen }
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App;
