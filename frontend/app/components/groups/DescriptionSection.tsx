'use client';

export default function DescriptionSection() {
  return (
    <div className="p-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-3">Description</h2>
      
      <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded p-4 text-sm leading-relaxed text-gray-900 dark:text-gray-100">
        <p className="mb-2">
          Welcome to Nova Gaming Studios! 🎮✨🔥
        </p>
        <p className="mb-2">
          Nova Gaming was established on 5/12/19 by{" "}
          <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">NightOwl_Dev</a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">PixelForge_Studios</a>.
        </p>
        <p className="mb-2">
          🌟💫 &quot;Building worlds, one pixel at a time!&quot; 💫🌟
        </p>
        <p className="mb-2">
          Nova Gaming creates immersive experiences across multiple genres.
          <br />
          Contact NightOwl_Dev for partnerships and inquiries.
        </p>
        <p className="border-t border-dashed border-gray-300 dark:border-gray-600 pt-2 mt-2 mb-2">
          Main Hub:{" "}
          <a 
            href="#" 
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            https://www.adventureblox.com/games/9876543210/Nova-Gaming-Hub
          </a>
        </p>
        <p className="mb-2 flex items-start gap-1">
          <span>🎯</span>
          <span>Looking for talented developers? Apply through our Discord server!</span>
        </p>
        <p className="flex items-start gap-1">
          <span>🛒</span>
          <span>Check out our exclusive merch and collectibles in the group store!</span>
        </p>
      </div>
    </div>
  );
}

