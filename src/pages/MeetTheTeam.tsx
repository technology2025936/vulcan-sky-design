import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Clock, Plane, Star } from "lucide-react";

const MeetTheTeam = () => {
  const team = [
    {
      name: "Mr Kiron Hanuman",
      role: "Director & Co-Founder",
      experience: ["Airline Instructor","Involved in ab-initio flight and ground training at Vulcan Aviation"],
      certifications: ["Airline Transport Pilot License (ATPL) with multiple Type Rating endorsements",],
      specialties: ["Instructor Rating", "Airline Transport Pilot License (ATPL)", "Type Rating endorsements:","Airbus A320/340", "B737 Classic/NG", "Piper Seneca (PA34)", "Cessna Series", " Piper Series", "Diamond DA20"],
      bio: "Highly experienced aviation professional with over 11,300 flying hours",
      image: "/placeholder.svg"
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Meet Our Expert Team
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Learn from experienced aviation professionals who are passionate about training the next generation of pilots
            </p>
          </div>
        </section>

        {/* Team Stats */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <Award className="h-8 w-8 text-sky-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-aviation-grey">70,000+</div>
                <div className="text-muted-foreground">Combined Flight Hours</div>
              </div>
              <div>
                <Plane className="h-8 w-8 text-sky-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-aviation-grey">25+</div>
                <div className="text-muted-foreground">Years Combined Experience</div>
              </div>
              <div>
                <Star className="h-8 w-8 text-sky-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-aviation-grey">100%</div>
                <div className="text-muted-foreground">Certified Instructors</div>
              </div>
              <div>
                <Clock className="h-8 w-8 text-sky-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-aviation-grey">1,500+</div>
                <div className="text-muted-foreground">Students Trained</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-elegant transition-all duration-300">
                  <div className="aspect-square bg-gradient-subtle flex items-center justify-center">
                    <div className="w-32 h-32 bg-sky-primary/20 rounded-full flex items-center justify-center">
                      <Plane className="h-12 w-12 text-sky-primary" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-aviation-grey mb-2">{member.name}</h3>
                    <p className="text-sky-primary font-semibold mb-3">{member.role}</p>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{member.experience}</span>
                      </div>
                      
                      <div>
                        <p className="text-sm font-semibold mb-2">Certifications:</p>
                        <div className="flex flex-wrap gap-1">
                          {member.certifications.map((cert, certIndex) => (
                            <Badge key={certIndex} variant="secondary" className="text-xs">
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm font-semibold mb-2">Licenses & Ratings:</p>
                        <div className="flex flex-wrap gap-1">
                          {member.specialties.map((specialty, specialtyIndex) => (
                            <Badge key={specialtyIndex} variant="outline" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-6">
              Train with the Best Instructors
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Our experienced team is ready to guide you through every step of your aviation journey. 
              Contact us to meet your future instructor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-foreground text-sky-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors">
                Schedule Meet & Greet
              </button>
              <button className="border border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors">
                Learn About Training
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MeetTheTeam;