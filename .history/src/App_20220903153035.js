
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';

function App() {
  const {cartItems} = useSelector((state) => state)
  useEffect(() => {

  }, [])
  return(
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App;
