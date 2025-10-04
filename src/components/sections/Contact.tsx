"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    height: "",
    education: "",
    licence: "",
    medical: "",
    english: "",
    careerGoal: "",
    citizenship: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Office: +27 87 265 7150",
      subtitle: "After Hours/Emergency: +27 72 081 8608",
      subtitle2: "Indian Office: +91 76005 34733",
    },
    {
      icon: Mail,
      title: "For course/training estimates, email to:",
      details2: "enquiries@flyvulcan.co.za",
      title2: "For Indian nationals (DGCA), email to:",
      details3: "admissions@flyvulcan.in",
    },
    {
      icon: MapPin,
      title: "Address",
      details2:
        "3rd Floor, Hangar 10, Gate 5 Lanseria International Airport South Africa 1748",
    },
    {
      icon: Clock,
      title: "Hours",
      details2: "Monday - Friday: 7AM - 7PM",
      subtitle: "Saturday: 8AM - 5PM",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center border border-vulcan-red/20 rounded-full px-6 py-2 text-sm font-medium text-vulcan-red mb-6">
              GET IN TOUCH
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Start Your Journey
              <span className="block text-vulcan-red">Today</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to begin your flight training? Contact us today to learn
              more about our programs and schedule your discovery flight with
              our expert team.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-8">
                  Contact Information
                </h3>
                <div className="grid gap-6">
                  {contactInfo.map((info, index) => (
                    <Card
                      key={index}
                      className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="bg-vulcan-red p-3 rounded-xl">
                            <info.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-foreground mb-2 text-lg">
                              {info.title}
                            </h4>
                            <h4 className="font-600 text-foreground mb-2 text-lg">
                              {info.subtitle}
                            </h4>
                            <h4 className="font-600 text-foreground mb-2 text-lg">
                              {info.title2}
                            </h4>
                            <h4 className="font-600 text-foreground mb-2 text-lg">
                              {info.details2}
                            </h4>
                            <h4 className="font-600 text-foreground mb-2 text-lg">
                              {info.details3}
                            </h4>
                            <h4 className="font-600 text-foreground mb-2 text-lg">
                              {info.subtitle2}
                            </h4>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-aviation-grey">
                    Aviation Enquiry Questionnaire
                  </CardTitle>
                  <CardDescription>
                    Please fill out all the questions below. Our admissions team
                    will reach out to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="p-8 text-center bg-muted rounded-lg">
                      <h3 className="text-2xl font-semibold text-sky-primary mb-2">
                        Thank You!
                      </h3>
                      <p className="text-muted-foreground">
                        Your details have been submitted successfully. Our team
                        will contact you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">
                          What is your full name (as per passport/ID)?
                        </Label>
                        <Input
                          id="fullName"
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="dob">What is your date of birth?</Label>
                        <Input
                          id="dob"
                          type="date"
                          value={formData.dob}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="height">
                          What is your current height? (Minimum requirement: 155
                          cm)
                        </Label>
                        <Input
                          id="height"
                          placeholder="Enter your height in cm"
                          value={formData.height}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="education">
                          What is your highest completed level of education?
                        </Label>
                        <Input
                          id="education"
                          placeholder="Enter your qualification"
                          value={formData.education}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="licence">
                          Do you currently hold any pilot licence or aviation
                          experience? If yes, please specify.
                        </Label>
                        <Textarea
                          id="licence"
                          placeholder="Enter details of your licence or experience"
                          value={formData.licence}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="medical">
                          Have you completed a Class 1 or Class 2 Aviation
                          Medical?
                        </Label>
                        <select
                          id="medical"
                          className="w-full p-3 border border-input rounded-lg bg-background"
                          value={formData.medical}
                          onChange={handleChange}
                        >
                          <option value="">Select option</option>
                          <option value="Class 1">Class 1</option>
                          <option value="Class 2">Class 2</option>
                          <option value="Not Completed">Not Completed</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="english">
                          What is your level of English proficiency (speaking,
                          reading, writing)?
                        </Label>
                        <Input
                          id="english"
                          placeholder="Example: Fluent / Intermediate / Basic"
                          value={formData.english}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="careerGoal">
                          What is your career goal in aviation (airline pilot,
                          charter, instructor, etc.)?
                        </Label>
                        <Textarea
                          id="careerGoal"
                          placeholder="Describe your career goal"
                          value={formData.careerGoal}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="citizenship">
                          Are you a South African citizen or an international
                          applicant? If international, what is your country of
                          origin?
                        </Label>
                        <Input
                          id="citizenship"
                          placeholder="Enter your citizenship or country"
                          value={formData.citizenship}
                          onChange={handleChange}
                        />
                      </div>

                      <Button
                        variant="aviation"
                        size="lg"
                        className="w-full"
                        type="submit"
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Submit Form
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
