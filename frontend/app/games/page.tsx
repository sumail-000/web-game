"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ChevronLeft, ThumbsUp, Users } from "lucide-react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

interface Game {
  id: number;
  title: string;
  rating: number;
  players: string;
  image: string;
}

// GameCard component
const GameCard = ({ game }: { game: Game }) => (
  <Link href={`/games/${game.id}`} className="block group">
    <div className="rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative aspect-[16/10] bg-gray-200 dark:bg-gray-700">
        <Image
          src={game.image}
          alt={game.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="pt-2">
        <h3 className="font-semibold text-sm text-gray-900 dark:text-gray-100 mb-1 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
          {game.title}
        </h3>
        <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <ThumbsUp className="w-3 h-3" />
            <span>{game.rating}%</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            <span>{game.players}</span>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

// GameSection component
const GameSection = ({
  title,
  games,
  info,
}: {
  title: string;
  games: Game[];
  info?: string;
}) => (
  <div className="mb-8">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          {title}
        </h2>
        {info && (
          <div className="w-4 h-4 rounded-full border border-gray-400 dark:border-gray-500 flex items-center justify-center text-xs text-gray-400 dark:text-gray-500 cursor-help">
            i
          </div>
        )}
      </div>
      <Link
        href={`/games/category/${title.toLowerCase().replace(/\s+/g, "-")}`}
        className="flex items-center gap-1 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
      >
        See All
        <ChevronRight className="w-4 h-4" />
      </Link>
    </div>
    {info && (
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{info}</p>
    )}
    <div className="relative">
      <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700">
        <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
      </button>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
      <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700">
        <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
      </button>
    </div>
  </div>
);

const GamesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState("Computer");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");

  // Dummy game data
  const topTrendingGames = [
    {
      id: 1,
      title: "Emergency Hamburg",
      rating: 84,
      players: "394K",
      image: "https://robohash.org/game1?set=set4",
    },
    {
      id: 2,
      title: "[💸] Build a Scam Empire!",
      rating: 98,
      players: "6.8K",
      image: "https://robohash.org/game2?set=set4",
    },
    {
      id: 3,
      title: "Spot The Differences! 🔎",
      rating: 89,
      players: "598",
      image: "https://robohash.org/game3?set=set4",
    },
    {
      id: 4,
      title: "[CHRISTMAS] Car Crash Simulator V3",
      rating: 83,
      players: "7.8K",
      image: "https://robohash.org/game4?set=set4",
    },
    {
      id: 5,
      title: "[BIG UPDATE] Aura Edit Tower 🎵",
      rating: 83,
      players: "215K",
      image: "https://robohash.org/game5?set=set4",
    },
    {
      id: 6,
      title: "SLAP",
      rating: 95,
      players: "3.4K",
      image: "https://robohash.org/game6?set=set4",
    },
    {
      id: 7,
      title: "Build a Waterslide 💦",
      rating: 82,
      players: "12.8K",
      image: "https://robohash.org/game7?set=set4",
    },
    {
      id: 8,
      title: "bLocked Mine",
      rating: 83,
      players: "8.9K",
      image: "https://robohash.org/game8?set=set4",
    },
  ];

  const upAndComingGames = [
    {
      id: 9,
      title: "STREETLINE [PRE-ALPHA]",
      rating: 97,
      players: "1.3K",
      image: "https://robohash.org/game9?set=set4",
    },
    {
      id: 10,
      title: "[3H] MY THEMEPARK",
      rating: 94,
      players: "10.7K",
      image: "https://robohash.org/game10?set=set4",
    },
    {
      id: 11,
      title: "⚔️blade battle",
      rating: 92,
      players: "3.9K",
      image: "https://robohash.org/game11?set=set4",
    },
    {
      id: 12,
      title: "Get Tall and Fall [🔥World 5]",
      rating: 98,
      players: "33.6K",
      image: "https://robohash.org/game12?set=set4",
    },
    {
      id: 13,
      title: "[🚂] train ur troops! 😡",
      rating: 97,
      players: "6K",
      image: "https://robohash.org/game13?set=set4",
    },
    {
      id: 14,
      title: "🔨Dig to Escape",
      rating: 92,
      players: "71.7K",
      image: "https://robohash.org/game14?set=set4",
    },
    {
      id: 15,
      title: "My Plane Hangar ✈️ [NEW]",
      rating: 93,
      players: "2.3K",
      image: "https://robohash.org/game15?set=set4",
    },
    {
      id: 16,
      title: "Drift Paradise",
      rating: 91,
      players: "5.1K",
      image: "https://robohash.org/game16?set=set4",
    },
  ];

  const topPlayingNowGames = [
    {
      id: 17,
      title: "99 Nights in the Forest 🦅",
      rating: 91,
      players: "1M",
      image: "https://robohash.org/game17?set=set4",
    },
    {
      id: 18,
      title: "Fish It! 🐟",
      rating: 84,
      players: "986K",
      image: "https://robohash.org/game18?set=set4",
    },
    {
      id: 19,
      title: "Brookhaven 🏡RP",
      rating: 85,
      players: "656.3K",
      image: "https://robohash.org/game19?set=set4",
    },
    {
      id: 20,
      title: "[🅰️] Steal a Brainrot",
      rating: 86,
      players: "604.2K",
      image: "https://robohash.org/game20?set=set4",
    },
    {
      id: 21,
      title: "The Forge [BETA]",
      rating: 96,
      players: "407.2K",
      image: "https://robohash.org/game21?set=set4",
    },
    {
      id: 22,
      title: "[🅰️] RIVALS",
      rating: 94,
      players: "380.1K",
      image: "https://robohash.org/game22?set=set4",
    },
    {
      id: 23,
      title: "[🎁 DAY 12] Adopt Me!",
      rating: 84,
      players: "334.9K",
      image: "https://robohash.org/game23?set=set4",
    },
    {
      id: 24,
      title: "Blox Fruits",
      rating: 91,
      players: "307.7K",
      image: "https://robohash.org/game24?set=set4",
    },
  ];

  const topRatedGames = [
    {
      id: 25,
      title: "Basketball Zero",
      rating: 98,
      players: "9.5K",
      image: "https://robohash.org/game25?set=set4",
    },
    {
      id: 26,
      title: "FLASHPOINT⚡",
      rating: 98,
      players: "1.8K",
      image: "https://robohash.org/game26?set=set4",
    },
    {
      id: 27,
      title: "[🏆] Garden Tower Defense 🌿",
      rating: 98,
      players: "11.5K",
      image: "https://robohash.org/game27?set=set4",
    },
    {
      id: 28,
      title: "Grow a Friend () 💪",
      rating: 98,
      players: "154",
      image: "https://robohash.org/game28?set=set4",
    },
    {
      id: 29,
      title: "[😈 9.5 😇] Anime Vanguards",
      rating: 96,
      players: "68.3K",
      image: "https://robohash.org/game29?set=set4",
    },
    {
      id: 30,
      title: "Jule's RNG [EVO 6+7]",
      rating: 98,
      players: "663",
      image: "https://robohash.org/game30?set=set4",
    },
    {
      id: 31,
      title: "SpongeBob Tower Defense🧽",
      rating: 98,
      players: "12.7K",
      image: "https://robohash.org/game31?set=set4",
    },
    {
      id: 32,
      title: "Arena World",
      rating: 97,
      players: "8.2K",
      image: "https://robohash.org/game32?set=set4",
    },
  ];

  const topPaidAccessGames = [
    {
      id: 33,
      title: "[🩸] Bloodlines",
      rating: 81,
      players: "1.7K",
      image: "https://robohash.org/game33?set=set4",
    },
    {
      id: 34,
      title: "Deepwoken: Duskguard",
      rating: 86,
      players: "7.7K",
      image: "https://robohash.org/game34?set=set4",
    },
    {
      id: 35,
      title: "The Vampire Legends 2",
      rating: 92,
      players: "569",
      image: "https://robohash.org/game35?set=set4",
    },
    {
      id: 36,
      title: "[🎨] Avatar Graphics Creator",
      rating: 71,
      players: "30",
      image: "https://robohash.org/game36?set=set4",
    },
    {
      id: 37,
      title: "[WINTER❄️] Cruise Line Tycoon",
      rating: 91,
      players: "142",
      image: "https://robohash.org/game37?set=set4",
    },
    {
      id: 38,
      title: "Project Flight | Early Access Pre-Alpha",
      rating: 92,
      players: "583",
      image: "https://robohash.org/game38?set=set4",
    },
    {
      id: 39,
      title: "[WIPE] Fallen Survival💀",
      rating: 85,
      players: "500",
      image: "https://robohash.org/game39?set=set4",
    },
    {
      id: 40,
      title: "Dragon Soul",
      rating: 88,
      players: "1.2K",
      image: "https://robohash.org/game40?set=set4",
    },
  ];

  const trendingMusicGames = [
    {
      id: 41,
      title: "FIND THE MIKU [228] SHUTDOWN",
      rating: 92,
      players: "40",
      image: "https://robohash.org/game41?set=set4",
    },
    {
      id: 42,
      title: "Giant Subwoofer",
      rating: 82,
      players: "19",
      image: "https://robohash.org/game42?set=set4",
    },
    {
      id: 43,
      title: "The Corner 🔊",
      rating: 88,
      players: "4K",
      image: "https://robohash.org/game43?set=set4",
    },
    {
      id: 44,
      title: "🔺 Ro-vibes 🔊",
      rating: 93,
      players: "142",
      image: "https://robohash.org/game44?set=set4",
    },
    {
      id: 45,
      title: "Sprunki Roleplay",
      rating: 89,
      players: "215",
      image: "https://robohash.org/game45?set=set4",
    },
    {
      id: 46,
      title: "Rockstar Gymnastics and Cheer",
      rating: 78,
      players: "31",
      image: "https://robohash.org/game46?set=set4",
    },
    {
      id: 47,
      title: "100 Players Musical Chairs",
      rating: 85,
      players: "2.1K",
      image: "https://robohash.org/game47?set=set4",
    },
    {
      id: 48,
      title: "Live Music Venue",
      rating: 81,
      players: "89",
      image: "https://robohash.org/game48?set=set4",
    },
  ];

  const funWithFriendsGames = [
    {
      id: 49,
      title: "Prison Life",
      rating: 87,
      players: "12.5K",
      image: "https://robohash.org/game49?set=set4",
    },
    {
      id: 50,
      title: "Collect All Pets!",
      rating: 94,
      players: "8.9K",
      image: "https://robohash.org/game50?set=set4",
    },
    {
      id: 51,
      title: "INDO HANGOUT",
      rating: 91,
      players: "3.2K",
      image: "https://robohash.org/game51?set=set4",
    },
    {
      id: 52,
      title: "The Corner 🔊",
      rating: 88,
      players: "4K",
      image: "https://robohash.org/game52?set=set4",
    },
    {
      id: 53,
      title: "HUTAN VOICE CHAT",
      rating: 82,
      players: "1.8K",
      image: "https://robohash.org/game53?set=set4",
    },
    {
      id: 54,
      title: "BRACE",
      rating: 79,
      players: "567",
      image: "https://robohash.org/game54?set=set4",
    },
    {
      id: 55,
      title: "Quackers",
      rating: 93,
      players: "2.4K",
      image: "https://robohash.org/game55?set=set4",
    },
    {
      id: 56,
      title: "Voice Chat Hangout",
      rating: 85,
      players: "1.1K",
      image: "https://robohash.org/game56?set=set4",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Header */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <main className="max-w-[1920px] mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Games
        </h1>

        {/* Filters */}
        <div className="flex items-center gap-4 mb-8">
          <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">
            Popular on:
          </div>
          <div className="relative">
            <select
              value={selectedDevice}
              onChange={(e) => setSelectedDevice(e.target.value)}
              className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded px-4 py-2 pr-8 text-sm text-gray-900 dark:text-gray-100 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <option>Computer</option>
              <option>Phone</option>
              <option>Tablet</option>
              <option>Console</option>
            </select>
            <ChevronRight className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none rotate-90" />
          </div>
          <div className="relative">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded px-4 py-2 pr-8 text-sm text-gray-900 dark:text-gray-100 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <option>All Locations</option>
              <option>North America</option>
              <option>Europe</option>
              <option>Asia</option>
            </select>
            <ChevronRight className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none rotate-90" />
          </div>
        </div>

        {/* Game Sections */}
        <GameSection title="Top Trending" games={topTrendingGames} />
        <GameSection title="Up-and-Coming" games={upAndComingGames} />
        <GameSection
          title="Top Playing Now"
          games={topPlayingNowGames}
          info="Results for all devices and locations"
        />
        <GameSection title="Top Rated" games={topRatedGames} />
        <GameSection title="Top Paid Access" games={topPaidAccessGames} />
        <GameSection
          title="Trending Music Experiences"
          games={trendingMusicGames}
          info="Discover more music. See Music Top 100 ›"
        />
        <GameSection title="Fun with Friends" games={funWithFriendsGames} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default GamesPage;
