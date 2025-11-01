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

// Bot auto-response simulation
setTimeout(() => {
  let reply;
  if (userMessage.toLowercase().includes("date")) {
    reply = `Today's date is ${new Date().toLocaleDateString()}`;
  } else if (userMessage.toLowerCase().includes("hello")) {
    reply = "Hi! there";
  } else {
    reply = "I am not sure how to respond to that.";
  }

  setChatMessages((prev) => [...prev, {sender:"robot",message:reply}])

}, 1000); // Simulate a delay for the bot's response


};

