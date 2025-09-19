import { Button } from "@/components/ui/button";
import { Play, Phone, Target, Settings, Plane } from "lucide-react";
import heroImage from "@/assets/hero-pilot-woman.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Welcome Badge */}
            <div className="inline-flex items-center border border-white/30 rounded-full px-4 py-2 text-sm font-medium">
              WELCOME TO VULCAN
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Where Elite Pilots
                <span className="block">Are Born Not Made</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 max-w-2xl leading-relaxed">
                We craft exceptional aviators with world-class training unmatched discipline and passion to conquer skies with skill and confidence.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="vulcan" size="lg" className="text-lg px-8 py-4">
                Start Training
              </Button>
              <Button 
                variant="ghost" 
                size="lg" 
                className="text-lg px-8 py-4 text-white hover:bg-white/10 border border-white/30"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Video
              </Button>
            </div>
          </div>

          {/* Right Content - Training Cards */}
          <div className="space-y-6">
            <div className="grid gap-4">
              {/* Training Simulators */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-vulcan-red p-3 rounded-xl">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Cockpit Training Simulator</h3>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-vulcan-red p-3 rounded-xl">
                    <Settings className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Cabin Training Simulator</h3>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-vulcan-red p-3 rounded-xl">
                    <Plane className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Full Flight Training</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Text */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Soar above expectations with world-class training and unmatched flight experiences for future aviation professionals.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-white/20">
          <div className="text-center text-white">
            <div className="text-4xl font-bold mb-2">50k+</div>
            <div className="text-white/80 text-sm">Flight Hours Completed</div>
          </div>
          <div className="text-center text-white">
            <div className="text-4xl font-bold mb-2">2k</div>
            <div className="text-white/80 text-sm">Certified Pilots Trained</div>
          </div>
          <div className="text-center text-white">
            <div className="text-4xl font-bold mb-2">25+</div>
            <div className="text-white/80 text-sm">State-of-the-Art Aircraft</div>
          </div>
          <div className="text-center text-white">
            <div className="text-4xl font-bold mb-2">100%</div>
            <div className="text-white/80 text-sm">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;