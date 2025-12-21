"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const GroupsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Mock groups data
  const friendsGroups = [
    { id: 1, name: "AdventureBlox", icon: "🎮", verified: true },
    { id: 2, name: "Kool closet", icon: "🎨", verified: false },
    { id: 3, name: "Sol's Studio", icon: "⭐", verified: false },
    { id: 4, name: "DuckXander", icon: "🦆", verified: true },
    { id: 5, name: "AdventureBlox Building R...", icon: "🏗️", verified: false },
    { id: 6, name: "BlockGame Devel...", icon: "🎲", verified: false },
  ];

  const experienceStudios = [
    {
      id: 7,
      name: "Scriptbloxian St...",
      members: "28,963,318 Members",
      icon: "💎",
      verified: true,
    },
    {
      id: 8,
      name: "Chillz Studios",
      members: "16,444,239 Members",
      icon: "❄️",
      verified: true,
    },
    {
      id: 9,
      name: "Rumble Studios",
      members: "11,113,420 Members",
      icon: "⚔️",
      verified: false,
    },
    {
      id: 10,
      name: "Sonar Studios",
      members: "11,413,293 Members",
      icon: "🎵",
      verified: true,
    },
    {
      id: 11,
      name: "BIG Games Pets",
      members: "29,006,098 Members",
      icon: "🐾",
      verified: true,
    },
    {
      id: 12,
      name: "Double Bandit ...",
      members: "6,109,383 Members",
      icon: "🎭",
      verified: true,
    },
  ];

  const buildingGroups = [
    {
      id: 13,
      name: "Adventure Builders",
      members: "5,234 Members",
      icon: "🏗️",
      verified: false,
    },
    {
      id: 14,
      name: "Creative Studios",
      members: "12,456 Members",
      icon: "🎨",
      verified: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Header */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <main className="w-full px-4 py-8">
        {/* Top Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Search Groups
          </h1>
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
          Join a group to connect with people like you! Groups exist for all
          types of communities - fan clubs, help communities, hobbies,
          corporations, and more. Groups have their own walls and shared places.
        </p>

        {/* Friends' Groups */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              Friends' Groups
            </h2>
            <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
              See All →
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {friendsGroups.map((group) => (
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
                  {group.verified && (
                    <span className="text-blue-500 text-xs">✓</span>
                  )}
                </div>
                <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full mt-1"></div>
              </Link>
            ))}
          </div>
        </section>

        {/* Experience Studios */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              Experience Studios
            </h2>
            <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
              See All →
            </button>
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
                  {group.verified && (
                    <span className="text-blue-500 text-xs">✓</span>
                  )}
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  {group.members}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Building */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              Building
            </h2>
            <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
              See All →
            </button>
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
                  {group.verified && (
                    <span className="text-blue-500 text-xs">✓</span>
                  )}
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  {group.members}
                </p>
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
