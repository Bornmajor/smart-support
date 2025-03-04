import React from 'react'

const MessageCard = ({message,id,uiType}) => {
  return (
    <div className={`message-card ${uiType === 'user' ? 'justify-content-end': 'justify-content-start' } `}>
    <span className={`inner-card ${uiType === 'user' ? 'user-card': 'robot-card' }`}> {message}</span> 
    </div>
  )
}

export default MessageCard