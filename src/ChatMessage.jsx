


function ChatMessage  ({message,sender}) {

// if(sender === 'robot') {
//     return (
//         <div>
//             {message}
//             <img src="src/images/bot.png" alt="Robot-avatar" width="90"/>
//         </div>
//     )
// }

    return (
        <div>
            {sender==='robot' && (
            <img src="src/images/bot.png" alt="Robot-avatar" width="70"/>  // short form for if conditional rendering
            )}
            {message}
            {sender==='user' && (
            <img  src="src/images/user.png" alt="User-avatar" width="50"/>
            )}

        </div>
    )

}

export default ChatMessage;