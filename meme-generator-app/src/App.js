import React, { useState } from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
import WindowTracker from "./components/WindowTracker";
function App() {
  const [show, setShow] = useState(true)
  function handleClick(){
    setShow(old=>!old);
  }
  return (
    <div className="App">
      {/* <Header />
      <section className="section">
        <Meme/>
      </section>       */}
      <button onClick={handleClick}>Toggle Window tracker</button>
      {show && <WindowTracker />}
    </div>
  );
}

export default App;
