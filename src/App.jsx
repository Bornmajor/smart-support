import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { ConfigProvider } from 'antd'

import ChatUi from './views/ChatUi'

function App() {


  return (
    <ConfigProvider 
    theme={{
      token:{
        colorPrimary:'#3487ff'
      }
    }}
    >
     <div className='main-container my-4'>
     <ChatUi />
    </div>
    </ConfigProvider>

  )
}

export default App
