import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState(["akjhsd", "asjhdkl"]);

  const [text, setText] = useState("");

  let add = () => {
    arr.push(text);
    console.log(arr);
    setArr([...arr]);
  };

  let edit = (i) => {
    // get prompt
    let a = prompt("Enter Value", arr[i]);

    // arr[i] = prompt value
    arr[i] = a;

    // set State of Array
    setArr([...arr]);
  };

  let del = (i) => {
    arr.splice(i, 1);
    setArr([...arr]);
  };
  return (
    <div className="App">
      <header className="App-header">
        {arr.map((x, i) => (
          <p>
            {x}
            <button onClick={() => del(i)}>Delete</button>
            <button onClick={() => edit(i)}>Edit</button>
          </p>
        ))}

        <input
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="Enter Text"
        />
  
        <p>{text}</p>

        <button onClick={add}>Add</button>
        <Button click={add} className="dark-button" label="Add Todo" />
      </header>
    </div>
    <SMButton endIcon={<SearchIcon />} onClick={()=>console.log('Add Click')} label='Add' />
    <SMInput label="Email" />
    
  </>    
  );
}

export default App;
