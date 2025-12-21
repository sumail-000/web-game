"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const ContinuePage = () => {
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
    { id: 9, title: "Ocean Adventure", rating: "88% Rating" },
    { id: 10, title: "Sky Warriors", rating: "92% Rating" },
    { id: 11, title: "Mystery Manor", rating: "79% Rating" },
    { id: 12, title: "Pixel Heroes", rating: "85% Rating" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Header */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <main className="px-4 py-8 flex-1">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
          Continue
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {games.map((game) => (
            <div
              key={game.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center relative group">
                <div className="text-gray-400 dark:text-gray-500 text-sm">
                  Game Thumbnail
                </div>

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
      </main>

      {/* Footer */}
      <Footer />

      {/* Sidebar Overlay */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
  );
};

export default ContinuePage;
