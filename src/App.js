import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h1 className="heading">Counter App</h1>
      <h2 className="counter">{count}</h2>
      <div className="button-group">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement} disabled={count === 0}>
          Decrement
        </button>
        <button onClick={handleReset}>Reset</button> {/* New Button */}
      </div>
    </div>
  );
}

export default App;
