"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MoreHorizontal } from "lucide-react";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import GamesSection from "../../components/groups/GamesSection";
import MembersSection from "../../components/groups/MembersSection";
import SocialLinksSection from "../../components/groups/SocialLinksSection";
import DescriptionSection from "../../components/groups/DescriptionSection";

const GroupDetailPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(8);
  const [activeTab, setActiveTab] = useState("About");
  const [groupMenuOpen, setGroupMenuOpen] = useState(false);
  const [newPost, setNewPost] = useState("");
  const [shoutText, setShoutText] = useState("");
  const [currentShout, setCurrentShout] = useState("");
  const [groupSearch, setGroupSearch] = useState("");
  const [openPostMenu, setOpenPostMenu] = useState<number | null>(null);

  // Mock user's groups with full details
  const userGroups = [
    {
      id: 1,
      name: "[QA] Qant...",
      fullName: "QA Quantum Gaming",
      avatar: "https://robohash.org/qant?set=set3",
      owner: "QuantumDev",
      members: 245,
      rank: "Member",
    },
    {
      id: 2,
      name: "Bakiez",
      fullName: "Bakiez Studio",
      avatar: "https://robohash.org/bakiez?set=set3",
      owner: "BakieMaster",
      members: 1203,
      rank: "Admin",
    },
    {
      id: 3,
      name: "Fizze",
      fullName: "Fizze Games",
      avatar: "https://robohash.org/fizze?set=set3",
      owner: "FizzeDev",
      members: 567,
      rank: "Moderator",
    },
    {
      id: 4,
      name: "Ito's Cafe",
      fullName: "Ito's Cafe & Lounge",
      avatar: "https://robohash.org/itocafe?set=set3",
      owner: "ItoChef",
      members: 892,
      rank: "VIP Member",
    },
    {
      id: 5,
      name: "Mango Cl...",
      fullName: "Mango Clothing Co.",
      avatar: "https://robohash.org/mango?set=set3",
      owner: "MangoDesigner",
      members: 3421,
      rank: "Member",
    },
    {
      id: 6,
      name: "Modern Cl...",
      fullName: "Modern Clothing Studio",
      avatar: "https://robohash.org/modern?set=set3",
      owner: "ModernChris",
      members: 156,
      rank: "Owner",
    },
    {
      id: 7,
      name: "Modern_...",
      fullName: "Modern Gaming Hub",
      avatar: "https://robohash.org/modernx?set=set3",
      owner: "ModernGamer",
      members: 678,
      rank: "Member",
    },
    {
      id: 8,
      name: "Spiked Cl...",
      fullName: "Spiked Clothing",
      avatar: "https://robohash.org/spiked?set=set3",
      owner: "Modern_Chris",
      members: 142,
      rank: "Chairman",
    },
    {
      id: 9,
      name: "State of Fl...",
      fullName: "State of Florida RP",
      avatar: "https://robohash.org/statefl?set=set3",
      owner: "FloridaGov",
      members: 5234,
      rank: "Citizen",
    },
    {
      id: 10,
      name: "Sushi Mazi",
      fullName: "Sushi Mazi Restaurant",
      avatar: "https://robohash.org/sushimazi?set=set3",
      owner: "SushiChef",
      members: 423,
      rank: "Staff",
    },
  ];

  // Get current group details
  const currentGroup =
    userGroups.find((g) => g.id === selectedGroup) || userGroups[7];

  // Mock wall posts
  const wallPosts = [
    {
      id: 1,
      author: "GamerDude65",
      avatar: "https://robohash.org/gamer65?set=set3",
      message:
        "Hey everyone! Just joined this awesome group. Looking forward to checking out the store! 🎮🎮",
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
      message:
        "Hey Chris is it ok if I join your group I kinda ran out of group ideas! I love this community!",
      date: "Nov 28, 2019 | 5:36 PM",
    },
  ];

  // Mock allies/alliances communities
  const allies = [
    {
      id: 1,
      name: "DuckXander Valentine",
      image: "https://robohash.org/duckval?set=set3",
      members: 271,
    },
    {
      id: 2,
      name: "DuckXander St. Patrick",
      image: "https://robohash.org/duckstpat?set=set3",
      members: 135,
    },
    {
      id: 3,
      name: "DuckXander Easter",
      image: "https://robohash.org/duckeaster?set=set3",
      members: 188,
    },
    {
      id: 4,
      name: "DuckXander 4th of July",
      image: "https://robohash.org/duck4th?set=set3",
      members: 119,
    },
    {
      id: 5,
      name: "DuckXander Halloween",
      image: "https://robohash.org/duckhalloween?set=set3",
      members: 178,
    },
    {
      id: 6,
      name: "DuckXander Christmas",
      image: "https://robohash.org/duckxmas?set=set3",
      members: 146,
    },
  ];

  // Mock store items
  const storeItems = [
    {
      id: 1,
      name: "Cartoony White Scarf",
      image: "https://robohash.org/scarf1?set=set3",
      price: 50,
    },
    {
      id: 2,
      name: "Cartoony Purple Scarf",
      image: "https://robohash.org/scarf2?set=set3",
      price: 50,
    },
    {
      id: 3,
      name: "Cartoony Blue Scarf",
      image: "https://robohash.org/scarf3?set=set3",
      price: 50,
    },
    {
      id: 4,
      name: "Cartoony Green Scarf",
      image: "https://robohash.org/scarf4?set=set3",
      price: 50,
    },
    {
      id: 5,
      name: "Cartoony Red Scarf",
      image: "https://robohash.org/scarf5?set=set3",
      price: 50,
    },
    {
      id: 6,
      name: "Cartoony Rainbow Scarf",
      image: "https://robohash.org/scarf6?set=set3",
      price: 50,
    },
    {
      id: 7,
      name: "Grey Scarf",
      image: "https://robohash.org/greyscarf?set=set3",
      price: 50,
    },
    {
      id: 8,
      name: "Green Scarf",
      image: "https://robohash.org/greenscarf?set=set3",
      price: 50,
    },
    {
      id: 9,
      name: "Forest Green Scarf",
      image: "https://robohash.org/forestscarf?set=set3",
      price: 50,
    },
    {
      id: 10,
      name: "Pink Scarf",
      image: "https://robohash.org/pinkscarf?set=set3",
      price: 50,
    },
    {
      id: 11,
      name: "Blue Scarf",
      image: "https://robohash.org/bluescarf?set=set3",
      price: 50,
    },
    {
      id: 12,
      name: "Red Scarf",
      image: "https://robohash.org/redscarf?set=set3",
      price: 50,
    },
  ];

  const tabs = ["About", "Store", "Alliances"];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Header */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Create Group Button Bar */}
      <div className="flex justify-end p-3 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <Link href="/groups/create">
          <button className="px-4 py-1.5 text-sm border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            Create Group
          </button>
        </Link>
      </div>

      {/* Main Layout */}
      <div className="flex w-full gap-4 px-4">
        {/* Sidebar - My Groups */}
        <div className="w-[200px] bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg flex-shrink-0">
          {/* Header */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-sm font-bold text-gray-900 dark:text-gray-100">
              Groups
            </h2>
            <Link
              href="/groups"
              className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
            >
              See All
            </Link>
          </div>

          {/* Search Bar */}
          <div className="p-2">
            <input
              type="text"
              value={groupSearch}
              onChange={(e) => setGroupSearch(e.target.value)}
              placeholder="Search my groups"
              className="w-full px-2 py-1.5 text-xs bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Groups List */}
          <div className="py-2">
            {userGroups
              .filter((group) =>
                group.fullName
                  .toLowerCase()
                  .includes(groupSearch.toLowerCase()),
              )
              .map((group) => (
                <button
                  key={group.id}
                  onClick={() => setSelectedGroup(group.id)}
                  className={`w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                    selectedGroup === group.id
                      ? "bg-gray-100 dark:bg-gray-700"
                      : ""
                  }`}
                >
                  <div className="w-8 h-8 rounded overflow-hidden bg-gray-200 dark:bg-gray-600 flex-shrink-0 relative">
                    <Image
                      src={group.avatar}
                      alt={group.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm text-gray-900 dark:text-gray-100 truncate">
                    {group.name}
                  </span>
                </button>
              ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          {/* Group Header */}
          <div className="flex items-start gap-4 p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="w-[100px] h-[100px] border border-gray-200 dark:border-gray-700 rounded overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-gray-700 relative">
              <Image
                src={currentGroup.avatar}
                alt={currentGroup.fullName}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {currentGroup.fullName}
              </h1>
              <p className="text-sm">
                <span className="text-gray-600 dark:text-gray-400">By </span>
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {currentGroup.owner}
                </a>
              </p>

              <div className="flex gap-6 mt-3">
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 uppercase">
                    Members
                  </p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {currentGroup.members}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 uppercase">
                    Rank
                  </p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {currentGroup.rank}
                  </p>
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
                <>
                  {/* Backdrop to close menu */}
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setGroupMenuOpen(false)}
                  />

                  {/* Dropdown Menu */}
                  <div className="absolute right-0 top-full mt-1 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg z-20 py-1">
                    {/* Admin Options - Only show if user is Admin or Owner */}
                    {(currentGroup.rank === "Admin" ||
                      currentGroup.rank === "Owner") && (
                      <>
                        <Link href={`/groups/${selectedGroup}/configure`}>
                          <button
                            onClick={() => setGroupMenuOpen(false)}
                            className="w-full px-4 py-2 text-left text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          >
                            Configure Group
                          </button>
                        </Link>
                        <button
                          onClick={() => {
                            alert("Group Admin Panel");
                            setGroupMenuOpen(false);
                          }}
                          className="w-full px-4 py-2 text-left text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          Group Admin
                        </button>
                        <Link
                          href={`/groups/${selectedGroup}/configure?section=Advertise Group`}
                        >
                          <button
                            onClick={() => setGroupMenuOpen(false)}
                            className="w-full px-4 py-2 text-left text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          >
                            Advertise Group
                          </button>
                        </Link>
                        <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>
                      </>
                    )}

                    {/* Regular Options */}
                    <button
                      onClick={() => {
                        alert("Make Primary");
                        setGroupMenuOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      Make Primary
                    </button>
                    <button
                      onClick={() => {
                        alert("Leave Group");
                        setGroupMenuOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      Leave Group
                    </button>

                    {/* Owner Only Option */}
                    {currentGroup.rank === "Owner" && (
                      <button
                        onClick={() => {
                          alert("Change Owner");
                          setGroupMenuOpen(false);
                        }}
                        className="w-full px-4 py-2 text-left text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        Change Owner
                      </button>
                    )}

                    <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>

                    <button
                      onClick={() => {
                        alert("Report Abuse");
                        setGroupMenuOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      Report Abuse
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 dark:border-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-6 py-3 text-sm font-medium transition-colors relative ${
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
              {/* Description Section */}
              <DescriptionSection />

              {/* Shout Section */}
              <div className="p-4 bg-white dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Shout
                </h2>

                {/* Current Shout Display */}
                {currentShout ? (
                  <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-900 dark:text-gray-100">
                      {currentShout}
                    </p>
                  </div>
                ) : (
                  <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                      No shout yet
                    </p>
                  </div>
                )}

                {/* Shout Input - Only for Admin/Owner */}
                {(currentGroup.rank === "Admin" ||
                  currentGroup.rank === "Owner") && (
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={shoutText}
                        onChange={(e) => setShoutText(e.target.value)}
                        placeholder="Enter your shout"
                        maxLength={255}
                        className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        onClick={() => {
                          if (shoutText.trim()) {
                            setCurrentShout(shoutText);
                            setShoutText("");
                          }
                        }}
                        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded transition-colors"
                      >
                        Group Shout
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {shoutText.length}/255 characters
                    </p>
                  </div>
                )}
              </div>

              {/* Games Section */}
              <GamesSection />

              {/* Members Section */}
              <MembersSection />

              {/* Social Links Section */}
              <SocialLinksSection />

              {/* Wall Section */}
              <div className="p-4">
                <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Wall
                </h2>

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
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-600 flex-shrink-0 relative">
                        <Image
                          src={post.avatar}
                          alt={post.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <a
                          href="#"
                          className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          {post.author}
                        </a>
                        <p className="text-sm text-gray-900 dark:text-gray-100 mt-0.5">
                          {post.message}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {post.date}
                        </p>
                      </div>

                      {/* Three-dot menu */}
                      <div className="relative">
                        <button
                          onClick={() =>
                            setOpenPostMenu(
                              openPostMenu === post.id ? null : post.id,
                            )
                          }
                          className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors h-fit"
                        >
                          <MoreHorizontal className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        </button>

                        {openPostMenu === post.id && (
                          <>
                            {/* Backdrop to close dropdown */}
                            <div
                              className="fixed inset-0 z-10"
                              onClick={() => setOpenPostMenu(null)}
                            />

                            {/* Dropdown Menu */}
                            <div className="absolute right-0 top-full mt-1 w-full min-w-[120px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg z-20 py-1 max-h-[300px] overflow-y-auto">
                              <button
                                onClick={() => {
                                  alert("Report Abuse functionality");
                                  setOpenPostMenu(null);
                                }}
                                className="w-full px-3 py-2 text-left text-sm transition-colors text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                              >
                                Report Abuse
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === "Store" && (
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Store
                </h2>
                <Link
                  href="/groups/store"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                >
                  See All →
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {storeItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded overflow-hidden relative">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <h3
                        className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate"
                        title={item.name}
                      >
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-1 mt-1">
                        <div className="w-4 h-4 bg-gray-800 dark:bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white dark:text-gray-900 text-[10px] font-bold">
                            ◈
                          </span>
                        </div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                          {item.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center gap-3 mt-6 text-sm text-gray-600 dark:text-gray-400">
                <button className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                  &lt;
                </button>
                <span className="font-medium">Page 1</span>
                <button className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                  &gt;
                </button>
              </div>
            </div>
          )}

          {activeTab === "Alliances" && (
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Allies
                </h2>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <button className="hover:text-gray-900 dark:hover:text-gray-100">
                    &lt;
                  </button>
                  <span>Page 1</span>
                  <button className="hover:text-gray-900 dark:hover:text-gray-100">
                    &gt;
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {allies.map((ally) => (
                  <div
                    key={ally.id}
                    className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <div className="aspect-square bg-gray-100 dark:bg-gray-700 overflow-hidden relative">
                      <Image
                        src={ally.image}
                        alt={ally.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <h3
                        className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate"
                        title={ally.name}
                      >
                        {ally.name}
                      </h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        {ally.members} Members
                      </p>
                    </div>
                  </div>
                ))}
              </div>
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
