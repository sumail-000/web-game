'use client';

import { useState } from "react";
import Image from "next/image";
import { MessageSquare, X, Settings, Minimize2, Send } from "lucide-react";

interface Friend {
  id: number;
  name: string;
  avatar: string;
  lastMessage?: string;
  lastMessageTime?: string;
  online?: boolean;
}

interface ChatWindow {
  id: number;
  name: string;
  avatar: string;
  username: string;
}

export default function ChatWidget() {
  const [isChatListOpen, setIsChatListOpen] = useState(false);
  const [openChats, setOpenChats] = useState<ChatWindow[]>([]);
  const [messageInputs, setMessageInputs] = useState<{ [key: number]: string }>({});

  const friends: Friend[] = [
    { id: 1, name: "intann_bil", avatar: "https://robohash.org/intann?set=set3", lastMessage: "Hey!", lastMessageTime: "Yesterday", online: true },
    { id: 2, name: "reahan007", avatar: "https://robohash.org/reahan007?set=set3", lastMessage: "Thanks", lastMessageTime: "Yesterday", online: true },
    { id: 3, name: "pcobilaa", avatar: "https://robohash.org/pcobilaa?set=set3", lastMessageTime: "Jul 1", online: false },
    { id: 4, name: "nass4", avatar: "https://robohash.org/nass4?set=set3", lastMessageTime: "Jun 7", online: false },
    { id: 5, name: "reahan000R", avatar: "https://robohash.org/reahan00r?set=set3", lastMessageTime: "Jun 7", online: false },
    { id: 6, name: "Rfgzxgfdd", avatar: "https://robohash.org/rfg?set=set3", lastMessageTime: "Jun 7", online: false },
    { id: 7, name: "JayJayElmi", avatar: "https://robohash.org/jayjay?set=set3", lastMessageTime: "Jun 5", online: false },
  ];

  const openChatWindow = (friend: Friend) => {
    if (!openChats.find(chat => chat.id === friend.id)) {
      const newChat: ChatWindow = {
        id: friend.id,
        name: friend.name,
        avatar: friend.avatar,
        username: `@${friend.name}`,
      };
      setOpenChats([...openChats, newChat]);
    }
  };

  const closeChatWindow = (chatId: number) => {
    setOpenChats(openChats.filter(chat => chat.id !== chatId));
  };

  const handleSendMessage = (chatId: number) => {
    const message = messageInputs[chatId];
    if (message && message.trim()) {
      // Handle message sending logic here
      console.log(`Sending message to ${chatId}: ${message}`);
      setMessageInputs({ ...messageInputs, [chatId]: "" });
    }
  };

  return (
    <>
      {/* Chat List Window */}
      {isChatListOpen && (
        <div className="fixed bottom-0 right-4 w-80 h-96 bg-white dark:bg-gray-800 rounded-t-lg shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col z-50">
          {/* Header */}
          <div className="flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-gray-900 dark:text-gray-100">Chat</h3>
            <div className="flex items-center gap-1">
              <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors">
                <Settings className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>
              <button 
                onClick={() => setIsChatListOpen(false)}
                className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
              >
                <Minimize2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
          </div>

          {/* Search */}
          <div className="p-3 border-b border-gray-200 dark:border-gray-700">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for Friends"
                className="w-full bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded px-3 py-2 pl-8 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
              </svg>
            </div>
          </div>

          {/* Friends List */}
          <div className="flex-1 overflow-y-auto">
            {friends.map((friend) => (
              <button
                key={friend.id}
                onClick={() => openChatWindow(friend)}
                className="w-full flex items-center gap-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border-b border-gray-100 dark:border-gray-700"
              >
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-600">
                    <Image
                      src={friend.avatar}
                      alt={friend.name}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {friend.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                  )}
                </div>
                <div className="flex-1 text-left min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-sm text-gray-900 dark:text-gray-100 truncate">
                      {friend.name}
                    </p>
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-2 flex-shrink-0">
                      {friend.lastMessageTime}
                    </span>
                  </div>
                  {friend.lastMessage && (
                    <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                      {friend.lastMessage}
                    </p>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Individual Chat Windows */}
      {openChats.map((chat, index) => (
        <div
          key={chat.id}
          className="fixed bottom-0 w-80 h-96 bg-white dark:bg-gray-800 rounded-t-lg shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col z-50"
          style={{ right: `${(index + 1) * 336 + 16}px` }}
        >
          {/* Chat Header */}
          <div className="flex items-center gap-3 p-3 border-b border-gray-200 dark:border-gray-700">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-600 flex-shrink-0">
              <Image
                src={chat.avatar}
                alt={chat.name}
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-sm text-gray-900 dark:text-gray-100 truncate">
                {chat.name}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                {chat.username}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors">
                <Settings className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>
              <button 
                onClick={() => closeChatWindow(chat.id)}
                className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
              >
                <X className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
          </div>

          {/* First Conversation Notice */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="text-center py-8">
              <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-600">
                <Image
                  src={chat.avatar}
                  alt={chat.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">
                {chat.name}
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
                {chat.username}
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 max-w-xs mx-auto">
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  First conversation with {chat.name}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Your safety matters. Not feeling comfortable? You can block or report this person anytime from their profile.
                </p>
              </div>
            </div>
          </div>

          {/* Message Input */}
          <div className="p-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Send a message"
                value={messageInputs[chat.id] || ""}
                onChange={(e) => setMessageInputs({ ...messageInputs, [chat.id]: e.target.value })}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(chat.id)}
                className="flex-1 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded px-3 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button
                onClick={() => handleSendMessage(chat.id)}
                className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsChatListOpen(!isChatListOpen)}
        className="fixed bottom-4 right-4 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-colors z-40"
      >
        <MessageSquare className="w-6 h-6" />
      </button>
    </>
  );
}

