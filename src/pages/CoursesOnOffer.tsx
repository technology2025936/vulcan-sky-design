import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Award, Plane } from "lucide-react";

const CoursesOnOffer = () => {
  const courses = [
    {
      title: "Private Pilot License (PPL)",
      description: "Your first step into aviation. Learn the fundamentals of flight in a comprehensive program designed for beginners.",
      duration: "8-12 weeks",
      students: "1-on-1",
      price: "From $12,000",
      features: ["40 hours flight time", "Ground school included", "Written & practical exams", "Night flying training"],
      level: "Beginner",
      icon: <Plane className="h-6 w-6" />
    },
    {
      title: "Commercial Pilot License (CPL)",
      description: "Advanced training for aspiring professional pilots. Master complex aircraft systems and commercial operations.",
      duration: "16-20 weeks",
      students: "1-on-1",
      price: "From $25,000",
      features: ["250 hours flight time", "Complex aircraft training", "Instrument rating included", "Multi-engine certification"],
      level: "Advanced",
      icon: <Award className="h-6 w-6" />
    },
    {
      title: "Instrument Rating (IR)",
      description: "Learn to fly safely in challenging weather conditions using only aircraft instruments.",
      duration: "6-8 weeks",
      students: "1-on-1",
      price: "From $8,500",
      features: ["40 hours instrument time", "IFR procedures", "Weather training", "Safety protocols"],
      level: "Intermediate",
      icon: <Clock className="h-6 w-6" />
    },
    {
      title: "Flight Instructor (CFI)",
      description: "Become a certified flight instructor and share your passion for aviation with future pilots.",
      duration: "10-12 weeks",
      students: "Small groups",
      price: "From $18,000",
      features: ["Teaching methodology", "Flight instruction techniques", "Ground instructor rating", "CFI checkride prep"],
      level: "Expert",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Multi-Engine Rating",
      description: "Expand your capabilities with multi-engine aircraft certification and advanced procedures.",
      duration: "3-4 weeks",
      students: "1-on-1",
      price: "From $6,500",
      features: ["Twin-engine aircraft", "Engine failure procedures", "Complex systems training", "Performance calculations"],
      level: "Advanced",
      icon: <Plane className="h-6 w-6" />
    },
    {
      title: "Airline Transport Pilot (ATPL)",
      description: "The highest level of pilot certification. Prepare for airline and corporate aviation careers.",
      duration: "20-24 weeks",
      students: "Small groups",
      price: "From $35,000",
      features: ["1,500 hours experience", "Airline procedures", "CRM training", "Type rating preparation"],
      level: "Professional",
      icon: <Award className="h-6 w-6" />
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-blue-100 text-blue-800";
      case "Advanced": return "bg-orange-100 text-orange-800";
      case "Expert": return "bg-red-100 text-red-800";
      case "Professional": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Flight Training Courses
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Comprehensive flight training programs designed to take you from your first flight to professional pilot
            </p>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <Card key={index} className="relative overflow-hidden hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sky-primary">
                        {course.icon}
                      </div>
                      <Badge className={getLevelColor(course.level)}>
                        {course.level}
                      </Badge>
                    </div>
                    <CardTitle className="text-aviation-grey">{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>{course.students}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-aviation-grey">Course Includes:</h4>
                        <ul className="space-y-1">
                          {course.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-sm text-muted-foreground flex items-center space-x-2">
                              <div className="w-1 h-1 bg-sky-primary rounded-full"></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="pt-4 border-t">
                        <div className="text-2xl font-bold text-sky-primary mb-4">{course.price}</div>
                        <Button variant="aviation" className="w-full">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-aviation-grey mb-6">
              Ready to Start Your Aviation Journey?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to discuss which course is right for you and take the first step towards your pilot license.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="aviation" size="lg">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg">
                Download Brochure
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CoursesOnOffer;