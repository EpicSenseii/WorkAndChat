import { addDoc, serverTimestamp, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { auth, db } from '../firebase'


const SendMessage = ({}) => {
    const [input, setInput] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault()
        if (input === '') {
            return
        }

        const { uid, displayName } = auth.currentUser
        await addDoc(collection(db, 'messages'), {
            text: input,
            name: displayName,
            uid,
            timestamp: serverTimestamp()
        })
        setInput('')
    }

    return (
        <form onSubmit={sendMessage} className='form'>
            <input value={input} onChange={(e) => setInput(e.target.value)} className='inputMsg' type="text" placeholder='Message...' />
            <button className='sendBtn' type='submit'><i class='sendIcon fa-solid fa-paper-plane'></i></button>
        </form>
    )
}

export default SendMessage