import { Button } from "@/components/ui/button";
import { Plane, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-hero p-2 rounded-lg">
              <Plane className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-aviation-grey">Vulcan Aviation</h1>
              <p className="text-xs text-muted-foreground">Flight Training Academy</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-aviation-grey hover:text-sky-primary transition-colors">
              About
            </a>
            <a href="#programs" className="text-aviation-grey hover:text-sky-primary transition-colors">
              Programs
            </a>
            <a href="#instructors" className="text-aviation-grey hover:text-sky-primary transition-colors">
              Instructors
            </a>
            <a href="#contact" className="text-aviation-grey hover:text-sky-primary transition-colors">
              Contact
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
                href="#about"
                className="text-aviation-grey hover:text-sky-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#programs"
                className="text-aviation-grey hover:text-sky-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Programs
              </a>
              <a
                href="#instructors"
                className="text-aviation-grey hover:text-sky-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Instructors
              </a>
              <a
                href="#contact"
                className="text-aviation-grey hover:text-sky-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
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