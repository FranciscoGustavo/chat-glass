import React from 'react';
import './ChatItem.css';

const ChatItem = ({ isButton = true}) => {
  return (
    <button className={`chat-user ${isButton ? 'btn-chat-user' : ''}`}>
      <img src="https://res.cloudinary.com/hs8bxfui6/image/upload/v1611699598/me_moo3l1.jpg" alt=""/>
      <div>
        <p>Francisco G</p>
        <p>Hola como estas?</p>
      </div>
    </button>
  );
}

export default ChatItem;