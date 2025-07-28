import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //hooks used for to upadate the value in the ui

  let [counter, setCounter] = useState(15)
  // let counter = 15

  const addValue = () => {

    console.log("clicked", counter);
    counter = counter + 1
    setCounter(counter)
  }
  const removevalue = () => {
    // counter = counter - 1
    setCounter(prevCounter => prevCounter-1)  
    setCounter(prevCounter => prevCounter-1)  
    setCounter(prevCounter => prevCounter-1)  
   
    console.log("clicked", counter);
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value:{counter}</h2>


      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removevalue}>Decrease value {counter}</button>
      <footer>
        footer: {counter}
      </footer>
    </>
  )
}

export default App
