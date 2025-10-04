import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plane, Globe, CheckCircle, Clock, Users, Award, MapPin } from "lucide-react";

const SingleEngineCPL = () => {
  const highlights = [
    { icon: Globe, title: "Global Training", description: "India (Ground School) + South Africa (Flight Training)" },
    { icon: Clock, title: "Duration", description: "12-14 months comprehensive program" },
    { icon: Users, title: "Expert Instructors", description: "1-on-1 personalized training" },
    { icon: Award, title: "Certification", description: "DGCA & SACAA approved" },
  ];

  const trainingPath = [
    { phase: "Ground School", location: "Aviakul, New Delhi", duration: "5 months", items: ["Air Law & Regulations", "Aircraft General Knowledge", "Flight Planning & Performance", "Aviation Meteorology", "Human Performance & Limitations", "Navigation Techniques"] },
    { phase: "PPL Training", location: "Rustenburg Aerodrome, SA", duration: "3-4 months", items: ["Basic flight maneuvers", "Solo flight training", "Hour building exercises", "Cross-country navigation"] },
    { phase: "Advanced Training", location: "Lanseria International Airport", duration: "4-5 months", items: ["Night Rating qualification", "Single-Engine Instrument Rating", "CPL Flight Test preparation", "International airspace operations"] },
  ];

  const features = [
    "Comprehensive ground school covering all DGCA subjects",
    "PPL training and hour building at Rustenburg Aerodrome",
    "Night Rating and Single-Engine Instrument Rating",
    "Training at Lanseria International Airport",
    "Visa assistance and accommodation support",
    "Experienced flight instructors from India and South Africa",
    "Modern training aircraft fleet",
    "Complete career guidance and placement support",
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
                Professional Training Program
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
                Single-Engine Instrument CPL
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Build your professional flying career with a strong foundation in single-engine instrument operations across India and South Africa
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
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Program Overview
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A comprehensive training pathway designed for aspiring professional pilots
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Plane className="h-6 w-6 text-vulcan-red" />
                    About the Program
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    The Single-Engine Instrument CPL programme is tailored for students who wish to build a professional flying career with a solid foundation in single-engine aircraft operations under instrument flight conditions.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Training begins at <strong className="text-foreground">Aviakul, New Delhi</strong>, where students complete approximately five months of intensive ground school covering all theoretical subjects required by DGCA.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Students then move to <strong className="text-foreground">Vulcan Aviation, South Africa</strong>, beginning at Rustenburg Aerodrome for PPL and hour-building, before advancing to Lanseria International Airport for Night Rating, Instrument Rating, and Commercial Pilot Licence skill test.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-hero text-white">
                <CardHeader>
                  <CardTitle className="text-2xl">Program Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Training Path */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Your Training Journey
              </h2>
              <p className="text-xl text-muted-foreground">
                Three structured phases to take you from ground school to commercial pilot
              </p>
            </div>

            <div className="space-y-8">
              {trainingPath.map((phase, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <Badge className="mb-3 bg-vulcan-red/10 text-vulcan-red border-vulcan-red/20">
                          Phase {index + 1}
                        </Badge>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{phase.phase}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground mb-2">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{phase.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm">{phase.duration}</span>
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <ul className="grid sm:grid-cols-2 gap-3">
                          {phase.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-vulcan-red mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{item}</span>
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Aviation Career?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our Single-Engine Instrument CPL program and take the first step towards becoming a professional pilot
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

export default SingleEngineCPL;
