import React from 'react'
import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import SignIn from './SignIn'
import LogOut from './LogOut'

function Navbar() {
    const [user] = useAuthState(auth)

    return (
        <div className="nav">
            <h1 className="header">WorkChat <span className='dotColored'>.</span></h1>
            {user ? <LogOut /> : <SignIn />}
        </div>
    )
}

export default Navbar