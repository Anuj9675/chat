'use client'
import Link from 'next/link';
import { User } from '../types/chat';

interface UserListProps {
  users: User[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const UserList: React.FC<UserListProps> = ({ users, searchQuery, onSearchChange }) => {
  const filteredUsers = users.filter(user =>
    user.name?.toLowerCase().includes(searchQuery.toLowerCase()) || false
  );

  return (
    <div>
      <div className="p-4 flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border rounded w-full"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      {filteredUsers.map(user => (
        <Link
          key={user.id}
          href={`/?userId=${user.id}`}
          className="flex items-center p-2 mb-2 cursor-pointer hover:bg-gray-200 border-b"
        >
          <img src={user.profilePic || '/default-profile-pic.png'} alt={user.name || 'User'} className="w-10 h-10 rounded-full mr-2" />
          <div>{user.name || 'Unknown User'}</div>
        </Link>
      ))}
    </div>
  );
};

export default UserList;
