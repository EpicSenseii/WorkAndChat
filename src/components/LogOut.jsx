import { signOut } from 'firebase/auth'
import React from 'react'

import { auth } from '../firebase'


const googleSignOut = () => {
    signOut(auth)
}

const LogOut = () => {
  return (
    <div className='logOutBtn'>
        <p className='logOut' onClick={googleSignOut}>Log out</p>
    </div>
  )
}

export default LogOut