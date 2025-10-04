import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plane, Globe, CheckCircle, Clock, Users, Award, MapPin, Gauge } from "lucide-react";

const MultiEngineCPL = () => {
  const highlights = [
    { icon: Plane, title: "Multi-Engine", description: "Piper Seneca advanced training" },
    { icon: Globe, title: "International", description: "India + South Africa training" },
    { icon: Clock, title: "Duration", description: "12-14 months complete program" },
    { icon: Award, title: "Elite Training", description: "Lanseria International Airport" },
  ];

  const trainingStages = [
    { 
      stage: "Ground School", 
      location: "Aviakul, New Delhi", 
      duration: "5 months",
      description: "Comprehensive theoretical training covering all DGCA requirements",
      modules: ["Air Law & Regulations", "Aircraft General Knowledge", "Flight Performance & Planning", "Aviation Meteorology", "Human Performance", "Navigation & Radio Aids"]
    },
    { 
      stage: "PPL & Hour Building", 
      location: "Rustenburg Aerodrome", 
      duration: "3-4 months",
      description: "Foundation flying skills and experience building",
      modules: ["Private Pilot License training", "Solo flight operations", "Cross-country navigation", "Hour building exercises"]
    },
    { 
      stage: "Advanced Multi-Engine", 
      location: "Lanseria International Airport", 
      duration: "4-5 months",
      description: "Professional multi-engine and instrument training",
      modules: ["Night Rating qualification", "Multi-Engine Rating (Piper Seneca)", "Multi-Engine Instrument Rating", "CPL Flight Test preparation"]
    },
  ];

  const programFeatures = [
    "DGCA approved ground school in New Delhi",
    "Multi-engine training on Piper Seneca aircraft",
    "Night Rating and Instrument Rating (Multi-Engine)",
    "Training at international controlled airspace",
    "Rustenburg Aerodrome for PPL and hour building",
    "Lanseria International Airport for advanced training",
    "Comprehensive visa and accommodation assistance",
    "Career guidance and airline placement support",
    "Modern fleet with advanced avionics",
    "Experienced international flight instructors",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-hero overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10 bg-cover bg-center" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
                Advanced Multi-Engine Program
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
                Multi-Engine Instrument CPL
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Train for professional aviation with advanced multi-engine handling, instrument rating, and CPL flight test at Lanseria International Airport
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-white text-vulcan-red hover:bg-white/90">
                  Apply Now
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Program Highlights */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((item, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="bg-gradient-hero w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-vulcan-red/10 text-vulcan-red border-vulcan-red/20">
                  Professional Training
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Master Multi-Engine Operations
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    The Multi-Engine Instrument CPL programme prepares students for a career in professional aviation, emphasizing multi-engine aircraft handling and advanced instrument flight proficiency.
                  </p>
                  <p>
                    The journey starts in India at <strong className="text-foreground">Aviakul, New Delhi</strong>, with five months of comprehensive ground school covering all theoretical knowledge requirements.
                  </p>
                  <p>
                    Students then move to South Africa for PPL and hour-building at Rustenburg Aerodrome, followed by advanced multi-engine training at <strong className="text-foreground">Lanseria International Airport</strong>.
                  </p>
                  <p>
                    Training culminates with Night Rating, Multi-Engine Rating on the Piper Seneca, Multi-Engine Instrument Rating, and the CPL flight test in international controlled airspace.
                  </p>
                </div>
              </div>

              <Card className="border-0 shadow-xl bg-gradient-hero text-white">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Gauge className="h-6 w-6" />
                    Program Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {programFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Training Stages */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Training Pathway
              </h2>
              <p className="text-xl text-muted-foreground">
                Three progressive stages to professional multi-engine qualification
              </p>
            </div>

            <div className="space-y-8">
              {trainingStages.map((stage, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="bg-gradient-hero text-white p-8 md:w-1/3">
                        <Badge className="mb-4 bg-white/20 text-white border-white/30">
                          Stage {index + 1}
                        </Badge>
                        <h3 className="text-2xl font-bold mb-4">{stage.stage}</h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{stage.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span className="text-sm">{stage.duration}</span>
                          </div>
                        </div>
                        <p className="mt-4 text-white/90 text-sm">{stage.description}</p>
                      </div>
                      <div className="p-8 md:w-2/3">
                        <h4 className="font-semibold text-foreground mb-4">Training Modules:</h4>
                        <ul className="grid sm:grid-cols-2 gap-3">
                          {stage.modules.map((module, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-vulcan-red mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground text-sm">{module}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Aircraft Spotlight */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="text-center">
                  <div className="bg-gradient-hero w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Plane className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">Train on Piper Seneca</h3>
                  <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Master multi-engine operations on one of the most reliable and widely-used twin-engine training aircraft in professional aviation.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-6 mt-8">
                    <div>
                      <div className="text-3xl font-bold text-vulcan-red mb-2">2</div>
                      <div className="text-sm text-muted-foreground">Engine Configuration</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-vulcan-red mb-2">6</div>
                      <div className="text-sm text-muted-foreground">Passenger Capacity</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-vulcan-red mb-2">Advanced</div>
                      <div className="text-sm text-muted-foreground">Avionics Suite</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Elevate Your Aviation Career
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our Multi-Engine Instrument CPL program and gain the advanced skills airlines are looking for
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-vulcan-red hover:bg-white/90">
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Admissions
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MultiEngineCPL;
