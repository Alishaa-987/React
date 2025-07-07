import { useState } from "react";
import "./App.css";

function App() {
  // let counter = 10;
    const [counter , setCounter] = useState(10)

  const addValue = () => {
        setCounter(counter + 1) 
  }

  const removeValue = () => {
  setCounter( counter - 1)
  }

  return (
    <>
      <h1>Hello</h1>
      <h2>Counter Button: {counter}</h2>
      <button onClick = {addValue}> Add value</button>
      <br />
      <br />

      <button onClick = {removeValue}>Remove Value </button>
    </>
  );
}

export default App;
