import { Gamepad2, Smartphone, Monitor, Headphones } from "lucide-react";

const platforms = [
  { name: "App Store", icon: "🍎", subtitle: "Download on the" },
  { name: "Google Play", icon: "▶️", subtitle: "GET IT ON" },
  { name: "PlayStation", icon: Gamepad2, subtitle: "" },
  { name: "XBOX", icon: "🎮", subtitle: "" },
  { name: "Meta Quest", icon: Headphones, subtitle: "" },
  { name: "Microsoft", icon: Monitor, subtitle: "Get it from" },
  { name: "Amazon Appstore", icon: Smartphone, subtitle: "available at" },
];

const PlatformBadges = () => {
  return (
    <div className="text-center mt-8">
      <h2 className="text-foreground font-bold text-sm tracking-wider mb-4">
        ADVENTUREBLOX ON YOUR DEVICE
      </h2>
      <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto px-4">
        {platforms.map((platform) => (
          <button
            key={platform.name}
            className="bg-secondary/80 hover:bg-secondary border border-border rounded px-3 py-2 flex items-center gap-2 transition-colors"
          >
            {typeof platform.icon === "string" ? (
              <span className="text-lg">{platform.icon}</span>
            ) : (
              <platform.icon className="w-5 h-5 text-foreground" />
            )}
            <div className="text-left">
              {platform.subtitle && (
                <span className="text-[8px] text-muted-foreground block leading-none">
                  {platform.subtitle}
                </span>
              )}
              <span className="text-xs font-semibold text-foreground">
                {platform.name}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PlatformBadges;

