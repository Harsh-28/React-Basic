import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import userContextProvider from './Context/userContextProvider'
function App() {

  return (
   <userContextProvider>
      <Login />
      <Profile />
   </userContextProvider>
  )
}

export default App
