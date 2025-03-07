import React,{useRef,useEffect, useState} from 'react'
import MessageCard from './MessageCard'

const MessagePanel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
}, []);

   const [listMessage,setListMessage] = useState([]);
   


  return (
    <div className='message-panel ' ref={containerRef}>

        <MessageCard message={'Hello'} uiType='user'/>
        <MessageCard message={'Hello'} uiType='robot'/>
        <MessageCard message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," uiType='robot'/>
        <MessageCard message={'Hello'} uiType='user'/>
        <MessageCard message={'Hello'} uiType='robot'/>
        <MessageCard message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," uiType='robot'/>
        <MessageCard message={'Hello'} uiType='user'/>
        <MessageCard message={'Hello'} uiType='robot'/>
        <MessageCard message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," uiType='robot'/>
        
        
        <MessageCard message={'Hello'} uiType='user'/>
        <MessageCard message={'Hello'} uiType='robot'/>
        <MessageCard message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," uiType='robot'/>
        <MessageCard message={'Hello'} uiType='user'/>
        <MessageCard message={'Hello'} uiType='robot'/>
        <MessageCard message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," uiType='robot'/>
        <MessageCard message={'Hello'} uiType='user'/>
        <MessageCard message={'Hello'} uiType='robot'/>
        <MessageCard message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," uiType='robot'/>
        
        
    </div>
  )
}

export default MessagePanel