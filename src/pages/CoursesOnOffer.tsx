"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plane, Award } from "lucide-react";
import { Link } from "react-router-dom";

const CoursesOnOffer = () => {
  const courses = [
    {
      title: "Single-Engine Instrument CPL (Commercial Pilot Licence)",
      slug: "single-engine",
      description:
        "The Single-Engine Instrument CPL programme is tailored for students who wish to build a professional flying career with a solid foundation in single-engine aircraft operations under instrument flight conditions.",
      duration: "12–14 months",
      students: "1-on-1",
      price: "From $24,000",
      level: "Professional",
      features: [
        "Night Rating",
        "Single-Engine Instrument Rating",
        "Commercial Pilot Licence (CPL) training and skill test",
      ],
      icon: <Plane className="h-5 w-5 text-vulcan-red" />,
    },
    {
      title: "Multi-Engine Instrument CPL (Commercial Pilot Licence)",
      slug: "multi-engine",
      description:
        "The Multi-Engine Instrument CPL programme prepares students for a career in professional aviation, with emphasis on multi-engine aircraft handling and advanced instrument procedures.",
      duration: "12–14 months",
      students: "1-on-1",
      price: "From $27,000",
      level: "Professional",
      features: [
        "Night Rating",
        "Multi-Engine Rating on the Piper Seneca",
        "Multi-Engine Instrument Rating",
      ],
      icon: <Plane className="h-5 w-5 text-vulcan-red" />,
    },
    {
      title: "Commercial Pilot License (CPL) - DGCA Compilance",
      slug: "commercial-pilot",
      description:
        "A Commercial Pilot License also is known as CPL, is a type of License which allows a person to receive money in exchange for their services of flying certain aircraft. ",
      duration: "10–12 months",
      students: "Small groups",
      price: "From ₹32,00,000",
      level: "Professional",
      features: [
        "DGCA Ground School (India)",
        "200 Flying Hours",
        "Radio Telephony + SPL/FRTOL exams",
        "Day & Night flight operations",
      ],
      icon: <Award className="h-5 w-5 text-vulcan-red" />,
    },
      {
      title: "SACAA Licensing Requirements",
      slug: "sacaa-requirements",
      description:
        "Your complete guide to obtaining SACAA pilot certifications including PPL, Night Rating, and Instrument Rating.",
      duration: "10–12 months",
      students: "Small groups",
      price: "From ₹32,00,000",
      level: "Professional",
      features: [
        "Night Rating Exam",
        "40 Instrument Time (Max 20 Simulator, Rest in Aircraft)",
        "With Grade II Instructor or DFE",
        "Conducted with Designated Flight Examiner (DFE)",
      ],
      icon: <Award className="h-5 w-5 text-vulcan-red" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
              Flight Training Programmes
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Explore structured aviation pathways with Aviakul (India) and Vulcan Aviation (South Africa)
            </p>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {courses.map((course, i) => (
              <Card
                key={i}
                className="border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-xl overflow-hidden"
              >
                {/* Card Header */}
                <CardHeader className="p-6 pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <div className="bg-vulcan-red/10 p-2 rounded-md">
                      {course.icon}
                    </div>
                    <Badge className="bg-green-100 text-green-800 font-medium text-xs px-3 py-1 rounded-full">
                      {course.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-800 leading-snug">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600 leading-relaxed mt-2">
                    {course.description}
                  </CardDescription>
                </CardHeader>

                {/* Card Content */}
                <CardContent className="p-6 pt-0">
                  {/* Course Info */}
                  <div className="flex items-center justify-between text-sm text-gray-700 mb-4">
                    <div className="flex items-center space-x-2">
                      <span role="img" aria-label="clock">
                        🕒
                      </span>
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span role="img" aria-label="pilot">
                        👨‍✈️
                      </span>
                      <span>{course.students}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">
                      Course Includes:
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {course.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-vulcan-red text-lg leading-4">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price & CTA */}
                  <div className="border-t mt-4 pt-4">
                    {/* <div className="text-xl font-bold text-vulcan-red mb-4">
                      {course.price}
                    </div> */}
                    <Link to={`/${course.slug}`}>
                      <Button
                        className="w-full bg-vulcan-red hover:bg-vulcan-red/90 text-white font-semibold rounded-md py-2"
                        size="lg"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CoursesOnOffer;
