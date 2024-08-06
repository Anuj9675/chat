import React, { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { User, Message } from '../types/chat';
import { FaPaperclip, FaImage, FaVideo, FaFile, FaEllipsisH, FaTimes, FaPaperPlane } from 'react-icons/fa';

interface ChatInputProps {
  receiver: User;
  onSendMessage: (text: string) => void;
  replyMessage: Message | null;
  clearReply: () => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ receiver, onSendMessage, replyMessage, clearReply }) => {
  const [message, setMessage] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [message]);

  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
      if (textAreaRef.current) {
        textAreaRef.current.style.height = 'auto';
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div>
      {/* Reply Message */}
      {replyMessage && (
        <div className="relative mb-1 p-2 bg-gray-200 border rounded">
          <FaTimes
            onClick={clearReply}
            className="absolute top-1 right-1 cursor-pointer text-gray-700 hover:text-black"
          />
          <strong>Replying to:</strong> {replyMessage.text}
        </div>
      )}

      {/* Chat Input */}
      <div className="relative bg-gray-100 p-4 border-t flex flex-row items-center">
        {/* Attachment options */}
        <button
          onClick={() => setShowOptions(!showOptions)}
          className="mr-2 p-4 hover:bg-gray-200 rounded-md"
        >
          <FaPaperclip />
        </button>
        {showOptions && (
          <div className="absolute left-0 bottom-full m-2 bg-white shadow-lg p-2 rounded border flex flex-col space-y-2">
            <button className="flex items-center p-2 hover:bg-gray-200 w-full text-left">
              <FaImage className="mr-2" /> Photos
            </button>
            <button className="flex items-center p-2 hover:bg-gray-200 w-full text-left">
              <FaVideo className="mr-2" /> Videos
            </button>
            <button className="flex items-center p-2 hover:bg-gray-200 w-full text-left">
              <FaFile className="mr-2" /> Documents
            </button>
            <button className="flex items-center p-2 hover:bg-gray-200 w-full text-left">
              <FaEllipsisH className="mr-2" /> Others
            </button>
          </div>
        )}

        {/* Textarea for message input */}
        <textarea
          ref={textAreaRef}
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={1}
          className="flex-1 p-2 border rounded resize-none overflow-hidden mt-2"
        />
        
        {/* Conditional Send Icon */}
        {message.trim() && (
          <button
            onClick={handleSendMessage}
            className="ml-2 text-blue-500 hover:bg-gray-200 p-2 rounded-full"
            aria-label="Send message"
          >
            <FaPaperPlane size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ChatInput;
