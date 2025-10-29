import React from 'react'
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'


function App() {
  

  return (
    <>
      <ChatInput />

      <ChatMessage 
        message='Hello Chatbot' 
        sender='user' 
      /> 
      <ChatMessage 
        message='Hello! How can I help you' 
        sender='robot' 
      /> 
      <ChatMessage 
        message='Can you get me todays date' 
        sender='User' 
      /> 
      <ChatMessage 
        message='Today is October 29th' 
        sender='robot'
      /> 

    </>
    
  )
}

export default App
