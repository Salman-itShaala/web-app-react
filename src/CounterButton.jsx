import { useState } from "react";

function CounterButton() {
  // const [first, second] = ["salman", "shaikh"]
  // const [state, functionToUpdateState] =  useState(0)

  const [count, setCount] = useState(0); // ignore

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default CounterButton;
