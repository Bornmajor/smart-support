import React from 'react'
import botImg from '../assets/images/bot.png'
import { Image } from 'antd'
import Dropdown from 'react-bootstrap/Dropdown';
import { BsThreeDotsVertical } from "react-icons/bs";

const TopBar = () => {
    
  

  return (
    <div className='top-bar-container '>

        <div className='d-flex align-items-center gap-20'>

          <Image
          src={botImg}
          className='avatar-img'
          preview={false}
          
          />
             
           <p className='my-1 bold'>Support bot</p>
           
        </div>
  
        <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
      <BsThreeDotsVertical />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

  

    </div>
  )
}

export default TopBar