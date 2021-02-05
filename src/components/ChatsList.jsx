import React from 'react';
import { HiOutlinePencilAlt } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";

import ChatItem from './ChatItem';
import './ChatsList.css';

const ChatsList = () => {
  return (
    <div className="chat-list">
      <div className="chats-list_header">
        <p>Chats</p>
        <p><HiOutlinePencilAlt /></p>
      </div>
      <div className="chats-list_search">
        <div className="input-search">
          <input type="text" />
          <AiOutlineSearch />
        </div>
      </div>
      <div className="chats-list_chats">
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
      </div>
    </div>
  );
}

export default ChatsList;