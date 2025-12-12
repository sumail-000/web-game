'use client';

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, Bell, Settings as SettingsIcon, X } from "lucide-react";
import Footer from "../../../components/Footer";
import { ThemeToggle } from "../../../components/ThemeToggle";
import Sidebar from "../../../components/Sidebar";

const CreateAnnouncementPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [announcementTitle, setAnnouncementTitle] = useState("");
  const [announcementContent, setAnnouncementContent] = useState("");
  const [announcementImage, setAnnouncementImage] = useState<string | null>(null);

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

      {/* Main Content */}
      <div className="max-w-[800px] mx-auto mt-6 px-4 pb-8">
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          {/* Create Announcement Section */}
          <div className="p-6">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Create Announcement</h1>
            
            <div className="space-y-6">
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

              <div className="flex gap-3 pt-2">
                <button className="px-8 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition-colors">
                  Post
                </button>
                <Link href="/groups/8">
                  <button className="px-8 py-2.5 bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 text-sm rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                    Cancel
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default CreateAnnouncementPage;

