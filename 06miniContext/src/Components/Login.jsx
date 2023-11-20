import React, { useContext, useState } from 'react'
import userContext from '../Context/userContext'

function Login() {
    const [userName, setUserName] = useState('')
    const [password, setUserPassword] = useState('')

    const {setUser} = useContext(userContext)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({userName, password})
    }
  return (
    <div>
        <h2>login</h2>
        <input type='text' placeholder='username' 
        value={userName}
        onChange={(e) => setUserName(e.target.value)}/>
        <input type='text' placeholder=' password' 
        value ={password}
        onChange={(e) => setUserPassword(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login