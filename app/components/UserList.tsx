'use client'
import React, { useState } from 'react';
import { User } from '../types/chat';
import { FaSearch } from 'react-icons/fa';

interface UserListProps {
  users: User[];
  onUserSelect: (userId: number) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onUserSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full bg-gray-100 border-r overflow-y-auto h-screen">
        <h1 className='font-bold text-xl mx-4 my-2 '>Chats</h1>
      <div className="p-4 flex items-center">
        <FaSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border rounded w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {filteredUsers.map(user => (
        <div
          key={user.id}
          className="flex items-center p-2 mb-2 cursor-pointer hover:bg-gray-200 border-b"
          onClick={() => onUserSelect(user.id)}
        >
          <img src={user.profilePic} alt={user.name} className="w-10 h-10 rounded-full mr-2" />
          <div>{user.name}</div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
