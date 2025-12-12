'use client';

import Link from "next/link";
import { Home, User, MessageSquare, Users, Package, TrendingUp, Store, Gift } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-[60]"
        onClick={onClose}
      ></div>
      
      {/* Sidebar Panel */}
      <div className="fixed left-0 top-0 bottom-0 w-64 bg-white dark:bg-gray-900 z-[70] shadow-xl overflow-y-auto">
        {/* User Info Section */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
            <div>
              <div className="font-bold text-gray-900 dark:text-gray-100">reahan00R</div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="py-2">
          <Link 
            href="/home" 
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
            onClick={onClose}
          >
            <Home className="w-5 h-5" />
            <span className="font-medium">Home</span>
          </Link>
          
          <Link 
            href="/profile" 
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
            onClick={onClose}
          >
            <User className="w-5 h-5" />
            <span className="font-medium">Profile</span>
          </Link>
          
          <Link 
            href="/messages" 
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
            onClick={onClose}
          >
            <MessageSquare className="w-5 h-5" />
            <span className="font-medium">Messages</span>
          </Link>
          
          <Link 
            href="/connect" 
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
            onClick={onClose}
          >
            <Users className="w-5 h-5" />
            <span className="font-medium">Connect</span>
          </Link>
          
          <Link 
            href="/avatar" 
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
            onClick={onClose}
          >
            <User className="w-5 h-5" />
            <span className="font-medium">Avatar</span>
          </Link>
          
          <Link 
            href="/inventory" 
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
            onClick={onClose}
          >
            <Package className="w-5 h-5" />
            <span className="font-medium">Inventory</span>
          </Link>
          
          <Link 
            href="/trade" 
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
            onClick={onClose}
          >
            <TrendingUp className="w-5 h-5" />
            <span className="font-medium">Trade</span>
          </Link>
          
          <Link 
            href="/groups" 
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
            onClick={onClose}
          >
            <Users className="w-5 h-5" />
            <span className="font-medium">Groups</span>
          </Link>
          
          <Link 
            href="/groups/8" 
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 pl-10"
            onClick={onClose}
          >
            <span className="font-medium text-sm">My Groups</span>
          </Link>
          
          <Link 
            href="/blog" 
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
            onClick={onClose}
          >
            <MessageSquare className="w-5 h-5" />
            <span className="font-medium">Blog</span>
          </Link>
          
          <Link 
            href="/store" 
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
            onClick={onClose}
          >
            <Store className="w-5 h-5" />
            <span className="font-medium">Official Store</span>
          </Link>
          
          <Link 
            href="/gift-cards" 
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
            onClick={onClose}
          >
            <Gift className="w-5 h-5" />
            <span className="font-medium">Buy Gift Cards</span>
          </Link>
        </nav>

        {/* Get Premium Button */}
        <div className="p-4">
          <button className="w-full bg-gray-900 dark:bg-gray-100 hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-gray-900 font-bold py-3 rounded-lg transition-colors">
            Get Premium
          </button>
        </div>
      </div>
    </>
  );
}

