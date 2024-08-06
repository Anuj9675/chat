'use client'
import React, { useState } from 'react';
import UserList from './components/UserList';
import ChatInterface from './components/ChatInterface';
import dummyUsers from './data/dummyUsers.json';

const HomePage: React.FC = () => {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const selectedUser = dummyUsers.find(user => user.id === selectedUserId) || null;

  const handleCloseChat = () => {
    setSelectedUserId(null); 
  };

  return (
    <div className="h-screen flex flex-col md:flex-row">
      {/* User List */}
      <div
        className={`fixed inset-0 bg-white border-r transition-transform duration-300 ease-in-out ${selectedUserId ? '-translate-x-full' : 'translate-x-0'} md:translate-x-0 md:w-1/4 md:static md:flex md:flex-col`}
        style={{ zIndex: 10 }}
      >
        <UserList
          users={dummyUsers}
          onUserSelect={setSelectedUserId}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
      </div>

      {/* Chat Interface */}
      <div
        className={`flex-1 transition-transform duration-300 ease-in-out ${selectedUserId ? 'translate-x-0' : 'translate-x-full'} ${selectedUserId ? 'opacity-100' : 'opacity-0'} md:opacity-100 md:translate-x-0 md:w-2/3`}
        style={{ zIndex: 5 }}
      >
        {selectedUserId ? (
          <ChatInterface selectedUser={selectedUser} onClose={handleCloseChat} />
        ) : (
          <div className="p-4 text-xl">
              <h1 >Select a user to start chatting.</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
