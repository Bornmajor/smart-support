import React from 'react'
import TopBar from '../components/TopBar'
import MessagePanel from './MessagePanel'
import SendTab from '../components/SendTab'
import { createContext } from 'react'

export const ChatContext = createContext();
const ChatUi = () => {

  const faqData = {
    "company": "TechEase Solutions",
    "faqs": [
      {
        "question": "How do I register for a TechEase Solutions account?",
        "answer": "To register, visit our website at https://techeasesolutions.com and click on 'Sign Up'. Fill in your details, verify your email, and set up a secure password."
      },
      {
        "question": "How do I log into my account?",
        "answer": "Go to the login page at https://techeasesolutions.com/login, enter your registered email and password, then click 'Login'. If you forgot your password, use the 'Forgot Password' link."
      },
      {
        "question": "What should I do if I forget my password?",
        "answer": "Click on 'Forgot Password' on the login page and enter your registered email. You will receive a password reset link in your email."
      },
      {
        "question": "How can I contact customer support?",
        "answer": "You can reach our support team via email at support@techeasesolutions.com, or call us at +1-800-123-4567. Live chat support is also available on our website."
      },
      {
        "question": "Where can I find help regarding a technical issue?",
        "answer": "Visit our Help Center at https://techeasesolutions.com/help for troubleshooting guides and FAQs. You can also submit a support ticket for personalized assistance."
      },
      {
        "question": "How do I update my profile information?",
        "answer": "Log into your account, go to 'Settings' > 'Profile', and update your details. Remember to click 'Save Changes' after editing."
      },
      {
        "question": "How do I delete my account?",
        "answer": "If you want to delete your account, contact our support team at support@techeasesolutions.com. Account deletion requests may take up to 48 hours to process."
      }
    ]
  }
  
  return (
    <ChatContext.Provider>
     <div className='chat-container' 
     value={{
     faqData
     }}>
     <TopBar /> 
     <MessagePanel/>
     <SendTab />
    </div>
    </ChatContext.Provider>

    
  )
}

export default ChatUi