import { onSnapshot, orderBy, query, collection } from 'firebase/firestore';
import { db } from '../firebase'
import React, { useState, useEffect, useRef } from 'react'
import Message from './Message'
import SendMessage from './SendMessage';
import ScrollToBottom from 'react-scroll-to-bottom';
import { auth } from '../firebase'


const Chat = () => {

    const [messages, setMessages] = useState([]);


    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('timestamp'))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = []
            querySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id })
            })
            setMessages(messages)
        })
        return () => unsubscribe()
    }, []);


    return (
        <>
            <div className='mainChat'>
                {messages.map((message) => (
                    message.uid === auth.currentUser.uid
                        ?
                        <>
                            <div className={message}>
                                <div className="messages right">
                                    <p className='userName'>{message.name}</p>
                                    <p className='userMessage sent'>{message.text}</p>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div className={message}>
                                <div className="messages left">
                                    <p className='userName'>{message.name}</p>
                                    <p className='userMessage received'>{message.text}</p>
                                </div>
                            </div>
                        </>
                ))}
            </div>
            <SendMessage />
        </>
    )
}

export default Chat