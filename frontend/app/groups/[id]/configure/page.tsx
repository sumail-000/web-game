'use client';

import { useState } from "react";
import Link from "next/link";
import { Upload, X, Menu, Search, Bell, Settings } from "lucide-react";
import Footer from "../../../components/Footer";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import { ThemeToggle } from "../../../components/ThemeToggle";

const ConfigureGroupPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Information");
  const [groupName, setGroupName] = useState("Spiked Clothing");
  const [groupDescription, setGroupDescription] = useState("A group of friends that play games together for fun.");
  const [emblemPreview, setEmblemPreview] = useState<string | null>(null);
  const [announcementTitle, setAnnouncementTitle] = useState("");
  const [announcementContent, setAnnouncementContent] = useState("");
  const [announcementImage, setAnnouncementImage] = useState<string | null>(null);

  const sections = [
    { name: "Information", hasNew: false },
    { name: "Settings", hasNew: false },
    { name: "Social Links", hasNew: false },
    { name: "Revenue", hasNew: false },
    { name: "Payouts", hasNew: false },
    { name: "Members", hasNew: false },
    { name: "Roles", hasNew: false },
    { name: "Alliance", hasNew: false },
    { name: "Announcements", hasNew: false },
    { name: "Wall", hasNew: false },
    { name: "Analytics", hasNew: false },
    { name: "Audit Log", hasNew: false },
    { name: "Verification", hasNew: false },
  ];

  const handleEmblemUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEmblemPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      {/* Top Navigation Bar */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 py-3">
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
                <Settings className="w-5 h-5 text-gray-700 dark:text-gray-300" />
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
                  <button 
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => setSettingsOpen(false)}
                  >
                    Logout
                  </button>
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
        <div className="max-w-7xl mx-auto px-4 py-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Configure {groupName}</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                By Modern_Chris · Group Funds: ◈ 0
              </p>
            </div>
            <Link href="/groups/8">
              <button className="px-4 py-2 text-sm bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                Back to Group →
              </button>
            </Link>
          </div>

          {/* Two Column Layout */}
          <div className="flex gap-6">
            {/* Left Sidebar - Navigation */}
            <div className="w-64 flex-shrink-0">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                {sections.map((section) => (
                  <button
                    key={section.name}
                    onClick={() => setActiveSection(section.name)}
                    className={`w-full px-4 py-3 text-left text-sm flex items-center justify-between transition-colors ${
                      activeSection === section.name
                        ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium border-l-4 border-blue-600"
                        : "text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 border-l-4 border-transparent"
                    }`}
                  >
                    <span>{section.name}</span>
                    {section.hasNew && (
                      <span className="px-2 py-0.5 text-xs bg-blue-600 text-white rounded">New</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Content Area */}
            <div className="flex-1">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                {activeSection === "Information" && (
                  <div className="space-y-8">
                    {/* Group Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        value={groupName}
                        onChange={(e) => setGroupName(e.target.value.slice(0, 50))}
                        maxLength={50}
                        className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Name your group"
                      />
                      <div className="text-right text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {groupName.length} / 50
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        Description
                      </label>
                      <textarea
                        value={groupDescription}
                        onChange={(e) => setGroupDescription(e.target.value.slice(0, 1000))}
                        rows={6}
                        className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        placeholder="Describe your group"
                      />
                      <div className="text-right text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {groupDescription.length} / 1000
                      </div>
                    </div>

                    {/* Emblem */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        Emblem
                      </label>
                      <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8">
                        <div className="flex items-start gap-6">
                          {/* Preview */}
                          <div className="flex-shrink-0">
                            <div className="w-48 h-48 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center border border-gray-200 dark:border-gray-700">
                              {emblemPreview ? (
                                <img src={emblemPreview} alt="Emblem preview" className="w-full h-full object-cover" />
                              ) : (
                                <div className="w-32 h-32 bg-gradient-to-br from-purple-400 via-blue-400 to-blue-600 rounded-lg"></div>
                              )}
                            </div>
                            {emblemPreview && (
                              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 text-center">group emblem.jpg</p>
                            )}
                          </div>

                          {/* Upload area */}
                          <div className="flex-1 text-center">
                            <p className="text-gray-700 dark:text-gray-300 mb-2">Drag a file here</p>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">- Or -</p>
                            <label className="inline-block">
                              <input
                                type="file"
                                accept="image/*"
                                onChange={handleEmblemUpload}
                                className="hidden"
                              />
                              <span className="px-6 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 rounded-lg cursor-pointer inline-block text-sm font-medium">
                                Select an image from your computer
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Cover Photo */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        Cover Photo
                      </label>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        Cover photo must be one of the available dimensions: 720x228, 1440x456
                      </p>
                      <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8">
                        <div className="flex items-start gap-6">
                          {/* Preview */}
                          <div className="flex-shrink-0">
                            <div className="w-48 h-32 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center border border-gray-200 dark:border-gray-700">
                              {emblemPreview ? (
                                <img src={emblemPreview} alt="Cover photo preview" className="w-full h-full object-cover" />
                              ) : (
                                <span className="text-gray-400 text-sm">Preview</span>
                              )}
                            </div>
                            {emblemPreview && (
                              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 text-center">group cover.jpg</p>
                            )}
                          </div>

                          {/* Upload area */}
                          <div className="flex-1 text-center">
                            <p className="text-gray-700 dark:text-gray-300 mb-2">Drag a file here</p>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">- Or -</p>
                            <label className="inline-block">
                              <input
                                type="file"
                                accept="image/*"
                                onChange={handleEmblemUpload}
                                className="hidden"
                              />
                              <span className="px-6 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 rounded-lg cursor-pointer inline-block text-sm font-medium">
                                Select an image from your computer
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Join Settings */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        Who can join this group?
                      </label>
                      <select className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="anyone">Anyone can join</option>
                        <option value="approval">Manual Approval</option>
                        <option value="closed">No one can join</option>
                      </select>
                    </div>

                    {/* Save Button */}
                    <div className="flex gap-3 pt-4">
                      <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
                        Save Changes
                      </button>
                      <Link href={`/groups/${8}`}>
                        <button className="px-6 py-2.5 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                          Cancel
                        </button>
                      </Link>
                    </div>
                  </div>
                )}

                {activeSection === "Settings" && (
                  <div className="space-y-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Group Settings</h2>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                        Who can join this group?
                      </label>
                      <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                        <option>Anyone can join</option>
                        <option>Manual Approval</option>
                        <option>No one can join</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                        Who can view group games?
                      </label>
                      <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                        <option>Everyone</option>
                        <option>Group members only</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                        Who can view group store?
                      </label>
                      <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                        <option>Everyone</option>
                        <option>Group members only</option>
                      </select>
                    </div>

                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="manualApproval" className="w-4 h-4" />
                      <label htmlFor="manualApproval" className="text-sm text-gray-900 dark:text-gray-100">
                        Require manual approval for group items
                      </label>
                    </div>

                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="publicGroup" className="w-4 h-4" />
                      <label htmlFor="publicGroup" className="text-sm text-gray-900 dark:text-gray-100">
                        Make this group public
                      </label>
                    </div>

                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
                      Save Settings
                    </button>
                  </div>
                )}

                {activeSection === "Social Links" && (
                  <div className="space-y-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Social Links</h2>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                        Discord
                      </label>
                      <input
                        type="text"
                        placeholder="https://discord.gg/..."
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                        Twitter
                      </label>
                      <input
                        type="text"
                        placeholder="https://twitter.com/..."
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                        YouTube
                      </label>
                      <input
                        type="text"
                        placeholder="https://youtube.com/..."
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                        Twitch
                      </label>
                      <input
                        type="text"
                        placeholder="https://twitch.tv/..."
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      />
                    </div>

                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
                      Save Social Links
                    </button>
                  </div>
                )}

                {activeSection === "Revenue" && (
                  <div className="space-y-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Group Revenue</h2>
                    
                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">◈ 0</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Total Group Funds</p>
                    </div>

                    <div className="border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
                      <table className="w-full">
                        <thead className="bg-gray-100 dark:bg-gray-700">
                          <tr>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Date</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Source</th>
                            <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-gray-100">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan={3} className="px-4 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
                              No revenue transactions
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeSection === "Payouts" && (
                  <div className="space-y-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Group Payouts</h2>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
                      <p className="text-sm text-blue-900 dark:text-blue-200">
                        Configure recurring or one-time payouts to group members.
                      </p>
                    </div>

                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
                      Create Payout
                    </button>

                    <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
                      <p className="text-sm text-gray-500 dark:text-gray-400">No payouts configured</p>
                    </div>
                  </div>
                )}

                {activeSection === "Members" && (
                  <div className="space-y-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Manage Members</h2>
                    
                    <div className="flex gap-3">
                      <input
                        type="text"
                        placeholder="Search members..."
                        className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      />
                      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
                        Search
                      </button>
                    </div>

                    <div className="border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
                      <table className="w-full">
                        <thead className="bg-gray-100 dark:bg-gray-700">
                          <tr>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Member</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Rank</th>
                            <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-gray-100">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-t border-gray-200 dark:border-gray-700">
                            <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">L_Kryptex</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Owner</td>
                            <td className="px-4 py-3 text-right">
                              <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Manage</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeSection === "Roles" && (
                  <div className="space-y-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Group Roles</h2>
                    
                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
                      Create New Role
                    </button>

                    <div className="space-y-3">
                      {["Owner", "Admin", "Moderator", "VIP", "Customer", "Member"].map((role) => (
                        <div key={role} className="flex items-center justify-between p-4 border border-gray-300 dark:border-gray-600 rounded-lg">
                          <div>
                            <h3 className="font-semibold text-gray-900 dark:text-gray-100">{role}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Rank {role === "Owner" ? "255" : "100"}</p>
                          </div>
                          <div className="flex gap-2">
                            <button className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100">
                              Edit
                            </button>
                            {role !== "Owner" && (
                              <button className="px-3 py-1 text-sm border border-red-300 dark:border-red-600 rounded hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400">
                                Delete
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeSection === "Alliance" && (
                  <div className="space-y-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Alliance Management</h2>
                    
                    <div className="flex gap-3">
                      <input
                        type="text"
                        placeholder="Enter group name to send alliance request..."
                        className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      />
                      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
                        Send Request
                      </button>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Current Allies</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="flex items-center gap-3 p-3 border border-gray-300 dark:border-gray-600 rounded-lg">
                            <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded"></div>
                            <div className="flex-1">
                              <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Allied Group {i}</h4>
                              <p className="text-xs text-gray-600 dark:text-gray-400">100 members</p>
                            </div>
                            <button className="text-sm text-red-600 dark:text-red-400 hover:underline">Remove</button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === "Announcements" && (
                  <div className="space-y-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Create Announcement</h2>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2 block">Title</label>
                      <div className="relative">
                        <input
                          type="text"
                          value={announcementTitle}
                          onChange={(e) => setAnnouncementTitle(e.target.value.slice(0, 120))}
                          placeholder="Title"
                          className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500 dark:text-gray-400">
                          {announcementTitle.length}/120
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2 block">Content</label>
                      <div className="relative">
                        <textarea
                          value={announcementContent}
                          onChange={(e) => setAnnouncementContent(e.target.value.slice(0, 1000))}
                          placeholder="Write something..."
                          rows={6}
                          className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        />
                        <span className="absolute right-3 bottom-3 text-xs text-gray-500 dark:text-gray-400">
                          {announcementContent.length}/1000
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2 block">Image</label>
                      <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 bg-gray-50 dark:bg-gray-800/50">
                        <div className="flex gap-6 items-start">
                          {announcementImage ? (
                            <div className="relative w-[250px] h-[140px] border border-gray-300 dark:border-gray-600 rounded overflow-hidden bg-gray-100 dark:bg-gray-800 flex-shrink-0">
                              <img src={announcementImage} alt="Preview" className="w-full h-full object-cover" />
                              <button
                                onClick={() => setAnnouncementImage(null)}
                                className="absolute top-2 right-2 p-1 bg-white/90 dark:bg-gray-900/90 rounded hover:bg-white dark:hover:bg-gray-900 transition-colors"
                              >
                                <X className="w-4 h-4 text-gray-900 dark:text-gray-100" />
                              </button>
                            </div>
                          ) : (
                            <div className="w-[250px] h-[140px] border-2 border-dashed border-gray-400 dark:border-gray-500 rounded bg-gray-700 dark:bg-gray-700 flex-shrink-0" />
                          )}
                          <div className="flex-1 text-center py-4">
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                              Drag an image here. Images will display at 930x480px.
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">- Or -</p>
                            <label className="inline-block cursor-pointer px-6 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 text-sm rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                              Select an image from your computer
                              <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    const reader = new FileReader();
                                    reader.onloadend = () => {
                                      setAnnouncementImage(reader.result as string);
                                    };
                                    reader.readAsDataURL(file);
                                  }
                                }}
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button className="px-8 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition-colors">
                        Post Announcement
                      </button>
                      <button 
                        onClick={() => {
                          setAnnouncementTitle("");
                          setAnnouncementContent("");
                          setAnnouncementImage(null);
                        }}
                        className="px-8 py-2.5 bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 text-sm rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                )}

                {activeSection === "Wall" && (
                  <div className="space-y-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Wall Settings</h2>
                    
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="enableWall" className="w-4 h-4" defaultChecked />
                      <label htmlFor="enableWall" className="text-sm text-gray-900 dark:text-gray-100">
                        Enable group wall
                      </label>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                        Who can post on the wall?
                      </label>
                      <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                        <option>All members</option>
                        <option>Moderators and above</option>
                        <option>Admins and above</option>
                        <option>Owner only</option>
                      </select>
                    </div>

                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
                      Save Wall Settings
                    </button>
                  </div>
                )}

                {activeSection === "Analytics" && (
                  <div className="space-y-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Group Analytics</h2>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">142</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Total Members</p>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">+12</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">New This Week</p>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">45</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Active Today</p>
                      </div>
                    </div>

                    <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Member Growth</h3>
                      <div className="h-64 flex items-center justify-center bg-gray-50 dark:bg-gray-700 rounded">
                        <p className="text-gray-500 dark:text-gray-400">Chart placeholder</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === "Audit Log" && (
                  <div className="space-y-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Audit Log</h2>
                    
                    <div className="flex gap-3">
                      <select className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                        <option>All Actions</option>
                        <option>Member Changes</option>
                        <option>Role Changes</option>
                        <option>Settings Changes</option>
                      </select>
                    </div>

                    <div className="border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
                      <table className="w-full">
                        <thead className="bg-gray-100 dark:bg-gray-700">
                          <tr>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Date</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">User</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan={3} className="px-4 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
                              No audit log entries
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeSection === "Verification" && (
                  <div className="space-y-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Group Verification</h2>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
                      <p className="text-sm text-blue-900 dark:text-blue-200">
                        Verified groups get a special badge and increased visibility.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">Requirements:</h3>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <li>✓ At least 100 members</li>
                        <li>✓ Active for at least 6 months</li>
                        <li>✗ No policy violations in the past year</li>
                        <li>✓ Complete group information</li>
                      </ul>
                    </div>

                    <button className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400 rounded cursor-not-allowed text-sm" disabled>
                      Request Verification (Requirements not met)
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Sidebar Overlay */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
  );
};

export default ConfigureGroupPage;

