"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckSquare } from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const MessagesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Inbox");
  const [selectedAll, setSelectedAll] = useState(false);

  // Mock messages data
  const messages = [
    {
      id: 1,
      sender: "AdventureBlox",
      username: "@AdventureBlox",
      subject: "Welcome to AdventureBlox!",
      preview:
        "Hello, and welcome to AdventureBlox—a platform for people all over the world to connect, shar...",
      date: "Jun 6 | 11:05 AM",
      verified: true,
      avatar: "https://robohash.org/adventureblox?set=set3",
    },
  ];

  const tabs = ["Inbox", "Sent", "News", "Archive"];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Header */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">
          Messages
        </h1>

        {/* Tabs */}
        <div className="flex gap-8 border-b border-gray-200 dark:border-gray-800 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-base font-semibold transition-colors relative ${
                activeTab === tab
                  ? "text-gray-900 dark:text-gray-100"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-900 dark:bg-gray-100" />
              )}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setSelectedAll(!selectedAll)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm"
          >
            <CheckSquare className="w-4 h-4" />
            All
          </button>
          <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm">
            Archive
          </button>
          <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm">
            Mark As Read
          </button>
          <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm">
            Mark As Unread
          </button>
        </div>

        {/* Messages List */}
        <div className="space-y-2">
          {messages.map((message) => (
            <div
              key={message.id}
              className="flex items-start gap-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer border border-gray-200 dark:border-gray-700"
            >
              <input
                type="checkbox"
                className="mt-1 w-4 h-4 rounded border-gray-300 dark:border-gray-600"
              />

              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300 dark:bg-gray-600 flex-shrink-0 relative">
                <Image
                  src={message.avatar}
                  alt={message.sender}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-gray-900 dark:text-gray-100">
                    {message.sender}
                  </span>
                  {message.verified && (
                    <svg
                      className="w-4 h-4 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                  )}
                  <span className="text-gray-600 dark:text-gray-400 text-sm">
                    {message.username}
                  </span>
                </div>
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  {message.subject}
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {message.preview}
                </p>
              </div>

              <span className="text-gray-600 dark:text-gray-400 text-sm whitespace-nowrap">
                {message.date}
              </span>
            </div>
          ))}
        </div>

        {/* Action Buttons (Bottom) */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={() => setSelectedAll(!selectedAll)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm"
          >
            <CheckSquare className="w-4 h-4" />
            All
          </button>
          <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm">
            Archive
          </button>
          <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm">
            Mark As Read
          </button>
          <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm">
            Mark As Unread
          </button>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MessagesPage;
