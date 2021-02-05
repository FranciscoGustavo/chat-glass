import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineVideoCamera, AiOutlineInfoCircle } from 'react-icons/ai';
import ChatItem from '../components/ChatItem';
import './Header.css';

const Header = () => {
  return (
    <div className="header-chat">
      <ChatItem isButton={false}/>
      <div className="options">
        <FiPhoneCall />
        <AiOutlineVideoCamera />
        <AiOutlineInfoCircle />
      </div>
    </div>
  );
}

export default Header;