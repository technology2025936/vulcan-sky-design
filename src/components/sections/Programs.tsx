import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, Trophy, BookOpen, Navigation, ArrowRight, Star } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "Private Pilot License",
      description: "Foundation training for aspiring aviators.",
      icon: Plane
    },
    {
      id: 2,
      title: "Commercial Pilot License", 
      description: "Advanced skills for professional pilots.",
      icon: Trophy
    },
    {
      id: 3,
      title: "Instrument Flight Rating",
      description: "Master precise navigation in any weather.",
      icon: Navigation
    },
    {
      id: 4,
      title: "Flight Instructor Course",
      description: "Fly advanced complex twin engine aircraft.",
      icon: BookOpen
    }
  ];

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-start mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-vulcan-red/10 text-vulcan-red px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              AVIA PROGRAMS
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              Experience The Power Of Flight
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our programs deliver hands-on training, advanced simulation, and expert mentorship to help you master every aspect of flying.
            </p>
          </div>
          <Button 
            variant="outline" 
            size="lg" 
            className="hidden lg:flex border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
          >
            MORE PROGRAMS
          </Button>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {programs.map((program) => {
            const IconComponent = program.icon;
            return (
              <Card key={program.id} className="group relative overflow-hidden bg-white border-2 border-gray-100 hover:border-vulcan-red/30 transition-all duration-500 hover:shadow-xl rounded-3xl">
                <div className="relative">
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                      <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-vulcan-red transition-colors duration-300">
                      {program.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 text-muted-foreground mb-4">
            <span>Your Aviation Career Starts Here</span>
            <Button 
              className="bg-vulcan-red hover:bg-vulcan-red/90 text-white font-semibold px-8 py-3 rounded-full flex items-center gap-2 group"
            >
              REGISTER NOW
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;