// Import the React library to use JSX and component features
import React from "react";

// Define a functional component named ChatMessages that takes a "messages" prop
function ChatMessages({ messages }) {
  return (
    // Outer container for the chat messages
    <div style={{ padding: "10px", minHeight: "400px", border: "1px solid #ccc" }}>
      {/* Map through each message in the messages array */}
      {messages.map((msg, index) => (
        // Each message is wrapped in a div, given a unique key (index)
        <div
          key={index}
          style={{
            display: "flex", // Use flexbox layout
            alignItems: "center", // Vertically align items (text and image)
            marginBottom: "10px", // Add spacing between messages
            justifyContent:
              msg.sender === "user" ? "flex-end" : "flex-start" // Align user messages to right, bot messages to left
          }}
        >
          {/* If the message sender is 'robot', show the bot avatar image */}
          {msg.sender === "robot" && (
            <img
              src="src/images/bot.png" // Path to bot image
              alt="bot avatar" // Alternate text for accessibility
              width="40" // Image size
              style={{ marginRight: "10px" }} // Space between image and text
            />
          )}
          {/* Message text container with background color depending on sender */}
          <div
            style={{
              backgroundColor:
                msg.sender === "user" ? "#daf8cb" : "#f1f0f0", // Greenish for user, gray for bot
              padding: "8px 12px", // Inner padding for message bubble
              borderRadius: "16px", // Rounded corners for bubble shape
              maxWidth: "70%", // Prevent bubble from being too wide
            }}
          >
            {msg.message} {/* Display the actual message text */}
          </div>
          {/* If the message sender is 'user', show the user avatar image */}
          {msg.sender === "user" && (
            <img
              src="src/images/user.png" // Path to user image
              alt="user avatar" // Alternate text for accessibility
              width="40" // Image size
              style={{ marginLeft: "10px" }} // Space between text and image
            />
          )}
        </div>
      ))}
    </div>
  );
}

// Export the component for use in other files
export default ChatMessages;
