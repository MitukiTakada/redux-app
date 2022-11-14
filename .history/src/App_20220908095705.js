
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import CartContainer from './components/CartContainer';
import { calculateTotal } from './features/cart/CartSlice';
import SecoundPage from './pages/SecoundPage';

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
          <Route path={"/"} element={<CartContainer />}/>
          <Route path={"/items"} element={<SecoundPage />}
        </Routes>
      </Router>
    </main>
  )
}

export default App;
