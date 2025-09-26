import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import vulcanLogo from "@/assets/vulcan-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={vulcanLogo} 
              alt="Vulcan Aviation Logo" 
              className="h-20 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-aviation-grey hover:text-sky-primary transition-colors">
              Home
            </a>
            <a href="/about-us" className="text-aviation-grey hover:text-sky-primary transition-colors">
              About Us
            </a>
            <a href="/courses" className="text-aviation-grey hover:text-sky-primary transition-colors">
              Courses On Offer
            </a>
            <a href="/team" className="text-aviation-grey hover:text-sky-primary transition-colors">
              Meet The Team
            </a>
            <a href="/contact" className="text-aviation-grey hover:text-sky-primary transition-colors">
              Contact Us
            </a>
            <Button variant="aviation" size="sm">
              Enroll Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 text-aviation-grey" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <a
                href="/"
                className="text-aviation-grey hover:text-sky-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/about-us"
                className="text-aviation-grey hover:text-sky-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <a
                href="/courses"
                className="text-aviation-grey hover:text-sky-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Courses On Offer
              </a>
              <a
                href="/team"
                className="text-aviation-grey hover:text-sky-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Meet The Team
              </a>
              <a
                href="/contact"
                className="text-aviation-grey hover:text-sky-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </a>
              <Button variant="aviation" size="sm" className="w-fit">
                Enroll Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;