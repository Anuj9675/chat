import React, { useState, useEffect, useRef } from 'react';
import ChatInput from './ChatInput';
import MessageComponent from './Message';
import { User, Message } from '../types/chat';
import dummyMessages from '../data/dymmyMessages.json';
import ChatHeader from './ChatHeader';
import DummyLogin from './DummyLogin';

interface ChatInterfaceProps {
  selectedUser: User | null;
  onClose: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ selectedUser, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [replyMessage, setReplyMessage] = useState<Message | null>(null);
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);
  const messageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedUser) {
      const userMessages = dummyMessages[selectedUser.id] || [];
      if (Array.isArray(userMessages)) {
        setMessages(userMessages);
      } else {
        console.error("Fetched messages are not an array");
        setMessages([]);
      }
    }
  }, [selectedUser]);

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (text: string) => {
    if (loggedInUser) {
      const newMessage: Message = {
        id: String(messages.length + 1),
        text: replyMessage ? `Replying to: ${replyMessage.text}\n${text}` : text,
        sender: loggedInUser.name,
        timestamp: new Date().toISOString(),
        senderProfilePic: '',
      };
      setMessages(prevMessages => [...prevMessages, newMessage]);
      setReplyMessage(null);

      
      if (messageContainerRef.current) {
        messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
      }
    }
  };

  const handleReply = (message: Message) => {
    setReplyMessage(message);
  };

  const handleDelete = (id: string) => {
    setMessages(prevMessages => prevMessages.filter(msg => msg.id !== id));
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      console.log('Copied to clipboard');
    }, (err) => {
      console.error('Failed to copy:', err);
    });
  };

  if (!loggedInUser) {
    return <DummyLogin onLogin={setLoggedInUser} />;
  }

  return (
    <div className="flex flex-col h-full w-full">
      <ChatHeader user={selectedUser} onClose={onClose} />
      <div className="flex-1 overflow-y-auto p-2 flex flex-col-reverse" ref={messageContainerRef}>
        {messages.length === 0 ? (
          <div>No messages available</div>
        ) : (
          <div className="flex flex-col space-y-2">
            {messages.map((msg, index) => (
              <MessageComponent
                key={index}
                message={msg}
                isOwnMessage={msg.sender === loggedInUser.name}
                onReply={handleReply}
                onDelete={handleDelete}
                onCopy={handleCopy}
              />
            ))}
          </div>
        )}
      </div>
      <ChatInput
        receiver={selectedUser}
        onSendMessage={handleSendMessage}
        replyMessage={replyMessage}
        clearReply={() => setReplyMessage(null)}
      />
    </div>
  );
};

export default ChatInterface;
