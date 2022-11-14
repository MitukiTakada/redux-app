import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from "react-redux"
import 

function App() {
  const counter = useSelector((state) => state.counter)
  const isLogin = useSelector((state) => state.isLogin)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>hello redux</h1>
      <h3>カウント: {counter}</h3>
      <button onClick={() => dispatch()}>プラス</button>
      {isLogin ? (<h3>ログインしています</h3>) :
      (<h3>ログインしていません</h3>)
      }
    </div>
  );
}

export default App;
