import "./App.css";
import { useState } from "react";
function App() {
  let [inputText , setText] = useState('')
  let [displayText, setDisplayText] = useState('Greeting Message')
  let text = (event) =>{
  setText(event.target.value)
  }
  let update =()=>{
    setDisplayText(inputText)
  }
  return (
    <div className="App">
      <div className="greeting-container">{displayText}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input id="greeting-message" type="text" onChange={text} />
      </div>

      <div className="buttons">
        <button onClick={update}>Update text</button>
      </div>
    </div>
  );
}

export default App;
