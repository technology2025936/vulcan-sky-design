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
    <section id="programs" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center border border-vulcan-red/20 rounded-full px-6 py-2 text-sm font-medium text-vulcan-red mb-6">
              TRAINING PROGRAMS
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Professional Flight
              <span className="block text-vulcan-red">Training Programs</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Choose from our comprehensive range of flight training programs, each designed 
              to meet your specific aviation goals and experience level with industry-leading instruction.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card 
                key={index} 
                className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  program.popular ? 'ring-2 ring-vulcan-red shadow-vulcan-red/20' : ''
                }`}
              >
                {program.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-vulcan-red text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6 pt-8">
                  <div className="bg-vulcan-red p-4 rounded-xl w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <program.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {program.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6 px-8 pb-8">
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {program.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-muted/50 p-4 rounded-xl">
                      <Clock className="h-6 w-6 text-vulcan-red mx-auto mb-2" />
                      <div className="text-sm font-bold text-foreground">{program.duration}</div>
                      <div className="text-xs text-muted-foreground">Duration</div>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-xl">
                      <Plane className="h-6 w-6 text-vulcan-red mx-auto mb-2" />
                      <div className="text-sm font-bold text-foreground">{program.flightHours}</div>
                      <div className="text-xs text-muted-foreground">Flight Hours</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-foreground">Program Includes:</h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-2 h-2 bg-vulcan-red rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    variant={program.popular ? "vulcan" : "outline"} 
                    className="w-full py-6 text-lg font-semibold"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-r from-vulcan-red to-vulcan-red/90 p-12 rounded-3xl text-white shadow-2xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Aviation Journey?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Contact us today to schedule a discovery flight and take the first step 
                toward your pilot's license with our expert instructors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg" className="bg-white text-vulcan-red border-white hover:bg-white/90 px-8 py-4 text-lg font-semibold">
                  Schedule Discovery Flight
                </Button>
                <Button variant="ghost" size="lg" className="text-white hover:bg-white/10 border border-white/30 px-8 py-4 text-lg font-semibold">
                  View All Programs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;