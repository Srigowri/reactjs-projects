import Die from './components/Die';
import React from 'react';
import {nanoid} from "nanoid"
import Confetti from "react-confetti"
function App() {

  

  function generateNewDice(){
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld:false,
      id: nanoid()
    }
  }
  function getAllNewDice(){
    const dieValues = []
    for(let i=0;i<10;i++){
      dieValues.push(generateNewDice())
    }
    return dieValues
  }

  function rollDice(){
    if (tenzies){
      setDice(getAllNewDice())
      setTenzies(false);
    }
    else{
      setDice(oldDice => oldDice.map(
        die=>{
          return die.isHeld? die: generateNewDice()
        }
        )
      );
    }
    
  }
  function holdDice(id){
    setDice(oldDiceValues => oldDiceValues.map(
      (die)=>{
        return die.id ===id?{...die,isHeld: !die.isHeld}: die}))
  }
  const [tenzies, setTenzies] = React.useState(false)
  
  const [dice, setDice] = React.useState(getAllNewDice())
  const dieElements = dice.map((die)=><Die key={die.id} value={die.value} isHeld={die.isHeld} id={die.id} handleClick={holdDice} />)
  React.useEffect(()=>{

    const allHeld = dice.every(die=>die.isHeld);
    const first = dice[0].value;
    const allSame = dice.every(die=>die.value===first)
    if (allHeld && allSame){
      setTenzies(true);
      console.log("You won!")
    }
    
  },[dice])
  return (
    <main>
      <div className='dice-container'>
        {dieElements}
      </div>
      <button className='roll-dice' onClick={rollDice}>{tenzies?"RESET":"ROLL"}</button>
      {tenzies && <Confetti />}
    </main>
  );
}

export default App;
