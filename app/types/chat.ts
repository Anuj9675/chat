export interface User {
  id: number;
  name: string;
  profilePic: string;
}

export interface Message {
  id: string;
  text: string;
  receiver: string;
  sender: string;
  timestamp: string;
  senderProfilePic: string;
  emojis?: string[];
  reactions?: { emoji: string; userId: string }[]; 
}

export type MessagesMap = {
  [key: string]: Message[];
};