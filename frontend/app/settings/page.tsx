'use client';

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, ExternalLink } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson, faPersonDress } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const SettingsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Header */}
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} setSidebarOpen={setSidebarOpen} />

      {/* Main Content - Centered and Tight */}
      <main className="max-w-4xl mx-auto px-4 py-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Settings</h1>

        <div className="flex gap-6">
          {/* Left Sidebar Navigation */}
          <aside className="w-52 flex-shrink-0">
            <nav className="space-y-0.5">
              {settingsSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left px-3 py-2 text-sm transition-colors border-l-3 ${
                    activeSection === section.id
                      ? "border-gray-900 dark:border-gray-100 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-semibold"
                      : "border-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Right Content Area */}
          <div className="flex-1 max-w-2xl">
            {activeSection === "account-info" && (
              <div className="bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Account Info</h2>
                
                {/* Display Name */}
                <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Display Name:</div>
                      <div className="text-gray-900 dark:text-gray-100">sumail_00</div>
                    </div>
                    <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 p-1">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Username */}
                <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Username:</div>
                      <div className="text-gray-900 dark:text-gray-100">sumail_00</div>
                    </div>
                    <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 p-1">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Email */}
                <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Email:</div>
                      <div className="text-gray-900 dark:text-gray-100 flex items-center gap-2">
                        a***********@gmail.com
                        <span className="inline-flex items-center gap-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                          Verified
                        </span>
                      </div>
                    </div>
                    <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 p-1">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Login Methods */}
                <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">Login Methods</h3>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-gray-700 dark:text-gray-300">Passkey: <span className="font-medium">1 passkey(s) added</span></div>
                    </div>
                    <button className="px-4 py-1.5 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-sm text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-50 dark:hover:bg-gray-600">
                      Manage
                    </button>
                  </div>
                </div>

                {/* Personal Section */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">Personal</h3>
                  
                  {/* Age Group */}
                  <div className="mb-3">
                    <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Age Group:</div>
                    <div className="text-gray-900 dark:text-gray-100">21+</div>
                  </div>

                  {/* Birthday */}
                  <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Birthday:</div>
                        <div className="text-gray-900 dark:text-gray-100">Mar 21, 2003</div>
                      </div>
                      <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 p-1">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Age Verification Banner */}
                  <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded p-4 mb-4">
                    <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1 text-sm">Check your age to get more features</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">We can estimate your age with a selfie or you can verify your exact birthday with an ID.</p>
                    <div className="flex gap-2 mb-2">
                      <button className="flex-1 bg-gray-900 dark:bg-gray-100 hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-gray-900 font-semibold py-2 rounded text-sm">
                        Continue with selfie
                      </button>
                      <button className="flex-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 font-semibold py-2 rounded text-sm">
                        Continue with ID
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-500 text-center">
                      Process operated by our third party service provider
                    </p>
                  </div>

                  {/* Gender */}
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Gender (Optional)</div>
                    <div className="flex gap-3">
                      <button className="flex-1 border border-gray-300 dark:border-gray-600 rounded py-3 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 flex items-center justify-center">
                        <FontAwesomeIcon icon={faPersonDress} className="w-5 h-5" />
                      </button>
                      <button className="flex-1 border border-gray-300 dark:border-gray-600 rounded py-3 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 flex items-center justify-center">
                        <FontAwesomeIcon icon={faPerson} className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Language */}
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Language</div>
                    <select className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 text-sm text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700">
                      <option>English (United States)</option>
                    </select>
                  </div>

                  {/* Account Location */}
                  <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Account Location:</div>
                    <div className="text-gray-900 dark:text-gray-100">Pakistan</div>
                  </div>

                  {/* Social Networks */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">Social Networks</h3>
                    
                    <div className="space-y-3 mb-3">
                      <div>
                        <label className="text-sm text-gray-700 dark:text-gray-300 mb-1 block">Facebook</label>
                        <input 
                          type="text" 
                          placeholder="e.g. www.facebook.com/Roblox"
                          className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 text-sm text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-gray-700 dark:text-gray-300 mb-1 block">X (formerly Twitter)</label>
                        <input 
                          type="text" 
                          placeholder="e.g. @Roblox"
                          className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 text-sm text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-gray-700 dark:text-gray-300 mb-1 block">YouTube</label>
                        <input 
                          type="text" 
                          placeholder="e.g. www.youtube.com/user/roblox"
                          className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 text-sm text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-gray-700 dark:text-gray-300 mb-1 block">Twitch</label>
                        <input 
                          type="text" 
                          placeholder="e.g. www.twitch.tv/roblox/profile"
                          className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 text-sm text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                        />
                      </div>
                    </div>

                    <button className="px-4 py-2 bg-gray-900 dark:bg-gray-100 hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-gray-900 font-semibold rounded text-sm">
                      Save
                    </button>

                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">Social networks visibility</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">Who can see links to your social network profiles</p>
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="visibility" className="w-4 h-4" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">Everyone</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="visibility" className="w-4 h-4" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">Connections, followers & people I follow</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="visibility" className="w-4 h-4" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">Connections & people I follow</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="visibility" className="w-4 h-4" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">Connections</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="visibility" className="w-4 h-4" defaultChecked />
                          <span className="text-sm text-gray-700 dark:text-gray-300">No one</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Other sections placeholder */}
            {activeSection !== "account-info" && (
              <div className="bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  {settingsSections.find(s => s.id === activeSection)?.label}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">Settings content for this section will be added here.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default SettingsPage;

