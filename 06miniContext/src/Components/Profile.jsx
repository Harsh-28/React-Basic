import React, {useContext} from 'react'
import userContext from '../Context/userContext'


function Profile() {
    const {user} = useContext(userContext)
  if(!user) return <div>Please Login with your <details></details></div>

  return <div>welcome {user.username}</div>
}

export default Profile