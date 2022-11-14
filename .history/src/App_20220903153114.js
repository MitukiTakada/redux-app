
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';

function App() {
  const dispatch = useDispatch();
  const {cartItems} = useSelector((state) => state.cart)
  useEffect(() => {
    dispatch
  }, [cartItems])
  return(
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App;
