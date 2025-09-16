import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Shield, Clock, Target } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Our unwavering commitment to safety ensures every flight meets the highest industry standards."
    },
    {
      icon: Target,
      title: "Goal-Oriented Training",
      description: "Structured programs designed to efficiently guide you from beginner to licensed pilot."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Train at your pace with flexible scheduling options that fit your lifestyle."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-aviation-grey mb-6">
              About Vulcan Aviation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              For over 25 years, Vulcan Aviation has been the premier flight training academy, 
              transforming aviation dreams into reality through exceptional instruction and 
              unwavering dedication to safety.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Content */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-aviation-grey mb-6">
                Why Choose Vulcan Aviation?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We combine decades of aviation expertise with modern training methods and 
                state-of-the-art aircraft. Our personalized approach ensures every student 
                receives the attention and guidance needed to excel in their aviation journey.
              </p>
              
              <div className="space-y-4">
                {[
                  "FAA-certified instructors with extensive experience",
                  "Modern, well-maintained training aircraft fleet",
                  "Comprehensive ground school and flight training",
                  "Accelerated and traditional training programs",
                  "Post-license career guidance and support"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-sky-primary mt-0.5 flex-shrink-0" />
                    <span className="text-aviation-grey">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features Grid */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <Card key={index} className="shadow-soft hover:shadow-elevated transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-hero p-3 rounded-lg">
                        <feature.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-aviation-grey mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;