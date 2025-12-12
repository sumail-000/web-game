'use client';

import { ChevronLeft, ChevronRight, ThumbsUp, Users } from "lucide-react";
import Image from "next/image";

interface Game {
  id: number;
  name: string;
  likes: string;
  players: number;
}

const games: Game[] = [
  { id: 1, name: "Nova Gaming Homestore", likes: "86%", players: 0 },
  { id: 2, name: "Nova Application Center", likes: "93%", players: 0 },
];

export default function GamesSection() {
  return (
    <div className="p-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100">Games</h2>
        
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span>Page 1</span>
          <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="flex gap-4">
        {games.map((game) => (
          <a
            key={game.id}
            href="#"
            className="group block"
          >
            <div className="w-[120px] h-[120px] border border-gray-200 dark:border-gray-700 rounded overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
              <Image
                src="/spiked-logo.png"
                alt={game.name}
                width={120}
                height={120}
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
              />
            </div>
            <p className="text-xs text-blue-600 dark:text-blue-400 hover:underline mt-1 truncate w-[120px]">
              {game.name}
            </p>
            <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400 mt-0.5">
              <span className="flex items-center gap-1">
                <ThumbsUp className="w-3 h-3" /> {game.likes}
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-3 h-3" /> {game.players}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

