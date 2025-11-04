import React, { useState } from 'react'; // Import React and the useState hook to manage component state
import ChatMessages from './ChatMessages'; // Import the ChatMessages component that displays chat bubbles
import ChatInput from './ChatInput'; // Import the ChatInput component for typing and sending messages

function App() { // Define the main App component
  const [chatMessages, setChatMessages] = useState([ // useState creates a state variable for all chat messages
    { sender: 'robot', message: "Hello! How can I help you?", id: crypto.randomUUID() }, // Initial bot message with a unique id
  ]);

  const handleSend = (userMessage) => { // Function to handle sending a new message
    if (!userMessage.trim()) return; // Prevent sending empty messages

    const newMessages = [...chatMessages, { sender: "user", message: userMessage }]; // Add the user's message to the existing chat messages
    setChatMessages(newMessages); // Update the chat state to include the new user message

    // Bot auto-response simulation
    setTimeout(() => { // Add a small delay before the bot replies (to feel realistic)
      let reply; // Variable to store the bot's reply message

      // Basic message matching for a simple chatbot response
      if (userMessage.toLowerCase().includes("date")) { 
        reply = `Today's date is ${new Date().toLocaleDateString()}`; // Responds with today's date
      } else if (userMessage.toLowerCase().includes("hello")) {
        reply = "Hi there!"; // Responds to greetings
      } else {
        reply = "I am not sure how to respond to that."; // Default reply for unknown input
      }

      // Add the bot's reply to the chat after 1 second
      setChatMessages((prev) => [...prev, { sender: "robot", message: reply }]);
    }, 1000); // Delay set to 1 second
  }; // End of handleSend function

  // The UI layout for the chat app
  return (
    <div style={{ width: "400px", margin: "20px auto" }}> {/* Container for the chat app, centered on the screen */}
      <ChatMessages messages={chatMessages} /> {/* Displays all chat messages */}
      <ChatInput onSend={handleSend} /> {/* Input area where the user types and sends messages */}
    </div>
  );
}

export default App; // Export the App component to be used elsewhere (e.g., in index.js)
