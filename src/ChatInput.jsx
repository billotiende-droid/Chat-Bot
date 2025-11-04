import {useState} from 'react';


function ChatInput ({onSend}) {

    const [input , setInput] = useState ('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(input.trim()) {
            onSend(input);
            setInput(''); // Clear the input field after sending
        }
    };

    return (
        <form className='chat-input' onSubmit = {handleSubmit} >
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message here..."
            />
            <button type="submit">Send</button>
        </form>

    );

}

export default ChatInput; // Export the ChatInput component to be used in other parts of the app