import React from 'react'
import MessageCard from './MessageCard'

const MessagePanel = () => {
  return (
    <div className='message-panel my-3'>

        <MessageCard message={'Hello'} uiType='user'/>
        <MessageCard message={'Hello'} uiType='robot'/>
        <MessageCard message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," uiType='robot'/>

        
    </div>
  )
}

export default MessagePanel