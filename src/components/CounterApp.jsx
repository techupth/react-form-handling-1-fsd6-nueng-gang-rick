import { useState } from "react";

function CounterApp() {
  const [greetingMessage, setGreetingMessage] = useState("Greeting Message");
  const [newGreetingMessage, setNewGreetingMessage] = useState(""); 

  const handleClick = () => {
    setGreetingMessage(newGreetingMessage);
  };
  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          value={newGreetingMessage}
          onChange={(event) => setNewGreetingMessage(event.target.value)}
        />
      </div>

      <div className="buttons">
        <button onClick={handleClick}>Update text</button>
      </div>
    </div>
  );
}

export default CounterApp;
