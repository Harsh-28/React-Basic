import { useState } from 'react'
import './App.css'

function App() {
  
  const [counter, setCounter] = useState(0);
  const addBtn = () => {
    setCounter(counter+1);
  }
  const decBtn = () => {
    setCounter(counter-1);
  }
  return (
    <>
      <div>
        <button onClick={addBtn}>+</button>
        <p>{counter}</p>
        <button onClick={decBtn}>-</button>
      </div>
    </>
  )
}

export default App
