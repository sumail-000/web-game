'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import SignupForm from "../components/SignupForm";
import Footer from "../components/Footer";

const SignupPage = () => {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);

  useEffect(() => {
    // Show modal after 2 seconds
    const timer = setTimeout(() => {
      setShowWhatsAppModal(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="min-h-screen bg-gray-900 bg-cover bg-center bg-no-repeat relative dark"
      style={{ backgroundImage: `url(/gaming-bg.jpg)` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between gap-4 px-6 py-3">
          {/* Left - Empty spacer */}
          <div className="flex-1"></div>
          
          {/* Center - Logo */}
          <div className="flex items-center justify-center">
            <div className="glass-card px-8 py-3 rounded-xl">
              <h1 className="text-3xl font-black text-white tracking-wider uppercase" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                ADVENTUREBLOX
              </h1>
            </div>
          </div>
          
          {/* Right - Login button */}
          <div className="flex-1 flex justify-end items-center gap-2">
            <Link 
              href="/login"
              className="bg-white text-gray-900 font-bold px-5 py-2 rounded hover:bg-gray-100 transition-colors text-sm"
            >
              Log In
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
          <SignupForm />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* WhatsApp Contact Modal */}
      {showWhatsAppModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4 backdrop-blur-sm">
          <div className="bg-gray-800 border-2 border-green-500 rounded-2xl p-8 w-full max-w-md relative shadow-2xl animate-in fade-in zoom-in duration-300">
            {/* Close Button */}
            <button
              onClick={() => setShowWhatsAppModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* WhatsApp Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-center text-white mb-4">
              Let's Connect on WhatsApp! 💬
            </h2>

            {/* Message */}
            <p className="text-gray-300 text-center mb-6 leading-relaxed">
              If you are comfortable, feel free to add me on WhatsApp so we can freely discuss everything without any Fiverr limitations. Thanks! 🙏
            </p>

            {/* WhatsApp Number */}
            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 mb-6 text-center">
              <p className="text-gray-400 text-sm mb-1">WhatsApp Number</p>
              <p className="text-white text-xl font-bold">+92 324 6806874</p>
            </div>

            {/* Buttons */}
            <div className="space-y-3">
              <a
                href="https://wa.me/923246806874?text=Hi!%20I%27m%20interested%20in%20connecting%20with%20you%20about%20AdventureBlox."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg text-center transition-colors"
              >
                Open WhatsApp Chat
              </a>
              <button
                onClick={() => setShowWhatsAppModal(false)}
                className="w-full bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 rounded-lg transition-colors"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignupPage;

