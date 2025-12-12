'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Search, ShoppingCart, X } from "lucide-react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const CatalogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [catalogSearch, setCatalogSearch] = useState("");
  
  // Filter states
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showCreatorModal, setShowCreatorModal] = useState(false);
  const [showPriceModal, setShowPriceModal] = useState(false);
  const [showSortModal, setShowSortModal] = useState(false);
  const [showSalesTypeModal, setShowSalesTypeModal] = useState(false);
  const [showUnavailableModal, setShowUnavailableModal] = useState(false);
  
  const [creatorFilter, setCreatorFilter] = useState("All Creators");
  const [creatorNameInput, setCreatorNameInput] = useState("");
  const [priceFilter, setPriceFilter] = useState("Any Price");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("Relevance");
  const [salesTypeFilter, setSalesTypeFilter] = useState("All");
  const [unavailableItemsFilter, setUnavailableItemsFilter] = useState("Hide Unavailable Items");
  
  // Cart count
  const [cartCount, setCartCount] = useState(0);

  // Popular tags
  const popularTags = [
    "dreads", "steven", "emotes", "face", "monkey", "beard", "fedora", 
    "scarf", "beanie", "sunglasses", "aura", "shades", "monster"
  ];

  // Categories
  const categories = [
    { id: "all", label: "All" },
    { id: "body", label: "Body" },
    { id: "clothing", label: "Clothing" },
    { id: "accessories", label: "Accessories" },
    { id: "animations", label: "Animations" },
  ];

  // Sort options
  const sortOptions = [
    "Relevance",
    "Most Favorited",
    "Bestselling",
    "Recently Published",
    "Price (High to Low)",
    "Price (Low to High)"
  ];

  // Sales type options
  const salesTypeOptions = [
    "All",
    "Collectibles",
    "Premium",
    "Limited",
    "Limited U"
  ];

  // Unavailable items options
  const unavailableOptions = [
    "Show All Items",
    "Hide Unavailable Items",
    "Show Only Unavailable Items"
  ];

  // Dummy catalog items
  const catalogItems = [
    { id: 1, title: "!showspeed", creator: "___sam.antha", price: 60, image: "https://robohash.org/catalog1?set=set4", favorited: false },
    { id: 2, title: "adidas Community Animation Pack", creator: "Roblox", price: 250, image: "https://robohash.org/catalog2?set=set4", favorited: false },
    { id: 3, title: "Teen Gojo", creator: "Realistic Bundles", price: 165, image: "https://robohash.org/catalog3?set=set4", favorited: false },
    { id: 4, title: "Black Messy Wolfcut w/ Bandage", creator: "smellyFartUGC", price: 60, image: "https://robohash.org/catalog4?set=set4", favorited: false },
    { id: 5, title: "Sung Jin Woo", creator: "LORD Store", price: 60, image: "https://robohash.org/catalog5?set=set4", favorited: false },
    { id: 6, title: "Doakes (Dexter)", creator: "Face Station", price: 90, image: "https://robohash.org/catalog6?set=set4", favorited: false },
    { id: 7, title: "Cute Toothless Dragon Suit", creator: "welcome to forever", price: 55, image: "https://robohash.org/catalog7?set=set4", favorited: false },
    { id: 8, title: "Demonic Black Hair w/ Fiery Red Horns & Rage Face", creator: "GarlCON", price: 60, image: "https://robohash.org/catalog8?set=set4", favorited: false },
    { id: 9, title: "Sung Jin Woo", creator: "LORD Store", price: 60, image: "https://robohash.org/catalog9?set=set4", favorited: false },
    { id: 10, title: "Beautiful Black Wolfcut w/ Bandage", creator: "smellyFartUGC", price: 60, image: "https://robohash.org/catalog10?set=set4", favorited: false },
    { id: 11, title: "Anime Hair Style 32", creator: "UGC Creator", price: 75, image: "https://robohash.org/catalog11?set=set4", favorited: false },
    { id: 12, title: "Black Spiky Hair", creator: "Hair Studio", price: 45, image: "https://robohash.org/catalog12?set=set4", favorited: false },
    { id: 13, title: "Cool Sunglasses", creator: "Accessories Pro", price: 35, image: "https://robohash.org/catalog13?set=set4", favorited: false },
    { id: 14, title: "Winter Scarf", creator: "Fashion Items", price: 50, image: "https://robohash.org/catalog14?set=set4", favorited: false },
    { id: 15, title: "Beanie Hat", creator: "Hats Collection", price: 40, image: "https://robohash.org/catalog15?set=set4", favorited: false },
  ];

  const CatalogItemCard = ({ item }: { item: any }) => (
    <Link href={`/catalog/${item.id}`} className="block group">
      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
        <div className="relative aspect-square bg-gray-100 dark:bg-gray-700">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-3">
          <h3 className="font-semibold text-sm text-gray-900 dark:text-gray-100 mb-1 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
            {item.title}
          </h3>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
            By <span className="hover:underline">{item.creator}</span>
          </p>
          <div className="flex items-center gap-1 text-sm font-semibold text-gray-900 dark:text-gray-100">
            <span className="text-gray-700 dark:text-gray-300">◈</span>
            <span>{item.price}</span>
          </div>
        </div>
      </div>
    </Link>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Header */}
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <main className="flex-1 max-w-[1920px] mx-auto px-4 py-6 w-full">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Catalog</h1>

        {/* Search and Buy AdventureBux Section */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 max-w-2xl relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              value={catalogSearch}
              onChange={(e) => setCatalogSearch(e.target.value)}
              className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg pl-10 pr-4 py-2.5 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <select className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 text-sm text-gray-900 dark:text-gray-100 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
            <option>All</option>
            <option>Body</option>
            <option>Clothing</option>
            <option>Accessories</option>
            <option>Animations</option>
          </select>

          <Link 
            href="/buy-adventurebux"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg text-sm whitespace-nowrap transition-colors"
          >
            Buy AdventureBux
          </Link>

          <Link 
            href="/cart" 
            className="relative p-2.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <ShoppingCart className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <button
            onClick={() => setShowCategoryModal(true)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              categoryFilter !== "All"
                ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900"
                : "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
            }`}
          >
            {categoryFilter} <ChevronRight className="inline w-4 h-4 ml-1 rotate-90" />
          </button>

          <button
            onClick={() => setShowCreatorModal(true)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              creatorFilter !== "All Creators"
                ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900"
                : "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
            }`}
          >
            {creatorFilter} <ChevronRight className="inline w-4 h-4 ml-1 rotate-90" />
          </button>

          <button
            onClick={() => setShowPriceModal(true)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              priceFilter !== "Any Price"
                ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900"
                : "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
            }`}
          >
            {priceFilter} <ChevronRight className="inline w-4 h-4 ml-1 rotate-90" />
          </button>

          <button
            onClick={() => setShowSortModal(true)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              sortBy !== "Relevance"
                ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900"
                : "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
            }`}
          >
            Sort by {sortBy} <ChevronRight className="inline w-4 h-4 ml-1 rotate-90" />
          </button>

          <button
            onClick={() => setShowSalesTypeModal(true)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              salesTypeFilter !== "All"
                ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900"
                : "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
            }`}
          >
            Sales Type <ChevronRight className="inline w-4 h-4 ml-1 rotate-90" />
          </button>

          <button
            onClick={() => setShowUnavailableModal(true)}
            className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            {unavailableItemsFilter} <ChevronRight className="inline w-4 h-4 ml-1 rotate-90" />
          </button>
        </div>

        {/* Popular Tags */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
          {popularTags.map((tag, index) => (
            <button
              key={index}
              className="px-4 py-1.5 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm rounded-full whitespace-nowrap transition-colors"
            >
              {tag}
            </button>
          ))}
          <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
            <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        {/* Catalog Items Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {catalogItems.map((item) => (
            <CatalogItemCard key={item.id} item={item} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-8">
          <button className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            Load More
          </button>
        </div>
      </main>

      {/* Category Modal */}
      {showCategoryModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Category</h3>
              <button onClick={() => setShowCategoryModal(false)} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
            <div className="space-y-2">
              {categories.map((cat) => (
                <label key={cat.id} className="flex items-center gap-3 cursor-pointer p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
                  <input
                    type="radio"
                    name="category"
                    checked={categoryFilter === cat.label}
                    onChange={() => setCategoryFilter(cat.label)}
                    className="w-5 h-5"
                  />
                  <span className="text-sm text-gray-900 dark:text-gray-100">{cat.label}</span>
                </label>
              ))}
            </div>
            <button
              onClick={() => setShowCategoryModal(false)}
              className="w-full mt-6 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-semibold py-2.5 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200"
            >
              Apply
            </button>
          </div>
        </div>
      )}

      {/* Creator Modal */}
      {showCreatorModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Creator</h3>
              <button onClick={() => setShowCreatorModal(false)} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
                <input
                  type="radio"
                  name="creator"
                  checked={creatorFilter === "All Creators"}
                  onChange={() => setCreatorFilter("All Creators")}
                  className="w-5 h-5"
                />
                <span className="text-sm text-gray-900 dark:text-gray-100">All Creators</span>
              </label>
              <div>
                <label className="flex items-center gap-3 cursor-pointer p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
                  <input
                    type="radio"
                    name="creator"
                    checked={creatorFilter !== "All Creators"}
                    onChange={() => setCreatorFilter("Specific Creator")}
                    className="w-5 h-5"
                  />
                  <span className="text-sm text-gray-900 dark:text-gray-100">Specific Creator</span>
                </label>
                <input
                  type="text"
                  placeholder="Creator Name"
                  value={creatorNameInput}
                  onChange={(e) => setCreatorNameInput(e.target.value)}
                  className="w-full mt-2 ml-8 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded px-3 py-2 text-sm text-gray-900 dark:text-gray-100"
                />
              </div>
            </div>
            <button
              onClick={() => setShowCreatorModal(false)}
              className="w-full mt-6 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-semibold py-2.5 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200"
            >
              Apply
            </button>
          </div>
        </div>
      )}

      {/* Price Modal */}
      {showPriceModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Price</h3>
              <button onClick={() => setShowPriceModal(false)} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
                <input
                  type="radio"
                  name="price"
                  checked={priceFilter === "Any Price"}
                  onChange={() => setPriceFilter("Any Price")}
                  className="w-5 h-5"
                />
                <span className="text-sm text-gray-900 dark:text-gray-100">Any Price</span>
              </label>
              <div>
                <label className="flex items-center gap-3 cursor-pointer p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
                  <input
                    type="radio"
                    name="price"
                    checked={priceFilter === "Custom Range"}
                    onChange={() => setPriceFilter("Custom Range")}
                    className="w-5 h-5"
                  />
                  <span className="text-sm text-gray-900 dark:text-gray-100">Custom Range</span>
                </label>
                <div className="flex gap-2 mt-2 ml-8">
                  <input
                    type="number"
                    placeholder="Min"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="flex-1 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded px-3 py-2 text-sm text-gray-900 dark:text-gray-100"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="flex-1 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded px-3 py-2 text-sm text-gray-900 dark:text-gray-100"
                  />
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowPriceModal(false)}
              className="w-full mt-6 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-semibold py-2.5 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200"
            >
              Apply
            </button>
          </div>
        </div>
      )}

      {/* Sort By Modal */}
      {showSortModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Sort By</h3>
              <button onClick={() => setShowSortModal(false)} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
            <div className="space-y-2">
              {sortOptions.map((option) => (
                <label key={option} className="flex items-center gap-3 cursor-pointer p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
                  <input
                    type="radio"
                    name="sort"
                    checked={sortBy === option}
                    onChange={() => setSortBy(option)}
                    className="w-5 h-5"
                  />
                  <span className="text-sm text-gray-900 dark:text-gray-100">{option}</span>
                </label>
              ))}
            </div>
            <button
              onClick={() => setShowSortModal(false)}
              className="w-full mt-6 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-semibold py-2.5 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200"
            >
              Apply
            </button>
          </div>
        </div>
      )}

      {/* Sales Type Modal */}
      {showSalesTypeModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Sales Type</h3>
              <button onClick={() => setShowSalesTypeModal(false)} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
            <div className="space-y-2">
              {salesTypeOptions.map((option) => (
                <label key={option} className="flex items-center gap-3 cursor-pointer p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
                  <input
                    type="radio"
                    name="salesType"
                    checked={salesTypeFilter === option}
                    onChange={() => setSalesTypeFilter(option)}
                    className="w-5 h-5"
                  />
                  <span className="text-sm text-gray-900 dark:text-gray-100">{option}</span>
                </label>
              ))}
            </div>
            <button
              onClick={() => setShowSalesTypeModal(false)}
              className="w-full mt-6 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-semibold py-2.5 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200"
            >
              Apply
            </button>
          </div>
        </div>
      )}

      {/* Unavailable Items Modal */}
      {showUnavailableModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Unavailable Items</h3>
              <button onClick={() => setShowUnavailableModal(false)} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
            <div className="space-y-2">
              {unavailableOptions.map((option) => (
                <label key={option} className="flex items-center gap-3 cursor-pointer p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
                  <input
                    type="radio"
                    name="unavailable"
                    checked={unavailableItemsFilter === option}
                    onChange={() => setUnavailableItemsFilter(option)}
                    className="w-5 h-5"
                  />
                  <span className="text-sm text-gray-900 dark:text-gray-100">{option}</span>
                </label>
              ))}
            </div>
            <button
              onClick={() => setShowUnavailableModal(false)}
              className="w-full mt-6 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-semibold py-2.5 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200"
            >
              Apply
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CatalogPage;

