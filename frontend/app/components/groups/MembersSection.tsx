'use client';

import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import Image from "next/image";

const members = [
  { id: 1, name: "L_Kryptex", avatar: "https://robohash.org/kryptex?set=set3" },
  { id: 2, name: "Vanessa_Ch...", avatar: "https://robohash.org/vanessa?set=set3" },
  { id: 3, name: "TheRealMar...", avatar: "https://robohash.org/realmar?set=set3" },
  { id: 4, name: "XxXxSuperS...", avatar: "https://robohash.org/superx?set=set3" },
  { id: 5, name: "Yiglickedfa...", avatar: "https://robohash.org/yiglick?set=set3" },
  { id: 6, name: "teotobi", avatar: "https://robohash.org/teotobi?set=set3" },
  { id: 7, name: "Immx23", avatar: "https://robohash.org/immx23?set=set3" },
  { id: 8, name: "Hex_Daniel", avatar: "https://robohash.org/hexdan?set=set3" },
  { id: 9, name: "Ogracees", avatar: "https://robohash.org/ograce?set=set3" },
];

export default function MembersSection() {
  return (
    <div className="p-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100">Members</h2>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span>Page 1</span>
            <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 dark:border-gray-700 rounded text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <span>Customer</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {members.map((member) => (
          <a
            key={member.id}
            href="#"
            className="group flex flex-col items-center"
          >
            <div className="w-[60px] h-[60px] border border-gray-200 dark:border-gray-700 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800">
              <Image
                src={member.avatar}
                alt={member.name}
                width={60}
                height={60}
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
              />
            </div>
            <p className="text-xs text-blue-600 dark:text-blue-400 hover:underline mt-1 truncate w-[60px] text-center">
              {member.name}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}

