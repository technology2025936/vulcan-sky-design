import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Clock, Target } from "lucide-react";

const About = () => {
  const stats = [
    { number: "25+", label: "Years of Excellence", subtitle: "Proven track record" },
    { number: "2000+", label: "Pilots Trained", subtitle: "Success stories" },
    { number: "50K+", label: "Flight Hours", subtitle: "Experience logged" },
    { number: "98%", label: "Pass Rate", subtitle: "Student success" }
  ];

  const features = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Our unwavering commitment to safety ensures every flight meets the highest industry standards with rigorous protocols."
    },
    {
      icon: Target,
      title: "Goal-Oriented Training", 
      description: "Structured programs designed to efficiently guide you from beginner to licensed pilot with clear milestones."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Train at your pace with flexible scheduling options that fit your lifestyle and professional commitments."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center border border-vulcan-red/20 rounded-full px-6 py-2 text-sm font-medium text-vulcan-red mb-6">
              ABOUT VULCAN AVIATION
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Where Elite Pilots
              <span className="block text-vulcan-red">Take Flight</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              For over 25 years, we've been transforming aviation dreams into reality through 
              world-class training, unmatched safety standards, and unwavering dedication to excellence.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-vulcan-red mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.subtitle}
                </div>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Content */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Vulcan Aviation?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We combine decades of aviation expertise with cutting-edge training methods and 
                state-of-the-art aircraft. Our personalized approach ensures every student 
                receives the individual attention needed to excel in their aviation journey.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "FAA-certified instructors with 10,000+ flight hours",
                  "Modern Cessna and Piper training aircraft fleet", 
                  "Comprehensive ground school and practical training",
                  "Accelerated and traditional program options",
                  "Career placement assistance and mentorship"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-vulcan-red mt-0.5 flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Button variant="vulcan" size="lg" className="text-lg px-8 py-4">
                Learn More About Us
              </Button>
            </div>

            {/* Right Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="bg-vulcan-red p-4 rounded-xl">
                        <feature.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-3">
                          {feature.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
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