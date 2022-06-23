import React from "react"
import data from './data'
import Header from "./components/Header"
import Card from "./components/Card"
function App() {
  const cards = data.map(place =>{
    return <Card 
      key = {place.id}
      {...place}

    />
  })
  return (
    <div className="App">
      <Header />      
      <section >
        {cards}  
      </section>
    </div>
  )
}

export default App;
