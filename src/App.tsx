import { useState } from "react";
import Button from "./components/Button";
import "./App.css";

function App() {
  const initialState = { count: 0 };
  const [state, setState] = useState(initialState);

  function add() {
    setState({ count: state.count + 1 });
  }

  function substract() {
    setState({ count: state.count - 1 });
  }

  return (
    <div className="App">
      <p>{state.count}</p>
      <Button text="-" onClick={substract} />
      <Button text="+" onClick={add} />
    </div>
  );
}

export default App;
