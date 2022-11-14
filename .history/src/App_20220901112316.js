import logo from './logo.svg';
import './App.css';
import {useSelector} from "react-redux"

function App() {
  const counter = useSelector((state) => state.counter)
  const isLogin = useSelector((state) => state.isLogin)
  return (
    <div className="App">
      <h1>hello redux</h1>
      <h3>カウント: {counter}</h3>
      {isLogin ? (<h3>ログインしています</h3>) :
      }
    </div>
  );
}

export default App;
