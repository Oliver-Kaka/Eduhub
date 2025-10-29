import { useState } from "react";
import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";
import ProfileMenu from "./ProfileMenu";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Resources", href: "/resources" },
    { name: "AI Tools", href: "/ai-tools" },
    { name: "Study Plan", href: "/study-plan" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-serif font-bold text-foreground">
              EduHub
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeLink === link.name
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Profile */}
          <ProfileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
