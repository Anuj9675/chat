export interface User {
  id: any;
  name: string;
  profilePic?: string;
}

export interface Message {
  id: string;
  text?: string;
  sender: string;
  timestamp: string;
  file?: string;
  fileName?: string;
  fileType?: string;
  senderProfilePic?: string;
  emojis?: string[];
  reactions?: string[];
}

export type MessageMap = {
  [key: string]: Message[];
};
