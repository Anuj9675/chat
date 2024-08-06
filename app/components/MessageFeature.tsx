import React, { useState, useRef, useEffect } from 'react';
import { FaCopy, FaReply, FaTrash } from 'react-icons/fa';

interface MessageFeatureProps {
  onReply: () => void;
  onDelete: () => void;
  onCopy: (text: string) => void; // Pass the text to copy as an argument
  handleEmojiClick: (emoji: string) => void;
  emojiMap: { [key: string]: string };
  isOwnMessage: boolean;
  messageText: string; // Pass the message text as a prop
}

const MessageFeature: React.FC<MessageFeatureProps> = ({
  onReply,
  onDelete,
  onCopy,
  handleEmojiClick,
  emojiMap,
  isOwnMessage,
  messageText, // Receive the message text as a prop
}) => {
  const [showAlert, setShowAlert] = useState(false);
  const alertTimeoutRef = useRef<number | null>(null);

  const handleCopyText = () => {
    navigator.clipboard.writeText(messageText) // Use the actual message text
      .then(() => {
        setShowAlert(true);
        if (alertTimeoutRef.current) clearTimeout(alertTimeoutRef.current);
        alertTimeoutRef.current = window.setTimeout(() => setShowAlert(false), 2000);
      })
      .catch(err => console.error('Failed to copy text:', err));
  };

  return (
    <div
      className={`absolute bottom-full mb-2 ${isOwnMessage ? 'right-0' : 'left-0'} w-48 bg-white shadow-lg rounded border flex flex-col space-y-2 z-20 p-2`}
    >
      <button className="flex items-center p-2 hover:bg-gray-200" onClick={handleCopyText}>
        <FaCopy className="mr-2" /> Copy
      </button>
      <button className="flex items-center p-2 hover:bg-gray-200" onClick={onReply}>
        <FaReply className="mr-2" /> Reply
      </button>
      <button className="flex items-center p-2 hover:bg-gray-200" onClick={onDelete}>
        <FaTrash className="mr-2" /> Delete
      </button>
      <div className="flex justify-around py-2">
        {Object.entries(emojiMap).map(([emoji, unicode]) => (
          <button key={emoji} className="p-1 hover:bg-gray-200" onClick={() => handleEmojiClick(unicode)}>
            <span className="text-xl">{unicode}</span>
          </button>
        ))}
      </div>
      {showAlert && (
        <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-2 rounded shadow-lg z-30">
          Copied to clipboard
        </div>
      )}
    </div>
  );
};

export default MessageFeature;
