import logo from './logo.svg';
import './App.css';
import {useSelector} from "react-redux"

function App() {
  const counter = useSelector
  return (
    <div className="App">
      <h1>hello redux</h1>
    </div>
  );
}

export default App;
