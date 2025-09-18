import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Plane, MapPin, Clock } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      title: "Private Pilot License (PPL)",
      duration: "6-12 months",
      flightHours: "40+ hours",
      description: "Begin your aviation journey with our comprehensive private pilot program. Learn fundamental flying skills in a supportive environment.",
      features: [
        "Ground school instruction",
        "Dual flight training",
        "Solo flight preparation",
        "Check ride preparation",
        "Navigation training"
      ],
      icon: GraduationCap,
      popular: false
    },
    {
      title: "Commercial Pilot License (CPL)",
      duration: "12-18 months",
      flightHours: "250+ hours",
      description: "Advance your skills to professional standards and prepare for a career in aviation with our commercial pilot program.",
      features: [
        "Advanced flight maneuvers",
        "Complex aircraft training",
        "Commercial regulations",
        "Cross-country flights",
        "Professional standards"
      ],
      icon: Plane,
      popular: true
    },
    {
      title: "Instrument Rating (IR)",
      duration: "3-6 months",
      flightHours: "40+ hours",
      description: "Master instrument flying and weather navigation to become a safer, more capable pilot in all conditions.",
      features: [
        "Instrument procedures",
        "Weather interpretation",
        "IFR flight planning",
        "Approach procedures",
        "Emergency procedures"
      ],
      icon: MapPin,
      popular: false
    }
  ];

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-aviation-grey mb-6">
              Flight Training Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Choose from our comprehensive range of flight training programs, each designed 
              to meet your specific aviation goals and experience level.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card 
                key={index} 
                className={`relative shadow-soft hover:shadow-elevated transition-all duration-300 hover:scale-105 ${
                  program.popular ? 'ring-2 ring-sky-primary' : ''
                }`}
              >
                {program.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-hero text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="bg-gradient-sky p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <program.icon className="h-8 w-8 text-sky-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-aviation-grey">
                    {program.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground text-center">
                    {program.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-aviation-light p-3 rounded-lg">
                      <Clock className="h-5 w-5 text-sky-primary mx-auto mb-1" />
                      <div className="text-sm font-semibold text-aviation-grey">{program.duration}</div>
                      <div className="text-xs text-muted-foreground">Duration</div>
                    </div>
                    <div className="bg-aviation-light p-3 rounded-lg">
                      <Plane className="h-5 w-5 text-sky-primary mx-auto mb-1" />
                      <div className="text-sm font-semibold text-aviation-grey">{program.flightHours}</div>
                      <div className="text-xs text-muted-foreground">Flight Hours</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-aviation-grey text-sm">Program Includes:</h4>
                    <ul className="space-y-1">
                      {program.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-sky-primary rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    variant={program.popular ? "aviation" : "aviationOutline"} 
                    className="w-full"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="bg-muted p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-aviation-grey mb-4">
                Ready to Start Your Aviation Journey?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Contact us today to schedule a discovery flight and learn more about our training programs.
              </p>
              <Button variant="aviation" size="lg">
                Schedule Discovery Flight
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;