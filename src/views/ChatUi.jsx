import React from 'react'
import TopBar from '../components/TopBar'
import MessagePanel from './MessagePanel'

const ChatUi = () => {
  return (
    <div className='chat-container'>

     <TopBar /> 

     <MessagePanel/>
    </div>
    
  )
}

export default ChatUi