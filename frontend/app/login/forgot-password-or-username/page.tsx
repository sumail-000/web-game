'use client';

import { useState } from "react";
import Link from "next/link";
import Footer from "../../components/Footer";

const ForgotPasswordPage = () => {
  const [identifier, setIdentifier] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Account recovery for:", identifier);
  };

  return (
    <div
      className="min-h-screen relative"
      style={{ backgroundColor: '#121215' }}
    >
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4">
          <div className="flex-1" />
          <Link href="/signup" className="flex items-center justify-center">
            <div className="glass-card px-8 py-4 rounded-xl">
              <h1 className="text-4xl font-black text-foreground tracking-wider uppercase" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                ADVENTUREBLOX
              </h1>
            </div>
          </Link>
          <div className="flex-1 flex justify-end">
            <Link 
              href="/login"
              className="bg-foreground text-background font-bold px-6 py-2 rounded hover:bg-foreground/90 transition-colors text-sm"
            >
              Log In
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-4 py-8">
          <div className="w-full max-w-md bg-card/95 backdrop-blur-md border border-border/50 rounded-lg p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-center text-foreground mb-6">
              AdventureBlox Account Recovery
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Username/Email/Phone Input */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Username/Email/Phone
                </label>
                <input
                  type="text"
                  placeholder="Enter your username, email, or phone number"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  className="w-full bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground h-12 px-4 rounded focus:outline-none focus:ring-1 focus:ring-ring"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-3 h-12 text-base rounded"
              >
                Next
              </button>
            </form>

            {/* Back to Login */}
            <div className="text-center mt-6">
              <Link href="/login" className="text-foreground hover:underline text-sm font-medium">
                Back to Login
              </Link>
            </div>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default ForgotPasswordPage;

