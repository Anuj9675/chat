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
  file?: any;
  fileName?: any;
  fileType?: any;
  senderProfilePic?: string;
  emojis?: string[];
  reactions?: string[];
}

export type MessageMap = {
  [key: string]: Message[];
};
