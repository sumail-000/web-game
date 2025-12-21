"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Upload,
  X,
  Menu,
  Search,
  Bell,
  Settings,
  TrendingUp,
  BarChart3,
} from "lucide-react";
import Footer from "../../../components/Footer";
import Sidebar from "../../../components/Sidebar";

import { ThemeToggle } from "../../../components/ThemeToggle";

// Toggle Switch Component
const ToggleSwitch = ({
  enabled,
  onChange,
}: {
  enabled: boolean;
  onChange: (val: boolean) => void;
}) => {
  return (
    <button
      onClick={() => onChange(!enabled)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        enabled ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-600"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          enabled ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
};

const ConfigureGroupPage = () => {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  // Settings states
  const [manualApproval, setManualApproval] = useState(false);
  const [verificationLevel, setVerificationLevel] = useState<
    "none" | "low" | "medium" | "high"
  >("none");
  const [accountAge, setAccountAge] = useState<
    "none" | "1day" | "3days" | "7days" | "30days" | "90days"
  >("none");

  // Roles states
  const [selectedRole, setSelectedRole] = useState<string | null>("Owner");
  const [rolePermissions, setRolePermissions] = useState({
    viewWall: true,
    postWall: true,
    deleteWallPosts: true,
    viewShout: true,
    createAnnouncements: true,
    manageMembers: false,
    deleteMembers: false,
    createInvites: true,
    viewAuditLog: false,
    spendGroupFunds: false,
    advertiseGroup: false,
    manageAlliances: false,
    manageRoles: false,
  });

  // Initialize activeSection from URL params if available
  const getInitialSection = () => {
    const section = searchParams.get("section");
    const sections = [
      "Information",
      "Settings",
      "Social Links",
      "Revenue",
      "Payouts",
      "Members",
      "Roles",
      "Alliances",
      "Shout",
      "Wall",
      "Advertise Group",
      "Analytics",
      "Audit Log",
      "Verification",
    ];
    return section && sections.includes(section) ? section : "Information";
  };

  const [activeSection, setActiveSection] = useState(getInitialSection);
  const [groupName, setGroupName] = useState("Spiked Clothing");
  const [groupDescription, setGroupDescription] = useState(
    "A group of friends that play games together for fun.",
  );
  const [emblemPreview, setEmblemPreview] = useState<string | null>(null);
  const [shoutTitle, setShoutTitle] = useState("");
  const [shoutContent, setShoutContent] = useState("");

  // Advertise Group states
  const [adTab, setAdTab] = useState<"create" | "manage">("create");
  const [adFormat, setAdFormat] = useState<
    "banner" | "skyscraper" | "rectangle"
  >("banner");
  const [adName, setAdName] = useState("");
  const [adImage, setAdImage] = useState<string | null>(null);
  const [maxBid, setMaxBid] = useState("0.10");
  const [adSetName, setAdSetName] = useState("");

  const sections = useMemo(
    () => [
      { name: "Information", hasNew: false },
      { name: "Settings", hasNew: false },
      { name: "Social Links", hasNew: false },
      { name: "Revenue", hasNew: false },
      { name: "Payouts", hasNew: false },
      { name: "Members", hasNew: false },
      { name: "Roles", hasNew: false },
      { name: "Alliances", hasNew: false },
      { name: "Shout", hasNew: false },
      { name: "Wall", hasNew: false },
      { name: "Advertise Group", hasNew: false },
      { name: "Analytics", hasNew: false },
      { name: "Audit Log", hasNew: false },
      { name: "Verification", hasNew: false },
    ],
    [],
  );

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

  const handleAdImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAdImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const getAdDimensions = () => {
    switch (adFormat) {
      case "banner":
        return "728 x 90";
      case "skyscraper":
        return "160 x 600";
      case "rectangle":
        return "300 x 250";
      default:
        return "728 x 90";
    }
  };

  // Mock existing ads data
  const existingAds = [
    {
      id: 1,
      name: "Summer Sale Banner",
      format: "728 x 90",
      status: "Running",
      impressions: 15234,
      clicks: 432,
      spent: 45.5,
      bid: 0.12,
    },
    {
      id: 2,
      name: "New Collection Skyscraper",
      format: "160 x 600",
      status: "Paused",
      impressions: 8921,
      clicks: 156,
      spent: 22.3,
      bid: 0.1,
    },
    {
      id: 3,
      name: "Group Promo Rectangle",
      format: "300 x 250",
      status: "Running",
      impressions: 12456,
      clicks: 289,
      spent: 35.2,
      bid: 0.15,
    },
  ];

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
            <Link
              href="/games"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-semibold text-sm"
            >
              Games
            </Link>
            <Link
              href="/catalog"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-semibold text-sm"
            >
              Catalog
            </Link>
            <Link
              href="/create"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-semibold text-sm"
            >
              Create
            </Link>
            <Link
              href="/adventurebux"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-semibold text-sm"
            >
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
                <span className="text-white dark:text-gray-900 text-xs font-bold">
                  ◈
                </span>
              </div>
              <span className="text-gray-900 dark:text-gray-100 font-semibold text-sm">
                0
              </span>
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

            <Link
              href="/profile"
              className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg px-2 py-1"
            >
              <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
              <span className="text-gray-900 dark:text-gray-100 font-semibold text-sm hidden md:block">
                reahan00R
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="w-full px-4 py-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Configure {groupName}
              </h1>
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
                      <span className="px-2 py-0.5 text-xs bg-blue-600 text-white rounded">
                        New
                      </span>
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
                        onChange={(e) =>
                          setGroupName(e.target.value.slice(0, 50))
                        }
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
                        onChange={(e) =>
                          setGroupDescription(e.target.value.slice(0, 1000))
                        }
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
                                <Image
                                  src={emblemPreview}
                                  alt="Preview"
                                  fill
                                  className="object-cover"
                                />
                              ) : (
                                <div className="w-32 h-32 bg-gradient-to-br from-purple-400 via-blue-400 to-blue-600 rounded-lg"></div>
                              )}
                            </div>
                            {emblemPreview && (
                              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 text-center">
                                group emblem.jpg
                              </p>
                            )}
                          </div>

                          {/* Upload area */}
                          <div className="flex-1 text-center">
                            <p className="text-gray-700 dark:text-gray-300 mb-2">
                              Drag a file here
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                              - Or -
                            </p>
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
                        Cover photo must be one of the available dimensions:
                        720x228, 1440x456
                      </p>
                      <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8">
                        <div className="flex items-start gap-6">
                          {/* Preview */}
                          <div className="flex-shrink-0">
                            <div className="w-48 h-32 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center border border-gray-200 dark:border-gray-700 relative">
                              {emblemPreview ? (
                                <Image
                                  src={emblemPreview}
                                  alt="Cover photo preview"
                                  fill
                                  className="object-cover"
                                />
                              ) : (
                                <span className="text-gray-400 text-sm">
                                  Preview
                                </span>
                              )}
                            </div>
                            {emblemPreview && (
                              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 text-center">
                                group cover.jpg
                              </p>
                            )}
                          </div>

                          {/* Upload area */}
                          <div className="flex-1 text-center">
                            <p className="text-gray-700 dark:text-gray-300 mb-2">
                              Drag a file here
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                              - Or -
                            </p>
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
                  <div className="space-y-8">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      Join Requirements
                    </h2>

                    {/* Manual Approval */}
                    <div className="bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg p-5">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">
                            Manual Approval
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            User requests must be accepted to join community
                          </p>
                        </div>
                        <ToggleSwitch
                          enabled={manualApproval}
                          onChange={setManualApproval}
                        />
                      </div>
                    </div>

                    {/* Verification Level */}
                    <div className="bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg p-5">
                      <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-4">
                        Verification Level
                      </h3>
                      <div className="space-y-3">
                        <label className="flex items-start gap-3 cursor-pointer group">
                          <input
                            type="radio"
                            name="verification"
                            checked={verificationLevel === "none"}
                            onChange={() => setVerificationLevel("none")}
                            className="mt-1 w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900 dark:text-gray-100">
                              None
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              Users do not require account verification before
                              joining
                            </div>
                          </div>
                        </label>

                        <label className="flex items-start gap-3 cursor-pointer group">
                          <input
                            type="radio"
                            name="verification"
                            checked={verificationLevel === "low"}
                            onChange={() => setVerificationLevel("low")}
                            className="mt-1 w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900 dark:text-gray-100">
                              Low
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              Users must be phone, email, or ID verified before
                              joining
                            </div>
                          </div>
                        </label>

                        <label className="flex items-start gap-3 cursor-pointer group">
                          <input
                            type="radio"
                            name="verification"
                            checked={verificationLevel === "medium"}
                            onChange={() => setVerificationLevel("medium")}
                            className="mt-1 w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900 dark:text-gray-100">
                              Medium
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              Users must be ID verified, or phone and email
                              verified before joining
                            </div>
                          </div>
                        </label>

                        <label className="flex items-start gap-3 cursor-pointer group">
                          <input
                            type="radio"
                            name="verification"
                            checked={verificationLevel === "high"}
                            onChange={() => setVerificationLevel("high")}
                            className="mt-1 w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900 dark:text-gray-100">
                              High
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              Users must be ID verified before joining
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>

                    {/* Account Age */}
                    <div className="bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg p-5">
                      <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        Account Age
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Only accounts created more than the selected number of
                        days ago can join.
                      </p>
                      <div className="space-y-3">
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="accountAge"
                            checked={accountAge === "none"}
                            onChange={() => setAccountAge("none")}
                            className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <span className="text-gray-900 dark:text-gray-100 font-medium">
                            No Restriction
                          </span>
                        </label>

                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="accountAge"
                            checked={accountAge === "1day"}
                            onChange={() => setAccountAge("1day")}
                            className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <span className="text-gray-900 dark:text-gray-100 font-medium">
                            1 Day
                          </span>
                        </label>

                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="accountAge"
                            checked={accountAge === "3days"}
                            onChange={() => setAccountAge("3days")}
                            className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <span className="text-gray-900 dark:text-gray-100 font-medium">
                            3 Days
                          </span>
                        </label>

                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="accountAge"
                            checked={accountAge === "7days"}
                            onChange={() => setAccountAge("7days")}
                            className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <span className="text-gray-900 dark:text-gray-100 font-medium">
                            7 Days
                          </span>
                        </label>

                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="accountAge"
                            checked={accountAge === "30days"}
                            onChange={() => setAccountAge("30days")}
                            className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <span className="text-gray-900 dark:text-gray-100 font-medium">
                            30 Days
                          </span>
                        </label>

                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="accountAge"
                            checked={accountAge === "90days"}
                            onChange={() => setAccountAge("90days")}
                            className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <span className="text-gray-900 dark:text-gray-100 font-medium">
                            90 Days
                          </span>
                        </label>
                      </div>
                    </div>

                    <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-medium">
                      Save Settings
                    </button>
                  </div>
                )}

                {activeSection === "Social Links" && (
                  <div className="space-y-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      Social Links
                    </h2>

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
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      Group Revenue
                    </h2>

                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                        ◈ 0
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Total Group Funds
                      </p>
                    </div>

                    <div className="border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
                      <table className="w-full">
                        <thead className="bg-gray-100 dark:bg-gray-700">
                          <tr>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                              Date
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                              Source
                            </th>
                            <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-gray-100">
                              Amount
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td
                              colSpan={3}
                              className="px-4 py-8 text-center text-sm text-gray-500 dark:text-gray-400"
                            >
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
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      Group Payouts
                    </h2>

                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
                      <p className="text-sm text-blue-900 dark:text-blue-200">
                        Configure recurring or one-time payouts to group
                        members.
                      </p>
                    </div>

                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
                      Create Payout
                    </button>

                    <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        No payouts configured
                      </p>
                    </div>
                  </div>
                )}

                {activeSection === "Members" && (
                  <div className="space-y-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      Manage Members
                    </h2>

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
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                              Member
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                              Rank
                            </th>
                            <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-gray-100">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-t border-gray-200 dark:border-gray-700">
                            <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">
                              L_Kryptex
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                              Owner
                            </td>
                            <td className="px-4 py-3 text-right">
                              <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                                Manage
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeSection === "Roles" && (
                  <div className="space-y-6">
                    {/* Info Banner */}
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-lg">ℹ</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-blue-900 dark:text-blue-200">
                          We have improved permissions and membership management
                          within Creator Hub and recommend you head there if you
                          want to manage collaborators.
                        </p>
                        <button className="mt-2 px-4 py-1.5 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 text-sm rounded border border-blue-300 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30">
                          Go to Creator Hub
                        </button>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      Roles
                    </h2>

                    <div className="flex gap-6">
                      {/* Left: Role List */}
                      <div className="w-64 flex-shrink-0 space-y-2">
                        {["Owner", "Admin", "Member", "Guest"].map((role) => (
                          <button
                            key={role}
                            onClick={() => setSelectedRole(role)}
                            className={`w-full text-left px-4 py-3 rounded-lg border transition-colors ${
                              selectedRole === role
                                ? "bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                                : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                            }`}
                          >
                            <div className="font-semibold text-gray-900 dark:text-gray-100">
                              {role}
                            </div>
                          </button>
                        ))}
                        <button className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-900 dark:hover:text-gray-200 transition-colors">
                          Create Role
                        </button>
                      </div>

                      {/* Right: Role Details */}
                      <div className="flex-1 space-y-6">
                        {/* Name */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                            Name
                          </label>
                          <input
                            type="text"
                            value={selectedRole || ""}
                            readOnly
                            className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-gray-900 dark:text-gray-100"
                          />
                          <div className="text-right text-xs text-gray-500 dark:text-gray-400 mt-1">
                            5/100
                          </div>
                        </div>

                        {/* Description */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                            Description
                          </label>
                          <textarea
                            rows={3}
                            defaultValue="The community's owner."
                            className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-gray-900 dark:text-gray-100 resize-none"
                          />
                          <div className="text-right text-xs text-gray-500 dark:text-gray-400 mt-1">
                            22/1000
                          </div>
                        </div>

                        {/* Rank */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                            Rank (0-255)
                          </label>
                          <input
                            type="number"
                            defaultValue="255"
                            min="0"
                            max="255"
                            className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-gray-900 dark:text-gray-100"
                          />
                        </div>

                        <button className="px-6 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-600 font-medium">
                          Save
                        </button>

                        {/* Posts Section */}
                        <div className="border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
                          <div className="bg-gray-50 dark:bg-gray-700/50 px-5 py-3 flex items-center justify-between">
                            <h3 className="font-bold text-gray-900 dark:text-gray-100">
                              Posts
                            </h3>
                            <button className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                              Collapse
                            </button>
                          </div>
                          <div className="p-5 space-y-4 bg-gray-800 dark:bg-gray-900">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-100">
                                View community wall
                              </span>
                              <ToggleSwitch
                                enabled={rolePermissions.viewWall}
                                onChange={(val) =>
                                  setRolePermissions({
                                    ...rolePermissions,
                                    viewWall: val,
                                  })
                                }
                              />
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-100">
                                Post on community wall
                              </span>
                              <ToggleSwitch
                                enabled={rolePermissions.postWall}
                                onChange={(val) =>
                                  setRolePermissions({
                                    ...rolePermissions,
                                    postWall: val,
                                  })
                                }
                              />
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-100">
                                Delete community wall posts
                              </span>
                              <ToggleSwitch
                                enabled={rolePermissions.deleteWallPosts}
                                onChange={(val) =>
                                  setRolePermissions({
                                    ...rolePermissions,
                                    deleteWallPosts: val,
                                  })
                                }
                              />
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-100">
                                View community shout
                              </span>
                              <ToggleSwitch
                                enabled={rolePermissions.viewShout}
                                onChange={(val) =>
                                  setRolePermissions({
                                    ...rolePermissions,
                                    viewShout: val,
                                  })
                                }
                              />
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-100">
                                Create community announcements
                              </span>
                              <ToggleSwitch
                                enabled={rolePermissions.createAnnouncements}
                                onChange={(val) =>
                                  setRolePermissions({
                                    ...rolePermissions,
                                    createAnnouncements: val,
                                  })
                                }
                              />
                            </div>
                          </div>
                        </div>

                        {/* Members Section */}
                        <div className="border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
                          <div className="bg-gray-50 dark:bg-gray-700/50 px-5 py-3 flex items-center justify-between">
                            <h3 className="font-bold text-gray-900 dark:text-gray-100">
                              Members
                            </h3>
                            <button className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                              Collapse
                            </button>
                          </div>
                          <div className="p-5 space-y-4 bg-gray-800 dark:bg-gray-900">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-100">
                                Manage members
                              </span>
                              <ToggleSwitch
                                enabled={rolePermissions.manageMembers}
                                onChange={(val) =>
                                  setRolePermissions({
                                    ...rolePermissions,
                                    manageMembers: val,
                                  })
                                }
                              />
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-100">
                                Delete members
                              </span>
                              <ToggleSwitch
                                enabled={rolePermissions.deleteMembers}
                                onChange={(val) =>
                                  setRolePermissions({
                                    ...rolePermissions,
                                    deleteMembers: val,
                                  })
                                }
                              />
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-100">
                                Create invites
                              </span>
                              <ToggleSwitch
                                enabled={rolePermissions.createInvites}
                                onChange={(val) =>
                                  setRolePermissions({
                                    ...rolePermissions,
                                    createInvites: val,
                                  })
                                }
                              />
                            </div>
                          </div>
                        </div>

                        {/* Administration Section */}
                        <div className="border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
                          <div className="bg-gray-50 dark:bg-gray-700/50 px-5 py-3 flex items-center justify-between">
                            <h3 className="font-bold text-gray-900 dark:text-gray-100">
                              Administration
                            </h3>
                            <button className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                              Collapse
                            </button>
                          </div>
                          <div className="p-5 space-y-4 bg-gray-800 dark:bg-gray-900">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-100">
                                View audit log
                              </span>
                              <ToggleSwitch
                                enabled={rolePermissions.viewAuditLog}
                                onChange={(val) =>
                                  setRolePermissions({
                                    ...rolePermissions,
                                    viewAuditLog: val,
                                  })
                                }
                              />
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-100">
                                Spend group funds
                              </span>
                              <ToggleSwitch
                                enabled={rolePermissions.spendGroupFunds}
                                onChange={(val) =>
                                  setRolePermissions({
                                    ...rolePermissions,
                                    spendGroupFunds: val,
                                  })
                                }
                              />
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-100">
                                Advertise group
                              </span>
                              <ToggleSwitch
                                enabled={rolePermissions.advertiseGroup}
                                onChange={(val) =>
                                  setRolePermissions({
                                    ...rolePermissions,
                                    advertiseGroup: val,
                                  })
                                }
                              />
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-100">
                                Manage alliances
                              </span>
                              <ToggleSwitch
                                enabled={rolePermissions.manageAlliances}
                                onChange={(val) =>
                                  setRolePermissions({
                                    ...rolePermissions,
                                    manageAlliances: val,
                                  })
                                }
                              />
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-100">
                                Manage roles
                              </span>
                              <ToggleSwitch
                                enabled={rolePermissions.manageRoles}
                                onChange={(val) =>
                                  setRolePermissions({
                                    ...rolePermissions,
                                    manageRoles: val,
                                  })
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === "Alliances" && (
                  <div className="space-y-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      Alliances Management
                    </h2>

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
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                        Current Allies
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 p-3 border border-gray-300 dark:border-gray-600 rounded-lg"
                          >
                            <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded"></div>
                            <div className="flex-1">
                              <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                                Allied Group {i}
                              </h4>
                              <p className="text-xs text-gray-600 dark:text-gray-400">
                                100 members
                              </p>
                            </div>
                            <button className="text-sm text-red-600 dark:text-red-400 hover:underline">
                              Remove
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === "Shout" && (
                  <div className="space-y-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      Shout
                    </h2>

                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Post a shout to share updates with all group members.
                      Shouts appear on the group page.
                    </p>

                    {/* Shout Input */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Enter your shout
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          value={shoutTitle}
                          onChange={(e) => setShoutTitle(e.target.value)}
                          placeholder="Enter your shout"
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    {/* Description Section - Optional */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Description
                      </label>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                        Add additional context or details (optional)
                      </p>
                      <div className="relative">
                        <textarea
                          value={shoutContent}
                          onChange={(e) => setShoutContent(e.target.value)}
                          placeholder="Add description (optional)..."
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button className="px-8 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition-colors">
                        Group Shout
                      </button>
                      <button
                        onClick={() => {
                          setShoutTitle("");
                          setShoutContent("");
                        }}
                        className="px-8 py-2.5 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded transition-colors"
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                )}

                {activeSection === "Wall" && (
                  <div className="space-y-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      Wall Settings
                    </h2>

                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="enableWall"
                        className="w-4 h-4"
                        defaultChecked
                      />
                      <label
                        htmlFor="enableWall"
                        className="text-sm text-gray-900 dark:text-gray-100"
                      >
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
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      Group Analytics
                    </h2>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                          142
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Total Members
                        </p>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                          +12
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          New This Week
                        </p>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                          45
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Active Today
                        </p>
                      </div>
                    </div>

                    <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
                        Member Growth
                      </h3>
                      <div className="h-64 flex items-center justify-center bg-gray-50 dark:bg-gray-700 rounded">
                        <p className="text-gray-500 dark:text-gray-400">
                          Chart placeholder
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === "Audit Log" && (
                  <div className="space-y-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      Audit Log
                    </h2>

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
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                              Date
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                              User
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td
                              colSpan={3}
                              className="px-4 py-8 text-center text-sm text-gray-500 dark:text-gray-400"
                            >
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
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      Group Verification
                    </h2>

                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
                      <p className="text-sm text-blue-900 dark:text-blue-200">
                        Verified groups get a special badge and increased
                        visibility.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                        Requirements:
                      </h3>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <li>✓ At least 100 members</li>
                        <li>✓ Active for at least 6 months</li>
                        <li>✗ No policy violations in the past year</li>
                        <li>✓ Complete group information</li>
                      </ul>
                    </div>

                    <button
                      className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400 rounded cursor-not-allowed text-sm"
                      disabled
                    >
                      Request Verification (Requirements not met)
                    </button>
                  </div>
                )}

                {activeSection === "Advertise Group" && (
                  <div className="space-y-6">
                    {/* Tabs */}
                    <div className="flex border-b border-gray-200 dark:border-gray-700">
                      <button
                        onClick={() => setAdTab("create")}
                        className={`px-6 py-3 text-sm font-semibold transition-colors relative ${
                          adTab === "create"
                            ? "text-gray-900 dark:text-gray-100"
                            : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                        }`}
                      >
                        Create Ad
                        {adTab === "create" && (
                          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-900 dark:bg-gray-100" />
                        )}
                      </button>
                      <button
                        onClick={() => setAdTab("manage")}
                        className={`px-6 py-3 text-sm font-semibold transition-colors relative ${
                          adTab === "manage"
                            ? "text-gray-900 dark:text-gray-100"
                            : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                        }`}
                      >
                        Manage Ads
                        {adTab === "manage" && (
                          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-900 dark:bg-gray-100" />
                        )}
                      </button>
                    </div>

                    {adTab === "create" ? (
                      <div className="space-y-6">
                        {/* Ad Format Selection */}
                        <div>
                          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-3">
                            Select Ad Format
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            Download, edit and upload one of the following
                            templates:
                          </p>
                          <div className="flex gap-3">
                            <button
                              onClick={() => setAdFormat("banner")}
                              className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                                adFormat === "banner"
                                  ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900"
                                  : "bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600"
                              }`}
                            >
                              728 x 90 Banner
                            </button>
                            <button
                              onClick={() => setAdFormat("skyscraper")}
                              className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                                adFormat === "skyscraper"
                                  ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900"
                                  : "bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600"
                              }`}
                            >
                              160 x 600 Skyscraper
                            </button>
                            <button
                              onClick={() => setAdFormat("rectangle")}
                              className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                                adFormat === "rectangle"
                                  ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900"
                                  : "bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600"
                              }`}
                            >
                              300 x 250 Rectangle
                            </button>
                          </div>
                          <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                            <span>
                              For tips and tricks, read the tutorial:{" "}
                            </span>
                            <a
                              href="#"
                              className="text-blue-600 dark:text-blue-400 hover:underline"
                            >
                              How to Design an Effective Ad
                            </a>
                          </div>
                        </div>

                        {/* Ad Name */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                            Name your Ad
                          </label>
                          <input
                            type="text"
                            value={adName}
                            onChange={(e) => setAdName(e.target.value)}
                            placeholder="Enter ad name"
                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>

                        {/* Upload Ad */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
                            Upload an Ad
                          </label>
                          <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 bg-gray-50 dark:bg-gray-800">
                            {adImage ? (
                              <div className="relative inline-block w-full max-w-md h-64">
                                <Image
                                  src={adImage}
                                  alt="Ad preview"
                                  fill
                                  className="object-contain rounded border border-gray-300 dark:border-gray-600"
                                  style={{
                                    maxWidth:
                                      adFormat === "banner"
                                        ? "728px"
                                        : adFormat === "skyscraper"
                                          ? "160px"
                                          : "300px",
                                    maxHeight:
                                      adFormat === "banner"
                                        ? "90px"
                                        : adFormat === "skyscraper"
                                          ? "600px"
                                          : "250px",
                                  }}
                                />
                                <button
                                  onClick={() => setAdImage(null)}
                                  className="absolute -top-2 -right-2 p-1 bg-red-600 hover:bg-red-700 text-white rounded-full transition-colors"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                            ) : (
                              <div className="text-center">
                                <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                                <p className="text-gray-700 dark:text-gray-300 mb-2">
                                  Drag an image here
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                  - Or -
                                </p>
                                <label className="inline-block">
                                  <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleAdImageUpload}
                                    className="hidden"
                                  />
                                  <span className="px-6 py-2.5 bg-gray-900 dark:bg-gray-100 hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-gray-900 font-medium rounded-lg cursor-pointer inline-block transition-colors text-sm">
                                    Select an image from your computer
                                  </span>
                                </label>
                              </div>
                            )}
                          </div>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                            The ad needs to be approved by a Moderator before it
                            can be launched from your Ad Page
                          </p>
                        </div>

                        {/* Bidding */}
                        <div>
                          <div className="flex items-start gap-2 mb-3">
                            <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                              Bidding
                            </h3>
                            <div className="group relative">
                              <button className="w-5 h-5 rounded-full border border-gray-400 dark:border-gray-500 flex items-center justify-center text-xs text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                                i
                              </button>
                              <div className="hidden group-hover:block absolute left-0 top-full mt-2 w-64 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded-lg p-3 z-10">
                                The minimum bid price depends on your selected
                                target audience and Ad Format.
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            The minimum bid price depends on your selected
                            target audience and Ad Format.
                          </p>
                          <div className="bg-gray-900 dark:bg-gray-700 rounded-lg p-4 mb-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <label className="text-sm text-gray-300 dark:text-gray-400 block mb-1">
                                  Max Bid
                                </label>
                                <input
                                  type="number"
                                  step="0.01"
                                  min="0.10"
                                  value={maxBid}
                                  onChange={(e) => setMaxBid(e.target.value)}
                                  className="bg-transparent text-white text-xl font-bold focus:outline-none w-24"
                                />
                              </div>
                              <div className="text-right">
                                <p className="text-sm text-gray-400">
                                  Cost Per Play (Ad Credit)
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600 dark:text-gray-400">
                                Minimum Bid:
                              </span>
                              <span className="text-gray-900 dark:text-gray-100 font-medium">
                                0.10
                              </span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600 dark:text-gray-400">
                                Ad Format:
                              </span>
                              <span className="text-gray-900 dark:text-gray-100 font-medium">
                                {getAdDimensions()}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Ad Set Name */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                            Ad Set Name
                          </label>
                          <input
                            type="text"
                            value={adSetName}
                            onChange={(e) => setAdSetName(e.target.value)}
                            placeholder="Ad Set Name"
                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 pt-4">
                          <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors text-sm">
                            Upload
                          </button>
                          <button className="px-6 py-2.5 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 font-medium rounded-lg transition-colors text-sm">
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        {/* Stats Overview */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                Total Spent
                              </span>
                              <TrendingUp className="w-5 h-5 text-green-500" />
                            </div>
                            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                              ◈ 103.00
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                              All time
                            </p>
                          </div>

                          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                Impressions
                              </span>
                              <BarChart3 className="w-5 h-5 text-blue-500" />
                            </div>
                            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                              36,611
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                              Total views
                            </p>
                          </div>

                          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                Clicks
                              </span>
                              <BarChart3 className="w-5 h-5 text-purple-500" />
                            </div>
                            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                              877
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                              Total clicks
                            </p>
                          </div>

                          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                CTR
                              </span>
                              <BarChart3 className="w-5 h-5 text-orange-500" />
                            </div>
                            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                              2.4%
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                              Click-through rate
                            </p>
                          </div>
                        </div>

                        {/* Ads Table */}
                        <div className="border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
                          <div className="overflow-x-auto">
                            <table className="w-full">
                              <thead className="bg-gray-100 dark:bg-gray-700">
                                <tr>
                                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 dark:text-gray-100 uppercase">
                                    Ad Name
                                  </th>
                                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 dark:text-gray-100 uppercase">
                                    Format
                                  </th>
                                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 dark:text-gray-100 uppercase">
                                    Status
                                  </th>
                                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 dark:text-gray-100 uppercase">
                                    Impressions
                                  </th>
                                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 dark:text-gray-100 uppercase">
                                    Clicks
                                  </th>
                                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 dark:text-gray-100 uppercase">
                                    Spent
                                  </th>
                                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 dark:text-gray-100 uppercase">
                                    Bid
                                  </th>
                                  <th className="px-4 py-3 text-right text-xs font-semibold text-gray-900 dark:text-gray-100 uppercase">
                                    Actions
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                {existingAds.map((ad) => (
                                  <tr
                                    key={ad.id}
                                    className="hover:bg-gray-50 dark:hover:bg-gray-700/50"
                                  >
                                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100 font-medium">
                                      {ad.name}
                                    </td>
                                    <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                                      {ad.format}
                                    </td>
                                    <td className="px-4 py-3">
                                      <span
                                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                          ad.status === "Running"
                                            ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400"
                                            : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-400"
                                        }`}
                                      >
                                        {ad.status}
                                      </span>
                                    </td>
                                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">
                                      {ad.impressions.toLocaleString()}
                                    </td>
                                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">
                                      {ad.clicks}
                                    </td>
                                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">
                                      ◈ {ad.spent.toFixed(2)}
                                    </td>
                                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">
                                      {ad.bid.toFixed(2)}
                                    </td>
                                    <td className="px-4 py-3 text-right">
                                      <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline mr-3">
                                        Edit
                                      </button>
                                      <button className="text-sm text-red-600 dark:text-red-400 hover:underline">
                                        {ad.status === "Running"
                                          ? "Pause"
                                          : "Resume"}
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    )}
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
