import { Plane } from "lucide-react";
import vulcanLogo from "@/assets/vulcan-logo.png";

const Footer = () => {
  return (
    <footer className="bg-sky-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src={vulcanLogo} 
                  alt="Vulcan Aviation Logo" 
                  className="h-12 w-auto"
                />
                <div>
                  <h3 className="text-xl font-bold">Vulcan Aviation</h3>
                  <p className="text-sm text-sky-light">Flight Training Academy</p>
                </div>
              </div>
              <p className="text-sky-light mb-4 max-w-md">
                Professional flight training with experienced instructors, modern aircraft, and comprehensive programs designed to make your aviation dreams take flight.
              </p>
              <div className="text-sm text-sky-light">
                <p>SACAA approved Aviation Training Organisation (ATO/1575/CAA)</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sky-light">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#programs" className="hover:text-white transition-colors">Training Programs</a></li>
                <li><a href="#instructors" className="hover:text-white transition-colors">Our Instructors</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-sky-light">
                <li><a href="#" className="hover:text-white transition-colors">Private Pilot Licence</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Night Rating</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instrument Rating</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Commercial Pilots Licence</a></li>
                <li><a href="#" className="hover:text-white transition-colors">DGCA Commercial Pilots Licence (Includes Accommodation)</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Multi-Engine Rating</a></li>
                {/* <li><a href="#" className="hover:text-white transition-colors">ATPL</a></li>
                <li><a href="#" className="hover:text-white transition-colors">MCC (Multi-crew Co-operation Course)</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ATR Rating (ATR 42/72)</a></li> */}
              </ul>
            </div>
          </div>

          <div className="border-t border-sky-primary/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sky-light text-sm">
              © 2024 Vulcan Aviation. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sky-light hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-sky-light hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-sky-light hover:text-white transition-colors text-sm">
                Safety Standards
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;