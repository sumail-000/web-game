'use client';

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, Bell, Settings as SettingsIcon, MoreHorizontal, ChevronRight } from "lucide-react";
import Footer from "../components/Footer";
import { ThemeToggle } from "../components/ThemeToggle";
import Sidebar from "../components/Sidebar";

const ProfilePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("About");

  const tabs = ["About", "Creations"];

  // Mock data
  const currentlyWearing = [
    { id: 1, name: "Man Torso", type: "Torso", image: "" },
    { id: 2, name: "Man Right Arm", type: "Arm", image: "" },
    { id: 3, name: "Man Left Arm", type: "Arm", image: "" },
    { id: 4, name: "Man Left Leg", type: "Leg", image: "" },
    { id: 5, name: "Man Right Leg", type: "Leg", image: "" },
    { id: 6, name: "Pal Hair", type: "Hair", price: "Free" },
  ];

  const favorites = [
    { id: 1, name: "HOW TO TRAIN YOUR DRAGON", rating: "95%", plays: "2.6K" },
    { id: 2, name: "Teamwork Puzzles 2 (Obby)", rating: "92%", plays: "3.2K" },
  ];

  const connections = [
    { id: 1, name: "nass4", username: "@nass4", avatar: "https://robohash.org/nass4?set=set3" },
    { id: 2, name: "pcobilaa", username: "@pcobilaa", avatar: "https://robohash.org/pcobilaa?set=set3" },
    { id: 3, name: "JayJayElmi", username: "@JayJayElmi", avatar: "https://robohash.org/jayjay?set=set3" },
    { id: 4, name: "reahan007", username: "@reahan007", avatar: "https://robohash.org/reahan007?set=set3" },
    { id: 5, name: "intann_bil", username: "@intann_bil", avatar: "https://robohash.org/intann?set=set3" },
    { id: 6, name: "reahan00R", username: "@reahan00R", avatar: "https://robohash.org/reahan00r?set=set3" },
    { id: 7, name: "Rfgzxgfdd", username: "@Rfgzxgfdd", avatar: "https://robohash.org/rfg?set=set3" },
  ];

  const badges = [
    { id: 1, name: "First Catch", type: "event" },
    { id: 2, name: "Ruby Rank Compl...", type: "achievement" },
    { id: 3, name: "750 Gems", type: "currency" },
    { id: 4, name: "150 Gems", type: "currency" },
    { id: 5, name: "30 Gems", type: "currency" },
    { id: 6, name: "Welcome!", type: "welcome" },
  ];

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
      <main className="flex-1">
        {/* Hero Section with Avatar (Like Cover Photo) */}
        <div className="border-b border-gray-200 dark:border-gray-800">
          {/* Avatar Display Area (Like Cover Photo) */}
          <div className="relative bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 h-[400px] flex items-end justify-center pb-16">
            <div className="w-64 h-80 bg-gray-400 dark:bg-gray-600 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 text-lg">
              3D Avatar Preview
            </div>
            <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 px-3 py-1 rounded font-semibold text-sm text-gray-900 dark:text-gray-100">
              3D
            </div>
          </div>

          {/* Profile Info Section (At Bottom of Avatar Area) */}
          <div className="bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4">
              {/* Profile Picture and Name */}
              <div className="flex items-start justify-between -mt-16 pb-6">
                <div className="flex items-end gap-4">
                  <div className="w-32 h-32 bg-gray-300 dark:bg-gray-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                  <div className="pb-2">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">reahan00R</h1>
                    <p className="text-gray-600 dark:text-gray-400">@reahan00R</p>
                  </div>
                </div>
                
                <div className="flex gap-2 pt-6">
                  <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 font-semibold rounded transition-colors">
                    Edit Profile
                  </button>
                  <Link href="/avatar">
                    <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 font-semibold rounded transition-colors">
                      Edit Avatar
                    </button>
                  </Link>
                  <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                    <MoreHorizontal className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="flex gap-4 mb-4">
                <Link href="/connect" className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <span className="font-semibold text-gray-900 dark:text-gray-100">7 Connections</span>
                </Link>
                <Link href="/connect" className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <span className="font-semibold text-gray-900 dark:text-gray-100">1 Follower</span>
                </Link>
                <Link href="/connect" className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <span className="font-semibold text-gray-900 dark:text-gray-100">1 Following</span>
                </Link>
              </div>

              {/* Bio */}
              <div className="text-gray-700 dark:text-gray-300 mb-4 pb-4">
                <p className="text-sm">No bio yet</p>
                <button className="text-sm text-gray-600 dark:text-gray-400 hover:underline">more</button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-800 sticky top-[57px] bg-white dark:bg-gray-900 z-40">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex gap-8">
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
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-6xl mx-auto px-4 py-8">
          {activeTab === "About" && (
            <div className="space-y-12">
              {/* Currently Wearing */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Currently Wearing</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {currentlyWearing.map((item) => (
                    <div key={item.id} className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                      <div className="aspect-square bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                        <div className="w-16 h-16 bg-gray-300 dark:bg-gray-600 rounded"></div>
                      </div>
                      <div className="p-2">
                        <p className="text-xs font-semibold text-gray-900 dark:text-gray-100 truncate">{item.name}</p>
                        {item.price && <p className="text-xs text-gray-600 dark:text-gray-400">{item.price}</p>}
                      </div>
                    </div>
                  ))}
                  <button className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition-colors">
                    <ChevronRight className="w-8 h-8 text-gray-600 dark:text-gray-400" />
                  </button>
                </div>
              </section>

              {/* Favorites */}
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Favorites</h2>
                  <Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:underline flex items-center gap-1">
                    Favorites <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {favorites.map((game) => (
                    <div key={game.id} className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                      <div className="aspect-video bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                        <span className="text-white font-bold">Game Thumbnail</span>
                      </div>
                      <div className="p-3">
                        <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">{game.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                          <span className="flex items-center gap-1">👍 {game.rating}</span>
                          <span className="flex items-center gap-1">👥 {game.plays}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Connections */}
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Connections (7)</h2>
                  <Link href="/connect" className="text-sm text-gray-600 dark:text-gray-400 hover:underline flex items-center gap-1">
                    See All <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="flex gap-4 overflow-x-auto pb-2">
                  {connections.map((connection) => (
                    <Link key={connection.id} href={`/profile/${connection.username}`} className="flex-shrink-0">
                      <div className="flex flex-col items-center gap-2 w-24">
                        <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                          <img src={connection.avatar} alt={connection.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="text-center">
                          <p className="text-xs font-semibold text-gray-900 dark:text-gray-100 truncate w-full">{connection.name}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              {/* Badges */}
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Badges</h2>
                  <Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:underline flex items-center gap-1">
                    See All <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                  {badges.map((badge) => (
                    <div key={badge.id} className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                      <div className="aspect-square bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full"></div>
                      </div>
                      <div className="p-2">
                        <p className="text-xs font-semibold text-gray-900 dark:text-gray-100 truncate text-center">{badge.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {activeTab === "Creations" && (
            <div className="text-center py-12 text-gray-600 dark:text-gray-400">
              <p>No creations yet</p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProfilePage;

