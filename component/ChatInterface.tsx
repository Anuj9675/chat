'use client'
import { useRouter } from 'next/navigation';
import React, { useState, useEffect, useRef } from 'react';
import ChatInput from './ChatInput';
import MessageComponent from './Message';
import { User, Message, MessageMap } from '../../types/chat'; 
import dummyMessages from '../data/dymmyMessages.json';
import ChatHeader from './ChatHeader';
import DummyLogin from './DummyLogin';

interface ChatInterfaceProps {
  selectedUser: User;
  onClose: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ selectedUser, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [replyMessage, setReplyMessage] = useState<Message | any>();
  const [loggedInUser, setLoggedInUser] = useState<User | any>();
  const messageContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Ensure dummyMessages is typed correctly
  const messagesMap: MessageMap = dummyMessages as MessageMap;

  useEffect(() => {
    if (selectedUser) {
      const userMessages = messagesMap[selectedUser.id.toString()] || [];
      if (Array.isArray(userMessages)) {
        setMessages(userMessages);
      } else {
        console.error("Fetched messages are not an array");
        setMessages([]);
      }
    }
  }, [selectedUser, messagesMap]);

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (text: string, file?: File) => {
    if (loggedInUser) {
      const newMessage: Message = {
        id: String(messages.length + 1),
        text: replyMessage ? `Replying to: ${replyMessage.text}\n${text}` : text,
        sender: loggedInUser.name,
        timestamp: new Date().toISOString(),
        senderProfilePic: '', 
        emojis: [], 
        reactions: [], 
        file: file ? URL.createObjectURL(file) : undefined,
        fileName: file?.name,
        fileType: file?.type,
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
    }).catch(err => {
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
            {messages.map((msg) => (
              <MessageComponent
                key={msg.id}
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
