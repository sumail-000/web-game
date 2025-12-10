import Link from 'next/link';

const Footer = () => {
  const footerLinks = [
    { label: "About Us", href: "#" },
    { label: "Jobs", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Parents", href: "#" },
    { label: "Buy Gift Cards", href: "#" },
    { label: "Help", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Accessibility", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Your Privacy Choices", href: "#" },
    { label: "Sitemap", href: "#" },
  ];

  return (
    <footer className="relative z-10 bg-background/80 backdrop-blur-sm border-t border-border/30 py-6 px-6">
      {/* Navigation Links */}
      <nav className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6">
        {footerLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-foreground/80 hover:text-foreground text-sm transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Divider */}
      <div className="border-t border-border/30 mb-6" />

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        {/* Copyright */}
        <p className="text-foreground/60 text-xs text-center">
          ©2025 AdventureBlox Corporation. AdventureBlox, the AdventureBlox logo and Powering Imagination are among our registered and unregistered trademarks.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

