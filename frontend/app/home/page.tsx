'use client';

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, Bell, Settings as SettingsIcon, Home, User, MessageSquare, Users, ShoppingBag, Package, TrendingUp, Store, Gift, ChevronDown, X } from "lucide-react";
import Footer from "../components/Footer";
import { ThemeToggle } from "../components/ThemeToggle";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

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

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Top Navigation Bar */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Left Section - Menu & Logo */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(true)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>
            
            <Link href="/home" className="flex items-center">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">◈</span>
              </div>
            </Link>
          </div>

          {/* Center Section - Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-semibold text-sm">
              Charts
            </Link>
            <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-semibold text-sm">
              Marketplace
            </Link>
            <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-semibold text-sm">
              Create
            </Link>
            <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-semibold text-sm">
              Robux
            </Link>
          </nav>

          {/* Right Section - Search & User */}
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
            
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Currency Display */}
            <div className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <div className="w-5 h-5 bg-gray-800 dark:bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-white dark:text-gray-900 text-xs font-bold">◈</span>
              </div>
              <span className="text-gray-900 dark:text-gray-100 font-semibold text-sm">0</span>
            </div>
            
            {/* Settings Dropdown */}
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
                  <Link 
                    href="/settings" 
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => setSettingsOpen(false)}
                  >
                    Quick Sign In
                  </Link>
                  <Link 
                    href="/settings" 
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => setSettingsOpen(false)}
                  >
                    Help & Safety
                  </Link>
                  <button 
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => setSettingsOpen(false)}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
            
            {/* User Profile with Username */}
            <Link href="/profile" className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg px-2 py-1">
              <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
              <span className="text-gray-900 dark:text-gray-100 font-semibold text-sm hidden md:block">reahan00R</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
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
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Continue Playing</h2>
          
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

        {/* Popular Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Popular</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {games.slice(0, 8).map((game) => (
              <div key={`popular-${game.id}`} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
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
      </main>

      {/* Footer */}
      <Footer />

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setSidebarOpen(false)}
          ></div>
          
          {/* Sidebar Panel */}
          <div className="fixed left-0 top-0 bottom-0 w-64 bg-white dark:bg-gray-900 z-50 shadow-xl overflow-y-auto">
            {/* User Info Section */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-gray-100">reahan00R</div>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="py-2">
              <Link 
                href="/home" 
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                onClick={() => setSidebarOpen(false)}
              >
                <Home className="w-5 h-5" />
                <span className="font-medium">Home</span>
              </Link>
              
              <Link 
                href="/profile" 
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                onClick={() => setSidebarOpen(false)}
              >
                <User className="w-5 h-5" />
                <span className="font-medium">Profile</span>
              </Link>
              
              <Link 
                href="/messages" 
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                onClick={() => setSidebarOpen(false)}
              >
                <MessageSquare className="w-5 h-5" />
                <span className="font-medium">Messages</span>
              </Link>
              
              <Link 
                href="/connect" 
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                onClick={() => setSidebarOpen(false)}
              >
                <Users className="w-5 h-5" />
                <span className="font-medium">Connect</span>
              </Link>
              
              <Link 
                href="/avatar" 
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                onClick={() => setSidebarOpen(false)}
              >
                <User className="w-5 h-5" />
                <span className="font-medium">Avatar</span>
              </Link>
              
              <Link 
                href="/inventory" 
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                onClick={() => setSidebarOpen(false)}
              >
                <Package className="w-5 h-5" />
                <span className="font-medium">Inventory</span>
              </Link>
              
              <Link 
                href="/trade" 
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                onClick={() => setSidebarOpen(false)}
              >
                <TrendingUp className="w-5 h-5" />
                <span className="font-medium">Trade</span>
              </Link>
              
              <Link 
                href="/communities" 
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                onClick={() => setSidebarOpen(false)}
              >
                <Users className="w-5 h-5" />
                <span className="font-medium">Communities</span>
              </Link>
              
              <Link 
                href="/blog" 
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                onClick={() => setSidebarOpen(false)}
              >
                <MessageSquare className="w-5 h-5" />
                <span className="font-medium">Blog</span>
              </Link>
              
              <Link 
                href="/store" 
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                onClick={() => setSidebarOpen(false)}
              >
                <Store className="w-5 h-5" />
                <span className="font-medium">Official Store</span>
              </Link>
              
              <Link 
                href="/gift-cards" 
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                onClick={() => setSidebarOpen(false)}
              >
                <Gift className="w-5 h-5" />
                <span className="font-medium">Buy Gift Cards</span>
              </Link>
            </nav>

            {/* Get Premium Button */}
            <div className="p-4">
              <button className="w-full bg-gray-900 dark:bg-gray-100 hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-gray-900 font-bold py-3 rounded-lg transition-colors">
                Get Premium
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;

