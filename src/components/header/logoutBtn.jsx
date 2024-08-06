import React from 'react'
import {useDispatch} from 'react-redux'   // by using reducer i need to hange the state
import authservice from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch=useDispatch()
    const logoutHandler=()=>{
authservice.logout().then(()=>{dispatch(logout()
)}  )

    }
  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={logoutHandler} >Logout</button>
  )
}

export default LogoutBtn