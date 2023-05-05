import React from 'react'
import {useDispatch} from 'react-redux'
import { login, logout } from '../features/user'
function Login() {
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=> dispatch(login({ name: "saniul", age: 22, email: "saniul@techis.io" }))}>Log In</button>
      <button onClick={()=> dispatch(logout())}>LogOut</button>
    </div>
  )
}

export default Login
