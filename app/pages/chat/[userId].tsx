// pages/chat/[userId].tsx
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import ChatInterface from '../../components/ChatInterface';
import dummyUsers from '../../data/dummyUsers.json';

const ChatPage: React.FC = () => {
  const router = useRouter();
  const { userId } = router.query;
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (userId) {
      const user = dummyUsers.find(user => user.id === userId);
      if (user) {
        setSelectedUser(user);
        setError('');
      } else {
        setSelectedUser(null);
        setError('User not found.');
      }
    }
  }, [userId]);

  const handleCloseChat = () => {
    router.push('/');
  };

  return (
    <div className="h-screen flex flex-col">
      {error ? (
        <div className="p-4 text-xl text-red-500">{error}</div>
      ) : (
        selectedUser && <ChatInterface selectedUser={selectedUser} onClose={handleCloseChat} />
      )}
    </div>
  );
};

export default ChatPage;
