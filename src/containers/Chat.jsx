import React from 'react';
import Nav from '../components/Nav';
import ChatsList from '../components/ChatsList';
import Header from '../components/Header';
import ChatBox from '../components/ChatBox';
import './Chat.css'

const Chat = () => {
  return (
    <main className="container">
      <Nav />
      <div class="container-page">
        <ChatsList />
        <Header />
        <ChatBox />
      </div>
    </main>
  );
}

export default Chat;