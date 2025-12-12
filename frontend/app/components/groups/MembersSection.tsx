'use client';

import { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import Image from "next/image";

const members = [
  { id: 1, name: "L_Kryptex", avatar: "https://robohash.org/kryptex?set=set3", role: "Owner" },
  { id: 2, name: "Vanessa_Ch...", avatar: "https://robohash.org/vanessa?set=set3", role: "Admin" },
  { id: 3, name: "TheRealMar...", avatar: "https://robohash.org/realmar?set=set3", role: "Moderator" },
  { id: 4, name: "XxXxSuperS...", avatar: "https://robohash.org/superx?set=set3", role: "Customer" },
  { id: 5, name: "Yiglickedfa...", avatar: "https://robohash.org/yiglick?set=set3", role: "Customer" },
  { id: 6, name: "teotobi", avatar: "https://robohash.org/teotobi?set=set3", role: "VIP" },
  { id: 7, name: "Immx23", avatar: "https://robohash.org/immx23?set=set3", role: "Member" },
  { id: 8, name: "Hex_Daniel", avatar: "https://robohash.org/hexdan?set=set3", role: "Member" },
  { id: 9, name: "Ogracees", avatar: "https://robohash.org/ograce?set=set3", role: "Customer" },
  { id: 10, name: "GamerPro", avatar: "https://robohash.org/gamerpro?set=set3", role: "Admin" },
  { id: 11, name: "PixelDev", avatar: "https://robohash.org/pixeldev?set=set3", role: "Moderator" },
  { id: 12, name: "NeonKnight", avatar: "https://robohash.org/neonknight?set=set3", role: "VIP" },
];

const roles = [
  { name: "All Members", value: "all" },
  { name: "Owner", value: "Owner" },
  { name: "Admin", value: "Admin" },
  { name: "Moderator", value: "Moderator" },
  { name: "VIP", value: "VIP" },
  { name: "Customer", value: "Customer" },
  { name: "Member", value: "Member" },
];

export default function MembersSection() {
  const [selectedRole, setSelectedRole] = useState("Customer");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredMembers = selectedRole === "all" 
    ? members 
    : members.filter(member => member.role === selectedRole);
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
          
          <div className="relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-between gap-2 min-w-[140px] px-3 py-1.5 border border-gray-200 dark:border-gray-700 rounded text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <span>{selectedRole === "all" ? "All Members" : selectedRole}</span>
              <ChevronDown className="w-4 h-4 flex-shrink-0" />
            </button>

            {isDropdownOpen && (
              <>
                {/* Backdrop to close dropdown */}
                <div 
                  className="fixed inset-0 z-10"
                  onClick={() => setIsDropdownOpen(false)}
                />
                
                {/* Dropdown Menu */}
                <div className="absolute right-0 top-full mt-1 w-full min-w-[140px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg z-20 py-1 max-h-[300px] overflow-y-auto">
                  {roles.map((role) => (
                    <button
                      key={role.value}
                      onClick={() => {
                        setSelectedRole(role.value);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full px-3 py-2 text-left text-sm transition-colors ${
                        selectedRole === role.value
                          ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium"
                          : "text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                      }`}
                    >
                      {role.name}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {filteredMembers.length > 0 ? (
          filteredMembers.map((member) => (
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
          ))
        ) : (
          <p className="text-sm text-gray-500 dark:text-gray-400 py-4">
            No members found with this role.
          </p>
        )}
      </div>
    </div>
  );
}

