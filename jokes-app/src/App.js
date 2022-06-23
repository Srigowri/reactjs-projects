import React, { useState } from 'react'
import Joke from './component/Joke'
import jokesData from './jokesData.js';


function App() {
  
  const [allJokes, setJokes] = useState(jokesData);

  const jokes =  allJokes.map(joke =>{
    return <Joke setup = {joke.setup} punchline={joke.punchline}/>
  })  
  return (
    <div className="App">
      {jokes}
    </div>
  );
}
export default App;
