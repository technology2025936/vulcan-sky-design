import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Award, Users, Target } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              About Vulcan Aviation
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Leading flight training academy with over 25 years of excellence in aviation education
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-aviation-grey mb-6">Our Mission</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  To provide world-class flight training that transforms aviation dreams into reality. 
                  We are committed to delivering exceptional education, safety training, and professional 
                  development in a supportive learning environment.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-sky-primary" />
                    <span className="text-aviation-grey">Safety-first training approach</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-sky-primary" />
                    <span className="text-aviation-grey">Modern aircraft fleet</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-sky-primary" />
                    <span className="text-aviation-grey">Experienced instructors</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-subtle p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-aviation-grey mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the premier flight training academy that sets the standard for aviation 
                  education excellence, producing skilled, confident, and safety-conscious pilots 
                  who contribute to the future of aviation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Award className="h-8 w-8 text-sky-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-aviation-grey">25+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Users className="h-8 w-8 text-sky-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-aviation-grey">1,500+</div>
                  <div className="text-muted-foreground">Trained Pilots</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Target className="h-8 w-8 text-sky-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-aviation-grey">98%</div>
                  <div className="text-muted-foreground">Success Rate</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <CheckCircle className="h-8 w-8 text-sky-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-aviation-grey">15</div>
                  <div className="text-muted-foreground">Aircraft Fleet</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-aviation-grey mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sky-primary">Safety Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Safety is our top priority in every aspect of training, from ground school 
                    to flight operations.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-sky-primary">Professional Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We maintain the highest standards of professionalism in instruction, 
                    facilities, and student support.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-sky-primary">Student Success</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Every student's success is our success. We provide personalized attention 
                    and support throughout the training journey.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;