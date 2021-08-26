import Button from "./components/Button";
import RenderCount from "./components/RenderCount";
import "./App.css";
import { useCounter } from "./hooks/useCounter.hook";

function App() {
  const { count, decrement, increment } = useCounter(0);

  return (
    <div className="App">
      <RenderCount count={count} />
      <Button text="-" onClick={decrement} />
      <Button text="+" onClick={increment} />
    </div>
  );
}

export default App;