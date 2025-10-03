import { Button } from "@/components/ui/button";
import { Play, Phone, Target, Settings, Plane } from "lucide-react";
// import heroImage from "@/assets/hero-pilot-woman.jpg";
import banner from "@/assets/banner.png"

const Hero = () => {
  return <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${banner})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/40 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="flex items-center justify-center min-h-[80vh]">
          {/* Centered Content */}
          <div className="text-white space-y-8 text-center max-w-4xl">
            {/* Welcome Badge */}
            {/* <div className="inline-flex items-center border border-white/30 rounded-full px-6 py-3 text-sm font-medium">
              WELCOME TO VULCAN
            </div> */}

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Pilot Training at Lanseria Fly with Vulcan
                {/* <span className="block">Are Born Not Made</span> */}
              </h1>
              {/* <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Train at Lanseria International Airport and gain the skills and confidence to succeed in aviation.
              </p> */}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="vulcan" size="lg" className="text-lg px-10 py-4">
                Start Training
              </Button>
              <a href="https://www.youtube.com/watch?v=UnHtfW5A9dA" target="_blank" rel="noopener noreferrer">
  <Button
    variant="ghost"
    size="lg"
    className="text-lg px-10 py-4 text-white hover:bg-white/10 border border-white/30"
  >
    <Play className="mr-2 h-5 w-5" />
    Watch Video
  </Button>
</a>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        
      </div>
    </section>;
};
export default Hero;