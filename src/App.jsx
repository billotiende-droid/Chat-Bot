import React, { useState } from 'react';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';




function App() {

  const [chatMessages, setChatMessages] = useState([
    {sender: 'robot',message:"Hello! How can I help you?",
      id: crypto.randomUUID()}, // Initial message from the robot

]);

const handleSend = (userMessage) => {
  if (!userMessage.trim()) return; // Ignore empty messages
}

const newMessages = [...ChatMessages, {sender:"user", message:userMessage}]; // Add user message to the chat

setChatMessages(newMessages); // Update the chat messages state




}