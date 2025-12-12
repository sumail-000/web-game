'use client';

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, Bell, Settings as SettingsIcon } from "lucide-react";
import Footer from "../components/Footer";
import { ThemeToggle } from "../components/ThemeToggle";
import Sidebar from "../components/Sidebar";

const GroupsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Mock groups data
  const connectionsGroups = [
    { id: 1, name: "AdventureBlox", icon: "🎮", verified: true },
    { id: 2, name: "Kool closet", icon: "🎨", verified: false },
    { id: 3, name: "Sol's Studio", icon: "⭐", verified: false },
    { id: 4, name: "DuckXander", icon: "🦆", verified: true },
    { id: 5, name: "AdventureBlox Building R...", icon: "🏗️", verified: false },
    { id: 6, name: "BlockGame Devel...", icon: "🎲", verified: false },
  ];

  const experienceStudios = [
    { id: 7, name: "Scriptbloxian St...", members: "28,963,318 Members", icon: "💎", verified: true },
    { id: 8, name: "Chillz Studios", members: "16,444,239 Members", icon: "❄️", verified: true },
    { id: 9, name: "Rumble Studios", members: "11,113,420 Members", icon: "⚔️", verified: false },
    { id: 10, name: "Sonar Studios", members: "11,413,293 Members", icon: "🎵", verified: true },
    { id: 11, name: "BIG Games Pets", members: "29,006,098 Members", icon: "🐾", verified: true },
    { id: 12, name: "Double Bandit ...", members: "6,109,383 Members", icon: "🎭", verified: true },
  ];

  const buildingGroups = [
    { id: 13, name: "Adventure Builders", members: "5,234 Members", icon: "🏗️", verified: false },
    { id: 14, name: "Creative Studios", members: "12,456 Members", icon: "🎨", verified: true },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Top Navigation Bar */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Left Section - Menu & Logo */}
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

          {/* Center Section - Navigation Links */}
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
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Search Groups</h1>
          <Link href="/groups/create">
            <button className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 font-medium text-sm">
              Create Group
            </button>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-12 pr-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Info Text */}
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-8 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          Join a group to connect with people like you! Groups exist for all types of communities - fan clubs, help communities, hobbies, corporations, and more. Groups have their own walls and shared places.
        </p>

        {/* Connections' Groups */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Connections' Groups</h2>
            <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">See All →</button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {connectionsGroups.map((group) => (
              <Link 
                key={group.id} 
                href={`/groups/${group.id}`}
                className="group cursor-pointer"
              >
                <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg mb-2 flex items-center justify-center text-4xl group-hover:ring-2 ring-blue-500 transition-all">
                  {group.icon}
                </div>
                <div className="flex items-center gap-1">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
                    {group.name}
                  </h3>
                  {group.verified && <span className="text-blue-500 text-xs">✓</span>}
                </div>
                <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full mt-1"></div>
              </Link>
            ))}
          </div>
        </section>

        {/* Experience Studios */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Experience Studios</h2>
            <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">See All →</button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {experienceStudios.map((group) => (
              <Link 
                key={group.id} 
                href={`/groups/${group.id}`}
                className="group cursor-pointer"
              >
                <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg mb-2 flex items-center justify-center text-4xl group-hover:ring-2 ring-blue-500 transition-all">
                  {group.icon}
                </div>
                <div className="flex items-center gap-1">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
                    {group.name}
                  </h3>
                  {group.verified && <span className="text-blue-500 text-xs">✓</span>}
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{group.members}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Building */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Building</h2>
            <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">See All →</button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {buildingGroups.map((group) => (
              <Link 
                key={group.id} 
                href={`/groups/${group.id}`}
                className="group cursor-pointer"
              >
                <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg mb-2 flex items-center justify-center text-4xl group-hover:ring-2 ring-blue-500 transition-all">
                  {group.icon}
                </div>
                <div className="flex items-center gap-1">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
                    {group.name}
                  </h3>
                  {group.verified && <span className="text-blue-500 text-xs">✓</span>}
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{group.members}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default GroupsPage;

