'use client';

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, Bell, Settings as SettingsIcon, ChevronRight } from "lucide-react";
import Footer from "../components/Footer";

const SettingsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState("account-info");

  const settingsSections = [
    { id: "account-info", label: "Account info" },
    { id: "security", label: "Security" },
    { id: "privacy", label: "Privacy & content restrictions" },
    { id: "notifications", label: "Notifications" },
    { id: "spending", label: "Spending" },
    { id: "subscriptions", label: "Subscriptions" },
    { id: "parental", label: "Parental controls" },
    { id: "permissions", label: "App permissions" },
    { id: "browser", label: "Browser preferences" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Left Section - Menu & Logo */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
            
            <Link href="/home" className="flex items-center">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">◈</span>
              </div>
            </Link>
          </div>

          {/* Center Section - Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/games" className="text-gray-700 hover:text-gray-900 font-semibold text-sm">
              Games
            </Link>
            <Link href="/catalog" className="text-gray-700 hover:text-gray-900 font-semibold text-sm">
              Catalog
            </Link>
            <Link href="/create" className="text-gray-700 hover:text-gray-900 font-semibold text-sm">
              Create
            </Link>
            <Link href="/adventurebux" className="text-gray-700 hover:text-gray-900 font-semibold text-sm">
              AdventureBux
            </Link>
          </nav>

          {/* Right Section - Search & User */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2 w-64">
              <Search className="w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-gray-700 placeholder:text-gray-500 text-sm focus:outline-none w-full"
              />
            </div>
            
            <button className="p-2 hover:bg-gray-100 rounded-lg relative">
              <Bell className="w-5 h-5 text-gray-700" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            <div className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 rounded-lg">
              <div className="w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">◈</span>
              </div>
              <span className="text-gray-900 font-semibold text-sm">0</span>
            </div>
            
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <SettingsIcon className="w-5 h-5 text-gray-700" />
            </button>
            
            <Link href="/profile" className="flex items-center gap-2 hover:bg-gray-100 rounded-lg px-2 py-1">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <span className="text-gray-900 font-semibold text-sm hidden md:block">reahan00R</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Settings</h1>

        <div className="flex gap-8">
          {/* Left Sidebar Navigation */}
          <aside className="w-64 flex-shrink-0">
            <nav className="space-y-1">
              {settingsSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeSection === section.id
                      ? "bg-gray-900 text-white font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Right Content Area */}
          <div className="flex-1">
            {activeSection === "account-info" && (
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Info</h2>
                
                {/* Display Name */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm font-semibold text-gray-700 mb-1">Display Name</div>
                      <div className="text-gray-900">reahan00R</div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Username */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm font-semibold text-gray-700 mb-1">Username</div>
                      <div className="text-gray-900">reahan00R</div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Parental Recovery Email */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm font-semibold text-gray-700 mb-1">Parental Recovery Email</div>
                      <div className="text-gray-600">None</div>
                    </div>
                    <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50">
                      Add
                    </button>
                  </div>
                </div>

                {/* Login Methods */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Login Methods</h3>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-gray-700">Passkey: 1 passkey(s) added</div>
                    </div>
                    <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50">
                      Manage
                    </button>
                  </div>
                </div>

                {/* Personal Section */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Personal</h3>
                  
                  {/* Age Group */}
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-gray-700 mb-1">Age Group</div>
                    <div className="text-gray-900">5-8</div>
                  </div>

                  {/* Birthday */}
                  <div className="mb-6 pb-6 border-b border-gray-200">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm font-semibold text-gray-700 mb-1">Birthday</div>
                        <div className="text-gray-900">Jan 1, 2019</div>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 font-medium">
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Age Verification Banner */}
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                    <h4 className="font-bold text-gray-900 mb-2">Check your age to get more features</h4>
                    <p className="text-sm text-gray-600 mb-4">We can estimate your age with a selfie.</p>
                    <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 rounded-lg mb-2">
                      Continue
                    </button>
                    <p className="text-xs text-gray-500 text-center">
                      Process operated by our third party service provider
                    </p>
                  </div>

                  {/* Gender */}
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-gray-700 mb-3">Gender (Optional)</div>
                    <div className="flex gap-4">
                      <button className="flex-1 border border-gray-300 rounded-lg py-3 hover:bg-gray-50">
                        Female
                      </button>
                      <button className="flex-1 border border-gray-300 rounded-lg py-3 hover:bg-gray-50">
                        Male
                      </button>
                    </div>
                  </div>

                  {/* Language */}
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-gray-700 mb-3">Language</div>
                    <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 bg-white">
                      <option>English (United States)</option>
                    </select>
                  </div>

                  {/* Account Location */}
                  <div>
                    <div className="text-sm font-semibold text-gray-700 mb-1">Account Location</div>
                    <div className="text-gray-900">Pakistan</div>
                  </div>
                </div>
              </div>
            )}

            {/* Other sections placeholder */}
            {activeSection !== "account-info" && (
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {settingsSections.find(s => s.id === activeSection)?.label}
                </h2>
                <p className="text-gray-600">Settings content for this section will be added here.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default SettingsPage;

