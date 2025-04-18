import "./App.css";
import { useState, useEffect } from "react"; // Added useEffect

function App() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("counterValue");
    return savedCount !== null ? Number(savedCount) : 0;
  });
  const [stepSize, setStepSize] = useState(1);

  const handleIncrement = () => {
    setCount(count + stepSize);
  };

  const handleDecrement = () => {
    if (count >= stepSize) {
      setCount(count - stepSize);
    } else {
      setCount(0);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  useEffect(() => {
    localStorage.setItem("counterValue", count);
  }, [count]);

  return (
    <div className="container">
      <h1 className="heading">Counter App</h1>

      <div className="step-control">
        <label htmlFor="stepSize">Step Size: </label>
        <select
          id="stepSize"
          value={stepSize}
          onChange={(e) => setStepSize(Number(e.target.value))}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>

      <h2 className="counter">{count}</h2>

      <div className="button-group">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement} disabled={count < stepSize}>
          Decrement
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
