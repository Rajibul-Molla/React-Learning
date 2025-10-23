import "./App.css";
import { useState } from "react";

function App() {
  let initial_value = 0;
  let [count, setCount] = useState(initial_value);

  const increase=()=>{
    if(count<20){
      count=count+1;
      setCount(count)
    }
  }
  const decrease= () =>{
    if(count>0){
      count=count-1;
      setCount(count)
    }
  }

  return (
    <>
      <h1>Hello</h1>
      <h2>Current Value: {count} </h2>

      <button onClick={increase}>Increase</button>
      <br />
      <br />
      <button onClick={decrease}>Decrease</button>
    </>
  );
}
export default App;
