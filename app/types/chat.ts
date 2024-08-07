export interface User {
  id: number;
  [key: string] : string | number
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
