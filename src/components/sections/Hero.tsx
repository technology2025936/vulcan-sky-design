import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Plane } from "lucide-react";
import heroImage from "@/assets/aviation-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-sky-dark/80 to-sky-primary/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Soar to New
            <span className="bg-gradient-to-r from-sky-light to-accent bg-clip-text text-transparent block">
              Heights
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-sky-light max-w-2xl mx-auto leading-relaxed">
            Professional flight training with experienced instructors, modern aircraft, and comprehensive programs designed to make your aviation dreams take flight.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="aviationOutline" size="lg" className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-aviation-grey">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="bg-sky-primary/20 backdrop-blur-sm p-4 rounded-full mb-3">
                <Users className="h-8 w-8 text-sky-light" />
              </div>
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sky-light">Licensed Pilots</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-sky-primary/20 backdrop-blur-sm p-4 rounded-full mb-3">
                <Plane className="h-8 w-8 text-sky-light" />
              </div>
              <div className="text-3xl font-bold text-white">15+</div>
              <div className="text-sky-light">Training Aircraft</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-sky-primary/20 backdrop-blur-sm p-4 rounded-full mb-3">
                <Award className="h-8 w-8 text-sky-light" />
              </div>
              <div className="text-3xl font-bold text-white">25+</div>
              <div className="text-sky-light">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;