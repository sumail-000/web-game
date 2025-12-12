'use client';

import { Twitter, Youtube } from "lucide-react";

const socialLinks = [
  { id: 1, name: "My Twitter", icon: Twitter, color: "text-[#1DA1F2]", url: "#" },
  { id: 2, name: "My YouTube Channel", icon: Youtube, color: "text-[#FF0000]", url: "#" },
];

export default function SocialLinksSection() {
  return (
    <div className="p-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-3">Social Links</h2>
      
      <div className="flex gap-3">
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            className="flex items-center gap-3 px-4 py-3 border border-gray-200 dark:border-gray-700 rounded bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors min-w-[180px]"
          >
            <link.icon className={`w-6 h-6 ${link.color}`} />
            <span className="text-sm text-gray-900 dark:text-gray-100">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

