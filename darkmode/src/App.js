import React from "react";
import Header from "./components/Header";
import Facts from "./components/Facts";
function App() {
  const [lightMode, setMode] = React.useState(true)

  function changeMode(id){
    setMode(old =>!old);
  }
  return (

    <div className="App">
      <Header lightMode = {lightMode} changeMode={changeMode}/>
      <Facts lightMode = {lightMode}/>
    </div>
  );
}

export default App;
