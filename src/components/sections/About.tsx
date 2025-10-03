import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Quote, Plane, Users, Clock } from "lucide-react";
import heroImage from "@/assets/aviation-hero.jpg";
import pilotImage from "@/assets/hero-pilot-woman.jpg";
import { Link, NavLink } from "react-router-dom";


const About = () => {
  return <section id="about" className="py-24 bg-white text-foreground relative overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] repeat"></div>
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center border border-vulcan-red/30 rounded-full px-6 py-2 text-sm font-medium text-vulcan-red mb-6 bg-vulcan-red/10">
            ABOUT VULCAN AVIATION
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Experience The Power Of Flight
                <span className="block text-vulcan-red">Where Dreams Take Wing And</span>
                <span className="block">Careers Soar High</span>
              </h1>
            </div>

            {/* Testimonial Card */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <Quote className="h-12 w-12 text-vulcan-red mb-6" />
              <blockquote className="text-lg italic text-muted-foreground mb-6 leading-relaxed">
                "A great pilot is not born from talent alone but from discipline, persistence and an unshakable passion for the skies."
              </blockquote>
              <div className="text-vulcan-red font-semibold">
                Capt. Alexander Moore, Founder & CEO
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Stats and Aircraft Image */}
          <div className="lg:col-span-5 space-y-8">
            {/* Large Stat */}
            <div className="text-center lg:text-left">
              <div className="text-6xl md:text-8xl font-bold text-vulcan-red mb-2">10+</div>
              <div className="border-l-4 border-vulcan-red pl-6">
                <div className="text-xl font-bold text-foreground mb-1">YEARS OF AVIATION</div>
                <div className="text-xl font-bold text-foreground">EXCELLENCE</div>
              </div>
            </div>

            {/* Aircraft Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src={heroImage} alt="Training aircraft on runway" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Right Column - Cockpit Image and Content */}
          <div className="lg:col-span-7">
            <div className="relative mb-8">
              <div className="aspect-[3/2] rounded-2xl overflow-hidden">
                <img src={pilotImage} alt="Professional pilots in aircraft cockpit" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-vulcan-red mb-2">300+</div>
                <div className="text-sm text-muted-foreground">Pilots Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-vulcan-red mb-2">60K+</div>
                <div className="text-sm text-muted-foreground">Flight Hours</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-vulcan-red mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Pass Rate</div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With expert instructors and advanced resources, we equip aspiring pilots with skills and confidence to thrive in aviation careers worldwide.
            </p>

            <Link
              to="/about-us"
              className="border border-vulcan-red rounded text-vulcan-red hover:bg-vulcan-red hover:text-white bg-transparent px-8 py-4 text-lg font-semibold"
            >
              About Us
            </Link>


          </div>
        </div>

      </div>
    </div>
  </section>;
};
export default About;