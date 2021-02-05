import React from 'react';
import { AiOutlineHome, AiOutlineCalendar, AiOutlineMessage, AiOutlineSetting } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import './Nav.css';

const Nav = () => {
  return (
    <nav className="nav">
      <a href="#/">
        <AiOutlineHome />
      </a>
      <a href="#/">
        <FiUsers />
      </a>
      <a href="#/">
        <AiOutlineCalendar />
      </a>
      <a href="#/">
        <AiOutlineMessage />
      </a>
      <a href="#/">
        <AiOutlineSetting />
      </a>
    </nav>
  );
}

export default Nav;