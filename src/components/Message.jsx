import React from 'react'
import { auth } from '../firebase'


const Message = ({ message }) => {
    // const messageClass = message.uid === auth.currentUser.uid ? `${sent}` : `${received}`
    

    return (
        <div>
            <div className={message}>
                <p className='userName'>{message.name}</p>
                <p className='userMessage'>{message.text}</p>
            </div>
        </div>
    )
}


export default Message