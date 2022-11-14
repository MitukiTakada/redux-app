
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter as Router, Routes} from "react-router-dom"
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
      <Router>
        <Routes >
      </Router>
    </main>
  )
}

export default App;
