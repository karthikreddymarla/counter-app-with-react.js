import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App" style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default App;
