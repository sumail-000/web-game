import Link from "next/link";
import SignupForm from "../components/SignupForm";
import Footer from "../components/Footer";

const SignupPage = () => {
  return (
    <div
      className="min-h-screen bg-background bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(/gaming-bg.jpg)` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/40" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4">
          <div className="flex-1" />
          <div className="flex items-center justify-center">
            <div className="glass-card px-8 py-4 rounded-xl">
              <h1 className="text-4xl font-black text-foreground tracking-wider uppercase" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                ADVENTUREBLOX
              </h1>
            </div>
          </div>
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
        <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
          <SignupForm />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default SignupPage;

