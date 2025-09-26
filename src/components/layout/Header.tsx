// src/components/Header.tsx
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import vulcanLogo from "@/assets/vulcan-logo.png";

const linkClass =
  "text-aviation-grey hover:text-sky-primary transition-colors";
const activeClass = "text-sky-primary";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const close = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link to="/" onClick={close} className="block">
              <img
                src={vulcanLogo}
                alt="Vulcan Aviation Logo"
                className="h-20 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" end className={({ isActive }) => (isActive ? activeClass : linkClass)}>
              Home
            </NavLink>
            <NavLink to="/about-us" className={({ isActive }) => (isActive ? activeClass : linkClass)}>
              About Us
            </NavLink>
            <NavLink to="/courses" className={({ isActive }) => (isActive ? activeClass : linkClass)}>
              Courses On Offer
            </NavLink>
            <NavLink to="/team" className={({ isActive }) => (isActive ? activeClass : linkClass)}>
              Meet The Team
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? activeClass : linkClass)}>
              Contact Us
            </NavLink>
            <Button variant="aviation" size="sm" asChild>
              <Link to="/contact">Enroll Now</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6 text-aviation-grey" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <NavLink to="/" end className={linkClass} onClick={close}>Home</NavLink>
              <NavLink to="/about-us" className={linkClass} onClick={close}>About Us</NavLink>
              <NavLink to="/courses" className={linkClass} onClick={close}>Courses On Offer</NavLink>
              <NavLink to="/team" className={linkClass} onClick={close}>Meet The Team</NavLink>
              <NavLink to="/contact" className={linkClass} onClick={close}>Contact Us</NavLink>
              <Button variant="aviation" size="sm" className="w-fit" asChild>
                <Link to="/contact" onClick={close}>Enroll Now</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
