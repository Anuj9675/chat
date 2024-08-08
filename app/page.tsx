'use client';
import { Chat } from '@/src/screens/chat';

// import { useRouter} from 'next/navigation';
// import { useState, useEffect } from 'react';
// import UserList from '../components/chat/sidebar/left/UserList';
// import ChatInterface from './components/ChatInterface';
// import dummyUsers from './data/dummyUsers.jsons';
// import { User } from '../types/chat';
// import { useQueryParam, NumberParam, StringParam } from 'use-query-params';

// const Homepage = () => {
//   const router = useRouter();

//   const [id, setid] = useQueryParam('userId', StringParam);

//   const [searchQuery, setSearchQuery] = useState('');

//   // Find the selected user based on the URL
//   const selectedUser = dummyUsers.find((user: User) => user.id === Number(id)) || null;

//   return (
//     <div className="flex h-screen">
//       {/* User List */}
//       <aside className="w-1/4 border-r p-4">
//         <UserList
//           users={dummyUsers}
//           searchQuery={searchQuery}
//           onSearchChange={setSearchQuery}
//         />
//       </aside>

//       {/* Chat Interface */}
//       <main className="w-3/4 flex flex-col">
//         {selectedUser ? (
//           <ChatInterface
//             selectedUser={selectedUser}
//             onClose={() => router.push('/')}
//           />
//         ) : (
//           <div className="flex-1 flex items-center justify-center">
//             <p>Select a user to start chatting</p>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default Homepage;

export default function Page() {
  return <Chat />;
}
