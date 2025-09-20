import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Quote, Plane, Users, Clock } from "lucide-react";
import heroImage from "@/assets/aviation-hero.jpg";
import pilotImage from "@/assets/hero-pilot-woman.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-sky-dark text-white relative overflow-hidden">
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
                  Your Trusted Pathway To
                  <span className="block text-vulcan-red">Excellence In Professional</span>
                  <span className="block">Pilot Careers</span>
                </h1>
              </div>
              
              {/* Testimonial Card */}
              <div className="bg-sky-dark/50 backdrop-blur-sm border border-vulcan-red/20 rounded-2xl p-8">
                <Quote className="h-12 w-12 text-vulcan-red mb-6" />
                <blockquote className="text-lg italic text-white/90 mb-6 leading-relaxed">
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
                <div className="text-6xl md:text-8xl font-bold text-vulcan-red mb-2">25+</div>
                <div className="border-l-4 border-vulcan-red pl-6">
                  <div className="text-xl font-bold text-white mb-1">YEARS OF AVIATION</div>
                  <div className="text-xl font-bold text-white">EXCELLENCE</div>
                </div>
              </div>
              
              {/* Aircraft Image */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src={heroImage} 
                    alt="Training aircraft on runway" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Cockpit Image and Content */}
            <div className="lg:col-span-7">
              <div className="relative mb-8">
                <div className="aspect-[3/2] rounded-2xl overflow-hidden">
                  <img 
                    src={pilotImage} 
                    alt="Professional pilots in aircraft cockpit" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-vulcan-red mb-2">2000+</div>
                  <div className="text-sm text-white/80">Pilots Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-vulcan-red mb-2">50K+</div>
                  <div className="text-sm text-white/80">Flight Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-vulcan-red mb-2">98%</div>
                  <div className="text-sm text-white/80">Pass Rate</div>
                </div>
              </div>
              
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                With expert instructors and advanced resources, we equip aspiring pilots with skills and confidence to thrive in aviation careers worldwide.
              </p>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-vulcan-red text-vulcan-red hover:bg-vulcan-red hover:text-white bg-transparent px-8 py-4 text-lg font-semibold"
              >
                READ MORE
              </Button>
            </div>
          </div>

          {/* Additional Features Section */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {[
              {
                icon: Plane,
                title: "Modern Fleet",
                description: "State-of-the-art Cessna and Piper aircraft equipped with the latest avionics and safety systems."
              },
              {
                icon: Users,
                title: "Expert Instructors",
                description: "FAA-certified instructors with 10,000+ flight hours and commercial airline experience."
              },
              {
                icon: Clock,
                title: "Flexible Training",
                description: "Accelerated and traditional programs designed to fit your schedule and career goals."
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-sky-dark/50 border-vulcan-red/20 backdrop-blur-sm hover:bg-sky-dark/70 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="bg-vulcan-red/20 p-4 rounded-xl inline-flex mb-6">
                    <feature.icon className="h-8 w-8 text-vulcan-red" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;