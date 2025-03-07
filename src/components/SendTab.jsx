import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from 'antd'
import { IoSend } from "react-icons/io5";

const SendTab = () => {
    const [isBtnLoading,setIsBtnLoading] = useState(false)
  return (
    <div className='container-send-tab gap-10 '>

       {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
   
        <Form.Control as="textarea" className='chat-tab-area' rows={3} />
      </Form.Group> */}
      <textarea className='w-100 form-control chat-tab-area' rows={3}></textarea>

      <Button className='send-msg-btn' type='primary' loading={isBtnLoading}>
       {!isBtnLoading && <IoSend />}   
      </Button>

      

      

        
    </div>
  )
}

export default SendTab