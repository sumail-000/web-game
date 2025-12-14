'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, Menu, Bell, Settings as SettingsIcon, ChevronDown } from "lucide-react";
import Footer from "../components/Footer";
import { ThemeToggle } from "../components/ThemeToggle";
import Sidebar from "../components/Sidebar";

const AvatarPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Recent");
  const [activeSubTab, setActiveSubTab] = useState("Recently Added");
  const [isTabsSticky, setIsTabsSticky] = useState(false);
  const tabsRef = useRef<HTMLDivElement>(null);
  const tabsOffsetRef = useRef<number>(0);

  const mainTabs = ["Recent", "Characters", "Clothing", "Accessories", "Head & Body", "Animations"];
  const subTabs: { [key: string]: string[] } = {
    "Recent": ["Recently Added", "Recently Worn", "Accessories", "Clothing", "Body Parts", "Animations", "Characters"],
    "Characters": ["Purchased", "Creations"],
    "Clothing": ["Tops", "Outerwear", "Bottoms", "Shoes", "Classic"],
    "Accessories": ["Head", "Face", "Neck", "Shoulders", "Front", "Back", "Waist", "Gear"],
    "Head & Body": ["Heads", "Skin Tone", "Hair", "Classic Heads", "Classic Faces", "Torso", "Left Arms", "Right Arms", "Left Legs", "Right Legs", "Scale"],
    "Animations": ["Emotes", "Walk", "Run", "Fall", "Jump", "Swim", "Climb", "Idle"],
  };

  // Mock avatar items
  const avatarItems = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    name: `Avatar Item ${i + 1}`,
    type: i % 5 === 0 ? "Head" : i % 5 === 1 ? "Face" : i % 5 === 2 ? "Hair" : i % 5 === 3 ? "Clothing" : "Accessory",
    selected: [0, 6, 9, 15].includes(i),
  }));

  // Handle scroll for sticky tabs
  useEffect(() => {
    if (tabsRef.current) {
      tabsOffsetRef.current = tabsRef.current.offsetTop;
    }

    const handleScroll = () => {
      if (tabsOffsetRef.current > 0) {
        setIsTabsSticky(window.scrollY > tabsOffsetRef.current - 70);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        <div className="max-w-[1400px] mx-auto px-4 py-6">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Avatar Editor</h1>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600 dark:text-gray-400">Explore the catalog to find more clothes!</span>
              <Link href="/catalog">
                <button className="px-4 py-2 bg-gray-900 dark:bg-gray-100 hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-gray-900 font-semibold rounded transition-colors">
                  Get More
                </button>
              </Link>
            </div>
          </div>

          {/* Main Layout */}
          <div className="flex gap-6">
            {/* Left - Avatar Preview */}
            <div className="w-[300px] flex-shrink-0 sticky top-24 self-start">
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900 dark:to-amber-800 rounded-lg aspect-[3/4] flex items-end justify-center p-6 relative">
                {/* Placeholder Avatar */}
                <div className="w-48 h-64 bg-gray-400 dark:bg-gray-600 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400">
                  Avatar Preview
                </div>
                
                {/* 3D Badge */}
                <div className="absolute bottom-4 right-4 bg-white dark:bg-gray-800 px-3 py-1 rounded font-semibold text-sm text-gray-900 dark:text-gray-100">
                  3D
                </div>
              </div>

              {/* Body Type Slider */}
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Body Type</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">0%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  defaultValue="0"
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div className="mt-4 text-center">
                <button className="text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  Avatar isn't loading correctly?
                </button>
                <Link href="/avatar" className="text-sm text-blue-600 dark:text-blue-400 hover:underline ml-2">
                  Redraw
                </Link>
              </div>
            </div>

            {/* Right - Items Grid */}
            <div className="flex-1">
              {/* Main Tabs */}
              <div 
                ref={tabsRef}
                className={`${isTabsSticky ? 'fixed top-[70px] left-0 right-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4' : ''}`}
              >
                <div className={`${isTabsSticky ? 'max-w-[1400px] mx-auto' : ''} flex gap-6 border-b border-gray-200 dark:border-gray-800`}>
                  {mainTabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => {
                        setActiveTab(tab);
                        if (subTabs[tab]) {
                          setActiveSubTab(subTabs[tab][0]);
                        }
                      }}
                      className={`pb-3 text-sm font-semibold transition-colors relative group ${
                        activeTab === tab
                          ? "text-gray-900 dark:text-gray-100"
                          : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                      }`}
                    >
                      {tab}
                      <ChevronDown className={`w-4 h-4 inline ml-1 ${activeTab === tab ? "" : "opacity-50"}`} />
                      {/* Active state - Black underline */}
                      {activeTab === tab && (
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-900 dark:bg-gray-100" />
                      )}
                      {/* Hover state - Grey underline */}
                      {activeTab !== tab && (
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-400 dark:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </button>
                  ))}
                </div>

                {/* Sub Tabs */}
                {subTabs[activeTab] && (
                  <div className="flex gap-4 mt-4">
                    {subTabs[activeTab].map((subTab) => (
                      <button
                        key={subTab}
                        onClick={() => setActiveSubTab(subTab)}
                        className={`text-sm transition-colors ${
                          activeSubTab === subTab
                            ? "text-blue-600 dark:text-blue-400 font-semibold"
                            : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                        }`}
                      >
                        {subTab}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Add spacing when tabs are sticky */}
              {isTabsSticky && <div className="h-24"></div>}

              {/* Items Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6">
                {avatarItems.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer relative"
                  >
                    {/* Selected checkmark */}
                    {item.selected && (
                      <div className="absolute top-2 right-2 w-6 h-6 bg-white dark:bg-gray-700 rounded flex items-center justify-center z-10 border border-gray-300 dark:border-gray-600">
                        <svg className="w-4 h-4 text-gray-900 dark:text-gray-100" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}

                    {/* Item Image Placeholder */}
                    <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center border border-gray-200 dark:border-gray-700">
                      <div className="w-20 h-20 bg-gray-300 dark:bg-gray-600 rounded"></div>
                    </div>

                    {/* Item Name - No background */}
                    <div className="pt-2">
                      <p className="text-xs font-medium text-gray-900 dark:text-gray-100 truncate">
                        {item.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AvatarPage;

