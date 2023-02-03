import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState(["akjhsd", "asjhdkl"]);

  const [text, setText] = useState("");

  let add = () => {
    arr.push(text);
    console.log(arr);
    setArr([...arr]);
  };

  let edit = (i)=>{
    // get prompt
    // arr[i] == prompt value
    // set State of Array
  }

  return (
    <div className="App">
      <header className="App-header">
        {arr.map((x, i) => (
          <p>{x} <button onClick={()=>del(i)}></button></p>
        ))}

        <input
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="Enter Text"
        />

        <p>{text}</p>

        <button onClick={add}>Add</button>
      </header>
    </div>
  );
}

export default App;
