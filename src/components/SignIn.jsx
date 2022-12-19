import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import React from 'react'

import { auth } from '../firebase'


const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
}

const SignIn = () => {
  return (
    <div className='signInBtn'>
        <p className='signIn' onClick={googleSignIn}>Sign in with Google</p>
    </div>
  )
}

export default SignIn