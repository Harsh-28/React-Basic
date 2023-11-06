import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] =  useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMONOPQRSTUVWXYZabcdefghijklmnopqrsstuvwxyz"
    
    if(numberAllowed) str += "0123456789"
    if(characterAllowed) str += "!@#$%^&*"


    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);

  }, [length, numberAllowed, characterAllowed, setPassword]);

  const passRef = useRef(null) 

  useEffect(() => {
    passwordGenerator()
  },[length, numberAllowed, characterAllowed, passwordGenerator])

  
  
  const copyToClipboard = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange();
            
    window.navigator.clipboard.writeText(password)
  },[password])
  return (
    <>
      <div>
        <h1 className='text-xl'>Password Genrator</h1>
        <div>
          <input type="text" value={password} placeholder="password" readOnly/><br/><br/>
          <label>Length: {length}</label>
          <input type="range" min = {8} max={20} value={length} 
          onChange={(e) => {setLength(e.target.value)}}/><br/><br/>

          <input type="checkbox" value={numberAllowed} 
          onChange={() => {
            setNumberAllowed((prev) => (!prev))
          }}/>
          <label>number</label>

          <input type="checkbox" value={characterAllowed} onChange={() => {
            setCharacterAllowed((prev) => (!prev))
          }}/>
          <label>character</label>
        </div>
        <button onClick={copyToClipboard}>copy</button>
      </div>
    </>
  )
}

export default App