'use client';

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Plus } from "lucide-react";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Placeholder game data
  const games = [
    { id: 1, title: "Adventure Quest", rating: "86% Rating" },
    { id: 2, title: "Battle Arena", rating: "91% Rating" },
    { id: 3, title: "City Builder", rating: "85% Rating" },
    { id: 4, title: "Racing Legends", rating: "59% Rating" },
    { id: 5, title: "Space Explorer", rating: "91% Rating" },
    { id: 6, title: "Fantasy World", rating: "83% Rating" },
    { id: 7, title: "Zombie Survival", rating: "55% Rating" },
    { id: 8, title: "Parkour Master", rating: "56% Rating" },
  ];

  // Mock friends
  const connections = [
    { id: 1, name: "reahan007", avatar: "https://robohash.org/reahan007?set=set3", hasPremium: true },
    { id: 2, name: "nass4", avatar: "https://robohash.org/nass4?set=set3", hasPremium: false },
    { id: 3, name: "pcobilaa", avatar: "https://robohash.org/pcobilaa?set=set3", hasPremium: false },
    { id: 4, name: "JayJayElmi", avatar: "https://robohash.org/jayjay?set=set3", hasPremium: false },
    { id: 5, name: "intann_bil", avatar: "https://robohash.org/intann?set=set3", hasPremium: false },
    { id: 6, name: "reahan000R", avatar: "https://robohash.org/reahan00r?set=set3", hasPremium: false },
    { id: 7, name: "Rfgzxgfdd", avatar: "https://robohash.org/rfg?set=set3", hasPremium: false },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Friends Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Friends (7)</h2>
            <Link href="/connect" className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 font-semibold">
              See All
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-2">
            {/* Add Friend Button */}
            <Link href="/connect" className="flex-shrink-0 flex flex-col items-center gap-2 cursor-pointer hover:opacity-80">
              <div className="w-20 h-20 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center border-2 border-gray-300 dark:border-gray-600">
                <Plus className="w-8 h-8 text-gray-600 dark:text-gray-400" />
              </div>
              <p className="text-xs font-semibold text-gray-900 dark:text-gray-100">Add Friend</p>
            </Link>

            {/* Friends */}
            {connections.map((connection) => (
              <Link key={connection.id} href={`/profile/${connection.name}`} className="flex-shrink-0 flex flex-col items-center gap-2 cursor-pointer hover:opacity-80">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-700">
                    <img src={connection.avatar} alt={connection.name} className="w-full h-full object-cover" />
                  </div>
                  {connection.hasPremium && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-900">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                      </svg>
                    </div>
                  )}
                </div>
                <p className="text-xs font-semibold text-gray-900 dark:text-gray-100">{connection.name}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Recommended For You Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Recommended For You</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {games.map((game) => (
              <div key={game.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                {/* Game Thumbnail Placeholder */}
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center relative group">
                  <div className="text-gray-400 dark:text-gray-500 text-sm">Game Thumbnail</div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded">
                      PLAY
                    </button>
                  </div>
                </div>
                
                {/* Game Info */}
                <div className="p-3">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm mb-1 truncate">
                    {game.title}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                    <span className="text-green-600 dark:text-green-500">👍</span>
                    <span>{game.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Continue Playing Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Continue</h2>
            <Link href="/continue" className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 font-semibold">
              See All
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {games.slice(0, 4).map((game) => (
              <div key={`continue-${game.id}`} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center relative group">
                  <div className="text-gray-400 dark:text-gray-500 text-sm">Game Thumbnail</div>
                  
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded">
                      PLAY
                    </button>
                  </div>
                </div>
                
                <div className="p-3">
                  <h3 className="font-semibold text-gray-900 text-sm mb-1 truncate">
                    {game.title}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-gray-600">
                    <span className="text-green-600">👍</span>
                    <span>{game.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sponsored Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Sponsored</h2>
            <Link href="/sponsored" className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 font-semibold">
              See All
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {games.slice(0, 5).map((game) => (
              <div key={`sponsored-${game.id}`} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center relative group">
                  <div className="text-gray-400 dark:text-gray-500 text-sm">Game Thumbnail</div>
                  
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded">
                      PLAY
                    </button>
                  </div>
                </div>
                
                <div className="p-3">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm mb-1 truncate">
                    {game.title}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                    <span className="text-green-600 dark:text-green-500">👍</span>
                    <span>{game.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended For You Section (2nd) */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Recommended For You</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {games.map((game) => (
              <div key={`recommended2-${game.id}`} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center relative group">
                  <div className="text-gray-400 dark:text-gray-500 text-sm">Game Thumbnail</div>
                  
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded">
                      PLAY
                    </button>
                  </div>
                </div>
                
                <div className="p-3">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm mb-1 truncate">
                    {game.title}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                    <span className="text-green-600 dark:text-green-500">👍</span>
                    <span>{game.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Favorites Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Favorites</h2>
            <Link href="/favorites" className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 font-semibold">
              See All
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {games.slice(0, 4).map((game) => (
              <div key={`favorites-${game.id}`} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center relative group">
                  <div className="text-gray-400 dark:text-gray-500 text-sm">Game Thumbnail</div>
                  
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded">
                      PLAY
                    </button>
                  </div>
                </div>
                
                <div className="p-3">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm mb-1 truncate">
                    {game.title}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                    <span className="text-green-600 dark:text-green-500">👍</span>
                    <span>{game.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Sidebar Overlay */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
  );
};

export default HomePage;

