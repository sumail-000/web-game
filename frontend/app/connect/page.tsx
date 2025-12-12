'use client';

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, Bell, Settings as SettingsIcon, HelpCircle, MoreHorizontal } from "lucide-react";
import Footer from "../components/Footer";
import { ThemeToggle } from "../components/ThemeToggle";
import Sidebar from "../components/Sidebar";

const ConnectPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Connections");
  const [connectionSearch, setConnectionSearch] = useState("");
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  // Mock connections data
  const connections = [
    { id: 1, name: "nass4", username: "@accamellow", status: "Offline", avatar: "https://robohash.org/nass4?set=set3" },
    { id: 2, name: "pcobilaa", username: "@labilaa02", status: "Offline", avatar: "https://robohash.org/pcobilaa?set=set3" },
    { id: 3, name: "JayJayElmi", username: "@JayJayElmi", status: "Offline", avatar: "https://robohash.org/jayjay?set=set3" },
    { id: 4, name: "intann_bil", username: "@intann_bil", status: "Offline", avatar: "https://robohash.org/intann?set=set3" },
    { id: 5, name: "reahan00R", username: "@reahan00R", status: "Offline", avatar: "https://robohash.org/reahan?set=set3" },
    { id: 6, name: "Rfgzxgfdd", username: "@Rfgzxgfdd", status: "Offline", avatar: "https://robohash.org/rfg?set=set3" },
  ];

  const following = [
    { id: 1, name: "GameDev123", username: "@gamedev123", status: "Online", avatar: "https://robohash.org/gamedev?set=set3" },
    { id: 2, name: "BuilderPro", username: "@builderpro", status: "Offline", avatar: "https://robohash.org/builder?set=set3" },
    { id: 3, name: "CreativeStudio", username: "@creative", status: "Online", avatar: "https://robohash.org/creative?set=set3" },
    { id: 4, name: "PixelMaster", username: "@pixelmaster", status: "Offline", avatar: "https://robohash.org/pixel?set=set3" },
  ];

  const followers = [
    { id: 1, name: "FanUser1", username: "@fanuser1", status: "Online", avatar: "https://robohash.org/fan1?set=set3" },
    { id: 2, name: "FanUser2", username: "@fanuser2", status: "Offline", avatar: "https://robohash.org/fan2?set=set3" },
    { id: 3, name: "FanUser3", username: "@fanuser3", status: "Offline", avatar: "https://robohash.org/fan3?set=set3" },
    { id: 4, name: "FanUser4", username: "@fanuser4", status: "Online", avatar: "https://robohash.org/fan4?set=set3" },
    { id: 5, name: "FanUser5", username: "@fanuser5", status: "Offline", avatar: "https://robohash.org/fan5?set=set3" },
  ];

  const requests = [
    { id: 1, name: "NewUser1", username: "@newuser1", status: "Offline", avatar: "https://robohash.org/new1?set=set3" },
    { id: 2, name: "NewUser2", username: "@newuser2", status: "Online", avatar: "https://robohash.org/new2?set=set3" },
    { id: 3, name: "NewUser3", username: "@newuser3", status: "Offline", avatar: "https://robohash.org/new3?set=set3" },
  ];

  const tabs = ["Connections", "Following", "Followers", "Requests"];

  const getCurrentData = () => {
    switch (activeTab) {
      case "Connections":
        return connections;
      case "Following":
        return following;
      case "Followers":
        return followers;
      case "Requests":
        return requests;
      default:
        return connections;
    }
  };

  const currentData = getCurrentData();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Top Navigation Bar */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
              <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>
            
            <Link href="/home" className="flex items-center">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">◈</span>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/games" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-semibold text-sm">
              Games
            </Link>
            <Link href="/catalog" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-semibold text-sm">
              Catalog
            </Link>
            <Link href="/create" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-semibold text-sm">
              Create
            </Link>
            <Link href="/adventurebux" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-semibold text-sm">
              AdventureBux
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2 w-64">
              <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-gray-700 dark:text-gray-300 placeholder:text-gray-500 dark:placeholder:text-gray-400 text-sm focus:outline-none w-full"
              />
            </div>
            
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg relative">
              <Bell className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            <ThemeToggle />
            
            <div className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <div className="w-5 h-5 bg-gray-800 dark:bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-white dark:text-gray-900 text-xs font-bold">◈</span>
              </div>
              <span className="text-gray-900 dark:text-gray-100 font-semibold text-sm">0</span>
            </div>
            
            <div className="relative">
              <button 
                onClick={() => setSettingsOpen(!settingsOpen)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
              >
                <SettingsIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>
              
              {settingsOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
                  <Link 
                    href="/settings" 
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => setSettingsOpen(false)}
                  >
                    Settings
                  </Link>
                </div>
              )}
            </div>
            
            <Link href="/profile" className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg px-2 py-1">
              <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
              <span className="text-gray-900 dark:text-gray-100 font-semibold text-sm hidden md:block">reahan00R</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">My Connections</h1>

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

        {/* Content Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              {activeTab} ({currentData.length})
            </h2>
            <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
              <HelpCircle className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </button>
          </div>

          {activeTab === "Connections" && (
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2 w-64">
              <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <input
                type="text"
                placeholder="Search Connections"
                value={connectionSearch}
                onChange={(e) => setConnectionSearch(e.target.value)}
                className="bg-transparent text-gray-700 dark:text-gray-300 placeholder:text-gray-500 dark:placeholder:text-gray-400 text-sm focus:outline-none w-full"
              />
            </div>
          )}
        </div>

        {/* Users Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentData.map((user) => (
            <div
              key={user.id}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700 relative"
            >
              {/* 3-dot menu for Connections and Following */}
              {(activeTab === "Connections" || activeTab === "Following") && (
                <div className="absolute top-4 right-4">
                  <button
                    onClick={() => setOpenMenuId(openMenuId === user.id ? null : user.id)}
                    className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                  >
                    <MoreHorizontal className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </button>
                  
                  {openMenuId === user.id && (
                    <>
                      <div 
                        className="fixed inset-0 z-10"
                        onClick={() => setOpenMenuId(null)}
                      />
                      <div className="absolute right-0 mt-1 w-32 bg-white dark:bg-gray-700 rounded shadow-lg border border-gray-200 dark:border-gray-600 z-20">
                        <button
                          onClick={() => setOpenMenuId(null)}
                          className="w-full px-4 py-2 text-left text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600 rounded"
                        >
                          {activeTab === "Connections" ? "Unfriend" : "Unfollow"}
                        </button>
                      </div>
                    </>
                  )}
                </div>
              )}

              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 mb-3">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">
                  {user.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {user.username}
                </p>
                <p className={`text-sm font-medium ${
                  user.status === "Online" 
                    ? "text-green-600 dark:text-green-400" 
                    : "text-gray-500 dark:text-gray-400"
                }`}>
                  {user.status}
                </p>

                {/* Action buttons only for Requests */}
                {activeTab === "Requests" && (
                  <div className="flex gap-2 mt-4 w-full">
                    <button className="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 text-sm font-medium rounded transition-colors">
                      Ignore
                    </button>
                    <button className="flex-1 px-4 py-2 bg-gray-900 dark:bg-gray-100 hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-gray-900 text-sm font-medium rounded transition-colors">
                      Accept
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ConnectPage;

