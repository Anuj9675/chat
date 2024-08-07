'use client'
import React, { useState } from 'react';
import { User } from '../types/chat';
import dummyUsers from '../data/dummyUsers.json';

interface DummyLoginProps {
  onLogin: (user: User) => void;
}

const DummyLogin: React.FC<DummyLoginProps> = ({ onLogin }) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleLogin = () => {
    if (selectedUser) {
      onLogin(selectedUser);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="mb-4 text-xl">Select a User to Login</h1>
      <select
        className="p-2 mb-4 border rounded"
        value={selectedUser?.id || ''}
        onChange={(e) => {
          const user = dummyUsers.find((user) => user.id === parseInt(e.target.value));
          setSelectedUser(user || null);
        }}
      >
        <option value="">Select User</option>
        {dummyUsers.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <button
        className="p-2 bg-blue-500 text-white rounded"
        onClick={handleLogin}
        disabled={!selectedUser}
      >
        Login
      </button>
    </div>
  );
};

export default DummyLogin;
