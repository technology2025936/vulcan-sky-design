import { CheckCircle, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyChooseAvia = () => {
  const features = [
    {
      title: "Guided By The Skies Finest Captains",
      description: "Learn from experienced airline captains with thousands of flight hours"
    },
    {
      title: "Your Direct Gateway To Global Airlines", 
      description: "Direct partnerships with major airlines for seamless career transitions"
    },
    {
      title: "Fly The Most Advanced Training Fleet",
      description: "State-of-the-art aircraft equipped with modern avionics and safety systems"
    },
    {
      title: "Experience The Future In Our Simulators",
      description: "Full-motion simulators replicating real-world flying conditions"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] repeat"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Cockpit Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/api/placeholder/600/450" 
                  alt="Professional pilot operating aircraft controls in modern cockpit"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-vulcan-red/10 rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-vulcan-red/5 to-transparent rounded-full"></div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              {/* Header */}
              <div>
                <div className="inline-flex items-center border border-vulcan-red/30 rounded-full px-6 py-2 text-sm font-medium text-vulcan-red mb-6 bg-vulcan-red/10">
                  WHY CHOOSE AVIA
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-foreground">
                  Building Wings For
                  <span className="block text-vulcan-red">Aviation Leaders</span>
                </h2>
              </div>

              {/* Features List */}
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 bg-vulcan-red rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-vulcan-red transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <p className="text-lg text-muted-foreground leading-relaxed">
                We equip aspiring pilots with the vision, discipline and skills needed to soar above the rest in aviation.
              </p>

              {/* CTA Button */}
              <Button 
                variant="outline" 
                size="lg" 
                className="border-vulcan-red text-vulcan-red hover:bg-vulcan-red hover:text-white bg-transparent px-8 py-4 text-lg font-semibold group"
              >
                LEARN MORE ABOUT US
                <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAvia;