
'use client'
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { User } from '../../types/chat';

interface ChatHeaderProps {
  user: User;
  onClose: () => void; 
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ user, onClose }) => {
  return (
    <div className="p-4 bg-gray-100 text-gray-900 flex items-center">
      <img src={user.profilePic} alt={user.name} className="w-12 h-12 rounded-full mr-4" />
      <h1 className="text-lg font-bold flex-1">{user.name}</h1>
      <FaTimes
        onClick={onClose}
        className="text-gray-600 cursor-pointer ml-4"
        size={20}
      />
    </div>
  );
};

export default ChatHeader;
