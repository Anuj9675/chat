'use client';
import { useRouter } from 'next/router';
import ChatInterface from '../components/ChatInterface';
import dummyUsers from '../data/dummyUsers.json';
import { User } from '../../types/chat';

const ChatPage = () => {
  const router = useRouter();
  const { userId } = router.query;

  // Ensure userId is a string
  if (typeof userId !== 'string') {
    return <div>Invalid user ID</div>;
  }

  // Find the user based on the userId from the query
  const user = dummyUsers.find((user: User) => user.id === Number(userId)) || null;

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <ChatInterface selectedUser={user} onClose={() => router.push('/')} />
  );
};

export default ChatPage;
