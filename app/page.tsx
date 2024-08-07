'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import UserList from './components/UserList';
import ChatInterface from './components/ChatInterface';
import dummyUsers from './data/dummyUsers.json';
import { User } from './types/chat';

const Homepage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const userId = searchParams.get('userId');

  const [searchQuery, setSearchQuery] = useState('');

  // Find the selected user based on the URL
  const selectedUser = dummyUsers.find((user: User) => user.id === Number(userId)) || null;

  return (
    <div className="flex h-screen">
      {/* User List */}
      <aside className="w-1/4 border-r p-4">
        <UserList
          users={dummyUsers}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
      </aside>

      {/* Chat Interface */}
      <main className="w-3/4 flex flex-col">
        {selectedUser ? (
          <ChatInterface
            selectedUser={selectedUser}
            onClose={() => router.push('/')}
          />
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <p>Select a user to start chatting</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Homepage;
