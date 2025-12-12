'use client';

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, Bell, Settings as SettingsIcon, MoreHorizontal, ImagePlus, X } from "lucide-react";
import Footer from "../../components/Footer";
import { ThemeToggle } from "../../components/ThemeToggle";
import Sidebar from "../../components/Sidebar";
import GamesSection from "../../components/groups/GamesSection";
import MembersSection from "../../components/groups/MembersSection";
import SocialLinksSection from "../../components/groups/SocialLinksSection";
import DescriptionSection from "../../components/groups/DescriptionSection";

const GroupDetailPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(8);
  const [activeTab, setActiveTab] = useState("About");
  const [groupMenuOpen, setGroupMenuOpen] = useState(false);
  const [newPost, setNewPost] = useState("");
  const [announcementTitle, setAnnouncementTitle] = useState("");
  const [announcementContent, setAnnouncementContent] = useState("");
  const [announcementImage, setAnnouncementImage] = useState<string | null>(null);

  // Mock user's groups with full details
  const userGroups = [
    { id: 1, name: "[QA] Qant...", fullName: "QA Quantum Gaming", avatar: "https://robohash.org/qant?set=set3", owner: "QuantumDev", members: 245, rank: "Member" },
    { id: 2, name: "Bakiez", fullName: "Bakiez Studio", avatar: "https://robohash.org/bakiez?set=set3", owner: "BakieMaster", members: 1203, rank: "Admin" },
    { id: 3, name: "Fizze", fullName: "Fizze Games", avatar: "https://robohash.org/fizze?set=set3", owner: "FizzeDev", members: 567, rank: "Moderator" },
    { id: 4, name: "Ito's Cafe", fullName: "Ito's Cafe & Lounge", avatar: "https://robohash.org/itocafe?set=set3", owner: "ItoChef", members: 892, rank: "VIP Member" },
    { id: 5, name: "Mango Cl...", fullName: "Mango Clothing Co.", avatar: "https://robohash.org/mango?set=set3", owner: "MangoDesigner", members: 3421, rank: "Member" },
    { id: 6, name: "Modern Cl...", fullName: "Modern Clothing Studio", avatar: "https://robohash.org/modern?set=set3", owner: "ModernChris", members: 156, rank: "Owner" },
    { id: 7, name: "Modern_...", fullName: "Modern Gaming Hub", avatar: "https://robohash.org/modernx?set=set3", owner: "ModernGamer", members: 678, rank: "Member" },
    { id: 8, name: "Spiked Cl...", fullName: "Spiked Clothing", avatar: "https://robohash.org/spiked?set=set3", owner: "Modern_Chris", members: 142, rank: "Chairman" },
    { id: 9, name: "State of Fl...", fullName: "State of Florida RP", avatar: "https://robohash.org/statefl?set=set3", owner: "FloridaGov", members: 5234, rank: "Citizen" },
    { id: 10, name: "Sushi Mazi", fullName: "Sushi Mazi Restaurant", avatar: "https://robohash.org/sushimazi?set=set3", owner: "SushiChef", members: 423, rank: "Staff" },
  ];

  // Get current group details
  const currentGroup = userGroups.find(g => g.id === selectedGroup) || userGroups[7];

  // Mock wall posts
  const wallPosts = [
    {
      id: 1,
      author: "GamerDude65",
      avatar: "https://robohash.org/gamer65?set=set3",
      message: "Hey everyone! Just joined this awesome group. Looking forward to checking out the store! 🎮🎮",
      date: "Jan 14, 2019 | 7:14 PM",
    },
    {
      id: 2,
      author: "Modern_Chris",
      avatar: "https://robohash.org/modchris?set=set3",
      message: "Welcome to the group!",
      date: "Nov 28, 2019 | 4:36 PM",
    },
    {
      id: 3,
      author: "PixelMaster",
      avatar: "https://robohash.org/pixelm?set=set3",
      message: "Hey Chris is it ok if I join your group I kinda ran out of group ideas! I love this community!",
      date: "Nov 28, 2019 | 5:36 PM",
    },
  ];

  const tabs = ["About", "Store", "Alliance"];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
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

      {/* Create Group Button Bar */}
      <div className="flex justify-end p-3 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <Link href="/groups/create">
          <button className="px-4 py-1.5 text-sm border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            Create Group
          </button>
        </Link>
      </div>

      {/* Main Layout */}
      <div className="flex max-w-[1000px] mx-auto mt-4 gap-4 px-4">
        {/* Sidebar - My Groups */}
        <div className="w-[150px] bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg flex-shrink-0">
          <div className="py-2">
            {userGroups.map((group) => (
              <button
                key={group.id}
                onClick={() => setSelectedGroup(group.id)}
                className={`w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                  selectedGroup === group.id ? "bg-gray-100 dark:bg-gray-700" : ""
                }`}
              >
                <div className="w-8 h-8 rounded overflow-hidden bg-gray-200 dark:bg-gray-600 flex-shrink-0">
                  <img
                    src={group.avatar}
                    alt={group.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm text-gray-900 dark:text-gray-100 truncate">{group.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          {/* Group Header */}
          <div className="flex items-start gap-4 p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="w-[100px] h-[100px] border border-gray-200 dark:border-gray-700 rounded overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-gray-700">
              <img
                src={currentGroup.avatar}
                alt={currentGroup.fullName}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{currentGroup.fullName}</h1>
              <p className="text-sm">
                <span className="text-gray-600 dark:text-gray-400">By </span>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                  {currentGroup.owner}
                </a>
              </p>
              
              <div className="flex gap-6 mt-3">
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 uppercase">Members</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{currentGroup.members}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 uppercase">Rank</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{currentGroup.rank}</p>
                </div>
              </div>
            </div>

            {/* Group Menu */}
            <div className="relative">
              <button
                onClick={() => setGroupMenuOpen(!groupMenuOpen)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
              >
                <MoreHorizontal className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>

              {groupMenuOpen && (
                <div className="absolute right-0 top-full mt-1 w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg z-10">
                  {["Group Admin", "Make Primary", "Leave Group", "Advertise Group", "Audit Log", "Report Abuse"].map((item) => (
                    <button
                      key={item}
                      className="w-full px-4 py-2 text-left text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors first:rounded-t last:rounded-b"
                      onClick={() => setGroupMenuOpen(false)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 dark:border-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-sm font-medium transition-colors relative ${
                  activeTab === tab
                    ? "text-gray-900 dark:text-gray-100"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 dark:bg-blue-400" />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === "About" && (
            <>
              {/* Create Announcement Section */}
              <div className="p-4 bg-white dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-3">Create Announcement</h2>
                
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Enter announcement title"
                    className="flex-1 px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Link href="/groups/8/create-announcement">
                    <button className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-semibold rounded transition-colors whitespace-nowrap">
                      Create Announcement
                    </button>
                  </Link>
                </div>
              </div>

              {/* Games Section */}
              <GamesSection />

              {/* Members Section */}
              <MembersSection />

              {/* Social Links Section */}
              <SocialLinksSection />

              {/* Description Section */}
              <DescriptionSection />

              {/* Wall Section */}
              <div className="p-4">
                <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-3">Wall</h2>
                
                <div className="flex gap-2 mb-4">
                  <textarea
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    placeholder="Say something..."
                    rows={2}
                    className="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                  <button className="px-4 py-2 h-fit bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition-colors">
                    Post
                  </button>
                </div>

                <div className="space-y-3">
                  {wallPosts.map((post) => (
                    <div key={post.id} className="flex gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-600 flex-shrink-0">
                        <img
                          src={post.avatar}
                          alt={post.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <a href="#" className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
                          {post.author}
                        </a>
                        <p className="text-sm text-gray-900 dark:text-gray-100 mt-0.5">{post.message}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{post.date}</p>
                      </div>
                      <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors h-fit">
                        <MoreHorizontal className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === "Store" && (
            <div className="p-8 text-center text-gray-600 dark:text-gray-400">
              <p>No items in store</p>
            </div>
          )}

          {activeTab === "Alliance" && (
            <div className="p-8 text-center text-gray-600 dark:text-gray-400">
              <p>No alliances</p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default GroupDetailPage;

