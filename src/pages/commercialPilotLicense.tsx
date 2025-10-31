import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plane, CheckCircle, Clock, Award, BookOpen, Radio, Moon, Users, Sun } from "lucide-react";

const CommercialPilotLicense = () => {
  const highlights = [
    { icon: BookOpen, title: "Ground School", description: "4 months DGCA approved curriculum" },
    { icon: Plane, title: "200+ Hours", description: "Comprehensive flight training" },
    { icon: Award, title: "DGCA Certified", description: "Fully accredited program" },
    { icon: Users, title: "Small Groups", description: "Personalized attention" },
  ];

  const groundSchoolSubjects = [
    { name: "Air Regulation", description: "Aviation laws, rules, and procedures" },
    { name: "Aviation Meteorology", description: "Weather patterns and flight safety" },
    { name: "Air Navigation", description: "Route planning and navigation techniques" },
    { name: "Aircraft Technical General", description: "Aircraft systems and mechanics" },
    { name: "Radio Telephony", description: "Communication protocols and procedures" },
  ];

  const flightRequirements = [
    { requirement: "Total Flying Hours", value: "200 hours minimum", icon: Clock },
    { requirement: "Pilot-in-Command", value: "100 hours", icon: Users },
    { requirement: "Cross-Country Flight", value: "50 hours", icon: Plane },
    { requirement: "Instrument Time", value: "50 hours (20 sim max)", icon: Award },
    { requirement: "Night Operations", value: "15 hours + 10 T/L", icon: Moon },
    { requirement: "Multi Engine Experience", value: "25 hours", icon: Sun },
  ];

  const programPhases = [
    {
      phase: "Ground School",
      duration: "4 months",
      description: "Intensive theoretical training combining classroom instruction and Learning Management System (LMS) modules",
      highlights: ["DGCA approved curriculum", "Experienced instructors", "Modern facilities", "LMS access 24/7"]
    },
    {
      phase: "Pre-Flight Training",
      duration: "2-3 weeks",
      description: "Pre-Flight Ground Training (PFGT) and examination preparation",
      highlights: ["Aircraft familiarization", "Safety procedures", "Emergency protocols", "SPL/FRTOL exam prep"]
    },
    {
      phase: "Flight Training",
      duration: "6-8 months",
      description: "Structured flying program aligned with DGCA standards",
      highlights: ["Basic to advanced maneuvers", "Solo and dual instruction", "Cross-country navigation", "Night rating operations"]
    },
  ];

  const benefits = [
    "DGCA Compliant Course",
    "Well Maintained training aircraft fleet",
    "Experienced and certified instructors",
    "Simulator training included",
    "Night rating qualification",
    "Small batch sizes for personalized attention",
    "SACAA PPL Ground School",
    "Two Training Bases for Faster Completion Times",
    "Exposure to Operations at an International Airport"
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
                Flagship Training Program
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
                Commercial Pilot License (CPL)
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Begin your high-flying career with Aviakul's flagship CPL program designed to prepare you for airline and charter operations
              </p>
              {/* <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-white text-vulcan-red hover:bg-white/90">
                  Apply Now
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Download Brochure
                </Button>
              </div> */}
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

        {/* Overview */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Program Overview
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive training designed for aspiring pilots seeking professional roles in aviation
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <BookOpen className="h-6 w-6 text-vulcan-red" />
                    Ground School Curriculum
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Ground school runs for approximately four months, blending classroom learning with our advanced Learning Management System (LMS).
                  </p>
                  <div className="space-y-4">
                    {groundSchoolSubjects.map((subject, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                        <CheckCircle className="h-5 w-5 text-vulcan-red mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground">{subject.name}</h4>
                          <p className="text-sm text-muted-foreground">{subject.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-hero text-white">
                <CardHeader>
                  <CardTitle className="text-2xl">Program Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Flight Requirements */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Flight Training Requirements
              </h2>
              <p className="text-xl text-muted-foreground">
                Structured flying program aligned with DGCA standards
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {flightRequirements.map((item, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-vulcan-red/10 p-3 rounded-lg">
                        <item.icon className="h-6 w-6 text-vulcan-red" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">{item.requirement}</h3>
                        <p className="text-2xl font-bold text-vulcan-red">{item.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-0 shadow-lg mt-8">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Radio className="h-6 w-6 text-vulcan-red mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Additional Certifications</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-vulcan-red" />
                        <span>Pre-Flight Ground Training (PFGT)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-vulcan-red" />
                        <span>SPL/FRTOL Examinations</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-vulcan-red" />
                        <span>Radio Telephony License</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-vulcan-red" />
                        <span>Night Rating with minimum 10 take-offs and landings</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Training Phases */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Training Phases
              </h2>
              <p className="text-xl text-muted-foreground">
                Your journey from ground school to commercial pilot
              </p>
            </div>

            <div className="space-y-8">
              {programPhases.map((phase, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <Badge className="mb-3 bg-vulcan-red/10 text-vulcan-red border-vulcan-red/20">
                          Phase {index + 1}
                        </Badge>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{phase.phase}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground mb-4">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm">{phase.duration}</span>
                        </div>
                        <p className="text-muted-foreground">{phase.description}</p>
                      </div>
                      <div className="md:w-2/3">
                        <h4 className="font-semibold text-foreground mb-4">Key Highlights:</h4>
                        <ul className="grid sm:grid-cols-2 gap-3">
                          {phase.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-vulcan-red mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{highlight}</span>
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
              Ready to Become a Commercial Pilot?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join Aviakul's flagship CPL program and launch your career in aviation with industry-leading training
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-vulcan-red hover:bg-white/90">
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-vulcan-red hover:bg-white/10">
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

export default CommercialPilotLicense;
