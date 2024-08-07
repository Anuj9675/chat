'use client'
import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types/chat';
import { FaChevronDown } from 'react-icons/fa';
import MessageFeature from './MessageFeature';
import FileDisplay from './FileDisplay'; 

interface MessageComponentProps {
  message: Message;
  isOwnMessage: boolean;
  onReply: (message: Message) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
  onCopy: (text: string) => Promise<void>;
}

const MessageComponent: React.FC<MessageComponentProps> = ({ message, isOwnMessage, onReply, onDelete, onCopy }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);
  const featureRef = useRef<HTMLDivElement>(null);

  const handleEmojiClick = (emoji: string) => {
    setSelectedEmoji(emoji);
  };

  const emojiMap: { [key: string]: string } = {
    '❤️': '❤️',
    '👍': '👍',
    '😂': '😂',
    '😢': '😢',
    '😐': '😐',
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (featureRef.current && !featureRef.current.contains(event.target as Node)) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'} mb-2`}>
      <div className={`relative max-w-xs md:max-w-md ${isOwnMessage ? 'bg-green-300 text-black' : 'bg-gray-200 text-black'} p-3 rounded-lg`}>
        {message.file ? (
          <FileDisplay
            fileUrl={message.file}
            fileName={message.fileName || 'Unknown File'}
            fileType={message.fileType || 'application/octet-stream'}
            onReply={() => onReply(message)}
            onDelete={() => onDelete(message.id)}
            onCopy={() => onCopy(message.fileUrl || '')}  // Handle file messages
          />
        ) : (
          <>
            <div className="flex items-center">
              <div
                dangerouslySetInnerHTML={{ __html: message.text ? message.text.replace(/\n/g, '<br />') : '' }}
                className="break-words whitespace-pre-line"
              />
              <FaChevronDown onClick={() => setShowOptions(!showOptions)} className="ml-2 cursor-pointer" />
            </div>
            {selectedEmoji && (
              <div className="absolute bottom-2 right-2 text-xl">
                {selectedEmoji}
              </div>
            )}
            <div className="text-xs text-gray-500 mt-1">{new Date(message.timestamp).toLocaleTimeString()}</div>
          </>
        )}
        {showOptions && (
          <div ref={featureRef}>
            <MessageFeature
              onReply={() => onReply(message)}
              onDelete={() => onDelete(message.id)}
              onCopy={message.file ? () => onCopy(message.fileUrl || '') : () => onCopy(message.text || '')}
              handleEmojiClick={handleEmojiClick}
              emojiMap={emojiMap}
              isOwnMessage={isOwnMessage}
              messageText={message.text || ''}  
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageComponent;
