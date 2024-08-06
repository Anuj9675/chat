export interface User {
  id: string;
  name: string;
  profilePic: string;
}

export interface Message {
  id: number;
  text: string;
  receiver: string;
  sender: string;
  timestamp: string;
  senderProfilePic: string;
  emojis?: string[];
  reactions?: { emoji: string; userId: number }[]; 
}
