import React from 'react';
import { AiOutlineCamera, AiOutlineSend, AiOutlineAppstore } from 'react-icons/ai';
import { BiMicrophone } from 'react-icons/bi';
import { GrEmoji } from 'react-icons/gr';
import { IoImageOutline } from 'react-icons/io5';
import './ChatBox.css';

const ChatBox = () => {
  return (
    <div class="chat">
          <div>

          </div>
          <div className="write-box">
            <p>
              <IoImageOutline />
            </p>
            <p>
              <AiOutlineCamera />
            </p>
            <p>
              <AiOutlineAppstore />
            </p>
            <p>
              <BiMicrophone />
            </p>
            <div>
              <input type="text" name="" id=""/>
              <p>
                <GrEmoji />
              </p>
            </div>
            <p>
              <AiOutlineSend /> 
            </p>
          </div>
        </div>
  );
}

export default ChatBox;