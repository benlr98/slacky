import React from 'react'

import Message from './Message';

const MessageList = () => {
    const messages = [
        {id: 1 , username: 'benlr98', body: 'Chatting away!'},
        {id: 2 , username: 'billy', body: 'hahah'},
    ]


    return(
        <div className="MessageList">
            {
                messages.map(msg => <Message key={msg.id} message={msg} />)
            }
        </div>
    )
}

export default MessageList;