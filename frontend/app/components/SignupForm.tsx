'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { authApi, storage } from "@/lib/api";

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const days = Array.from({ length: 31 }, (_, i) => i + 1);
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

const SignupForm = () => {
  const router = useRouter();
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState<"male" | "female" | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);
    setLoading(true);

    try {
      const response = await authApi.signup({
        username,
        password,
        month,
        day,
        year,
        gender: gender || undefined,
      });

      if (response.success && response.data) {
        // Store tokens and user data
        storage.setTokens(response.data.accessToken, response.data.refreshToken);
        storage.setUser(response.data.user);
        
        // Redirect to home
        router.push('/home');
      } else {
        // Handle validation errors from backend
        if (response.errors && Array.isArray(response.errors) && response.errors.length > 0) {
          setErrors(response.errors.map((err: any) => err.msg || err.message || String(err)));
        } else if (response.message) {
          setErrors([response.message]);
        } else {
          setErrors(['Signup failed. Please try again.']);
        }
      }
    } catch (err) {
      setErrors(['An error occurred. Please try again.']);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass-card rounded-lg p-8 w-full max-w-md mx-auto">
      <h1 className="text-xl font-bold text-center text-foreground mb-6 tracking-wide">
        SIGN UP AND START HAVING FUN!
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Birthday */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Birthday
          </label>
          <div className="grid grid-cols-3 gap-2">
            <div className="relative">
              <select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="w-full bg-input text-foreground rounded px-3 py-2.5 appearance-none cursor-pointer border border-border focus:outline-none focus:ring-1 focus:ring-ring text-sm"
              >
                <option value="" disabled>Month</option>
                {months.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
            <div className="relative">
              <select
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className="w-full bg-input text-foreground rounded px-3 py-2.5 appearance-none cursor-pointer border border-border focus:outline-none focus:ring-1 focus:ring-ring text-sm"
              >
                <option value="" disabled>Day</option>
                {days.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
            <div className="relative">
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full bg-input text-foreground rounded px-3 py-2.5 appearance-none cursor-pointer border border-border focus:outline-none focus:ring-1 focus:ring-ring text-sm"
              >
                <option value="" disabled>Year</option>
                {years.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Username */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Don't use your real name"
            className="w-full bg-input text-foreground rounded px-3 py-2.5 border border-border focus:outline-none focus:ring-1 focus:ring-ring placeholder:text-muted-foreground text-sm"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 8 characters"
            className="w-full bg-input text-foreground rounded px-3 py-2.5 border border-border focus:outline-none focus:ring-1 focus:ring-ring placeholder:text-muted-foreground text-sm"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Gender <span className="text-muted-foreground font-normal">(optional)</span>
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setGender("male")}
              className={`py-3 rounded border transition-all ${
                gender === "male"
                  ? "bg-secondary border-ring"
                  : "bg-input border-border hover:border-muted-foreground"
              }`}
            >
              <svg className="w-6 h-6 mx-auto text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="10" cy="8" r="5" strokeWidth="2" />
                <path strokeWidth="2" d="M10 13v8M6 17h8" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => setGender("female")}
              className={`py-3 rounded border transition-all ${
                gender === "female"
                  ? "bg-secondary border-ring"
                  : "bg-input border-border hover:border-muted-foreground"
              }`}
            >
              <svg className="w-6 h-6 mx-auto text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="10" r="5" strokeWidth="2" />
                <path strokeWidth="2" d="M12 15v6M9 18h6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Terms */}
        <p className="text-xs text-muted-foreground leading-relaxed">
          By clicking Sign Up, you are agreeing to our{" "}
          <a href="#" className="text-foreground underline hover:text-accent">Terms of Use</a>{" "}
          (including arbitration) and acknowledge our{" "}
          <a href="#" className="text-foreground underline hover:text-accent">Privacy Policy</a>.
          If you are under 18, you agree that your parent/guardian permits you to create this account and agrees to our Terms of Use.
        </p>

        {/* Error Messages */}
        {errors.length > 0 && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded text-sm">
            {errors.length === 1 ? (
              <div className="font-medium">{errors[0]}</div>
            ) : (
              <ul className="list-disc list-inside space-y-1">
                {errors.map((err, index) => (
                  <li key={index}>{err}</li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-muted hover:bg-muted/80 text-foreground font-bold py-3 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Creating Account...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default SignupForm;

